import axios from 'axios';
import { BACKEND_URL } from './variables';

const fetchCollection = async (url, setCollection, lastCalledTime, setLCT) => {
  // Check if 3 minutes have passed since the last call
  if (!lastCalledTime || Date.now() - lastCalledTime >= 180000) {
    // Make HTTP request to the URL and get the HTML of the page
    // const profileUrl = url;
    const payload = { profileUrl: url };
    const { data } = await axios.post(BACKEND_URL, payload);
    setLCT(Date.now());
    setCollection(data);
  }
};

export default fetchCollection;
