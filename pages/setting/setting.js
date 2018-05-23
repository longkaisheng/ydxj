// pages/setting/setting.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      toggle1:true,
      toggle2:true,
      word:"",
      img:"",
      isHidden:true,
      cancleBtn: false,
      inputPlaceHolder: "请输入文本",
      titleMsg: " ",
      inputHidden: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      toggle1 : app.globalData.showtime,
      toggle2 : app.globalData.showlocation,
      word:app.globalData.word,
      img:app.globalData.img
    })

  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  switch1Change:function(e){
    this.setData({
      toggle1: e.detail.value
    })   
  },
  switch2Change: function (e) {
    this.setData({
      toggle2: e.detail.value
    }) 
  },
  save:function(){
    wx.setStorageSync('showtime', this.data.toggle1);
    wx.setStorageSync('showlocation', this.data.toggle2);
    wx.setStorageSync('word', this.data.word);
    wx.setStorageSync('img', this.data.img);
    wx.navigateBack({
      
    })
  },
  showCompomentDialog: function () {

    var that = this;

    that.setData({

      isHidden: false,

      titleMsg: "这样真的好吗",

       inputPlaceHolder: "请输入想要发送的内容",

      inputHidden: false,

       cancleBtn: false,

    })

  }
  ,
  onMyEvent: function (e) {

    var that = this;

    console.log("e.detail :", e.detail)
    that.setData({
      word : e.detail
    })

    that.setData({
      isHidden: true,
      // inputHidden: false
    })
  }
})