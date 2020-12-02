//스크롤 이벤트 해야하기 때문에 3개 매개변수 다 필요함
;(function(window,document,$,undefined){

     var t = 0;
    function init(){
        $("#section5 .left") .stop().animate({ left: -1000 },1000,function(){
            $("#section5 .left") .stop().animate({ left: 0 },2000); 
    
        }); 
        $("#section5 .right").stop().animate({ right:-1000 },1000,function(){
            $("#section5 .right").stop().animate({ right:0 },2000);
    
        });
    }
    
    setTimeout(init,100);
    function s5AnimationtFormatFn(){
        //#section5 .wrap .left
        $("#section5 .left") .stop().animate({ left: -1000 },1000); 
                                    // 초기 함수
        $("#section5 .right").stop().animate({ right:-1000 },1000);
}
    function s5AnimationFn(){
        $("#section5 .left") .stop().animate({ left: 0 },2000); 
                                                //실행하는 함수
        $("#section5 .right").stop().animate({ right:0 },2000);
    } 


    $(window).scroll(function(){

     if( $(this).scrollTop() < 400 ){
        if(t == 0)
        s5AnimationtFormatFn();
            t=1; 
        }
    
    
     if( $(this).scrollTop() >= 400 ){
        if(t == 1) 
        s5AnimationFn();
            t=0; 
        }
});

})(window,document,$);