import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");
const galleryCards = createGalleryCard(galleryItems);
galleryEl.innerHTML = galleryCards;

function createGalleryCard(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
  })
    .join('');
}

galleryEl.addEventListener("click", onGalleryElClick);

function onGalleryElClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const htmlInstance = basicLightbox.create(`
    <img
      class="gallery__image"
      src="${event.target.dataset.source}"
      data-source="${event.target.dataset.source}"
      alt="${event.target.alt}"
    />`
    );
  htmlInstance.show();
 
};