/**
 * Created by KV6 on 2016/12/26.
 */
function getStyle(obj,attr){//��ȡ��ʽ����
    if(obj.currentStyle){
        //���IE�����
        return obj.currentStyle[attr];
    }
    else{
//                ��Ի�������
        return getComputedStyle(obj,false)[attr];
    }
}

function startMove(obj,attr,iTarget,fn){//�ڴ�fn��ʾһ����������ִ����һ������֮��û����������������ٵ�������������ص�������
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //1.ȡ��ǰֵ
        var current = 0;
        if(attr == 'opacity'){
            current = Math.round(parseFloat(getStyle(obj,attr))*100);
        }
        else{
            current = parseInt(getStyle(obj,attr));
        }
        //2.�����ٶ�
        var speed = (iTarget-current)/8;
        speed = speed > 0 ?Math.ceil(speed):Math.floor(speed);
        //3.���ֹͣ
        if(current == iTarget){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
        else{
            if(attr == 'opacity'){
//                        ���IE�����
                obj.style.filter = 'alpha(opacity:'+(current + speed) +')';
//                        ��Թȸ�ͻ�������
                obj.style.opacity = (current + speed)/100;
            }
            else{
                obj.style[attr] =current + speed +'px';
            }
        }
    },30)
}
