// pages/camera/image/image.js
var app=getApp();
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"",
    jindu:"",
    weidu:"",
    address:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var  url= options.imgurl;
   console.log(options)
    this.setData({
      url:url,
      jindu: options.jindu,
      weidu: options. weidu,
      address: options. address
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.drawimage();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
 //   const ctx = wx.createCanvasContext('myCanvas')
  //  ctx.setFillStyle('red')
  //  ctx.setFontSize(20)
  //  ctx.fillText('Hello', 20, 20)
 //   ctx.fillText('Hello', 40, 40)
 //   ctx.draw()
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
  drawimage:function(){
    const ctx = wx.createCanvasContext('myCanvas')
    var that =this;
    var width=0;
    var height=0;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
       width=res.windowWidth;
       height=res.windowHeight;
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)
      }
    })
    // console.log(that.data.url) 
    // wx.getImageInfo({
    //   src: 'that.data.url',
    //   success: function (res) {
    //     width=res.width;
    //     height=res.height;
    //   }
    // })
   // if (that.data.url!=""){
     
    ctx.drawImage(that.data.url, 0, 0, width,height)
    //}
    // wx.showToast({
    //   title: app.globalData.img,
    // })
    if (app.globalData.img===""){//不添加水印图片

    }else{//添加水印图片 
   
      console.log(app.globalData.alpha)
      ctx.setGlobalAlpha(app.globalData.alpha / 100)
      if (app.globalData.style === "平铺") {
        ctx.drawImage(app.globalData.img, 0, 0, width, height/2)
      } else if (app.globalData.style === "拉伸") {
        ctx.drawImage(app.globalData.img, 0, 0, width, height)
      } else {
        ctx.drawImage(app.globalData.img,0,0 )
      }
    }
    ctx.setGlobalAlpha(1)
    ctx.setFontSize(20)
    ctx.setFillStyle('red')
    var i=3;
    if (app.globalData.showlocation){
      ctx.fillText('经度:' + that.data.jindu, 20, i*20)
      i++;
      ctx.fillText('纬度:' + that.data.weidu, 20, i * 20)
      i++;
      ctx.fillText('地址:' + that.data.address, 20, i * 20)
      i++;
    }
    if (app.globalData.showtime) {
     
      ctx.fillText('时间:' + util.formatTime(new Date()), 20, i * 20)
      i++;
    }
    if (app.globalData.word===""){
     
    }else{
      ctx.fillText('备注:' + app.globalData.word, 20, i * 20)
      i++;
    }
    ctx.draw()
    this.saveimg()
  },
  //储存图片
  saveimg:function(){
    //需要延时不然黑屏
    setTimeout(function () {
      wx.canvasToTempFilePath({
        x: 0,
        y: 0,
        //非必填默认canvas的大小
        //width: 50,
        //height: 50,
        // destWidth: 100,
        // destHeight: 100,
        canvasId: 'myCanvas',
        success: function (res) {
          console.log(res.tempFilePath)
          wx.saveImageToPhotosAlbum({
            filePath: res.tempFilePath
          })
        }
      })
    }, 500)
  }
})