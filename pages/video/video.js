Page({
  data: {
    src: ''
  },
  //选择视频
  chooseVideo: function() {
    var that = this
    wx.chooseVideo({
      success: function(res) {
        that.setData({
          src: res.tempFilePath,
        })
      }
    })
  },
  uploadvideo: function() {
    var src = this.data.src;
    let cookie = wx.getStorageSync('cookieKey');
    wx.uploadFile({
      url: 'http://10.134.138.253:8002/iVolley_api/storage_video/', //服务器接口
      filePath: src,
      header: {
        'content-type': 'multipart/form-data',
        'Cookie':cookie
      },
      formData: {
        "tag": '自垫球'
      },
      name: 'video',
      success: function(res) {
        console.log(res)
      },
      fail: function() {
        console.log('接口调用失败')
      }
    })
  }
})
