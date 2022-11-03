import axios from 'axios';


const API_URL = 'https://478f-185-237-231-207.eu.ngrok.io/user/signup/local';

//register user 
const register = async (userData) =>{
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService;