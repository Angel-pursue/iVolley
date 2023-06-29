// pages/teachers/teacher_home/teacher_home.js
import Message from 'tdesign-miniprogram/message/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeValues: [0],
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

  handleChange(e) {
    this.setData({
      activeValues: e.detail.value,
    });
  },

  gotoTask(e) {
    console.log('gotoTask')
    wx.navigateTo({
      url: './teacher_class_task/teacher_class_task',
    })
  }
})