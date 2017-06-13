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

//startMove(obj,{attr1:itarget1,attr2:itarget2},fn)
//�ڴ�fn��ʾһ����������ִ����һ������֮��û����������������ٵ�������������ص�������
function startMove(obj,json,fn){
    var flag = true;//���������˶����ﵽ��Ŀ��ֵ
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        for(var attr in json){
            //1.ȡ��ǰֵ
            var current = 0;
            if(attr == 'opacity'){
                current = Math.round(parseFloat(getStyle(obj,attr))*100);
            }
            else{
                current = parseInt(getStyle(obj,attr));
            }
            //2.�����ٶ�
            var speed = (json[attr]-current)/8;
            speed = speed > 0 ?Math.ceil(speed):Math.floor(speed);
            //3.���ֹͣ
            if(current != json[attr]) {
                flag = false;
            }
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
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },10)
}
