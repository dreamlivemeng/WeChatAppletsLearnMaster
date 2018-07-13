// pages/ui/ui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '界面UI',
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
   * 交互反馈
   */
  interactive_feedback_method: function() {
    wx.navigateTo({
      url: '../../pages/ui/interfacefeedback/interfacefeedback',
    })
  },
  /**
   * 设置导航条条
   */
  navigationBar_method: function() {
    wx.navigateTo({
      url: '../../pages/ui/navigationbar/navigationbar',
    })
  },
  /**
   * 设置tabBar
   */
  settabbar_method: function() {
    // wx.navigateTo({
    //   url: '../../pages/ui/tabbar/tabbar',
    // })
    wx.showToast({
      title: '具体的方法请查看mine.js里面的设置',
    })
  },
  /**
   * 动态设置窗口背景色
   */
  setbackgroundColor_method: function() {

  //   wx.setBackgroundColor({
  //     backgroundColor: '#000000', // 窗口的背景色为白色
  //   })

  //   wx.setBackgroundColor({
  //     backgroundColorTop: '#000000', // 顶部窗口的背景色为白色
  //     backgroundColorBottom: '#000000', // 底部窗口的背景色为白色
  //   })
  // },
  /**
   * 动态设置下拉背景字体，loading图的样式
   */
  setBackgroundTextStyle_method: function() {
    wx.setBackgroundTextStyle({
      textStyle: 'dark', // 下拉背景字体、loading 图的样式，仅支持 'dark', 'light'
    })
  },
  /**
   * 导航
   */
  navigation_method:function(){
    wx.navigateTo({
      url: '../../pages/ui/navigation/navigation',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 动画
   */
  animation_method:function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2, 2).rotate(45).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(30).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  },
  /**
   * 将页面滚动到目标位置。
   */
  pageScrollTo_method:function(){
    wx.pageScrollTo({
      scrollTop: 0,//滚动到页面的目标位置（单位px）
      duration: 300,//滚动动画的时长，默认300ms，单位 ms
    })
  },
  /**
   * 绘图
   */
  canvas_method:function(){
    wx.navigateTo({
      url: '../../pages/ui/canvas/canvas',
    })
  }
})