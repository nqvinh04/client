import axios from "../helpers/axios";

export const addProdcut = form => {
    return async dispatch => {
        const res = await axios.post(`/product/create`, form);
        console.log('product', res);
    }
}