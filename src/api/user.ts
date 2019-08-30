import axios from '../libs/api.request';

export const LOGIN = (data: {}): any => {
  return axios.request({
    url: 'web/token',
    data,
    method: 'post',
  });
};
