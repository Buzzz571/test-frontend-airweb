import axios from 'axios';

import { baseUrl } from './apiClientService';

const endpoint = '/categories';

export default {

    getAllCategorys() {
        // axios.get()retourne une Promise
        return axios.get(baseUrl + endpoint );
    },

    // récupérer les données d'un tuto par son id
    getSingleCategory(id) {
        return axios.get(baseUrl + endpoint + '/' + id );
    },
}