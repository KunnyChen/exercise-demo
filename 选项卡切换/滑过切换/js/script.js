/**
 * Created by Administrator on 2016/11/26.
 */
function $(id){
    return typeof id=='string'?document.getElementById(id):id;
}
window.onload = function(){
//    ��ȡ��껬�����ߵ���ı�ǩ��Ҫ�л�����Ԫ��
    var titles=$('notice-tit').getElementsByTagName('li'),
        divs=$('notice-con').getElementsByTagName('div');
    //alert(titles.length);

    if(titles.length!=divs.length)
    return;

//    ����title�����е�Li
    for(var i=0;i<titles.length;i++){
        titles[i].id=i;
        //������л���onmouseover��Ϊonclick
        titles[i].onmouseover= function () {
            //alert(this.id);
            //���li���е�class
            for(var j=0;j<titles.length;j++){
                titles[j].className='';
                divs[j].style.display='none';
            }
            //���õ�ǰΪ������ʾ
            this.className='select';

            divs[this.id].style.display='block';

        }
    }
};
