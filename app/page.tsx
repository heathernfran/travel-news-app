import { getAllTravelAviationArticles } from "./lib/actions";
import { ArticleType } from "./lib/definitions";

export default async function Home() {
  const { response: articles } = await getAllTravelAviationArticles();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ul>
          {articles.docs.map((article: ArticleType) => (
            <li key={article.uri}>
              <h2>{article.headline.main}</h2>
              <p>{article.byline.original}</p>
              <p>{article.pub_date}</p>
              <p>{article.snippet}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
