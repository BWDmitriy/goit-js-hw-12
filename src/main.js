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
const totalPages = Math.ceil(100 / limit);

inputQuery.addEventListener('input', e => {
  query = inputQuery.value.trim();

  galleryList.innerHTML = '';
});

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', async () => {
  galleryList.innerHTML = '<div class="loader"></div>';
  if (page > totalPages) {
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, there are no more posts to load",
    });
  }
  try {
    if (query) {
      const posts = await fetchImages(query);
      fetchImages(posts);
      // Increase the group number
      page += 1;
      if (page > 1) {
        searchButton.textContent = 'Fetch more posts';
      }
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
