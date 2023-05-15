import axios, { AxiosInstance } from 'axios'
import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

//       ****Endpoints****
//https://meusite.com.br/api/burgers
//https://meusite.com.br/api/pizzas
//https://meusite.com.br/api/bebidas
//https://meusite.com.br/api/sobremesas
//const api: AxiosInstance


export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get('/pizzas')
export const getBBebidas = () => api.get('/bebidas')
export const getSobremesas = () => api.get('/sobremesas')

export default api
