import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.exchangeratesapi.io/'
})

export const currencyAPI = {
    getCurrencies() {
        return instance.get(`latest`).then(response => response.data)
    }
}

export const calculatorAPI = {

}
