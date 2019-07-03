class Map{
    getLocation(callback) {
        wx.getLocation({
            type: 'wgs84',
            success(res) {
                if(callback)callback(res)
            }
        })
    }
}

export default new Map()