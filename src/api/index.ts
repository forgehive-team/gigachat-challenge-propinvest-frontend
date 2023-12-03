import * as auth from './auth'
import * as projects from './projects'
import * as quest from './quest'

import axios from 'axios'

const baseURL = 'https://api-propinvest.forgehive.ru/api'
const instance = axios.create({
  baseURL,
  withCredentials: true
})

const token = localStorage.getItem('token')
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`

export const api = { auth, projects, quest }
export { instance }
