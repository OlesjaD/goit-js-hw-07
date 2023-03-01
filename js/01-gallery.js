import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGallery = document.querySelector('.gallery');
const createGaleryItems = createGaleryEl(galleryItems);
containerGallery.insertAdjacentHTML("beforeend", createGaleryItems);

containerGallery.addEventListener('click', onGalleryClick);

function createGaleryEl(galleryItems) {
    return galleryItems 
        .map(({preview, original, description}) => {
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
                </div>
            `;
        }).join("");
};

function onGalleryClick (event) {
    event.preventDefault();
    console.log(event.target.nodeName);
    console.log(event.target.dataset.source);
};
