/**
 * Created by Administrator on 2016/12/25.
 */
;$(function(){
    'use strict';

    var sidebar = $('#sidebar');//ѡ�����
    var backButton = $('.back-to-top');//ѡ�񷵻ض���
    var  mask = $('.mask');//ѡ��mask
    var sidebar_trigger = $('#sidebar_trigger');//ѡ�����������

    function showSideBar() {//��ʾ����
        mask.fadeIn();//��ʾ mask
        //sidebar.css('right',0);
        sidebar.css('transform','translate(0,0)');//����������ص�css
    }
    function hideSideBar(){//���ز���
        mask.fadeOut();//���� mask
        //sidebar.css('right',-sidebar.width());
        sidebar.css('transform','translate('+ sidebar.width() + 'px'+',0)');//����������ص�css
    }
    sidebar_trigger.on('click',showSideBar);//���������������ĵ���¼�
    mask.on('click',hideSideBar);//����mask����¼�
    backButton.on('click',function(){//�������ض�����ť����¼�
        $('html,body').animate({
            scrollTop:0
        },500)
    });
    $(window).on('scroll', function () {//����Windows��scroll�¼�
        //console.log('back');
       //����Ѿ������Ĳ��ָ��ڴ��ڵĸ߶�
       if($(window).scrollTop() > $(window).height()){
            //��ʾ�Żذ�ť
            backButton.fadeIn();
        }
        else{
            //�������طŻذ�ť
            backButton.fadeOut();
        }
    });
    //����scroll�¼�
    $(window).trigger('scroll');

});