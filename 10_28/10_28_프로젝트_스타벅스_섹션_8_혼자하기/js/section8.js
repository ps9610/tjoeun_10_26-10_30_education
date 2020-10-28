(function(document,window,$,undefined){

var t = 0;

setTimeout(init,100);

function init(){
    $(".right-row1 .image").stop().animate({ right:-1000 },0).animate({ right:0 },2500);
    $(".right-row2 .image").stop().animate({ right:-1000 },0).animate({ right:0 },2900);
}

function formatFn(){
    $(".right-row1 .image").stop().animate({ right:-1000 },1000);
    $(".right-row2 .image").stop().animate({ right:-1000 },1000);
};
function animateFn(){
    $(".right-row1 .image").stop().animate({ right:0 },2500);
    $(".right-row2 .image").stop().animate({ right:0 },2800);
};



$(window).scroll(function(){
    
    if( $(this).scrollTop() >= $("#section7").offset().top+200 ){
        if( t==0 ){
            t=1;
            animateFn();
        }
    if( $(this).scrollTop() < $("#section7").offset().top+200 ){
        if( t==1 ){
            t=0;
            formatFn();
        }
    }
}

});
})(document,window,jQuery);