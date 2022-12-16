import axios from "axios";

export const api = axios.create({
    baseURL: "https://37bc-185-237-231-171.eu.ngrok.io/search/getSearchItems"
})

export const getSearchItems = async () => {
    const response = await api.get('/search/getSearchItems/')
    return response.data
}

