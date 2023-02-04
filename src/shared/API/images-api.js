import axios from 'axios';

export const PER_PAGE = 12;
const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '31214136-385c270b0ee6f522fe0942e9a',
    orientation: 'horizontal',
    per_page: PER_PAGE,
  },
});

export const searchImages = async (q, page) => {
  const {
    data: { totalHits, hits },
  } = await instance.get('/', {
    params: { q, page },
  });
  //   const { totalHits, hits } = data;
  const items = hits.map(({ webformatURL, id, largeImageURL, tags }) => {
    return { url: webformatURL, id, largeUrl: largeImageURL, tags };
  });
  return { totalHits, items };
};
