// pages/items/items.js
Page({
    getProductName: function(e) {
        var value = e.detail.value; //获取输入的内容
        this.setData({
          productname:value,
        })
        wx.setStorageSync('productname', value);
    },
    /**
     * 页面的初始数据
     */
    data: {
  list:[],
  productname:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        var that=this;
        wx.request({
          url: 'http://localhost:8081/demo/product/listproduct',
          method:'GET',
          data:{},
          success:function(res){
            var list=res.data.productList;
            if(list==null){
              var toastText='获取数据失败'+res.data.error;
              wx.showToast({
                title: toastText,
                icon:'',
                duration:2000
              });
            }else{
              that.setData({
                list:list
              });
            }
          }
        })
},
   /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

     /**
   * 根据名称查询
   */
  findbyname: function (e){
    var that=this;
    wx.request({
      url: 'http://localhost:8081/demo/product/findByName',
      method:'GET',
      data:{ 
          name:this.data.productname
        },
      success:function(res){
        var list=res.data.productList;
        if(list==null){
          var toastText='查询商品失败'+res.data.error;
          wx.showToast({
            title: toastText,
            icon:'',
            duration:2000
          });
        }else if(list.length==0){
            var toastText='无此商品';
          wx.showToast({
            title: toastText,
            icon:'',
            duration:2000
          });
        }else{
          var toastText='查询商品成功';
          wx.showToast({
            title: toastText,
            icon:'',
            duration:2000
          });
          that.setData({
            list:list
          });
        }
      }
    })
   }
})