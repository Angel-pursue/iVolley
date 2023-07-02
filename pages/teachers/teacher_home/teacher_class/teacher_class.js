// pages/teachers/teacher_home/teacher_home.js
import Message from 'tdesign-miniprogram/message/index';
import {config} from '../../../../config/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeValues: [],
    studentList: [
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: config.domain + 'tea2stu/',
      method: 'POST',
      data: {
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: (res)=> {
        console.log(res)
        var tempList = []
        for (var i = 0; i < res.data.students.length; i++) {
          var item = res.data.students[i]
          item.index = i
          tempList.push(item)
        }
        this.setData({
          studentList: tempList
        })
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
  },

  onClickStudent({currentTarget}) {
    var {index} = currentTarget.dataset
    var email = this.data.studentList[index].email
    console.log(email)
    var url = './student_videoList/student_videoList?email=' + email
    console.log(url)
    wx.navigateTo({
      url: url
    })
    // var content = this.data.msgList[index].content
    // var time = this.data.msgList[index].time
    // var id = this.data.msgList[index].id
    // wx.request({
    //   url: config.domain + '/user/message/setRead',
    //   method: 'POST',
    //   data: {
    //     "messageId": id
    //   },
    //   header: {
    //     'content-type': 'application/json', // 默认值
    //     'authorization': wx.getStorageSync('token')
    //   },
    //   success: (res)=> {
    //     if (res.data.code === 0) {
    //       console.log(res);
    //     } else {
    //       console.log(res);
    //       Toast({
    //         context: this,
    //         selector: '#t-toast',
    //         message: res.message,
    //         theme: 'error',
    //       });
    //     }
    //   },
    //   fail: (res)=> {
    //     console.log(res)
    //   }
    // })
    // wx.navigateTo({
    //   url: '/pages/usercenter/messages/message/message?content='
    //   + content + '&time=' + time,
    // })
  }
})