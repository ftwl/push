import {HTTP} from '../utils/http'

export class FindModel extends HTTP{
    getNewProducts(token){
        return this.request({
            url:'get_new_products',
            token
        })
    }
}