// Add imports above this line
import { galleryItems } from './gallery-items';
// Імпорт бібліотеки з документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів з документації
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log('Hello');
const galleryEl = document.querySelector('.gallery');

gallerySet(createGalleryMarkup(galleryItems));
console.log(gallerySet(createGalleryMarkup(galleryItems)));

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>`
    )
    .join('');
}

function gallerySet(gallery) {
  galleryEl.innerHTML = gallery;
}
