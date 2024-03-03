import { galleryList } from '../main';
import { query } from '../main';
import axios from 'axios';
import { limit } from '../main';
import { page } from '../main';

export async function fetchImages(query) {
  query = encodeURIComponent(query);
  galleryList.innerHTML = `<div class="loader"></div>`;
  const myApiKey = '42609290-856768105ab9e79485c69bf61';
  // axios.defaults.headers.common['header-name'] = myApiKey;
  const params = new URLSearchParams({
    _limit: limit,
    _page: page,
    key: myApiKey,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const response = await axios.get(
    `https://pixabay.com/api/?${params}&q=${query}`
  );
  return response.data;
}
