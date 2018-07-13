// pages/ui/navigationbar/navigationbar.js
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
  setTopBarText_method:function(){
    wx.setTopBarText({
      text: '设置topBarText',
    })
  },
  /**
   * 设置标题
   */
  setNavigationBarTitle_method: function() {
    wx.setNavigationBarTitle({
      title: '设置导航条',
    })
  },
  /**
   * 在当前页面显示导航条加载动画。
   */
  showNavigationBarLoading_method: function() {
    wx.showNavigationBarLoading()
  },
  /**
   * 隐藏导航条加载动画。
   */
  hideNavigationBarLoading_method: function() {
    wx.hideNavigationBarLoading();
  }
})