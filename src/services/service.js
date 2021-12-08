import axios from 'axios';

import { USER__TOKEN } from '../redux/constances/constances';
import { getToken } from '../secureStore/secureStore';

export const apiCall = ([method, path, inf, token = false]) => {
    // let tokenFromStorage = getToken();

    // console.log(tokenFromStorage);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    if (inf) {
        return axios[method](`http://178.124.178.6:3000/${path}`, inf, config);
    }
    return axios[method](`http://178.124.178.6:3000/${path}`, config);
};
