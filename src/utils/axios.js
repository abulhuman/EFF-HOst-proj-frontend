import axios from 'axios'
console.log(process.env)
export const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000'
const instance = axios.create({
  baseURL
})

export default instance
