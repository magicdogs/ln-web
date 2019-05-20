
<template>
  <div>
    <div class="header">
      <h1>Chania</h1>
    </div>
    <div class="main clearfix">
      <div class="column menu">
        <div class="menu-item">
          <div class="menu-title">你和我的倾城时光</div>
          <div class="menu-body">
            <ul>
              <li data="http://104.199.159.113/demos/nhwdqcsg-9/index.m3u8" text="你和我的倾城时光-第九集">第九集</li>
              <li data="http://104.199.159.113/demos/nhwdqcsg-10/index.m3u8" text="你和我的倾城时光-第十集">第十集</li>
              <li
                data="http://104.199.159.113/demos/nhwdqcsg-11/index.m3u8"
                text="你和我的倾城时光-第十一集"
              >第十一集</li>
              <li
                data="http://104.199.159.113/demos/nhwdqcsg-12/index.m3u8"
                text="你和我的倾城时光-第十二集"
              >第十二集</li>
              <li
                data="http://104.199.159.113/demos/nhwdqcsg-13/index.m3u8"
                text="你和我的倾城时光-第十三集"
              >第十三集</li>
              <li
                data="http://104.199.159.113/demos/nhwdqcsg-14/index.m3u8"
                text="你和我的倾城时光-第十四集"
              >第十四集</li>
              <li
                data="http://104.199.159.113/demos/nhwdqcsg-15/index.m3u8"
                text="你和我的倾城时光-第十五集"
              >第十五集</li>
              <li
                data="http://104.199.159.113/demos/nhwdqcsg-16/index.m3u8"
                text="你和我的倾城时光-第十六集"
              >第十六集</li>
            </ul>
          </div>
        </div>
        <div class="menu-item">
          <div class="menu-title">推荐电影</div>
          <div class="menu-body">
            <ul>
              <li data="http://104.199.159.113/demos/wbsys/index.m3u8" text="我不是药神">我不是药神</li>
              <li data="http://104.199.159.113/demos/xhssf/index.m3u8" text="西虹市首富">西虹市首富</li>
              <li data="http://104.199.159.113/demos/zjzzz/index.m3u8" text="西虹市首富">西虹市首富</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column content">
        <h1 id="videoTitle"></h1>
        <!-- <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old
				town and the modern city.</p>
        <p>You will learn more about web layout and responsive web pages in a later chapter.</p>-->
        <div id="videoTemplate" style="width:60%;height:60%">
          <!-- <video id='example-video' width='80%' height='600px' class="video-js vjs-default-skin" controls> -->
          <video
            id="videoRes"
            class="video-js vjs-default-skin"
            style="object-fit: fill; width: 100%; height: 100%"
            controls
          ></video>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Footer Text</p>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import videojs from 'video.js';
import 'videojs-flash';
import 'videojs-contrib-hls';
import { debug } from 'util';

export default {
  name: "video",
  data() {
    return {
		videojs: videojs
    };
  },
  created() {
	window.HELP_IMPROVE_VIDEOJS = false;
	const that = this
    $(document).ready(function() {
      $(".menu-item .menu-title").on("click", function(evt) {
        var findEles = $(this).siblings(".menu-body");
        if (findEles.hasClass("menu-body-show")) {
          findEles.removeClass("menu-body-show");
          findEles.hide(500);
        } else {
          var otherSelector = $(this)
            .parent()
            .siblings()
            .children(".menu-body");
          if (otherSelector.hasClass("menu-body-show")) {
            otherSelector.removeClass("menu-body-show");
            otherSelector.hide(500);
          }
          findEles.addClass("menu-body-show");
          findEles.show(500);
        }
      });
      $(".menu-body li").on("click", function(evt) {
        var liEle = $(this);
        var srcData = liEle.attr("data");
        var title = liEle.attr("text");
        var player = that.videojs("videoRes");
        var videoTitle = $("#videoTitle");
        videoTitle.html(title);
        player.src({
          src: srcData,
          type: "application/x-mpegURL",
          withCredentials: false
        });
        player.play();
      });
    });
  }
};
</script>


<style>
* {
  box-sizing: border-box;
}
.header,
.footer {
  background-color: grey;
  color: white;
  padding: 15px;
  border-radius: 3px;
}
.column {
  float: left;
  padding: 15px;
}
.main {
  height: 900px;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
.menu {
  width: 25%;
  height: 100%;
}
.content {
  width: 75%;
  height: 100%;
}
.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.menu li {
  padding: 4px;
  width: 60%;
  /* margin-left: 15px; */
  margin: 5px auto;
  margin-bottom: 3px;
  background-color: #33b5e5;
  color: #ffffff;
  border-radius: 3px;
  text-align: center;
  font-size: 15px;
}
.menu li:hover {
  background-color: #0099cc;
}
.menu-item {
  /* background-color: #dadada; */
  padding: 3px 10px;
}
.menu-title {
  background-color: #9fa9c3;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: white;
  padding: 10px 8px;
  border-radius: 5px;
}
.menu-body {
  display: none;
  margin-top: 8px;
}
.menu-body-show {
  color: white;
}
</style>
	