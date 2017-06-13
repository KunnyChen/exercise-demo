/**
 * Created by KV6 on 2016/12/26.
 */
function getStyle(obj,attr){//获取样式函数
    if(obj.currentStyle){
        //针对IE浏览器
        return obj.currentStyle[attr];
    }
    else{
//                针对火狐浏览器
        return getComputedStyle(obj,false)[attr];
    }
}

function startMove(obj,attr,iTarget,fn){//在此fn表示一个函数，在执行完一件事情之后并没有立马结束，而是再调用这个函数（回调函数）
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        //1.取当前值
        var current = 0;
        if(attr == 'opacity'){
            current = Math.round(parseFloat(getStyle(obj,attr))*100);
        }
        else{
            current = parseInt(getStyle(obj,attr));
        }
        //2.计算速度
        var speed = (iTarget-current)/8;
        speed = speed > 0 ?Math.ceil(speed):Math.floor(speed);
        //3.检查停止
        if(current == iTarget){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
        else{
            if(attr == 'opacity'){
//                        针对IE浏览器
                obj.style.filter = 'alpha(opacity:'+(current + speed) +')';
//                        针对谷歌和火狐浏览器
                obj.style.opacity = (current + speed)/100;
            }
            else{
                obj.style[attr] =current + speed +'px';
            }
        }
    },30)
}
