import axios from "axios";

export const get = ({ url, headers = {}, params = {}, ...rest }) =>
  axios.request({
    method: "get",
    url,
    headers,
    params,
    validateStatus: (status) => {
      if (status === 403 || status === 401) {
        return false;
      }
      return status >= 200 && status < 300;
    },
    ...rest,
  });

export const post = ({ url, data, headers = {}, params = {} }) =>
  axios.request({
    method: "post",
    url,
    data,
    headers,
    params,
    validateStatus: (status) => {
      if (status === 403 || status === 401) {
        return false;
      }
      return status >= 200 && status < 300;
    },
  });

export const put = ({ url, data, headers = {}, params = {} }) =>
  axios.request({
    method: "put",
    url,
    data,
    headers,
    params,
    validateStatus: (status) => {
      if (status === 403 || status === 401) {
        return false;
      }
      return status >= 200 && status < 300;
    },
  });
export const del = ({ url, headers = {}, params = {} }) =>
  axios.request({
    method: "delete",
    url,
    headers,
    params,
    validateStatus: (status) => {
      if (status === 403 || status === 401) {
        return false;
      }
      return status >= 200 && status < 300;
    },
  });
