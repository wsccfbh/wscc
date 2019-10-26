function setCookie(name,value,extime){
    let exp=0;
    if(extime==0){
        exp=null;
    }else{
        let d=new Date();
        let time=d.getTime();
        d.setTime(time+extime*60*1000);
        exp=d.toGMTString();
    }
    document.cookie=name+'='+value+';expries='+exp;
    
}
function getCookie(name){
    let cookies=document.cookie;
    let cookArr=cookies.split(';');
    
    for(var i=0;i<cookArr.length;i++){
        let tmpArr=cookArr[i].split('=');
        tmpArr[0]=tmpArr[0].replace(/^\s*/,'');
        if(name==tmpArr[0]){
            return tmpArr[1];
        }
    }
}