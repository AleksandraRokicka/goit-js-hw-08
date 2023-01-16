// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.gallery');

galleryItems.forEach(img => {
  list.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__item" href="${img.original}">
  <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
</a>`
  );
});

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
