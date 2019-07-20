//index.js
//获取应用实例
let amapFile = require('../../libs/amap-wx')
import Map from '../../models/index'
Page({
    data:{
        key:'938d6169b7c20b4ad38a78c27b3c5b55',
        longitude: null,
        latitude: null,
        scale:14,
        markers:[{
            id:1,
            iconPath:"https://tuiyixia.oss-cn-shanghai.aliyuncs.com/image/packet.png?OSSAccessKeyId=LTAINo4457UW83Sw&Expires=1315562809951&Signature=X%2BDolykC24iYaJpK8cdIWamJfNo%3D",
            latitude:32.00986,
            longitude: 120.85737,
            width:21,
            height:27
        }],
        circles: [{
            longitude: null,
            latitude: null,
            color: 'clear',
            radius: 1500,
            fillColor: '#7cb5ec88',
            strokeWidth: 1
        }],
        showPacket:false,
        animationRefresh:"",
        animationPacket:"",
        a:1
    },
    togglePacket(){
        const {showPacket} = this.data
        this.setData({
            showPacket:!showPacket
        })
    },
    markertap(e){
        console.log(e.markerId)
        this.togglePacket()
    },
    closePacket(){
        this.togglePacket()
    },
    refresh(){
        let {a} = this.data
        const animation = wx.createAnimation({
            duration: 300,
            timingFunction: 'linear',
            delay: 0,
            transformOrigin: '50% 50% 0'
        })
        animation.rotate(360*a).step()
        this.setData({
            animationRefresh:animation.export(),
            a:a+1
        })
    },
    onLoad(){
        const that = this
        wx.getSetting({
            success(res) {
                if (!res.authSetting['scope.userLocation']) {
                    wx.authorize({
                        scope: 'scope.userLocation',
                        success() {
                            // 用户已经同意小程序使用获取地理位置，后续调用 wx.userLocation 接口不会弹窗询问
                            Map.getLocation(callback)
                            function callback(res) {
                                _callback(res)
                            }
                        }
                    })
                }else{
                    Map.getLocation(callback)
                    function callback(res) {
                        console.log(res)
                        _callback(res)
                    }
                }
            }
        })
        // Callback
        function _callback(res) {
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
    },
    openPacket(){
        const animation = wx.createAnimation({
            duration: 300,
            timingFunction: 'linear',
            delay: 0,
            transformOrigin: '50% 50% 0'
        })
        let { a } = this.data
        animation.rotateY(360*a).step()
        this.setData({
            animationPacket:animation.export(),
            a: a + 1
        })
    }
})
