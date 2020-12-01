import config from '../../config'

const ItemService = {
    //GET request for all Items
    //
    getItems() {
        return fetch(`${config.API_ENDPOINT}/items`)
        .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    //GET request for item from ID
    //
    getItem(id){
        return fetch(`${config.API_ENDPOINT}/items/${id}`)
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    //GET request for types
    //
    getTypes(){
        return fetch(`${config.API_ENDPOINT}/types`)
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    //POST request for Item
    //
    insertItem(item_name,item_price,type_id_fk){
        return fetch(`${config.API_ENDPOINT}/items`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                item_name,
                item_price,
                type_id_fk,
            }),
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },
    //PATCH request for Item
    //
    updateItem(item_name,item_price,item_id){
        return fetch(`${config.API_ENDPOINT}/items/${item_id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                item_name,
                item_price,
            }),
        }) 
    },
    //Delete request for Item
    //
    deleteItem(item_id){
        return fetch(`${config.API_ENDPOINT}/items/${item_id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },  
}

export default ItemService