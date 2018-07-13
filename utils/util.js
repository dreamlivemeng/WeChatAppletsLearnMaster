/**
 * 日期格式化，
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
/**
 * 时间格式化，将不满0的数据进行格式化
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 复制内容到剪切板
 */
const copyToClipboardData = data => {
  wx.setClipboardData({
    data: data,
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}
/**
 * 从剪切板复制内容
 */
const getClipboardData = () => {
  wx.getClipboardData({
    success: function(res) {
      wx.showToast({
        title: res.data
      });
    },
    fail: function(res) {},
    complete: function(res) {},
  })
}
/**
 * 下载图片并保存
 */
const downloadImageAndSave = imageUrl => {
  // 下载文件  
  wx.downloadFile({
    url: imageUrl,
    success: function(res) {
      console.log("下载文件：success");
      console.log(res);

      // 保存图片到系统相册  
      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success(res) {
          console.log("保存图片：success");
          wx.showToast({
            title: '保存成功',
          });
        },
        fail(res) {
          console.log("保存图片：fail");
          console.log(res);
          wx.getSetting({
            success(data) {
              if (!data.authSetting["scope.writePhotosAlbum"]) {
                console.log("授权");
                wx.openSetting({
                  success(data1) {
                    wx.saveImageToPhotosAlbum({
                      filePath: img,
                      success(res) {
                        console.log(res);
                        console.log("保存成功");
                      },
                      fail(res) {
                        console.log(res);
                        console.log("失败");
                      }
                    })
                  }
                })
              } else {
                console.log("不用授权,用户取消保存");
              }
            }
          });
        }
      })
    },
    fail: function(res) {
      console.log("下载文件：fail");
      console.log(res);
    }
  })
}


module.exports = {
  formatTime: formatTime,
  copyToClipboardData: copyToClipboardData,
  getClipboardData: getClipboardData,
  downloadImageAndSave:downloadImageAndSave,
}