import { getAllTravelAviationArticles } from "@/app/lib/actions";
import { ArticleType } from "@/app/lib/definitions";
import Link from "next/link";
import { parseId } from "@/app/lib/utilities";

export default async function Articles() {
  const { response: articles } = await getAllTravelAviationArticles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ul>
          {articles.docs.map((article: ArticleType) => (
            <li key={article.uri}>
              <Link href={`/articles/${parseId(article.uri)}`}>
                <h2>{article.headline.main}</h2>
                <p>{article.byline.original}</p>
                <p>{article.pub_date}</p>
                <p>{article.snippet}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
