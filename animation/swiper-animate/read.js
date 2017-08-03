/*
 * @Author: KunnyChen
 * @Date:   2017-08-03 15:29:10
 * @Last Modified by:   KunnyChen
 * @Last Modified time: 2017-08-03 16:43:48
 */

'use strict';
// 1.大部分IOS系统和少部分Android微信不支持自动播放
// 解决方案： 监听WeixinJSBridgeReady事件、 DOMContentLoaded事件微信的JS API建立在微信壳浏览器的内置JS对象WeixinJSBridge上，
// WeixinJSBridge并不是WebView一打开就有了， 客户端需要初始化这个对象，当这个对象准备好的时候， 客户端会抛出事件 "WeixinJSBridgeReady"。
// 发现部分机型， 监听DOMContentLoaded和load事件， 在回调中也可以播放音乐；所以， 为了保险起见， 可以同时监听两个事件， 以增强其适用性。
// 代码如下：

    <audio style="display:none; height: 0" id="bg-music" preload="auto" src="../static/videos/bg-music.mp3" loop="loop"></audio>
    document.addEventListener('DOMContentLoaded', function() {
        function audioAutoPlay() {
            var audio = document.getElementById('bg-music');
            audio.play();
            document.addEventListener("WeixinJSBridgeReady", function() {
                audio.play();
            }, false);
        }
        audioAutoPlay();
    });

// 2.部分Android浏览器和所有IOS下Safari浏览器不支持自动播放
//解决方案：通过手势事件播放音乐
//　(1) 监听body的touchstart事件，回调中播放音乐；缺点：部分元素的touch事件可能会阻止冒泡，需要在对应的地方调起播放音乐函数
//　(2) 可以增加透明层，点击到透明层，播放音乐，关闭透明层；　缺点：第一次点击按钮元素可能不响应，造成用户体验上的伤害。
// 3.部分App不支持webview音乐自动播放
//// 音乐播放
function autoPlayMusic() {
    // 自动播放音乐效果，解决浏览器或者APP自动播放问题
    function musicInBrowserHandler() {
        musicPlay(true);
        document.body.removeEventListener('touchstart', musicInBrowserHandler);
    }
    document.body.addEventListener('touchstart', musicInBrowserHandler);

    // 自动播放音乐效果，解决微信自动播放问题
    function musicInWeixinHandler() {
        musicPlay(true);
        document.addEventListener("WeixinJSBridgeReady", function () {
            musicPlay(true);
        }, false);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}
function musicPlay(isPlay) {
    var media = document.querySelector('#bg-music');
    if (isPlay && media.paused) {
        media.play();
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
}