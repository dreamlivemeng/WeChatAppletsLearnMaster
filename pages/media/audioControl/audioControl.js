// pages/media/audioControl/audioControl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '音频组件控制',
    })
    this.innerAudioContext =wx.createInnerAudioContext()
    this.innerAudioContext.autoplay= false;
    this.innerAudioContext.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    this.innerAudioContext.onPlay(()=>{
      console.log("开始播放");
    });
    this.innerAudioContext.onError((res)=>{
      console.log(res.errMsg);
      console.log(res.errCode);
    });
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
   * 开始
   */
  audioPlay: function() {
    this.innerAudioContext.play()
  },
  /**
   * 暂停
   */
  audioPause: function() {
    this.innerAudioContext.pause();
  },
  /**
   * 设置当前播放世纪为14秒
   * 跳转到指定位置，单位 s。精确到小数点后 3 位，即支持 ms 级别精确度
   */
  audio14: function() {
    this.innerAudioContext.seek(14);
  },
  /**
   * 回到开头
   */
  audioStart: function() {
    this.innerAudioContext.seek(0);
  }

})