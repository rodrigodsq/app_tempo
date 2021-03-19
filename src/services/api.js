import axios from "axios";

export const key = 'SuaChave'

const api = axios.create({
    baseURL: ' https://api.hgbrasil.com'
})

export default api;