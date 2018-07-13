// pages/mine/mine.js

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
      title: '我的',
    })
    //截屏
    wx.onUserCaptureScreen(function(res) {
      wx.showToast({
        title: '截屏了',
        icon: '',
        image: '',
        duration: 0,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
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
   * 媒体
   */
  media_method: function() {
    wx.navigateTo({
      url: '../../pages/media/media',
    })
  },
  /**
   * 文件
   */
  files_method: function() {
    wx.navigateTo({
      url: '../../pages/files/files',
    })
  },
  /**
   * 数据缓存
   */
  storage_method: function() {
    wx.navigateTo({
      url: '../../pages/storage/storage',
    })
  },
  /**
   * 位置api
   */
  location_method: function() {
    wx.navigateTo({
      url: '../../pages/location/location',
    })
  },
  /**
   * 设备相关api
   */
  devices_method: function() {
    wx.navigateTo({
      url: '../../pages/devices/devices',
    })

  },
  /**
   * 界面
   */
  ui_method: function() {
    wx.navigateTo({
      url: '../../pages/ui/ui',
    })
  },
  addphone: function() {
    //添加联系人
    wx.addPhoneContact({
      firstName: 'AAAAA张三', //必传字段
      mobilePhoneNumber: '17521002244'
    })
  },
  /**
   * 为 tabBar 某一项的右上角添加文本
   */
  settabBarBadge_method: function() {
    wx.setTabBarBadge({
      index: 0,
      text: '11', //	显示的文本，超过 3 个字符则显示成“…”
      success: function() {
        console.log("success")
      },
      fail: function() {
        console.log("failed")
      }
    })
  },
  /**
   * 移除 tabBar 某一项右上角的文本
   */
  removetabBarBadge_method: function() {
    wx.removeTabBarBadge({
      index: 0,
    })
  },
  /**
   * 显示 tabBar 某一项的右上角的红点
   */
  showTabBarRedDot: function() {
    wx.showTabBarRedDot({
      index: 0,
    })
  },
  /**
   * 隐藏 tabBar 某一项的右上角的红点
   */
  hideTabBarRedDot: function() {
    wx.hideTabBarRedDot({
      index: 0,
    })
  },
  /**
   * 动态设置 tabBar 的整体样式
   */
  setTabBarStyle: function() {
    wx.setTabBarStyle({
      color: '#FF0000', //tab上的文字默认颜色
      selectedColor: '#00FF00', //tab上的文字选中的颜色
      backgroundColor: '#0000FF', //tab的背景色
      borderStyle: 'white' //tabbar上边框的颜色。 仅支持 black/white
    })
  },
  /**
   * 动态设置 tabBar 某一项的内容
   */
  setTabBarItem_method: function() {
    wx.setTabBarItem({
      index: 0,
      text: 'text',
      // iconPath: '/path/to/iconPath',
      // selectedIconPath: '/path/to/selectedIconPath'
    })
  },
  /**
   * 显示 tabBar
   */
  showTabBar_method: function() {
    wx.showTabBar({
      aniamtion: true
    })
  },
  /**
   * 隐藏tabbar
   */
  hideTabBar_method: function() {
    wx.hideTabBar({
      aniamtion: false
    })
  },
  /**
   * 组件
   */
  Component_method: function() {
    wx.navigateTo({
      url: '../../pages/component/component',
    })
  }
})