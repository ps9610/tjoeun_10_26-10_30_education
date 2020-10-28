(function(document,window,$,undefined){


var t = 0;

setTimeout(init,100);

function init(){
    $(".right-row1").stop().animate({ right:0 },0).animate({ right:473 },2800);
    $(".right-row2").stop().animate({ right:0 },0).animate({ right:957 },3000);
}

function animateFn(){
    $(".right-row1").stop().animate({ right:0 },1000);
    $(".right-row2").stop().animate({ right:0 },1000);
};
function formatFn(){
    $(".right-row1").stop().animate({ right:473 },2800);
    $(".right-row2").stop().animate({ right:957 },3000);
};



$(window).scroll(function(){
    
    if( $(this).scrolltop() >= $("section7").offset().top+100 ){
        if( t==0 ){
            t=1;
            animateFn();
        }
    }


});
})(document,window,jQuery);