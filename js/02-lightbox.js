import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const cardsGallery = createImgCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', cardsGallery);


function createImgCardsMarkup(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `
            <a class="gallery__item" 
            href="${original}">
            <img class="gallery__image" 
            src="${preview}" alt="${description}" />
</a>`
    })
        .join("");

};

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
});

console.log(galleryItems);
