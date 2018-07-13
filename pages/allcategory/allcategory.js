// pages/allcategory/allcategory.js

import {
  getAllListInfoForType
} from '../../utils/service.js'
var utils = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listtype: ["福利 ", " App ", " Android ", " iOS ", "休息视频 ", " 拓展资源", " 前端", " all"],
    title: "程序猿的岁月",
    pageIndex: 1,
    pageSize: 30,
    contentList: [],
    isRefreshOrUpload: true,
    category: "all",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    wx.setNavigationBarTitle({
      title: this.data.title
    })
    this.getAllCategoryListInfo();
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
    this.setData({
      pageIndex: 1,
      isRefreshOrUpload: false,
    });
    this.getAllCategoryListInfo();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.setData({
      pageIndex: this.data.pageIndex + 1,
      isRefreshOrUpload: false,
    });
    this.getAllCategoryListInfo();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 根据类型获取资讯
   */
  getAllCategoryListInfo: function() {

    var that = this

    var data = {
      pageIndex: that.data.pageIndex,
      pageSize: that.data.pageSize,
    }
    if (data.pageIndex == 1) {
      //只有在第一页的情况下才显示加载页面
      wx.showLoading({
        title: '加载中...',
      })
    }
    getAllListInfoForType(that.data.category, data.pageIndex, data.pageSize).then(data => {
      //成功
      wx.hideLoading();
      that.setData({
        contentList: (that.data.contentList).concat(data.results),
        isRefreshOrUpload: true,
      });
      console.log("==========contentList" + that.data.contentList[0]);
    }).catch(e => {
      console.log(e);
      //出现异常
      wx.hideLoading();
      wx.showToast({
        title: '加载失败1',
      })
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

  /**
   * 跳转到详情页面
   */
  toDetailsPage: function(event) {
    //e.target是返回触发事件的对象 e.currentTarget返回的是绑定事件的对象。（大坑，最开始用的是target，导致数据获取不到）
    var data = event.currentTarget.dataset.itemcontent;
    console.log("===" + data.url);
    console.log(data);
    wx.navigateTo({
      url: '../../pages/webdetails/webdetails?desc=' + data.desc + "&url=" + data.url,
    })
  },
  /**
   * 将url连接复制
   */
  copyToClipboardData: function(event) {
    var data = event.currentTarget.dataset.itemcontent;
    utils.copyToClipboardData(data.url);
  },

})