
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
let lightbox;

export function showLoader() {
    loader.classList.remove('is-hidden');
}

export function hideLoader() {
    loader.classList.add('is-hidden');
}

export function clearGallery() {
    gallery.innerHTML = '';
}

export function createGallery(images) {
    const markup = images
        .map(image => {
            return `
                <li class="gallery-item">
                    <a href="${image.largeImageURL}" class="gallery-link">
                        <img
                            src="${image.webformatURL}"
                            alt="${image.tags}"
                            class="gallery-image"
                        >
                    </a>
                    <div class="info-box">
                        <p class="info-item"><b>Likes</b> ${image.likes}</p>
                        <p class="info-item"><b>Views</b> ${image.views}</p>
                        <p class="info-item"><b>Comments</b> ${image.comments}</p>
                        <p class="info-item"><b>Downloads</b> ${image.downloads}</p>
                    </div>
                </li>
            `;
        })
        .join('');
    gallery.insertAdjacentHTML('beforeend', markup);

    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
        });
    } else {
        lightbox.refresh();
    }
}
