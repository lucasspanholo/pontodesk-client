import axios from 'axios';
import { getAPIClient } from './axios';

export const api = getAPIClient();

export const apiCreateUser = axios.create({
  baseURL: 'http://localhost:3001/'
})