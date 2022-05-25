import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(context?: any) {
  const {
    'pontodesk.access_token': access_token,
    'pontodesk.uid': uid,
    'pontodesk.client': client
  } = parseCookies(context);

  const api = axios.create({
    baseURL: 'http://localhost:3001/api'
  })
  
  if (access_token && uid && client) {
    api.defaults.headers['access_token'] = access_token;
    api.defaults.headers['uid'] = uid;
    api.defaults.headers['client'] = client;
  }

  return api;
}