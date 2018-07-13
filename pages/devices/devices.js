// pages/devices/devices.js
//https://developers.weixin.qq.com/miniprogram/dev/api/systeminfo.html
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
      title: '设备',
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
   * 系统消息
   */
  systeminfo: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        var desc = "手机品牌：" + res.brand + "\n" +
          "手机型号:" + res.model + "\n" +
          "设备像素比:" + res.pixelRatio + "\n" +
          "屏幕宽度:" + res.screenWidth + "\n" +
          "屏幕高度:" + res.screenHeight + "\n" +
          "可使用窗口宽度:" + res.windowWidth + "\n" +
          "可使用窗口高度:" + res.windowHeight + "\n" +
          "状态栏的高度:" + res.statusBarHeight + "\n" +
          "微信设置的语言:" + res.language + "\n" +
          "微信版本号:" + res.version + "\n" +
          "操作系统版本:" + res.system + "\n" +
          "	客户端平台:" + res.platform + "\n" +
          "用户字体大小设置:" + res.fontSizeSetting + "\n" +
          "客户端基础库版本:" + res.SDKVersion;

        that.setData({
          desc: desc
        });
      },
    })
  },
  //网络状态
  network_state: function() {
    var that = this;
    wx.getNetworkType({
      success: function(res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType + "\n";
        that.setData({
          desc: networkType
        });
      }
    })
    wx.onNetworkStatusChange(function(res) {
      var desc = res.isConnected + "\n" + res.networkType;
      that.setData({
        desc: desc,
      })
    })
  },
  /**
   * 加速度
   */
  onAccelerometer: function() {
    var that = this;
    console.log("onAccelerometer")
    wx.onAccelerometerChange(function(res) {
      console.log(res.x);
      var desc = "x:" + res.x + "\ny:" + res.y + "\nz:" + res.z;
      that.setData({
        desc: desc,
      })
      setTimeout(function() {
        wx.stopAccelerometer({

        })
      }, 5000)
    })
  },
  /**
   * 罗盘
   */
  onCompass: function() {
    var that = this;
    console.log("onCompass")
    wx.onCompassChange(function(res) {
      console.log(res.x);
      var desc = "direction:" + res.direction;
      that.setData({
        desc: desc,
      })
      setTimeout(function() {
        wx.stopCompass({})
      }, 60000)
    })
  },
  /**
   * 拨打电话
   */
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: '13585554173' //仅为示例，并非真实的电话号码
    })
  },
  /**
   * 扫码
   */
  scancode: function() {
    //扫码
    // 只允许从相机扫码onlyFromCamera:true
    var that = this;
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        console.log(res.path + "=" + res.result + "=" + res.scanType + "=" + res.charSet);
        var desc = "result:" + res.result + "\nscanType:" + res.scanType + "\ncharSet:" + res.charSet;
        that.setData({
          desc: desc
        });
      }
    })
  },
  /**
   * 剪贴板
   */
  clipboardData: function() {
    var that = this;
    wx.setClipboardData({
      data: '点击剪贴板，先把这段话赋值给剪贴板，然后再获取出来并显示',
      success: function(res) {
        wx.getClipboardData({
          success: function(res) {
            console.log(res.data) // data
            that.setData({
              desc: res.data
            });
          }
        })
      }
    })
  },
  /**
   * 屏幕亮度设置或者获取
   * 接口若安卓系统设置中开启了自动调节亮度功能，则屏幕亮度会根据光线自动调整，该接口仅能获取自动调节亮度之前的值，而非实时的亮度值。
   */
  screenBrightness: function() {
    var that = this;
    wx.setScreenBrightness({
      value: 0.8,
      success: function() {
        wx.getScreenBrightness({
          success: function(res) {
            that.setData({
              desc: res.value + "设置保持常亮",
            })
            wx.setKeepScreenOn({
              keepScreenOn: true,
            });
          }
        })
      }
    });

  },
  /**
   * 设置屏幕监听事件
   */
  onUserCaptureScreen: function() {
    var that = this;
    wx.onUserCaptureScreen(function(res) {
      that.setData({
        desc: "用户截屏了1"
      })
    })
  },
  /**
   * 振动
   */
  vibrate: function() {
    //400ms
    wx.vibrateLong({

    })
    //15ms
    wx.vibrateShort({

    })
  },
  /**
   * 添加联系人，除了firstName必传，还有其他很多可选参数
   * 
   */
  addphone: function() {
    wx.addPhoneContact({
      firstName: 'AA张三', //必传参数
      mobilePhoneNumber: "17521002244",
      success: function() {
        //成功回调
      }
    })
  },
  /**
   * nfc
   * 
   */
  nfctest: function() {
    var that = this;
    wx.getHCEState({
      success: function(res) {
        var desc = res.errCode + "\n" + res.errMsg
        that.setData({
          desc: desc
        });
      },
      fail: function() {
        that.setData({
          desc: "失败"
        });
      }
    })
  },
  /**
   * wifi，具体功能看官方文档比较复杂
   */
  wifi: function() {
    var that = this;
    wx.startWifi({
      success: function(res) {
        var desc = res.errCode + "\n" + res.errMsg
        that.setData({
          desc: desc
        });
      },
      fail: function() {
        that.setData({
          desc: "失败"
        });
      }
    })
  }

})