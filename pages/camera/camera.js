// pages/camera/camera.js
var bmap = require('../../libs/bmap-wx.js');
var wxMarkerData = []; 
var that=null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [],
    latitude: '',//经度
    longitude: '',//纬度
    rgcData: {} ,
    adress:"",//地址
src:"http://d.hiphotos.baidu.com/image/h%3D300/sign=bdac238024381f3081198ba999004c67/6159252dd42a2834171827b357b5c9ea14cebfcf.jpg",//显示图片
    quality:"normal",//相机等级,默认normal
    position:"back",//前置后置back
    flash:"off",//on off 闪光灯
    isHidden: true,//dialog显示控制
    isHidden2: true,//dialog2显示控制
    longtap:false,//长按开关
    imgs:["http://d.hiphotos.baidu.com/image/h%3D300/sign=bdac238024381f3081198ba999004c67/6159252dd42a2834171827b357b5c9ea14cebfcf.jpg"]
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     that = this;
    // 新建百度地图对象 
    var BMap = new bmap.BMapWX({
      ak: 'kyq22lejNlYBnIH67cKBvgX3y70h9Ae6'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      wxMarkerData = data.wxMarkerData;
      console.log(wxMarkerData)
      that.setData({
        markers: wxMarkerData,
        adress: wxMarkerData[0].address
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    // 发起regeocoding检索请求 
    BMap.regeocoding({
      fail: fail,
      success: success,
      iconPath: '../../img/marker_red.png',
      iconTapPath: '../../img/marker_red.png'
    }); 
    //1000s获取一次
   
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
  takePhoto:function() {
    var that=this;
    const ctx = wx.createCameraContext()
  //  setTimeout(function (){} ,500);
    console.log(this.data.latitude)
    ctx.takePhoto({
      quality: that.data.quality,
      success: (res) => {
        console.log("ss1");
        this.setData({
          src: res.tempImagePath
        })
        //跳转显示
        wx.navigateTo({
          url: 'image/image?imgurl=' + that.data.src + "&jindu=" + that.data.latitude + "&weidu=" + that.data.longitude + "&address=" + that.data.adress
        })
      }
    })
  },
  showimg:function(){//预览图片
    // wx.navigateTo({
    //   url: '../imageview/imageview?imgurl=' + that.data.src
    //      })
    var imgs=[]
    imgs[0] = that.data.src;
    that.setData({
      imgs: imgs
    })
    wx.previewImage({
      urls: that.data.imgs,
    })
  },
  //设置前置
  deviceposition:function(){
    if (that.data.position ==="back"){
      that.setData({
        position:"front"
      })
    }else{
      that.setData({
        position: "back"
      })
    }
  },
  turnflash:function(){
    if (that.data.flash === "on") {
      that.setData({
        flash: "off"
      })
    } else {
      that.setData({
        flash: "on"
      })
    }
  } , 
  showCompomentDialog: function () {
    that.setData({
      isHidden: false
    })
  },
  fun1: function (e) {
    that.setData({
      isHidden2: false
    })},

  fun2: function (e) {
    wx.navigateTo({
      url: '../setting/setting',
    })
    that.setData({
      isHidden: false
    })
  },
  fun3:function(e){
 // console.log("1121")
  this.turnflash();
  },
  fun4: function(e){
  //console.log("1121")
    if (this.data.longtap){
      this.setData({
        longtap: false
      })
    }else{
      this.setData({
        longtap: true
      }) 
    }

  },
  longTap:function(e){
  //  console.log("1121")
  if(this.data.longtap){

    this.takePhoto()
  }else{
    console.log("1121")
  }
  },
  // dialog2相机质量设置
  quality1: function (e) {
    this.setData({
      quality: "high"
    }) },
  quality2: function (e) {
    this.setData({
      quality: "normal"
    }) },
  quality3: function (e) { 
    this.setData({
      quality: "low"
    })
  }
  //设置
})