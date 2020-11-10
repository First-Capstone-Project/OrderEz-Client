import config from '../../config'

const CustomerService = {
    getCustomers(){
        return fetch(`${config.API_ENDPOINT}/customers`)
        .then(res =>
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
              )
    },
    insertCustomer(customer_name,customer_adress,customer_phone){
        return fetch(`${config.API_ENDPOINT}/customers`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                customer_name,
                customer_adress,
                customer_phone,
            }),
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    }
}

export default CustomerService