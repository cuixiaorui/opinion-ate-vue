import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/3ry2eSiTVJn9Fc1G5X40xmdI6wPx7XMp',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
