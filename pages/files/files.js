// pages/files/files.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    desc: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '文件',
      filePath: '',
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
   * 保存文件。注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用
   */
  savefile: function() {
    var that = this;
    wx.chooseImage({
      success: function(res) {
        var tempFilePaths = res.tempFilePaths
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function(res) {
            var savedFilePath = res.savedFilePath
            that.setData({
              filePath: savedFilePath
            });
          }
        })
      }
    })
  },
  /**
   * 获取文件信息
   */
  getFileInfo: function() {
    var that = this;
    console.log(that.data.filePath);
    wx.getFileInfo({
      filePath: that.data.filePath,
      success: function(res) {
        console.log(res.size)
        console.log(res.digest)
        console.log(res.errMsg);
      }
    })
  },
  /**
   * 获取本地已保存的文件列表
   */
  getsavedFileList: function() {
    var that = this;
    wx.getSavedFileList({
      success: function(res) {
        console.log(res.fileList)
        // that.setData({
        //   desc:res.fileList
        // })
      }
    })
  },
  /**
   * 获取本地文件的文件信息
   * 此接口只能用于获取已保存到本地的文件，若需要获取临时文件信息，请使用 wx.getFileInfo 接口。
   */
  getsavedFileInfo: function() {
    wx.getSavedFileList({
      success: function(res) {
        console.log(res.fileList)
        if (res.fileList.length > 0) {
          wx.getSavedFileInfo({
            filePath: res.fileList[0].filePath,
            success: function(e) {
              console.log(e);
              console.log("size:" + e.size + "\ncreateTime:" + e.createTime)
            }
          })
        }
      }
    })
  },
  /**
   * 移除已保存的文件
   */
  removeSavedFile: function() {
    wx.getSavedFileList({
      success: function(res) {
        console.log(res.fileList)
        if (res.fileList.length > 0) {
          wx.removeSavedFile({
            filePath: res.fileList[0].filePath,
          })
        }
      }
    })
  },
  /**
   * 新开页面打开文档
   * doc, xls, ppt, pdf, docx, xlsx, pptx
   */
  openDocument: function() {
    wx.getSavedFileList({
      success: function(res) {
        console.log(res.fileList)
        if (res.fileList.length > 0) {
          wx.openDocument({
            filePath: res.fileList[0].filePath,
          })
        }
      }
    })
  }
})