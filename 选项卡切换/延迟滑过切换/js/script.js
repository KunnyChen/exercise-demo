/**
 * Created by Administrator on 2016/11/26.
 */
function $(id){
    return typeof id=='string'?document.getElementById(id):id;
}
window.onload = function () {
    var index=0;
    var timer=null;

    var lis = $('notice-tit').getElementsByTagName('li'),
        divs=$('notice-con').getElementsByTagName('div');

    if(lis.length!=divs.length) return;

//    �������е�ҳǩ
    for(var i=0;i<lis.length;i++){
        lis[i].id=i;
        lis[i].onmouseover=function(){
            //��that���������õ�ǰ������li
            var that=this;
        //    �������׼��ִ�еĶ�ʱ�������������ֻ�е�ǰͣ��ʱ�����500msʱ�ſ�ʼִ�С�
            if(timer){
                clearTimeout(timer);
                timer=null;
            }
            //�ӳٰ���ִ��
            timer=setInterval(function(){
                //alert('abc');
                for(var j=0;j<lis.length;j++){
                    lis[j].className='';
                    divs[j].style.display='none';
                }
                lis[that.id].className='select';
                divs[that.id].style.display='block';
            },500)
        }
    }
};