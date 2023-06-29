Page({
  data: {
    videoUrl: ""
  },

  onLoad: function (options) {
    const videoUrl = decodeURIComponent(options.url);
    this.setData({
      videoUrl: videoUrl
    });
  }
});
