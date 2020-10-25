(function(window, document, $){

var cnt = 0;

    function nextSlide(){}

    function mainSlideFn(){
        $(".slide").stop().animate({left : -1445 * cnt})
        if(cnt>4){
            cnt=0;
        }
        if(cnt<0){
            cnt=4;
        }
    };

    function

})(window, document, jQuery);