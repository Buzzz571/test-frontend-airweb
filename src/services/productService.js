import axios from 'axios';

import { baseUrl } from './apiClientService';

const endpoint = '/products';
// export object
export default {
    // all products
    getAllProducts() {
        // axios.get()retourne une Promise
        return axios.get(baseUrl + endpoint );
    },

    // récupérer les données d'un produit par son id
    getSingleProduct(id) {
        return axios.get(baseUrl + endpoint + '/' + id );
    },
}