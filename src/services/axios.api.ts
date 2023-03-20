import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const getUsers =()=>axiosInstance.get('/users');
const getPosts =()=>axiosInstance.get('/posts');

export {
    getUsers,
    getPosts
}