;(function(window,document,$,undefined){
    var t=0;
    
    setTimeout(formatFn,100);

    function formatFn(){
        $("#section9 .s9-right-img1").stop().animate({ right:-1000 },1000);
        $("#section9 .s9-right-img2").stop().animate({ right:-1000 },1000);
        $("#section9 .s9-right-btn").stop().animate({ right:-1000 },1000);
    };
    function animateFn(){
        $("#section9 .s9-right-img1").stop().animate({ right:0 },2500);
        $("#section9 .s9-right-img2").stop().animate({ right:0 },2800);
        $("#section9 .s9-right-btn").stop().animate({ right:0 },3100);
    };

    $(window).scroll(function(){
        if( $(window).scrollTop() >= $("#section7").offset().top+350 ){
            if(t==0){
                t=1;
                animateFn();
            }
        }
        if( $(window).scrollTop() < $("#section7").offset().top+350 ){
            if(t==1){
                t=0;
                formatFn();
            }
        }
    })

})(window,document,jQuery);