import Axios from 'axios';

const instance = Axios.create({
   baseURL: 'http://localhost:5011/api',
   timeout: 5000,
});

instance.interceptors.request.use((req) => {
   const jwt = localStorage.getItem('jwt');

   if (jwt) {
      console.log('qwe');
      req.headers.Authorization = jwt;
   }
   return req;
});

export const checkAPI = () => instance.post('/users/check');

export const registerAPI = ({ email, password, passwordConfirmation }) =>
   instance.post('/users/register', { email, password, passwordConfirmation });

export const loginAPI = ({ email, password }) =>
   instance.post('/users/login', { email, password });

export const createPostAPI = ({ title, image }) =>
   instance.post('/posts/create', { title, image });

export const getPostsAPI = ({ skip, _id } = { skip: 0 }) =>
   instance.get(`/posts/${_id}?skip=${skip}`);

export const getUserProfileAPI = (_id) => instance.get(`/users/${_id}/profile`);

export const getPostAPI = (_id) => instance.get(`/posts/${_id}`);
// []
// '
// '
// instance
// lo
// y
// config
// <
// url
// url
//
//
// {}
// p
// , {skip}
// =
// options
// ХЪ
// s
// '
// '
