//app.js
import {LoginModel} from './models/login'
import {promisic} from './utils/common'
const loginModel = new LoginModel()
App({
  async onLaunch () {

    // 对 wx.login 进行包装
    const login = await promisic(wx.login)()
    console.log(login.code)
    // 登录
    // wx.login({
    //   success: res => {   
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     const getOpenID=loginModel.getOpenID(res.code)
    //     getOpenID.then(res=>{
    //       this.postLogin(res.openid)
    //     })
    //   }
    // })
    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo
    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  postLogin(openid){
    loginModel.postLogin(openid)
      .then(res=>{
        // if(res.code==='401'){
        //   wx.navigateTo({
        //     url:'/pages/login/index'
        //   })
        // }
      })
  },
  globalData: {
    userInfo: null,
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVlMDE4ZGJkNDFkYTU2ZTY5Yzc3MmZkODViM2JhNGQyNDU0YWZmN2QyODcwMjQ0ZDc5Zjk4MzQyOTc1ZGUyZWMwYWNiOWQ1ZWQ4ZTAyODA2In0.eyJhdWQiOiIyIiwianRpIjoiZWUwMThkYmQ0MWRhNTZlNjljNzcyZmQ4NWIzYmE0ZDI0NTRhZmY3ZDI4NzAyNDRkNzlmOTgzNDI5NzVkZTJlYzBhY2I5ZDVlZDhlMDI4MDYiLCJpYXQiOjE1NjM4NDgxNjQsIm5iZiI6MTU2Mzg0ODE2NCwiZXhwIjoxNTk1NDcwNTY0LCJzdWIiOiIyIiwic2NvcGVzIjpbIioiXX0.tKWN4VLJkoZHPsf-ohQkMa7R6E35QLk12xi5CNYizXIVjQarq8zoBjOBiVu-Qz53VHBEO7YU_CIDLJoUMiOrcagbv5huOGjn55UKjr8UYUYGBAplAVINXpabWGaOpgoej_NtUWlISIvym8P16Zo2mkyKOdeUcLTvp74aF4hTubpWV-jKsKg41lRTjWSncNMrPtiRmY-2ezZUO-x3YiFh-3E29R3LNO4SEP8XMDUMrBxvXtB0j42PD7F9IkU1GUrs6s58Q1hEwDVvWqtQoHAkt38i9LRuUIA4_vj4qiJOwZF6ZOaRmSB4PmmoqSTR5mqeAo7k1UgUzymlNBqtKPwOUNIGcZY5sUFpe_iyxqL_5r65R48VgfGDYXr3Fmq_bsy1yXqKRhhyOz9y1oSXHyJp8u3nlXr18KaGU5TF3_SqpAI9i5OeNSVMwjTDRbNcod5FcIRF6QN6JC4UpTmf_ThcGFxuU0cv37ixWqUmfmGZYFHa3nF7gF8zVy-oJKpFY3T6MtJLtayQdqhU8s0XEh2Zr4MdWP5vjp0GLCI66vq4yisXUR7mF6ui-fYRvpkhsDYXVnGaEHhouDy2oJMof2wj1qKuFR6p7geZcxHzokWBg5C0PR0N02zkqqkFzHxx21QDqKvIv3De6o8dIV4ISe2dLCiji9VMU0FlyQqG_g8BED0",
    flag:false
  }
})