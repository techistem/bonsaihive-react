import axios from "axios";

axios.defaults.baseURL = 'https://drf-bonsaihive-91939050de59.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// axios.defaults.withCredentials = true;
// export const axiosReq = axios.create();
// export const axiosRes = axios.create();
export const axiosReq = axios.create({
    baseURL: 'https://drf-bonsaihive-91939050de59.herokuapp.com/',
    withCredentials: true, // ✅ burası kritik
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  export const axiosRes = axios.create({
    baseURL: 'https://drf-bonsaihive-91939050de59.herokuapp.com/',
    withCredentials: true, // ✅ burası da
  });
  