import config from '../../config'

const OrderService = {
    //POST request for order
    //
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
    },
    //POST request for adding items to order
    //
    addItem(item_id_fk,customer_id_fk){
        return fetch(`${config.API_ENDPOINT}/newitem`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                item_id_fk,
                customer_id_fk
            }),
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    //GET request for Reciept from ID
    //
    getReciept(id){
        return fetch(`${config.API_ENDPOINT}/reciept/${id}`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    //GET request for Customer from ID
    //
    getContact(id){
        return fetch(`${config.API_ENDPOINT}/get/${id}`)
        .then(res => 
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )   
    },
    //GET request for all active orders
    //
    getAll(name){
        return fetch(`${config.API_ENDPOINT}/active/${name}`)
        .then(res => 
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          ) 
    },
}

export default OrderService