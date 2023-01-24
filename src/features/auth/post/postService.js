import axios from 'axios';
import constants from '../../../hooks/constant'

const API_URL = constants.API_URL;

//Add Post
const createPost = async (postData) => {

    // const config ={
    //     headers:{
    //         Authorization:`Bearer ${token}`
    //     }
    // }

    const response = await axios.post(`${API_URL}/post/add`, postData)

    // if(response.data){
    //     localStorage.setItem('postItems', JSON.stringify(response.data))
    // }
    return response.data;
}

//Get Post 
const getPost = async (id) => {


    //console.log(`${API_URL}/post/getUserPosts/${id}/0/50`)
    const response = await axios.get(`${API_URL}/post/getAllPostsFromUsersYouFollow/${id}/0/50`);
    // const response = await axios.get(`${API_URL}/post/getAllPosts/${id}/0/50`);

   // if(response.data){
    //    const postItems = JSON.parse(localStorage.getItem('postItems'));
     //}
     //console.log(response.data)
    return response.data;
}
const postService ={
    createPost,
     getPost
}

export default postService;