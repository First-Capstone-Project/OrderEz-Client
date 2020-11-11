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
    getTypes(){
        return fetch(`${config.API_ENDPOINT}/types`)
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
}

export default ItemService