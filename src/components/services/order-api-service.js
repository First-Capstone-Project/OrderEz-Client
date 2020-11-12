import config from '../../config'

const OrderService = {
    createOrder(customer_id_fk){
        return fetch(`${config.API_ENDPOINT}/orders`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                customer_id_fk
            }),
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    }
}

export default OrderService