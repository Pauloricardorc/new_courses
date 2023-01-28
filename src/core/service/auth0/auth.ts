import axios from 'axios'

export const ApiAuth = axios.create({
  baseURL: "https://dev-galax.us.auth0.com",
});