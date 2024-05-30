"use server";

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
    throw Error(`Error occurred: ${err}`);
  }
}
