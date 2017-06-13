/**
 * Created by Administrator on 2016/12/25.
 */
;$(function(){
    'use strict';

    var sidebar = $('#sidebar');//选择侧栏
    var backButton = $('.back-to-top');//选择返回顶部
    var  mask = $('.mask');//选择mask
    var sidebar_trigger = $('#sidebar_trigger');//选择侧栏触发器

    function showSideBar() {//显示侧栏
        mask.fadeIn();//显示 mask
        //sidebar.css('right',0);
        sidebar.css('transform','translate(0,0)');//调整侧栏相关的css
    }
    function hideSideBar(){//隐藏侧栏
        mask.fadeOut();//隐藏 mask
        //sidebar.css('right',-sidebar.width());
        sidebar.css('transform','translate('+ sidebar.width() + 'px'+',0)');//调整侧栏相关的css
    }
    sidebar_trigger.on('click',showSideBar);//监听侧栏触发器的点击事件
    mask.on('click',hideSideBar);//监听mask点击事件
    backButton.on('click',function(){//监听返回顶部按钮点击事件
        $('html,body').animate({
            scrollTop:0
        },500)
    });
    $(window).on('scroll', function () {//监听Windows的scroll事件
        //console.log('back');
       //如果已经滚动的部分高于窗口的高度
       if($(window).scrollTop() > $(window).height()){
            //显示放回按钮
            backButton.fadeIn();
        }
        else{
            //否则隐藏放回按钮
            backButton.fadeOut();
        }
    });
    //触发scroll事件
    $(window).trigger('scroll');

});