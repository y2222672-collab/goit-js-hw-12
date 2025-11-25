import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
  getGalleryCardHeight,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
let currentPage = 1;
let currentQuery = '';
const perPage = 15;
let totalHits = 0;
const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search-text"]');
const loadMoreButton = document.querySelector('.load-more');

searchForm.addEventListener('submit', onSearch);
loadMoreButton.addEventListener('click', onLoadMore);

async function onLoadMore() {
  currentPage += 1;
  await fetchImages(true);
}
async function onSearch(event) {
  event.preventDefault();

  const newQuery = searchInput.value.trim();

  if (!newQuery) {
    iziToast.error({
      message: 'Please enter a search term!',
      position: 'topRight',
    });
    return;
  }
  currentQuery = newQuery;
  currentPage = 1;
  totalHits = 0;
  clearGallery();
  hideLoadMoreButton();

  await fetchImages(false);

  searchInput.value = '';
}

async function fetchImages(isLoadMore = false) {
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);
    const images = data.hits;

    if (images.length === 0 && currentPage === 1) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }
    if (!isLoadMore) {
      totalHits = data.totalHits;
    }
    createGallery(images);
    const totalLoadedImages = currentPage * perPage;
    if (totalLoadedImages < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      if (totalHits > 0) {
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
          timeout: 5000,
        });
      }
    }
    if (isLoadMore) {
      scrollToNextBatch();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
}
function scrollToNextBatch() {
  const cardHeight = getGalleryCardHeight();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
