import Link from "next/link";
import type { ReactNode } from "react";
import { Fragment } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;
const MARK_RE = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function RichParagraph({ text }: { text: string }) {
  function renderMarks(value: string, prefix: string): ReactNode[] {
    const chunks: ReactNode[] = [];
    let last = 0;
    let key = 0;
    let match: RegExpExecArray | null;
    const re = new RegExp(MARK_RE.source, "g");

    while ((match = re.exec(value)) !== null) {
      if (match.index > last) {
        chunks.push(
          <Fragment key={`${prefix}-t-${key++}`}>
            {value.slice(last, match.index)}
          </Fragment>,
        );
      }

      const token = match[0];
      if (token.startsWith("**")) {
        chunks.push(
          <strong key={`${prefix}-s-${key++}`} className="font-semibold text-text">
            {token.slice(2, -2)}
          </strong>,
        );
      } else {
        chunks.push(
          <em key={`${prefix}-e-${key++}`} className="text-text">
            {token.slice(1, -1)}
          </em>,
        );
      }
      last = match.index + token.length;
    }

    if (last < value.length) {
      chunks.push(
        <Fragment key={`${prefix}-t-${key++}`}>{value.slice(last)}</Fragment>,
      );
    }

    return chunks.length > 0 ? chunks : [value];
  }

  const parts: ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(LINK_RE.source, "g");
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      parts.push(
        <Fragment key={`t-${key}`}>
          {renderMarks(text.slice(last, m.index), `t-${key++}`)}
        </Fragment>,
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
          rel="nofollow noopener noreferrer"
          className="text-brand-bright underline decoration-white/20 underline-offset-[3px] transition hover:text-accent-rose"
        >
          {renderMarks(label, `a-${key}`)}
        </a>,
      );
    } else {
      parts.push(
        <Link
          key={`l-${key++}`}
          href={href}
          className="text-brand-bright underline decoration-white/20 underline-offset-[3px] transition hover:text-accent-rose"
        >
          {renderMarks(label, `l-${key}`)}
        </Link>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) {
    parts.push(
      <Fragment key={`t-${key}`}>
        {renderMarks(text.slice(last), `t-${key++}`)}
      </Fragment>,
    );
  }
  if (parts.length === 0) {
    return <>{renderMarks(text, "plain")}</>;
  }
  return <>{parts}</>;
}
