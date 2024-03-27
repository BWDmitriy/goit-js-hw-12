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
export let page = 1;
export let limit = 15;
export const loadButton = document.getElementById('load-button');
export const loaderDiv = document.getElementById('loader');
inputQuery.addEventListener('input', e => {
  query = inputQuery.value.trim();

  galleryList.innerHTML = '';
  loadButton.className = 'visually-hidden';
  loader.className = 'visually-hidden';
});

const searchButton = document.getElementById('search-button');

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
      renderImages(posts);
      loader.className = 'loader visually-hidden';
      page += 1;

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
  loader.className = 'loader';
  try {
    if (query) {
      const posts = await fetchImages(query);
      const totalItems = posts.totalHits;
      const currentPageItems =
        document.querySelectorAll('.gallery-item').length;
      if (currentPageItems >= totalItems) {
        loadButton.className = 'visually-hidden';
        loader.className = 'visually-hidden';
        return iziToast.error({
          title: 'Error',
          message: `We're sorry, but you've reached the end of search results.`,
          position: 'topRight',
        });
      }
      renderImages(posts);
      loader.className = 'loader visually-hidden';
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
