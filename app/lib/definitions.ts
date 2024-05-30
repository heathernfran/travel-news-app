export type ArticleType = {
  abstract: string;
  byline: {
    original: string;
    person: string[];
  };
  headline: {
    main: string;
  };
  lead_paragraph: string;
  pub_date: string;
  snippet: string;
  uri: string;
};

