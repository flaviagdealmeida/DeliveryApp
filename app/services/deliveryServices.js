import axios from 'axios';
import * as config from '../config/apiConfig';

export const getCardapio =() => {
    return axios.get(config.getApiDelivery() + '/api/cardapio')
        .then(
            response => {
                return response.data;
            }
        )
}