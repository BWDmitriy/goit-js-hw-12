import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
export const galleryList = document.querySelector('ul.gallery');
export let query = '';
const inputQuery = document.getElementById('search-input');
// Controls the group number
export let page = 1;
// Controls the number of items in the group
export let limit = 15;
// In our case total number of pages is calculated on frontend
export let totalPages = Math.ceil(limit / limit);

inputQuery.addEventListener('input', e => {
  query = inputQuery.value.trim();

  galleryList.innerHTML = '';
  loadButton.className = 'visually-hidden';
});

const searchButton = document.getElementById('search-button');
export const loadButton = document.getElementById('load-button');
export const loaderDiv = document.getElementById('loader');
searchButton.addEventListener('click', async () => {
  galleryList.innerHTML = '';
  loader.className = 'loader';
  page = 1;
  limit = 15;
  try {
    if (query) {
      loadButton.className = '';
      // loader.className = 'loader visually-hidden';

      const posts = await fetchImages(query);
      // totalPages = Math.ceil(posts.totalHits / limit);
      renderImages(posts);
      loader.className = 'loader visually-hidden';
      page += 1;
      // limit = 30;
    }
  } catch (error) {
    loadButton.className = 'visually-hidden';
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.`,
      position: 'topRight',
    });
  }
});

loadButton.addEventListener('click', async () => {
  // galleryList.innerHTML = '<div class="loader"></div>';
  loader.className = 'loader';
  try {
    if (query) {
      const posts = await fetchImages(query);
      if (document.querySelectorAll('.gallery-item').length > posts.totalHits) {
        loadButton.className = 'visually-hidden';
        return iziToast.error({
          title: 'Error',
          message: `We're sorry, but you've reached the end of search results.`,
          position: 'topRight',
        });
      }
      totalPages = Math.ceil(posts.totalHits / limit);

      renderImages(posts);
      loader.className = 'loader visually-hidden';
      page += 1;
      // limit = 15 * page;
      const rect = loadButton.getBoundingClientRect();
      scrollBy(rect.x, rect.y);
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      title: 'Error',
      message: `Виникла помилка під час завантаження зображень. Будь ласка, спробуйте пізніше.`,
      position: 'topRight',
    });
  }
});
