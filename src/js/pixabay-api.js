import axios from 'axios';

const API_KEY = '32552782-0d4c86680018457e820f20492';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async query => {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  try {
    const response = await axios.get('', { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.status : 'Unknown Error');
  }
};
