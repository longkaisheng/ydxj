// pages/addpic/addpic.js
var app=getApp();
var that=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],
    index:20,
    array2:["正常","拉伸","平铺"],
    index2:2,
    img:"",//图片地址
    alpha:100,//透明度
    style:"正常"//样式
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this;
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
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      alpha: that.data.array[e.detail.value]
    })
    
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  choiceimg:function(){
    var that=this;
    wx.chooseImage({
      count: 1,  // 默认9
      sizeType: ['original', 'compressed'], 
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          img: tempFilePaths[0]
        })
      },
    })
    
  },
  clearimg:function(){
    this.setData({
      img: ""
    })
  },
  save:function(){
    app.globalData.img = this.data.img;
    app.globalData.alpha = this.data.alpha;
    app.globalData.style = this.data.style;
    
    // wx.setStorageSync('img', this.data.img);
    // wx.setStorageSync('alpha', this.data.alpha);
    // wx.setStorageSync('style', this.data.style);
    wx.showToast({
      title: '保存成功',
    })
  }
})