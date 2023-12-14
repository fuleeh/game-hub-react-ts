import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: '1413af7329a34301b2de6d9519275b64',
  },
});
