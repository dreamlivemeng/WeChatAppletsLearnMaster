// pages/home/home.js
import { getAndroidListInfo, getWelfareListInfo } from '../../utils/service';
 var utils =  require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 1,
    pageSize: 30,
    hasMoreData: true,
    contentList: [],
    title:'程序猿的岁月',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getAndroidListInfoRequest();
    wx.setNavigationBarTitle({
      title:this.data.title//页面标题为路由参数
    })
    var a = this;
    a.setData({
      pageIndex: (options.catid==undefined)?0:options.catid,
    });
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
    this.data.pageIndex = 1;
    this.data.pageSize = 20;
    this.getAndroidListInfoRequest();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.pageIndex = this.data.pageIndex + 1;
    this.getAndroidListInfoRequest();

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 获取列表
   */
  getAndroidListInfoRequest: function () {

    var that = this
    var data = {
      pageIndex: that.data.pageIndex,
      pageSize: that.data.pageSize
    }
    if (data.pageIndex == 1) {
      wx.showLoading({
        title: '加载中...',
      })
    }

    getAndroidListInfo(data.pageIndex, data.pageSize).then(data => {
      wx.hideLoading()
      that.setData({
        contentList: (that.data.contentList).concat(data.results),
        pageIndex:data,
      });
    }).catch(e => {
      console.log("请求失败" + e.message);
      wx.showToast({ title: '请求失败' });
    });
  },
  /**
   * 跳转到详情页面
   */
  toDetailsPage: function (event) {
    //e.target是返回触发事件的对象 e.currentTarget返回的是绑定事件的对象。（大坑，最开始用的是target，导致数据获取不到）
    var data = event.currentTarget.dataset.itemcontent;
    console.log("===" + data.url);
    console.log(data);
    wx.navigateTo({
      url: '../../pages/webdetails/webdetails?desc='+data.desc+"&url="+data.url,
    })
  },
  /**
   * 将url连接复制
   */
  copyToClipboardData:function(event){
    var data = event.currentTarget.dataset.itemcontent;
    utils.copyToClipboardData(data.url);
  },

})