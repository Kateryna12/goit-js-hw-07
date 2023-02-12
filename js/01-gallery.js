import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsGallery = createImgCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', cardsGallery);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImgCardsMarkup(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
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
        </div>`
    })
        .join("");
};

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}"/> `,
        {
            onShow: (instance) => {
                window.addEventListener("keydown", onEscKeyPress);
            },
            onClose: (instance) => {
                window.removeEventListener("keydown", onEscKeyPress);
            },
        }
    );
    instance.show();

    function onEscKeyPress(evt) {
        const ESC_KEY_CODE = 'Escape';
        if (evt.code === ESC_KEY_CODE) {
            instance.close();
        }
    }
}

console.log(galleryItems);