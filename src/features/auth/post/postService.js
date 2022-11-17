import axios from 'axios';

//Add Post
const createPost = async (postData) => {

    // const config ={
    //     headers:{
    //         Authorization:`Bearer ${token}`
    //     }
    // }

    const response = await axios.post("https://3a46-185-237-231-171.eu.ngrok.io/post/add", postData)

    // if(response.data){
    //     localStorage.setItem('postItems', JSON.stringify(response.data))
    // }
    return response.data;
}

//Get Post 
const getPost = async (id) => {

    const response = await axios.get("https://3a46-185-237-231-171.eu.ngrok.io/post/getAllPosts/"+id+"0/20");

   // if(response.data){
    //    const postItems = JSON.parse(localStorage.getItem('postItems'));
     //}
    return response.data;
}
const postService ={
    createPost,
     getPost
}

export default postService;