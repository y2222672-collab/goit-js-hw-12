
import axios from 'axios';

const PIXABAY_KEY = '53373379-a0adfea61f6f24f47cc9d7e62';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: PIXABAY_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data.hits;
}

