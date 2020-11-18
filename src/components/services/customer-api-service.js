import config from '../../config'

const CustomerService = {
    //GET all Customers
    //
    getCustomers(){
        return fetch(`${config.API_ENDPOINT}/customers`)
        .then(res =>
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
              )
    },
    //GET customer from ID
    //
    getCustomer(id){
        return fetch(`${config.API_ENDPOINT}/customers/${id}`)
        .then(res =>
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
              )
    },
    //POST request for customer
    //
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
    },
    //PATCH request for customer
    //
    updateCustomer(customer_name,customer_adress,customer_phone,customer_id){
        return fetch(`${config.API_ENDPOINT}/customers/${customer_id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                customer_name,
                customer_adress,
                customer_phone,
            }),
        })
    },
    //DELETE request for customer
    //
    deleteCustomer(customer_id){
        return fetch(`${config.API_ENDPOINT}/customers/${customer_id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
    },
    //GET request for filtered customers
    //
    filter(num){
        return fetch(`${config.API_ENDPOINT}/filter/${num}`)
        .then(res =>
                (!res.ok)
                  ? res.json().then(e => Promise.reject(e))
                  : res.json()
              )
    }
}

export default CustomerService