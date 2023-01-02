import axios from 'axios';
import constants from '../../hooks/constant'

const API_URL = constants.API_URL;


//const API_URL = 'https://37bc-185-237-231-171.eu.ngrok.io/user/signup/local';

//register user 
const register = async (userData) =>{
    const response = await axios.post(`${API_URL}/user/signup/local`, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//login user
const login = async (userData) =>{
    const response = await axios.post(`${API_URL}/auth/local`, userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
  }


const authService = {
    register,
    login,
    logout
}

export default authService;