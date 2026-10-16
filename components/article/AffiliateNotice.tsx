export const AFFILIATE_NOTICE =
  "Certains liens de cet article sont affiliés : si vous vous abonnez, Frank touche une commission, sans surcoût pour vous. Cela ne change pas notre avis.";

export function AffiliateNotice() {
  return (
    <p
      role="note"
      className="mt-6 flex gap-3 rounded-xl border border-border-subtle bg-bg-secondary px-4 py-3 text-sm leading-relaxed text-text-soft"
    >
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="mt-0.5 shrink-0 text-text-muted"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5M12 8h.01" />
      </svg>
      <span>{AFFILIATE_NOTICE}</span>
    </p>
  );
}
