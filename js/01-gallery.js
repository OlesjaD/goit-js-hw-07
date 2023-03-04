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

    if (event.target.nodeName !== 'IMG') {
        return;
    }
    // console.log(event.target.nodeName);

    let sourceLink = event.target.dataset.source;
    // console.log(sourceLink);

    const instance = basicLightbox.create(`
            <img src="${sourceLink}"\>`,
            {
                onShow: (instance) => {containerGallery.addEventListener("keydown", onEscBtn)},
                onClose: (instance) => {containerGallery.removeEventListener("keydown", onEscBtn)}
            });
    instance.show();   
    function onEscBtn (event) {
        if (event.code === "Escape") {
            instance.close();
        }
    };
    };
    