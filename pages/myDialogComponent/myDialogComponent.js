// pages/myDialogComponent/myDialogComponent.js
Component({

  properties: {
    dialogHidden: {
      type: Boolean,
      value: true
    },
    floor3:{
      type: String,
      value: "闪光灯已关"
    },
    floor4: {
      type: String,
      value: "触摸拍照已关"
    }
  },
  methods: {
    // 这里是一个自定义方法,取消
    cancleBtn: function () {
      // Properties pro = new Properties();
      this.setData({
        dialogHidden: true,
      })
    },
    fun1:function(){
      this.setData({
        dialogHidden: true,
      })
      this.triggerEvent('funfirst')
    },
    fun2:function(){

      this.triggerEvent('funtwo')
    },
    fun3:function(){
      if (this.data.floor3 === "闪光灯已开"){
        this.setData({
          floor3: "闪光灯已关",
        })
      }else{
        this.setData({
          floor3: "闪光灯已开",
        })
      }
    
      this.triggerEvent('funthird')
    },
    fun4: function () {
  
      if (this.data.floor4 === "触摸拍照已开") {
        this.setData({
          floor4: "触摸拍照已关",
        })
      } else {
        this.setData({
          floor4: "触摸拍照已开",
        })
      }
      this.triggerEvent('funfour')
    }
  }
})