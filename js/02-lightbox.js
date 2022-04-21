import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryCards = createGalleryCard(galleryItems);
galleryEl.innerHTML = galleryCards;

function createGalleryCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
  <div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}"alt="${description}" />
  </a>
  </div>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {});
lightbox.options.captionsData = 'alt';
lightbox.options.captionDelay = '250ms';
