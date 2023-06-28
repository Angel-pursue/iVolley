// pages/teachers/teacher_home/teacher_home.js
import Message from 'tdesign-miniprogram/message/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '陆',
    drawerVisible: false,
    placement: 'right',
    sidebar: [
      {
        title: '发布作业',
      },
      {
        title: '新建班级',
      }
    ],
    semesterText: '',
    semesterValue: [],
    semesterVisible: false,
    semesters: [
      { label: '2023春', value: '2023春' },
      { label: '2023秋', value: '2023秋' },
    ],
    value: 'label_1',
    list: [
      { value: 'label_1', label: '班级管理', icon: 'home' },
      { value: 'label_4', label: '个人中心', icon: 'user' },
    ],
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
    const msg = '老师，您已成功登录'
    Message.success({
      context: this,
      offset: [20, 32],
      duration: 3000,
      content: this.data.name + msg,
      align: 'center'
    });
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
  
  onSemesterPicker() {
    this.setData({ semesterVisible: true });
  },

  onChange(e) {
    this.setData({
      'product.value': e.detail.value,
    });
  },

  onChangeBar(e) {
    this.setData({
      value: e.detail.value,
    });
  },

  onColumnChange(e) {
    console.log('picker pick:', e);
  },

  onPickerChange(e) {
    const { key } = e.currentTarget.dataset;
    const { value } = e.detail;

    console.log('picker change:', e.detail);
    this.setData({
      [`${key}Visible`]: false,
      [`${key}Value`]: value,
      [`${key}Text`]: value.join(' '),
    });
  },

  onPickerCancel(e) {
    const { key } = e.currentTarget.dataset;
    console.log(e, '取消');
    console.log('picker1 cancel:');
    this.setData({
      [`${key}Visible`]: false,
    });
  },

  onDrawerDisplay(e) {
    this.setData({
      drawerVisible: true,
    });
  },

  itemClick(e) {
    console.log(e.detail);
  },
  overlayClick(e) {
    console.log(e.detail);
  },

  gotoClass() {
    console.log('gotoClass')
    wx.navigateTo({
      url: './teacher_class/teacher_class',
    })
  }
})