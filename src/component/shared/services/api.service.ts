import axios, { AxiosResponse } from 'axios';

export const makeGet = (url: string): Promise<AxiosResponse> => {
    return axios.get(url);
  };