import axios from 'axios';


const API_URL = 'https://1198-194-27-73-87.eu.ngrok.io/user/signup/local';

//register user 
const register = async (userData) =>{
    const response = await axios.post(API_URL, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//login user
const login = async (userData) =>{
    const response = await axios.post('https://1198-194-27-73-87.eu.ngrok.io/auth/local', userData)
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