import axios from 'axios';

//Add Post
const createPost = async (postData) => {

    // const config ={
    //     headers:{
    //         Authorization:`Bearer ${token}`
    //     }
    // }

    const response = await axios.post("https://37bc-185-237-231-171.eu.ngrok.io/post/add", postData)

    // if(response.data){
    //     localStorage.setItem('postItems', JSON.stringify(response.data))
    // }
    return response.data;
}

//Get Post 
const getPost = async (id) => {

    const response = await axios.get(`https://37bc-185-237-231-171.eu.ngrok.io/post/getUserPosts/${id}/0/50`);

   // if(response.data){
    //    const postItems = JSON.parse(localStorage.getItem('postItems'));
     //}
     console.log(response.data)
    return response.data;
}
const postService ={
    createPost,
     getPost
}

export default postService;