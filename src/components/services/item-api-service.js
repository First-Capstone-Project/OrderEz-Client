import config from '../../config'

const ItemService = {
    getItems() {
        return fetch(`${config.API_ENDPOINT}/items`)
        .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getItem(id){
        return fetch(`${config.API_ENDPOINT}/items/${id}`)
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getTypes(){
        return fetch(`${config.API_ENDPOINT}/types`)
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
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
    deleteItem(item_id){
        return fetch(`${config.API_ENDPOINT}/items/${item_id}`,{
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        })
    }
    
}

export default ItemService