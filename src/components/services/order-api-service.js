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
    },
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
    getReciept(id){
        return fetch(`${config.API_ENDPOINT}/reciept/${id}`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    getContact(id){
        return fetch(`${config.API_ENDPOINT}/get/${id}`)
        .then(res => 
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )   
    },
    getAll(){
        return fetch(`${config.API_ENDPOINT}/active`)
        .then(res => 
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          ) 
    },
}

export default OrderService