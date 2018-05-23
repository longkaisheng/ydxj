// pages/myDialogComponent/myDialogComponent.js
Component({

  properties: {
    dialogHidden: {
      type: Boolean,
      value: true
    },
    floor3: {
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
    fun1: function () {
      this.setData({
        dialogHidden: true,
      })
      this.triggerEvent('funfirst')
    },
    fun2: function () {
      this.setData({
        dialogHidden: true,
      })
      this.triggerEvent('funtwo')
    },
    fun3: function () {
      this.setData({
        dialogHidden: true,
      })
      this.triggerEvent('funthird')
    }
  }
})