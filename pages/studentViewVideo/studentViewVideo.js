// pages/teachers/teacher_home/teacher_class/teacher_class_task/teacher_class_task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ID: '',
    videoUrl: '',
    imageUrl: '',
    AI_feedback: '暂无评价',
    teacher_feedback: '暂无评价',
    teacher_status: 0,
    type: 1

  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindFeedback: function(e) {
    this.setData({teacher_feedback: e.detail.value})
  },

  onLoad(options) {
    this.setData({
      ID: options.ID,
      type: options.type
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if(this.data.type == 2)
    {
      wx.request({
        url: 'http://10.134.138.253:8002/iVolley_api/get_video_profile/',
        method: 'POST',
        data: {
          video_ID: this.data.ID
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res)=> {
          console.log(res)
          this.setData({
            videoUrl: res.data.URL
          })
          if (res.data.AI_status == 1) {
            this.setData({
              AI_feedback: res.data.AI_feedback,
              teacher_status: res.data.teacher_status
            })
            if (res.data.error_img != null) {
              this.setData({
                error_img: res.data.error_img
              })
            } 
          }
          if (res.data.teacher_status == 1) {
            this.setData({
              teacher_feedback: res.data. teacher_feedback
            })
          }
        },
        fail: (res)=> {
          console.log(res)
        }
      })
    }
    else {
      wx.request({
        url: 'http://10.134.138.253:8002/iVolley_api/get_img_profile/',
        method: 'POST',
        data: {
          img_ID: this.data.ID
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: (res)=> {
          console.log(res)
          this.setData({
            videoUrl: res.data.URL
          })
          if (res.data.AI_status == 1) {
            this.setData({
              AI_feedback: res.data.AI_feedback,
              imageUrl: res.data.error_img,
              teacher_status: res.data.teacher_status
            })
          }
          if (res.data.teacher_status == 1) {
            this.setData({
              teacher_feedback: res.data.teacher_feedback
            })
          }
        },
        fail: (res)=> {
          console.log(res)
        }
      })
    }
    
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

})