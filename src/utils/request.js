import axios from 'axios';

export default function request(url, options) {
  if (options && options.method === 'POST') {
    options.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...options.headers,
    }
    options.body = JSON.stringify(options.body);
  }
  return axios(url, options).then(response => {
    const resData = response.data
    return resData;
  });
}
