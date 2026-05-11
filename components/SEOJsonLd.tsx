export function SEOJsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const items = Array.isArray(data) ? data : [data];
  const serialize = (obj: Record<string, unknown>) =>
    JSON.stringify(obj).replace(/</g, "\\u003c");

  return (
    <>
      {items.map((obj, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(obj) }}
        />
      ))}
    </>
  );
}
