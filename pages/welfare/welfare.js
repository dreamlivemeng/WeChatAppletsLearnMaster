// pages/welfare/welfare.js
import {
  getAndroidListInfo,
  getWelfareListInfo
} from '../../utils/service';
var utils = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageIndex: 1,
    pageSize: 10,
    hasMoreData: true,
    contentList: [{}],
    title: '程序猿的岁月',
    isRefreshOrUpload: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getWelfareListInfo();
    wx.setNavigationBarTitle({
      title: this.data.title //页面标题为路由参数
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
    console.log("下拉刷新");
    this.data.pageIndex = 1;
    this.data.pageSize = 10;
    this.getWelfareListInfo();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (this.data.isRefreshOrUpload) {
      console.log("是否刷新1" + this.data.isRefreshOrUpload);
      this.data.pageIndex = this.data.pageIndex + 1;
      this.getWelfareListInfo();
    } else {
      console.log("是否刷新2" + this.data.isRefreshOrUpload);
    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 获取列表
   */
  getWelfareListInfo: function() {

    var that = this
    var data = {
      pageIndex: that.data.pageIndex,
      pageSize: that.data.pageSize,
      isRefreshOrUpload: false,
    }
    if (data.pageIndex == 1) {
      wx.showLoading({
        title: '加载中...',
      })
    }

    getWelfareListInfo(data.pageIndex, data.pageSize).then(data => {
      wx.hideLoading()
      that.setData({
        contentList: (that.data.contentList).concat(data.results),
        isRefreshOrUpload: true,
      });
    }).catch(e => {
      console.log("请求失败" + e.message);
      wx.showToast({
        title: '请求失败'
      });
      that.setData({
        isRefreshOrUpload: true,
      });
    });
  },
  /**
   * 保存图片
   */
  downloadImage: function(event) {
    var data = event.currentTarget.dataset.itemcontent;
    var imageUrl = (data.url).replace("http:", "https:");
    console.log("imageUrl:" + imageUrl);
    utils.downloadImageAndSave(imageUrl);
  },
})