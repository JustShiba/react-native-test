import axios from 'axios';

import { USER__TOKEN } from '../redux/constances/constances';
import { localStore } from '../secureStore/secureStore';

export const apiCall = async ([method, path, inf, token = false]) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token || await localStore('get', USER__TOKEN)}`,
        },
    };
    if (inf) {
        return axios[method](`http://178.124.178.6:3000/${path}`, inf, config);
    }
    return axios[method](`http://178.124.178.6:3000/${path}`, config);
};
