import { BlogListing, blogListingMetadata } from "@/components/BlogListing";

export const revalidate = 3600;

// Page 1 du blog, statique. Les pages suivantes vivent sous /blog/page/N et
// l'ancien filtre /blog?cat=<slug> est redirigé vers /categories/<slug> (proxy.ts).
export const metadata = blogListingMetadata(1);

export default function BlogPage() {
  return <BlogListing page={1} />;
}
