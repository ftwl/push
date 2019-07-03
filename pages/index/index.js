//index.js
//获取应用实例
import Map from '../../models/index'
Page({
    data:{
        longitude: 120.85737,
        latitude: 31.00986,
        scale:14,
        circles: [{
            longitude: 120.85737,
            latitude: 31.00986,
            color: 'clear',
            radius: 1500,
            fillColor: '#7cb5ec88',
            strokeWidth: 1
        }]
    },
    regionchange(e) {
        console.log(e.type)
    },
    markertap(e) {
        console.log(e.markerId)
    },
    controltap(e) {
        console.log(e.controlId)
    },
    onShow(){
        let that = this
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.userLocation']) {
                    wx.authorize({
                        scope: 'scope.userLocation',
                        success() {
                            // 用户已经同意小程序使用获取地理位置，后续调用 wx.userLocation 接口不会弹窗询问
                            Map.getLocation(callback)
                            function callback(res){
                                that.setData({
                                    longitude: res.longitude,
                                    latitude: res.latitude,
                                    circles:[{
                                        longitude: res.longitude,
                                        latitude: res.latitude,
                                        color: 'clear',
                                        radius: 1500,
                                        fillColor: '#7cb5ec88',
                                        strokeWidth: 1
                                    }]
                                })
                            }
                        }
                    })
                }else{
                    Map.getLocation(callback)
                    function callback(res) {
                        that.setData({
                            longitude: res.longitude,
                            latitude: res.latitude,
                            circles: [{
                                longitude: res.longitude,
                                latitude: res.latitude,
                                color: 'clear',
                                radius: 1500,
                                fillColor: '#7cb5ec88',
                                strokeWidth: 1
                            }]
                        })
                    }
                }
            }
        })
    }
})
