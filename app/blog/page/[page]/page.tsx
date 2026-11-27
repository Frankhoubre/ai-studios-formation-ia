import { notFound, permanentRedirect } from "next/navigation";
import { BlogListing, blogListingMetadata } from "@/components/BlogListing";
import { getBlogPageCount } from "@/lib/articles";

export const revalidate = 3600;

type Props = { params: Promise<{ page: string }> };

function parsePage(raw: string): number | null {
  if (!/^[1-9]\d*$/.test(raw)) return null;
  return Number(raw);
}

export function generateStaticParams() {
  const total = getBlogPageCount();
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { page: raw } = await params;
  const page = parsePage(raw);
  if (!page || page < 2 || page > getBlogPageCount()) return {};
  return blogListingMetadata(page);
}

export default async function BlogPaginatedPage({ params }: Props) {
  const { page: raw } = await params;
  const page = parsePage(raw);
  if (!page) notFound();
  // /blog/page/1 n'existe pas en double de /blog.
  if (page === 1) permanentRedirect("/blog");
  if (page > getBlogPageCount()) notFound();
  return <BlogListing page={page} />;
}
