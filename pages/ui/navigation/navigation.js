// pages/ui/navigation/navigation.js
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
   * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
   */
  navigateTo_method: function() {
    wx.navigateTo({
      url: '../../../pages/ui/navigation/navigation',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 关闭当前页面，跳转到应用内的某个页面。

   */
  redirectTo_method: function() {
    wx.redirectTo({
      url: '../../../pages/ui/navigation/navigation',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
   * ,暂时还不知道怎么做一个小程序里面有多个tab页
   */
  switchTab_method: function() {
    // wx.switchTab({
    //   url: '',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
  },
  /**
   * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。
   */
  navigateBack_method: function() {
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 关闭所有页面，打开到应用内的某个页面。
   */
  reLaunch_method: function() {
    wx.reLaunch({
      url: '../../../pages/ui/navigation/navigation',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})