// pages/teachers/teacher_home/teacher_home.js
import Message from 'tdesign-miniprogram/message/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '彭',
    drawerVisible: false,
    placement: 'right',
    product: {
      value: '2023-1',
      options: [
        {
          value: '2023-1',
          label: '2023秋',
        },
        {
          value: '2023-2',
          label: '2023春',
        },
        {
          value: '2023-3',
          label: '2023夏',
        },
      ],
    },
    value: 'label_1',
    list: [
      { value: 'label_1', label: '班级管理', icon: 'home' },
      { value: 'label_4', label: '个人中心', icon: 'user' },
    ],
    image: ''
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
    wx.hideHomeButton();
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
    wx.redirectTo({
      url: '../teacher_person_center/teacher_person_center',
    })
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

  gotoClass() {
    console.log('gotoClass')
    wx.navigateTo({
      url: './teacher_class/teacher_class',
    })
  },

  onChange(e) {
    this.setData({
      'product.value': e.detail.value,
    });
  },
  newClass(e) {
    const msg = "暂无此功能，后续或从教务处直接导入班级"
    Message.warning({
      context: this,
      offset: [5, 22],
      duration: 3000,
      content: msg,
      align: 'center'
    });
  }

})