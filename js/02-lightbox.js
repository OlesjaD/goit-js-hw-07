import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const containerGallery = document.querySelector('.gallery');
const createGaleryItems = createGaleryEl(galleryItems);
containerGallery.insertAdjacentHTML("beforeend", createGaleryItems);

containerGallery.addEventListener('click', onGalleryClick);

function createGaleryEl(galleryItems) {
    return galleryItems 
        .map(({preview, original, description}) => {
            return `
                    <a class="gallery__item" href="${original}">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            alt="${description}"
                        />
                    </a>
            `;
        }).join("");
};
function onGalleryClick (event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});

};
