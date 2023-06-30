var logstaus;
var email;
var passWord;
var regEmail;
var captcha; //验证码
var regPassWord;
var regConfirmPassWord;
var number;
var name1;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 1,
    codeText: '获取验证码',
    counting: false,
  },
  HandelItemChange: function(e) {
    var str;
    str = e.detail.value;
    
    if(str == "student") {
      this.logstaus = 0;
    }
    else{
      this.logstaus = 1;
    }
  },
  getName:function(e){
    this.name1 = e.detail.value;
  },
  getCode1: function(e){
    this.captcha = e.detail.value;
  },
  getNumber: function(e){
    this.number = e.detail.value;
  },
  getRegisiterPassWord: function(e){
    this.regPassWord = e.detail.value;
  },
  getRegisiterConfirmPassWord: function(e){
    this.regConfirmPassWord = e.detail.value;
  },
  registerEmailInput: function(e){
    this.regEmail = e.detail.value;
  },
  getEmail1: function(e){
    this.email = e.detail.value;
  },
  getPassWord: function(e){
    this.passWord = e.detail.value;
  },
  clickMe: function() {
    var that = this
    if(this.data.current == 1) {
      console.log(this.logstaus)
      console.log(this.email)
      console.log(this.passWord)
      wx.request({
        url: 'http://10.134.138.253:8002/iVolley_api/login/',
        header: {
          'content-type': 'application/x-www-form-urlencoded' //修改此处即可
        },
        data: {
          "email": this.email,
          "password": this.passWord,
          "role": this.logstaus //0学生，1老师
        },
        method:'POST',
        success: function(res) {
          console.log(res)
          var code = res.data.status;
          if(code == 200) {
            wx.showToast({
              icon: 'success',
              title: '登录成功',
            })
            console.log(that.logstaus)
            if (that.logstaus) {
              wx.navigateTo({
                url: '../teachers/teacher_home/teacher_home',
              })
            }
          }
          else if(code == 300) {
            wx.showToast({
              icon: 'error',
              title: '密码错误',
            })
          }
          else if(code == 400) {
            wx.showToast({
              icon: 'error',
              title: '邮箱未注册',
            })
          }
          else {
            wx.showToast({
              icon: 'error',
              title: '未知错误',
            })
          }
        }
      })
    }
    else {
      console.log(this.regPassWord)
      console.log(this.regConfirmPassWord)
      if(this.regPassWord == this.regConfirmPassWord) {
        wx.request({
          url: 'http://10.134.138.253:8002/iVolley_api/register/',
          header: {
            'content-type': 'application/x-www-form-urlencoded' //修改此处即可
          },
          data: {
            "email": this.regEmail,
            "password": this.regPassWord,
            "name": this.name1,
            "num": this.number, //学工号
            "verification": this.captcha,
            "role": this.logstaus //0学生，1老师
          },
          method:'POST',
          success: function(res) {
            var code = res.data.status;
            var error = res.data.error;
            if(code == 200) {
              wx.showToast({
                icon: 'success',
                title: '注册成功',
              })
            }
            else {
              if(error == 401) {
                wx.showToast({
                  icon: 'error',
                  title: '验证码错误/过期',
                })
              }
              else if(error == 402) {
                wx.showToast({
                  icon: 'error',
                  title: '未发送验证码',
                })
              }
              else if(error == 403) {
                wx.showToast({
                  icon: 'error',
                  title: '邮箱已注册',
                })
              }
              else{
                wx.showToast({
                  icon: 'error',
                  title: '未知错误',
                })
              }
            }
          }
        })
      }
      else {
        wx.showToast({
          icon: 'error',
          title: '确认密码错误',
        })
      }
    }
  },
  click(e){
    let index = e.currentTarget.dataset.code;
    this.setData({
      current:index
    })
  },
  //获取验证码 
  getCode(){
    console.log(this.regEmail)
    var that = this;
    if (!that.data.counting) {
      wx.showToast({
        title: '验证码已发送',
      })
      wx.request({
        url: 'http://10.134.138.253:8002/iVolley_api/send_sms_code/',
        header: {
          'content-type': 'application/x-www-form-urlencoded' //修改此处即可
        },
        data: {
          "email": this.regEmail
        },
        method:'POST',
        success: function(res) {
          console.log(res)
        }
      })
      //开始倒计时60秒
      that.countDown(that, 60);
    } 
  },
  //倒计时60秒
  countDown(that,count){
    if (count == 0) {
      that.setData({
        codeText: '获取验证码',
        counting:false
      })
      return;
    }
    that.setData({
      counting:true,
      codeText: count + '秒后重新获取',
    })
    setTimeout(function(){
      count--;
      that.countDown(that, count);
    }, 1000);
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

  }
})
