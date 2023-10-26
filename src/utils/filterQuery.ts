import { ARTICLE_FILTER_CATEGORY, COUNTRY_FILTER_LIST } from '../constant/list';
import { useAppliedArticleFilterStore } from '../store/useAppliedArticleFilterStore';

export default function filterQuery() {
  const { appliedArticleFilter } = useAppliedArticleFilterStore();

  const filteredHeadline = appliedArticleFilter[0].placeholder;
  const filteredDate = appliedArticleFilter[1].placeholder;

  const filteredCountryArr = appliedArticleFilter[2]?.subfilter;
  const filteredCountryIdArr = filteredCountryArr?.map((country) => country.id);

  const filteredCountryEN = COUNTRY_FILTER_LIST.filter(
    (item) => filteredCountryIdArr?.includes(item.id)
  )
    .map((item) => item.countryEN)
    .flat();

  const glocations = filteredCountryEN
    .map((item) => `glocations:("${item}")`)
    .join(' OR ');

  const filterQueryArr = [];

  if (
    filteredHeadline &&
    filteredHeadline !== ARTICLE_FILTER_CATEGORY[0].placeholder
  ) {
    filterQueryArr.push(`headline:("${filteredHeadline}")`);
  }
  if (filteredDate && filteredDate !== ARTICLE_FILTER_CATEGORY[1].placeholder) {
    filterQueryArr.push(`pub_date:("${filteredDate}")`);
  }
  if (glocations) {
    filterQueryArr.push(`(${glocations})`);
  }
  const filterQueryString =
    filterQueryArr.length > 0 ? `fq=${filterQueryArr.join(' AND ')}` : '';

  return filterQueryString;
}
