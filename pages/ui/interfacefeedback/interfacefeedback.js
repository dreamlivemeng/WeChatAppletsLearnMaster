// pages/ui/interfacefeedback/interfacefeedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '交互反馈',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * showToast
   */
  showToast_method: function() {
    wx.showToast({
      title: '消息提示',
      icon: 'none',
      duration: 2000
    });
  },
  /**
   * showLoading
   */
  showLoading_method: function() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function() {
      wx.hideLoading();
    }, 5000);
  },
  /**
   * 显示模态框
   */
  showModal_method: function() {
    wx.showModal({
      title: '温馨提示',
      content: '需要一杯咖啡吗？',
      showCancel: true, //是否显示取消按钮，默认为 true
      cancelText: 'cancel', //取消按钮的文字，默认为"取消"，最多 4 个字符
      cancelColor: '#00ff00', //取消按钮的文字颜色，默认为"#000000"
      confirmColor: '#3CC51F', //确定按钮的文字颜色，默认为"#3CC51F"
      confirmText: '确认', //确定按钮的文字，默认为"确定"，最多 4 个字符
      success: function(res) {
        if (res.confirm) {
          wx.showToast({
            title: '点击了确定',
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '点击了取消',
          })
        }
      }
    })


  },
  /**
   * 显示操作菜单
   */
  showActionSheet_method: function() {
    var itemList = ['A', 'B', 'C']; //按钮的文字数组，数组长度最大为6个
    wx.showActionSheet({
      itemList: itemList,
      itemColor: '#00ff00', //按钮的文字颜色，默认为"#000000"
      success: function(res) {
        console.log("选中的下标是：" + res.tapIndex + "，选中的值是：=" + itemList[res.tapIndex])
      },
      fail: function(res) {
        console.log("点击取消也会进这个方法" + res.errMsg)
      }
    })
  }
})