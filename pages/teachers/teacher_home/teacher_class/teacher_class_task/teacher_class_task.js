// pages/teachers/teacher_home/teacher_class/teacher_class_task/teacher_class_task.js
import {config} from '../../../../../config/index'
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindFeedback: function(e) {
    this.setData({teacher_feedback: e.detail.value})
  },

  onLoad(options) {
    this.setData({
      ID: options.ID
    })

    wx.request({
      url: config.domain + 'get_video_profile/',
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
            imageUrl: res.data.error_img
          })
        }
        if (res.data.teacher_feedback == 1) {
          this.setData({
            AI_feedback: res.data.teacher_feedback
          })
        }
      },
      fail: (res)=> {
        console.log(res)
      }
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
  
})