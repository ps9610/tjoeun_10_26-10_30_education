;(function(document,window,$,undefined){
    
    var t=0;

    setTimeout(formatFn,100);

    function formatFn(){
        $("#section8 .s8-right-img1").stop().animate({left:-30+1000,opacity:0},1000);
        $("#section8 .s8-right-img2").stop().animate({left:-30+1000,opacity:0},1000);
    };

    function animateFn(){
        $("#section8 .s8-right-img1").stop().animate({left:-30,opacity:1},2500);
        $("#section8 .s8-right-img2").stop().animate({left:-30,opacity:1},2800);
    };

    $(window).scroll(function(){
        
        if( $(this).scrollTop() < $("#section7").offset().top+200 ){
            if(t==1){
                t=0;
                formatFn();
            }
        }
        if( $(this).scrollTop() >= $("#section7").offset().top+200 ){
            if(t==0){
                t=1;
                animateFn();
            }
        }
    });

})(document,window,jQuery);