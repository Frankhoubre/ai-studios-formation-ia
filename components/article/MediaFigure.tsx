import { RichParagraph } from "@/components/RichParagraph";
import { ImageLightbox } from "@/components/article/ImageLightbox";
import { getPublicImageSize } from "@/lib/image-size";
import { classifyLink, REL_BY_KIND } from "@/lib/links";
import { displayHost, formatFrenchDate } from "@/lib/utils";

export type MediaItem = {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
  capturedAt?: string;
  width?: number;
  height?: number;
};

const FALLBACK = { width: 1600, height: 900 };

export function resolveSize(item: MediaItem) {
  if (item.width && item.height) return { width: item.width, height: item.height };
  return getPublicImageSize(item.src) ?? FALLBACK;
}

export function MediaCredit({ source, capturedAt }: { source?: string; capturedAt?: string }) {
  if (!source && !capturedAt) return null;
  const link = source ? classifyLink(source) : null;
  return (
    <span className="mt-1 block text-xs text-text-muted">
      {link ? (
        <>
          Source :{" "}
          {link.kind === "internal" ? (
            <span>{link.href}</span>
          ) : (
            <a
              href={link.href}
              target="_blank"
              rel={REL_BY_KIND[link.kind]}
              className="text-text-soft underline decoration-white/25 underline-offset-[3px] transition hover:text-brand-bright"
            >
              {displayHost(link.href)}
            </a>
          )}
        </>
      ) : null}
      {link && capturedAt ? ", " : null}
      {capturedAt ? (
        <>
          {link ? "capturée le " : "Capturée le "}
          <time dateTime={capturedAt}>{formatFrenchDate(capturedAt)}</time>
        </>
      ) : null}
    </span>
  );
}

export function MediaFigure({
  item,
  eager,
  sizes = "(min-width: 1024px) 860px, 100vw",
  compact,
}: {
  item: MediaItem;
  eager?: boolean;
  sizes?: string;
  compact?: boolean;
}) {
  const { width, height } = resolveSize(item);
  const hasCaption = Boolean(item.caption || item.source || item.capturedAt);
  return (
    <figure
      className={
        compact
          ? "overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary"
          : "my-10 overflow-hidden rounded-2xl border border-border-subtle bg-bg-secondary"
      }
    >
      <ImageLightbox
        src={item.src}
        alt={item.alt}
        width={width}
        height={height}
        sizes={sizes}
        eager={eager}
      />
      {hasCaption ? (
        <figcaption
          className={
            compact
              ? "border-t border-border-subtle px-4 py-3 text-sm leading-relaxed text-text-muted"
              : "border-t border-border-subtle px-5 py-3 text-sm leading-relaxed text-text-muted"
          }
        >
          {item.caption ? <RichParagraph text={item.caption} /> : null}
          <MediaCredit source={item.source} capturedAt={item.capturedAt} />
        </figcaption>
      ) : null}
    </figure>
  );
}
