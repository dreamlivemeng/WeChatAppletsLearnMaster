// pages/ui/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    hidden: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.ctx = wx.createCanvasContext('myCanvas', this);
    wx.setNavigationBarTitle({
      title: '绘图',
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
   * 坐标系
   */
  coordinates_method: function() {

  },
  start: function(e) {
    this.setData({
      hidden: false,
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  move: function(e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  end: function(e) {
    this.setData({
      hidden: true
    })
  },
  /**
   * 创建一个线性的渐变
   */
  createLinearGradient_method: function() {

    const ctx = wx.createCanvasContext('myCanvas', this);
    //创建一个linear gradient 
    const grd = ctx.createLinearGradient(0, 0, 0, 200);
    grd.addColorStop(0, 'red');
    grd.addColorStop(1, 'white');
    //填充
    ctx.setFillStyle(grd);
    ctx.fillRect(10, 10, 150, 80);
    ctx.draw();
  },
  /**
   * 设置填充颜色
   */
  setFillStyle_method: function() {
    this.ctx.setFillStyle('red');
    this.ctx.fillRect(10, 10, 150, 75);
    this.ctx.draw();
  },
  /**
   * 设置边框颜色。画一个矩形(非填充)。

Tip: 如果没有设置 fillStyle，默认颜色为 black。
   */
  setStrokeStyle_method: function() {
    this.ctx.setStrokeStyle('red');
    this.ctx.strokeRect(10, 10, 150, 75);
    this.ctx.draw();
  },
  /**
   * 设置阴影样式。
   * Tip: 如果没有设置，offsetX 默认值为0， offsetY 默认值为0， blur 默认值为0，color 默认值为 black。
   * (setShadow需要放在fillRect之前)
   */
  setShadow_method: function() {
    this.ctx.setFillStyle('red');
    this.ctx.setShadow(10, 50, 50, 'blue'); //阴影相对于形状在水平方向的偏移,阴影相对于形状在竖直方向的偏移/阴影的模糊级别，数值越大越模糊(0-100)/	阴影的颜色
    this.ctx.fillRect(10, 10, 150, 75);
    this.ctx.draw();

    this.ctx.setFillStyle('red');
    this.ctx.setShadow(10, 50, 50, 'blue'); //阴影相对于形状在水平方向的偏移,阴影相对于形状在竖直方向的偏移/阴影的模糊级别，数值越大越模糊(0-100)/	阴影的颜色
    this.ctx.fillRect(10, 10, 150, 75);
    this.ctx.draw();
  },
  /**
   * 创建一个圆形的渐变颜色。
   */
  createCanvasContext_method: function() {
    // Create circular gradient
    const grd = this.ctx.createCircularGradient(75, 50, 40); //圆心的x坐标、圆心的y坐标、圆的半径
    grd.addColorStop(0, 'red')
    grd.addColorStop(1, 'white')

    // Fill with gradient
    this.ctx.setFillStyle(grd)
    this.ctx.fillRect(10, 10, 150, 80)
    this.ctx.draw()
  },
  /**
   * 创建一个颜色的渐变点。
   */
  addColorStop_method: function() {
    // Create circular gradient
    const grd = this.ctx.createLinearGradient(30, 10, 120, 10)
    grd.addColorStop(0, 'red'); //表示渐变点在起点和终点中的位置(0-1)/	渐变点的颜色
    grd.addColorStop(0.16, 'orange')
    grd.addColorStop(0.33, 'yellow')
    grd.addColorStop(0.5, 'green')
    grd.addColorStop(0.66, 'cyan')
    grd.addColorStop(0.83, 'blue')
    grd.addColorStop(1, 'purple')

    // Fill with gradient
    this.ctx.setFillStyle(grd)
    this.ctx.fillRect(10, 10, 150, 80)
    this.ctx.draw()
  },
  /**
   * 设置线条的宽度。	线条的宽度(单位是px)
   */
  setLineWidth_method: function() {
    this.ctx.beginPath();
    this.ctx.moveTo(10, 10)
    this.ctx.lineTo(150, 10)
    this.ctx.stroke()

    this.ctx.beginPath();
    this.ctx.setLineWidth(5)
    this.ctx.moveTo(10, 30)
    this.ctx.lineTo(150, 30)
    this.ctx.stroke()

    this.ctx.beginPath();
    this.ctx.setLineWidth(10)
    this.ctx.moveTo(10, 50)
    this.ctx.lineTo(150, 50)
    this.ctx.stroke()

    this.ctx.beginPath();
    this.ctx.setLineWidth(15)
    this.ctx.moveTo(10, 70)
    this.ctx.lineTo(150, 70)
    this.ctx.stroke()

    this.ctx.draw()
  },
  /**
   * butt是默认值，
   * round线头是圆的，
   * square线头两端各增加线宽的一半。
   * 设置线条的端点样式。lineCap	String	'butt'、'round'、'square'	线条的结束端点样式
   */
  setLineCap_method: function() {
    this.ctx.beginPath();
    this.ctx.moveTo(10, 10)
    this.ctx.lineTo(150, 10)
    this.ctx.stroke()

    this.ctx.beginPath();
    this.ctx.setLineCap('butt');
    this.ctx.setLineWidth(10)
    this.ctx.moveTo(10, 30);
    this.ctx.lineTo(150, 30)
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.setLineCap('round');
    this.ctx.setLineWidth(10)
    this.ctx.moveTo(10, 50)
    this.ctx.lineTo(150, 50)
    this.ctx.stroke()

    this.ctx.beginPath();
    this.ctx.setLineCap('square');
    this.ctx.setLineWidth(10)
    this.ctx.moveTo(10, 70)
    this.ctx.lineTo(150, 70)
    this.ctx.stroke()

    this.ctx.draw()
  },
  /**
   * 设置线条的交点样式。
   */
  setLineJoin_method: function() {
    var ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(100, 50)
    ctx.lineTo(10, 90)
    ctx.stroke()

    ctx.beginPath();
    ctx.setLineJoin('bevel')
    ctx.setLineWidth(10)
    ctx.moveTo(50, 10)
    ctx.lineTo(140, 50)
    ctx.lineTo(50, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineJoin('round')
    ctx.setLineWidth(10)
    ctx.moveTo(90, 10)
    ctx.lineTo(180, 50)
    ctx.lineTo(90, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineJoin('miter')
    ctx.setLineWidth(10)
    ctx.moveTo(130, 10)
    ctx.lineTo(220, 50)
    ctx.lineTo(130, 90)
    ctx.stroke()

    ctx.draw()
  },
  /**
   * 设置线条的宽度。
   */
  setLineDash_method: function() {
    var ctx = this.ctx;
    ctx.setLineDash([10, 10], 0); //一组描述交替绘制线段和间距（坐标空间单位）长度的数字/	虚线偏移量
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(400, 100);
    ctx.stroke();

    ctx.draw()
  },
  /**
   * 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当 setLineJoin() 为 miter 时才有效。超过最大倾斜长度的，连接处将以 lineJoin 为 bevel 来显示
   */
  setMiterLimit_method: function() {
    var ctx = this.ctx;
    ctx.beginPath()
    ctx.setLineWidth(10)
    ctx.setLineJoin('miter')
    ctx.setMiterLimit(1)
    ctx.moveTo(10, 10)
    ctx.lineTo(100, 50)
    ctx.lineTo(10, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineWidth(10)
    ctx.setLineJoin('miter')
    ctx.setMiterLimit(2)
    ctx.moveTo(50, 10)
    ctx.lineTo(140, 50)
    ctx.lineTo(50, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineWidth(10)
    ctx.setLineJoin('miter')
    ctx.setMiterLimit(3)
    ctx.moveTo(90, 10)
    ctx.lineTo(180, 50)
    ctx.lineTo(90, 90)
    ctx.stroke()

    ctx.beginPath()
    ctx.setLineWidth(10)
    ctx.setLineJoin('miter')
    ctx.setMiterLimit(4)
    ctx.moveTo(130, 10)
    ctx.lineTo(220, 50)
    ctx.lineTo(130, 90)
    ctx.stroke()

    ctx.draw()
  },
  /**
   * 画一条弧线
   */
  arc_method: function() {
    var ctx = this.ctx;
    // Draw coordinates画实心圆，
    ctx.arc(100, 75, 50, 0, 2 * Math.PI) //圆的x，y，r，起始弧度、终止弧度、
    ctx.setFillStyle('#EEEEEE')
    ctx.fill()

    //画坐标线
    ctx.beginPath()
    ctx.moveTo(40, 75)
    ctx.lineTo(160, 75)
    ctx.moveTo(100, 15)
    ctx.lineTo(100, 135)
    ctx.setStrokeStyle('#00ff00')
    ctx.stroke()

    //写文字
    ctx.setFontSize(12)
    ctx.setFillStyle('black')
    ctx.fillText('0', 165, 78)
    ctx.fillText('0.5*PI', 83, 145)
    ctx.fillText('1*PI', 15, 78)
    ctx.fillText('1.5*PI', 83, 10)

    // Draw points，画点
    ctx.beginPath()
    ctx.arc(100, 75, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()
    //画点
    ctx.beginPath()
    ctx.arc(100, 25, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()
    //画点
    ctx.beginPath()
    ctx.arc(150, 75, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('red')
    ctx.fill()

    // Draw arc
    ctx.beginPath()
    ctx.arc(100, 75, 50, 0, 0.5 * Math.PI, true)
    ctx.setStrokeStyle('#333333')
    ctx.stroke()

    ctx.draw()
  },
  /**
   * 创建三次方贝塞尔曲线路径。


   */
  bezierCurveTo_method: function() {
    var ctx = this.ctx;
    // Draw points
    ctx.beginPath()
    ctx.arc(20, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('red')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(200, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('lightgreen')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(20, 100, 2, 0, 2 * Math.PI)
    ctx.arc(200, 100, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()

    ctx.setFillStyle('black')
    ctx.setFontSize(12)

    // Draw guides
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.lineTo(20, 100)
    ctx.lineTo(150, 75)

    ctx.moveTo(200, 20)
    ctx.lineTo(200, 100)
    ctx.lineTo(70, 75)
    ctx.setStrokeStyle('#AAAAAA')
    ctx.stroke()

    // Draw quadratic curve
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
    ctx.setStrokeStyle('black')
    ctx.stroke()

    ctx.draw()
  },
  /**
   * 创建二次贝塞尔曲线路径。
   */
  quadraticCurveTo_method: function() {
    var ctx = this.ctx;
    // Draw points
    ctx.beginPath()
    ctx.arc(20, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('red')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(200, 20, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('lightgreen')
    ctx.fill()

    ctx.beginPath()
    ctx.arc(20, 100, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('blue')
    ctx.fill()

    ctx.setFillStyle('black')
    ctx.setFontSize(12)

    // Draw guides
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.lineTo(20, 100)
    ctx.lineTo(200, 20)
    ctx.setStrokeStyle('#AAAAAA')
    ctx.stroke()

    // Draw quadratic curve
    ctx.beginPath()
    ctx.moveTo(20, 20)
    ctx.quadraticCurveTo(20, 100, 200, 20)
    ctx.setStrokeStyle('black')
    ctx.stroke()

    ctx.draw()
  },
  /**
   * 在调用scale方法后，之后创建的路径其横纵坐标会被缩放。多次调用scale，倍数会相乘。
   */
  scale_method: function() {
    var ctx = this.ctx;
    ctx.strokeRect(10, 10, 25, 15)
    ctx.scale(2, 2)
    ctx.strokeRect(10, 10, 25, 15)
    ctx.scale(2, 2)
    ctx.strokeRect(10, 10, 25, 15)

    ctx.draw()
  },
  /**
   * 以原点为中心，原点可以用 translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加
   */
  rotate_method: function() {
    var ctx = this.ctx;
    ctx.strokeRect(100, 10, 150, 100)
    ctx.rotate(20 * Math.PI / 180)
    ctx.strokeRect(100, 10, 150, 100)
    ctx.rotate(20 * Math.PI / 180)
    ctx.strokeRect(100, 10, 150, 100)

    ctx.draw()
  },
  /**
   * 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角。
   */
  translate_method: function() {
    var ctx = this.ctx;
    ctx.strokeRect(10, 10, 150, 100)
    ctx.translate(20, 20)
    ctx.strokeRect(10, 10, 150, 100)
    ctx.translate(20, 20)
    ctx.strokeRect(10, 10, 150, 100)

    ctx.draw()
  },
  /**
   * clip() 方法从原始画布中剪切任意形状和尺寸。一旦剪切了某个区域，则所有之后的绘图都会被限制在被剪切的区域内（不能访问画布上的其他区域）。可以在使用 clip() 方法前通过使用 save() 方法对当前画布区域进行保存，并在以后的任意时间对其进行恢复（通过 restore() 方法）。
   */
  clip_method: function() {
    var ctx = this.ctx;
    wx.downloadFile({
      url: 'http://is5.mzstatic.com/image/thumb/Purple128/v4/75/3b/90/753b907c-b7fb-5877-215a-759bd73691a4/source/50x50bb.jpg',
      success: function(res) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(50, 50, 25, 0, 2 * Math.PI)
        ctx.clip()
        ctx.drawImage(res.tempFilePath, 25, 25)
        ctx.restore()
        ctx.draw()
      }
    })
  },
  /**
   * 用于设置文字的对齐
   * 可选值 'left'、'center'、'right'
   */
  setTextAlign_method: function() {

    var ctx = this.ctx;
    ctx.setStrokeStyle('red')
    ctx.moveTo(150, 20)
    ctx.lineTo(150, 170)
    ctx.stroke()

    ctx.setFontSize(15)
    ctx.setTextAlign('left')
    ctx.fillText('textAlign=left', 150, 60)

    ctx.setTextAlign('center')
    ctx.fillText('textAlign=center', 150, 80)

    ctx.setTextAlign('right')
    ctx.fillText('textAlign=right', 150, 100)

    ctx.draw()
  },
  /**
   * 用于设置文字的水平对齐可选值 'top'、'bottom'、'middle'、'normal'

   */
  setTextBaseline_method: function() {
    var ctx = this.ctx;

    ctx.setStrokeStyle('red')
    ctx.moveTo(5, 75)
    ctx.lineTo(295, 75)
    ctx.stroke()

    ctx.setFontSize(20)

    ctx.setTextBaseline('top')
    ctx.fillText('top', 15, 75)

    ctx.setTextBaseline('middle')
    ctx.fillText('middle', 50, 75)

    ctx.setTextBaseline('bottom')
    ctx.fillText('bottom', 120, 75)

    ctx.setTextBaseline('normal')
    ctx.fillText('normal', 200, 75)

    ctx.draw()
  },
  /**
   * 绘制图像到画布。
   */
  drawImage_method: function() {
    var ctx = this.ctx;
    wx.chooseImage({
      success: function(res) {
        ctx.drawImage(res.tempFilePaths[0], 0, 0, 150, 100)
        ctx.draw()
      }
    })
  },
  /**
   * 设置全局画笔透明度。
   */
  setGlobalAlpha_method: function() {
    var ctx = this.ctx;
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 100)
    ctx.setGlobalAlpha(0.2)
    ctx.setFillStyle('blue')
    ctx.fillRect(50, 50, 150, 100)
    ctx.setFillStyle('yellow')
    ctx.fillRect(100, 100, 150, 100)

    ctx.draw()
  },
  /**
   * 测量文本尺寸信息，目前仅返回文本宽度。同步接口。


   */
  measureText_method: function() {

    var ctx = this.ctx;
    ctx.font = 'italic bold 20px cursive'
    const metrics = ctx.measureText('Hello World')
    console.log(metrics.width)
  }
})