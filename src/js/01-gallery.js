// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

export function renderGalleryItems() {
  galleryItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.href = item.original;

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.alt = item.description;
    img.dataset.source = item.original;

    a.appendChild(img);
    li.appendChild(a);
    gallery.appendChild(li);
  });

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

gallery.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const largeImageUrl = event.target.dataset.source;

    openModal(largeImageUrl);
  }
}

function openModal(imageUrl) {
  const modal = new SimpleLightbox(`
    <img src="${imageUrl}" width="800" height="600">
  `);

  modal.show();
}
