Page({
  data: {
    videos: [
      {
        id: 1,
        title: "Video 1",
        cover: "/assets/as1.jpg", // 示例封面图片
        url: "/assets/cc1.mp4" // 示例视频链接
      },
      {
        id: 2,
        title: "Video 2",
        cover: "/assets/as2.jpg", // 示例封面图片
        url: "/assets/cc1.mp4" // 示例视频链接
      },
      // ... 更多视频数据
    ]
  },

  playVideo: function (event) {
    const videoUrl = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: `/pages/videoPlayer/videoPlayer?url=${encodeURIComponent(videoUrl)}`
    });
  }
});
