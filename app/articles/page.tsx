import { getAllTravelAviationArticles } from "@/app/lib/actions";
import { ArticleType } from "@/app/lib/definitions";
import Link from "next/link";
import { parseId } from "@/app/lib/utilities";
import Preview from "@/app/ui/preview";

export default async function Articles() {
  const { response: articles } = await getAllTravelAviationArticles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ul>
          {articles.docs.map((article: ArticleType) => (
            <li key={article.uri}>
              <Link href={`/articles/${parseId(article.uri)}`}>
                <Preview article={article} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
