/**
 * Created by Administrator on 2016/11/26.
 */
function $(id){
    return typeof id=='string'?document.getElementById(id):id;
}
window.onload = function(){
//    获取鼠标滑过或者点击的标签和要切换内容元素
    var titles=$('notice-tit').getElementsByTagName('li'),
        divs=$('notice-con').getElementsByTagName('div');
    //alert(titles.length);

    if(titles.length!=divs.length)
    return;

//    遍历title下所有的Li
    for(var i=0;i<titles.length;i++){
        titles[i].id=i;
        //若点击切换把onmouseover改为onclick
        titles[i].onmouseover= function () {
            //alert(this.id);
            //清除li所有的class
            for(var j=0;j<titles.length;j++){
                titles[j].className='';
                divs[j].style.display='none';
            }
            //设置当前为高亮显示
            this.className='select';

            divs[this.id].style.display='block';

        }
    }
};
