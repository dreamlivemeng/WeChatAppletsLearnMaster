// pages/webdetails/webdetails.js
var utils = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '详情',
    desc:'aa',
    webUrl:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      title: options.desc,//options为页面路由过程中传递的参数
      webUrl:options.url
    })
    wx.setNavigationBarTitle({
      title: that.data.title//页面标题为路由参数
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
  /**
  * 将url连接复制
  */
  copyToClipboardData: function (event) {
    var that = this;
    utils.copyToClipboardData(that.data.webUrl);
  },
})