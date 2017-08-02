/* @reply js by zwwooooo */
jQuery(document).ready(function ($) { //Begin jQuery
    $('.comment-reply').click(function () {
        var atid = '"#' + $(this).parent().attr("id") + '"';
        var atname = $(this).prevAll().find('cite:first').text();
        $("#comment").attr("value", "<a href=" + atid + ">@" + atname + " </a>").focus();
    });
    $('.cancel-comment-reply a').click(function () { //点击取消回复评论清空评论框的内容
        $("#comment").attr("value", '');
    });
}) //End jQuery

jQuery(document).ready(function ($) {
    //===================================存档页面 jQ伸缩
    (function () {
        $('#al_expand_collapse,#archives span.al_mon').css({
            cursor: "s-resize"
        });
        $('#archives span.al_mon').each(function () {
            var num = $(this).next().children('li').size();
            var text = $(this).text();
            $(this).html(text + '<em> ( ' + num + ' 篇文章 )</em>');
        });
        var $al_post_list = $('#archives ul.al_post_list'),
            $al_post_list_f = $('#archives ul.al_post_list:first');
        $al_post_list.hide(1, function () {
            $al_post_list_f.show();
        });
        $('#archives span.al_mon').click(function () {
            $(this).next().slideToggle(400);
            return false;
        });
        $('#al_expand_collapse').toggle(function () {
            $al_post_list.show();
        }, function () {
            $al_post_list.hide();
        });
    })();
});

var bodyBgs = [];
bodyBgs[0] = "/wp-content/themes/Dadclab_Theme/img/headers/pic1.jpg";
bodyBgs[1] = "/wp-content/themes/Dadclab_Theme/img/headers/pic2.jpg";
bodyBgs[2] = "/wp-content/themes/Dadclab_Theme/img/headers/pic3.jpg";
bodyBgs[3] = "/wp-content/themes/Dadclab_Theme/img/headers/pic4.jpg";
bodyBgs[4] = "/wp-content/themes/Dadclab_Theme/img/headers/pic5.jpg";
var randomBgIndex = Math.round(Math.random() * 4);
document.write('<style>#head{background:url(' + bodyBgs[randomBgIndex] + ') };</style>');
if (randomBgIndex == 0) {
    document.write('<style>.site-header{color:black;}.site-description{color:black;})</style>');
}
QTags.addButton('nextpage', 'nextpage', "\n<!--nextpage-->\n", ''); //添加下一页按钮
QTags.addButton('h4', 'h4', "\n<h4>", "</h4>\n"); //快捷输入h1标签
QTags.addButton('h6', 'h6', "\n<h6>", "</h6>\n");
QTags.addButton('hdojbt', 'hdojbiaoti', '<div id="hdojbt">', '</div>');
QTags.addButton('hdojms', 'hdojmiaoshu', '<div id="hdojms">', '</div>');
QTags.addButton('hdojbt', 'hdojbiaotixia', '<div id="hdojbtx">', '</div>');
QTags.addButton('hdojbt', 'hdojmiaoshuxia', '<div id="hdojmsx">', '</div>');
QTags.addButton('xk', 'xk', '<div id="xk">', '</div>');
QTags.addButton('down', 'down', '<div class="down">', '</div>');
QTags.addButton('shk', 'shk', '<div class="shk">', '</div>');
QTags.addButton('Kuang', 'kuang', '<div class="kuang">', '</div>');
QTags.addButton('xian', 'xian', '<div class="xian">', '</div>');
QTags.addButton('loginhide', '登陆后显示', '<!--loginview start-->', '<!--loginview end-->');
QTags.addButton('listimg', '横向图框架', '<div class="imglist-title">[标题]</div><div class="imglist" id="iscroll0"><table cellpadding="0" cellspacing="0"><tbody><tr align="center">', '</tr></tbody></table></div>');
QTags.addButton('listimgT', '横向图内部', '<td><div>[内容]</div></td>', '');
//QTags.addButton( 'my_id', 'my button', '\n</span>', '</span>\n' );
//这儿共有四对引号，分别是按钮的ID、显示名、点一下输入内容、再点一下关闭内容（此为空则一次输入全部内容），\n表示换行。
//Derek.S 2012-11-04