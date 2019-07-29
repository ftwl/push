import {config} from '../config'


const tips = {
    1:'抱歉出现一个错误',
    1005:'您的开发者key不正确,请填写正确的开发者key',
    1007:'未知错误',
    3000:'该内容不存在',
    40001:'AppSecret 错误或者 AppSecret 不属于这个小程序，请开发者确认 AppSecret 的正确性',
    40002:'请确保 grant_type 字段值为 client_credential',
    40013:'不合法的 AppID，请开发者检查 AppID 的正确性，避免异常字符，注意大小写'
}

// 解构

class HTTP {
    request({url,data={},method='GET',token}){
        return new Promise((resolve,reject)=>{
            this._request(url,resolve,reject,data,method,token)
        })
    }

    _request(url, resolve, reject, data = {}, method = 'GET', token=''){
        // url ,data,method
        wx.request({
            url:config.api_base_url+url,
            method,
            data,
            header:{
                'content-type': 'application/json',
                'appkey': config.appkey,
                'Authorization': `Bearer ${token}`
            },
            success: (res)=>{
                // code is not String
                const code = res.statusCode.toString()
                if(code.startsWith('2')){
                    resolve(res.data)
                }else{
                    reject()
                    const error_code = res.data.error_code
                    this._show_error(error_code)
                }
            },
            fail:(err)=>{
                reject()
                this._show_error(1)
            }
        })
    }

    _show_error(error_code){
        if(!error_code){
            error_code = 1
        }
        const tip = tips[error_code]
        wx.showToast({
            title:tip?tip:tips[1],
            icon:'none',
            duration:2000
        })
    }
}

export {HTTP}