import Link from "next/link";
import type { ReactNode } from "react";
import { Fragment } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function RichParagraph({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(LINK_RE.source, "g");
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      parts.push(
        <Fragment key={`t-${key++}`}>{text.slice(last, m.index)}</Fragment>,
      );
    }
    const label = m[1];
    const href = m[2];
    if (isExternal(href)) {
      parts.push(
        <a
          key={`a-${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-bright underline decoration-white/20 underline-offset-[3px] transition hover:text-accent-rose"
        >
          {label}
        </a>,
      );
    } else {
      parts.push(
        <Link
          key={`l-${key++}`}
          href={href}
          className="text-brand-bright underline decoration-white/20 underline-offset-[3px] transition hover:text-accent-rose"
        >
          {label}
        </Link>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    parts.push(<Fragment key={`t-${key++}`}>{text.slice(last)}</Fragment>);
  }
  if (parts.length === 0) {
    return <>{text}</>;
  }
  return <>{parts}</>;
}
