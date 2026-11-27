import fs from "node:fs";
import path from "node:path";

export type ImageSize = { width: number; height: number };

const cache = new Map<string, ImageSize | null>();

// Reads the real pixel size from the file header (WebP, PNG, JPEG, GIF) so the
// pages can declare true dimensions without adding a dependency. Runs at build
// time on the server only.
export function getPublicImageSize(src: string): ImageSize | null {
  if (!src.startsWith("/") || src.startsWith("//")) return null;
  if (cache.has(src)) return cache.get(src) ?? null;
  let size: ImageSize | null = null;
  try {
    const file = path.join(process.cwd(), "public", decodeURI(src.split("?")[0]));
    const fd = fs.openSync(file, "r");
    try {
      const head = Buffer.alloc(64 * 1024);
      const read = fs.readSync(fd, head, 0, head.length, 0);
      size = parseSize(head.subarray(0, read));
    } finally {
      fs.closeSync(fd);
    }
  } catch {
    size = null;
  }
  cache.set(src, size);
  return size;
}

function parseSize(b: Buffer): ImageSize | null {
  if (b.length < 30) return null;
  // PNG: IHDR is always the first chunk.
  if (b.readUInt32BE(0) === 0x89504e47) {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }
  // GIF
  if (b.toString("ascii", 0, 3) === "GIF") {
    return { width: b.readUInt16LE(6), height: b.readUInt16LE(8) };
  }
  // WebP: RIFF....WEBP then VP8 / VP8L / VP8X
  if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8X") {
      return {
        width: 1 + b.readUIntLE(24, 3),
        height: 1 + b.readUIntLE(27, 3),
      };
    }
    if (chunk === "VP8 ") {
      return {
        width: b.readUInt16LE(26) & 0x3fff,
        height: b.readUInt16LE(28) & 0x3fff,
      };
    }
    if (chunk === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    return null;
  }
  // JPEG: walk the markers until a SOFn frame header.
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) {
        i++;
        continue;
      }
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      const isSof =
        marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
      if (isSof) {
        return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
      }
      i += 2 + len;
    }
  }
  return null;
}
