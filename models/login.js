import {HTTP} from '../utils/http'

export class LoginModel extends HTTP {
    // 获取openid
    getOpenID(code){
        return this.request({
            url:'get_wechat_info',
            method:'POST',
            data:{
                code
            }
        })
    }

    // login
    postLogin(openID){
        return this.request({
            url: `openid_login/${openID}`,
            data:{
                open_id:openID
            }
        })
    }
}

