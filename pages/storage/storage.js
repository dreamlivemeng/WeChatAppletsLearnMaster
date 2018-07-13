// pages/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    desc: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '数据缓存',
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
   * 设置缓存
   */
  setStorage: function() {
    wx.setStorage({
      key: 'username',
      data: 'dreamlivemeng',
    })

    wx.setStorageSync('userpwd', 'nicaimimashiduoshao');
  },
  /**
   * 获取缓存
   */
  getStorage: function() {
    var that = this;

    wx.getStorage({
      key: 'username',
      success: function(res) {
        that.setData({
          desc: res.data,
        })
      },
      fail: function() {
        console.log('获取失败');
        that.setData({
          desc: '',
        })
      }
    })
    var username = wx.getStorageSync('username');
    var userpwd = wx.getStorageSync('userpwd');
    console.log('username:' + username + 'userpwd:' + userpwd);
  },
  /**
   * 移除缓存
   */
  removeStorage: function() {
    wx.removeStorage({
        key: 'username',
        success: function(res) {},
      }),
      wx.removeStorageSync('userpwd');
  },

  /**
   * 清除缓存
   */
  clearStorage: function() {
    wx.clearStorage();
    try {
      wx.clearStorageSync();
    } catch (e) {}
  },
  /**
   * 获取缓存信息
   */
  getStorageInfo: function() {
    var that = this;
    wx.getStorageInfo({
      success: function(res) {
        var desc = res.keys + "\n" + res.currentSize + '/' + res.limitSize;
        that.setData({
          desc: desc
        })
      },
    })
    //这儿也可以用同步的方法
    try {
      var res = wx.getStorageInfoSync();
    } catch (e) {}
  }
})