export interface IArticleSearchRes {
  copyright: string;
  response: {
    docs: IArticle[];
    meta: IMeta;
  };
  status: string;
}

interface IMeta {
  hits: string;
  offset: string;
  time: string;
}

export interface IArticle extends IArticleCardProps {
  abstract: string;
  document_type: string; // "article"
  lead_paragraph: string;
  multimedia: IMultimedia[];
  news_desk: string; // 'OpEd'
  print_page: number;
  print_section: string;
  section_name: string; // 'Opinion'
  snippet: string;
  type_of_material: string; // 'Op-Ed'
  uri: string; // 'nyt://article/950fb94b-67b8-5103-9dce-35298c223da6'
  word_count: number;
  _id: string; // 'nyt://article/950fb94b-67b8-5103-9dce-35298c223da6';
}

interface IByline {
  organization: string | null;
  original: string | null;
  person: [];
}

interface IHeadline {
  content_kicker: string | null;
  kicker: string | null;
  main: string;
  name: string | null;
  print_headline: string;
  seo: string | null;
  sub: string | null;
}

interface IKeywords {
  major: string; // 'N'
  name: string; // 'subject'
  rank: number;
  value: string; // 'Social Media'
}

// {name: 'glocations', value: 'United States', rank: 1, major: 'N'}

interface IMultimedia {
  caption: string | null;
  credit: string | null;
  crop_name: string;
  height: number;
  legacy: {
    xlarge: string;
    xlargewidth: number;
    xlargeheight: number;
  };
  rank: number;
  subType: string;
  subtype: string;
  type: string;
  url: string;
  width: number;
}

export interface IArticleCardProps extends ICaptionDateProps {
  byline: IByline;
  headline: IHeadline;
  source: string; // 'The New York Times'
  web_url: string;
  keywords: IKeywords[];
}

export interface ICaptionDateProps {
  pub_date: string; // '2023-10-19T23:00:08+0000'
}
