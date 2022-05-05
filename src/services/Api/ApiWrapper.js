import axios from "axios";
import {BASE_URL} from "./ApiEndpoints";
const axiosInstance = axios.create({ baseURL: BASE_URL });
const anonymousAxiosInstance = axios.create({ baseURL: BASE_URL });

function get(endpoint, data = {}, responseType) {
  return axiosInstance
    .get(endpoint, { data, responseType })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}

function post(endpoint, data = {}, headers) {
  return axiosInstance
    .post(endpoint, data, { headers })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}

function apost(endpoint, data = {}, headers) {
  return anonymousAxiosInstance
    .post(endpoint, data, { headers, withCredentials:true })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}

function put(endpoint, data) {
  return axiosInstance
    .put(endpoint, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}

function _delete(endpoint, data) {
  return axiosInstance
    .delete(endpoint, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}

function patch(endpoint, data) {
  return axiosInstance
    .patch(endpoint, data)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
}

export default {
  get,
  post,
  apost,
  put,
  _delete,
  patch,
};

