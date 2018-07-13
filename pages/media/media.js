// pages/media/media.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    desc: '',
    src: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '媒体',
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
   * 选择图片
   */
  chooseImage_method: function() {
    var that = this;
    wx.chooseImage({
      count: 9, //最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        var desc = '';
        if (tempFilePaths.length > 0) {
          for (var i = 0; i < tempFilePaths.length; i++) {
            desc = desc + '\n' + tempFilePaths[i]
          }
        }
        console.log('' + tempFilePaths);
        that.setData({
          desc: desc
        });
      },
      fail: function() {
        console.log('选择图片失败');
      }
    })
  },
  /**
   * 图片预览
   */
  previewImage_method: function() {
    var that = this;
    wx.chooseImage({
      count: 9, //最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], //album 从相册选图，camera 使用相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.previewImage({
          urls: tempFilePaths,
        })
      },
      fail: function() {
        console.log('选择图片失败，无法预览');
      }
    })
  },
  /**
   * 获取图片信息
   * 图片的路径，可以是相对路径，临时文件路径，存储文件路径，网络图片路径
   */
  getImageInfo_method: function() {
    var that = this;
    wx.getImageInfo({
      src: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsfq1ykabxj30k00pracv.jpg',
      success: function(res) {
        var desc = "width：" + res.width + "\nheight：" + res.height + "\npath：" + res.path + "\norientation：" + res.orientation + "\ntype：" + res.type;
        that.setData({
          desc: desc
        })
      }
    })
  },
  /**
   * 保存图片到系统相册
   * 
   */
  saveImageToPhotosAlbum_method: function() {
    wx.downloadFile({
      url: 'https://ww1.sinaimg.cn/large/0065oQSqly1fsfq1ykabxj30k00pracv.jpg', //仅为示例，并非真实的资源
      success: function(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          wx.saveVideoToPhotosAlbum({
            filePath: res.tempFilePath,
            success: function(res) {
              console.log('保存成功' + res.errMsg);
              wx.previewImage({
                urls: [res.filePath],
              })
            }
          })
        }
      }
    })
  },
  /**
   * 开始录音，
   * 当主动调用wx.stopRecord，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径。当用户离开小程序时，此接口无法调用。
   */
  startRecord_method: function() {
    var that = this;
    wx.startRecord({
      success: function(res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          desc: tempFilePath
        });

      },
      fail: function(res) {
        //录音失败
        console.log("录音失败")
      }
    })
    setTimeout(function() {
      //结束录音  
      wx.stopRecord()
    }, 10000)
  },
  /**
   * 背景音乐播放管理
   */
  backgroundAudio_method: function() {
    const backgroundAudioManager = wx.getBackgroundAudioManager()

    backgroundAudioManager.title = '此时此刻'
    backgroundAudioManager.epname = '此时此刻'
    backgroundAudioManager.singer = '许巍'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    backgroundAudioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // 设置了 src 之后会自动播放
  },
  /**
   * 音频组件控制
   */
  audioControl_method: function() {

    wx.navigateTo({
      url: '../../pages/media/audioControl/audioControl',
    })
  },
  /**
   * 拍摄视频或从手机相册中选视频，返回视频的临时文件路径。
   */
  chooseVideo_method: function() {
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      compressed: true,
      success: function(res) {
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  },
  /**
   * 视频组件控制
   */
  videocomponentcontrol_method: function() {
    wx.navigateTo({
      url: '../../pages/media/videocomponentcontrol/videocomponentcontrol',
    })
  },
  /**
   * 相机组件控制
   */
  cameraControl_method: function() {
    wx.navigateTo({
      url: '../../pages/media/cameracontrol/cameracontrol',
    })
  },
  /**
   * 实时音视频
   * 没数据源暂时无法测试
   */
  realTimeAudioAndVideo_method: function() {
    // wx.navigateTo({
    //   url: '../../pages/media/liveplayer/liveplayer',
    // })
  },
  /**
   * 动态加载字体
   */
  loadFontFace_method: function() {
    // wx.loadFontFace({
    //   family: 'Bitstream Vera Serif Bold',
    //   source: 'url("http://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf")',
    //   success: function(res) {
    //     console.log(res.status) //  loaded
    //   },
    //   fail: function(res) {
    //     console.log(res.status) //  error
    //   },
    //   complete: function(res) {
    //     console.log(res.status);
    //   }
    // });
  }
})