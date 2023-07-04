Page({

  /**
   * 页面的初始数据
   */
  data: {
    email: '',
    videoList: [],
    imgList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow(options) {
    let cookie = wx.getStorageSync('cookieKey'); 
    wx.request({
      url: 'http://10.134.138.253:8002/iVolley_api/stu2videos/',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie':cookie
      },
      success: (res)=> {
        console.log("123456")
        console.log(res)
        var tempList = []
        for (var i = 0; i < res.data.videos.length; i++) {
          var item = res.data.videos[i]
          item.index = i
          item.subtime = item.subtime.substring(0,10)
          item.AI_status = item.AI_status == 0 ? 'AI检测中' : 'AI检测完成'
          item.teacher_status = item.teacher_status == 0 ? '教师未评价' : '教师已评价'
          tempList.push(item)
        }
        this.setData({
          videoList: tempList
        })
      },
      fail: (res)=> {
        console.log(res)
      }
    }),
    wx.request({
      url: 'http://10.134.138.253:8002/iVolley_api/stu2videos/',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie':cookie
      },
      success: (res)=> {
        console.log("123456")
        console.log(res)
        var tempList = []
        for (var i = 0; i < res.data.videos.length; i++) {
          var item = res.data.videos[i]
          item.index = i
          item.subtime = item.subtime.substring(0,10)
          item.AI_status = item.AI_status == 0 ? 'AI检测中' : 'AI检测完成'
          item.teacher_status = item.teacher_status == 0 ? '教师未评价' : '教师已评价'
          tempList.push(item)
        }
        this.setData({
          videoList: tempList
        })
      },
      fail: (res)=> {
        console.log(res)
      }
    })
    wx.request({
      url: 'http://10.134.138.253:8002/iVolley_api/stu2imgs/',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Cookie':cookie
      },
      success: (res)=> {
        console.log("123456")
        console.log(res)
        var tempList = []
        for (var i = 0; i < res.data.imgs.length; i++) {
          var item = res.data.imgs[i]
          item.index = i
          item.subtime = item.subtime.substring(0,10)
          item.AI_status = item.AI_status == 0 ? 'AI检测中' : 'AI检测完成'
          item.teacher_status = item.teacher_status == 0 ? '教师未评价' : '教师已评价'
          tempList.push(item)
        }
        this.setData({
          imgList: tempList
        })
      },
      fail: (res)=> {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  onClickVideo({currentTarget}) {
    var {index} = currentTarget.dataset
    var ID = this.data.videoList[index].ID
    console.log(ID)
    var url = '../studentViewVideo/studentViewVideo?ID=' + ID
    console.log(url)
    wx.navigateTo({
      url: url
    })
  },
  uploadVideo: function() {
    wx.navigateTo({
      url: '../video/video?type=2'
    })
  },
  uploadImage: function() {
    wx.navigateTo({
      url: '../video/video?type=1'
    })
  }
})