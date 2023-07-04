Page({
  data: {
    src: '',
    type: ''  //1图片，0视频
  },
  onLoad(options) {
    console.log(options)
    this.setData({
      type: options.type
    })
  },
  //选择视频
  chooseMedia: function() {
    var that = this
    wx.chooseMedia({
      success: function(res) {
        console.log(res)
        that.setData({
          src: res.tempFiles[0].tempFilePath
        })
      }
    })

  },
  uploadMedia: function() {
    var src = this.data.src;
    let cookie = wx.getStorageSync('cookieKey');
    if (type == 1) {
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
    } else {
      wx.uploadFile({
        url: 'http://10.134.138.253:8002/iVolley_api/storage_img/', //服务器接口
        filePath: src,
        header: {
          'content-type': 'multipart/form-data',
          'Cookie':cookie
        },
        formData: {
          "tag": '自垫球'
        },
        name: 'img',
        success: function(res) {
          console.log(res)
        },
        fail: function() {
          console.log('接口调用失败')
        }
      })
    }
  }
})
