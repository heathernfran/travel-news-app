"use server";

import { ArticleType } from "@/app/lib/definitions";

const BASE_URL = `https://api.nytimes.com/svc/search/v2`;

export async function getAllTravelAviationArticles() {
  try {
    const response = await fetch(
      `${BASE_URL}/articlesearch.json?api-key=${process.env.NYT_KEY}&q=travel&fq=aviation`
    );
    if (!response.ok) {
      throw Error("Error in response");
    }
    return await response.json();
  } catch (err) {
    throw Error(`Failed to getAllTravelAviationArticles`, err as Error);
  }
}

export async function getTravelAviationArticleById(id: string) {
  try {
    const { response } = await getAllTravelAviationArticles();

    console.log(response);

    return response.docs.find((article: ArticleType) =>
      article.uri.includes(id)
    );
  } catch (err) {
    throw Error(`Failed to getTravelAviationArticleById`, err as Error);
  }
}
