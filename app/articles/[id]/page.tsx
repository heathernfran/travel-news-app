import { getTravelAviationArticleById } from "@/app/lib/actions";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const article = await getTravelAviationArticleById(id);

  return (
    <div>
      <h1>{article.headline.main}</h1>
      <p>{article.byline.original}</p>
      <p>{article.lead_paragraph}</p>
    </div>
  );
}
