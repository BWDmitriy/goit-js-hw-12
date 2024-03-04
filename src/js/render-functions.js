import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { galleryList } from '../main';
import { loadButton } from '../main';
// import { limit } from '../main';
// import { totalPages } from '../main';
export async function renderImages(data) {
  // galleryList.innerHTML = '';
  console.log(data);
  const images = data.hits;
  if (images.length == 0) {
    loadButton.className = 'visually-hidden';
    document.getElementsByClassName('loader')[0].className =
      'loader visually-hidden';
    iziToast.error({
      title: 'Error',
      message: `No such pictures`,
      position: 'topRight',
    });
  }
  const galleryMarkup = images
    .map(image => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${image.webformatURL}"
            data-source="${image.largeImageURL}"
            alt="${image.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${image.likes}</p>
          </li>
          <li><h3>Views</h3><p>${image.views}</p>
            </li>
            <li><h3>Comments</h3><p>${image.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${image.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`;
    })
    .join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
  // Initialize SimpleLightbox
  const galleryCfg = {
    captionsData: 'alt',
  };
  let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
  lightbox.on('show.simplelightbox', function () {});
  lightbox.refresh();
}
