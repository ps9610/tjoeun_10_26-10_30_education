(function($,window,document,undefined){

    $('.ani').css({opacity:0});

    //섹션1 animation
    function fnSection1(){
                
        $('.ani-1').stop().animate({opacity:1},500,"easeOutCubic", function(){
            $('.ani-2').stop().animate({opacity:1},500,"easeOutCubic", function(){
                $('.ani-3').stop().animate({opacity:1},500,"easeOutCubic", function(){
                    $('.ani-4').stop().animate({opacity:1},500,"easeOutCubic", function(){
                        $('.ani-5').stop().animate({opacity:1},500,"easeOutCubic", function(){
                            $('.ani-6').stop().animate({opacity:1},500,"easeOutCubic");
                        });
                    });
                });
            });
        });           
    }
    
    fnSection1()

})(jQuery,window,document);