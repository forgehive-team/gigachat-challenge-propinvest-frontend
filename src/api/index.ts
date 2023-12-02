import axios from 'axios'
import * as auth from './auth'
import * as projects from './projects'

const baseURL = 'https://api-propinvest.forgehive.ru'
const instance = axios.create({
  baseURL,
  withCredentials: true
})

const token = localStorage.getItem('token')
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const api = { auth, projects }
export { instance }
