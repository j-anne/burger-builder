import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-96319-default-rtdb.firebaseio.com/',
});

export default instance;
