import axios from 'axios';

const KEY = 'AIzaSyC65xYMG8_8EROTZCj__ff3mcmMJ75mA18';


export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
   }
});