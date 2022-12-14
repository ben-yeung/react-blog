import axios from "axios";

const URL = "http://localhost:5000/posts";

export const fetchAllPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
