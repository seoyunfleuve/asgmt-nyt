import { ARTICLE_FILTER_CATEGORY, COUNTRY_FILTER_LIST } from '../constant/list';
import { IArticleCardProps } from '../type/Article.type';
import { IFilter } from '../type/Filter.type';
import isWhitespace from './isWhitespace';

const scrapFilter = (
  scrapData: IArticleCardProps[],
  scrapArticleFilter: IFilter[]
) => {
  const filteredHeadline =
    isWhitespace(scrapArticleFilter[0].placeholder) ||
    scrapArticleFilter[0].placeholder === ARTICLE_FILTER_CATEGORY[0].placeholder
      ? null
      : scrapArticleFilter[0].placeholder;

  const filteredDate =
    isWhitespace(scrapArticleFilter[1].placeholder) ||
    scrapArticleFilter[1].placeholder === ARTICLE_FILTER_CATEGORY[1].placeholder
      ? null
      : scrapArticleFilter[1].placeholder;

  const filteredCountryArr = scrapArticleFilter[2]?.subfilter;
  const filteredCountryIdArr = filteredCountryArr?.map((country) => country.id);

  const filteredCountryEN = COUNTRY_FILTER_LIST.filter(
    (item) => filteredCountryIdArr?.includes(item.id)
  )
    .map((item) => item.countryEN)
    .flat()
    .map((item) => item.toLowerCase());

  const filteredData = scrapData.reduce((acc, cur) => {
    const headlineCondition = filteredHeadline
      ? cur.headline.main.toLowerCase().includes(filteredHeadline)
      : true;

    const dateCondition = filteredDate
      ? cur.pub_date.includes(filteredDate)
      : true;

    const glocationArr = cur.keywords
      ?.filter((item) => item.name === 'glocations')
      .map((item) => item.value.toLowerCase());

    const countryCondition =
      Array.isArray(filteredCountryEN) && filteredCountryEN.length > 0
        ? glocationArr.some((value) => filteredCountryEN.includes(value))
        : true;

    if (headlineCondition && dateCondition && countryCondition) {
      acc.push(cur);
    }
    return acc;
  }, [] as IArticleCardProps[]);

  return filteredData;
};

export default scrapFilter;
