// 클릭이벤트 터치이벤트 6초 이상 없으면 자동실행 
(function(window, document, $){

var cnt = 0;

var setId = 0;

var setId2 = 0;

function nextSlideFn(){
    cnt++;
    mainSlideFn();
};

$(".next-button").on({
    click : function(){
        if( !$("slide-wrap".is(":animated")) ){
            nextSlideFn();
        }
        timerControlFn();
    }
});


function mainSlideFn(){
    $(".slide-wrap").stop().animate({left : -1445 * cnt}, 200, function(){
        if(cnt>4){cnt=0;}
        if(cnt<0){cnt=4;}
        $(".slide-wrap").stop().animate({left : -1445 * cnt}, 0);
    });
    pageBtnFn(cnt);
};


function prevSlideFn(){
    cnt--;
    mainSlideFn();
};

$(".prev-button").on({
    click : function(){
        if( !$("slide-wrap".is(":animated")) ){
            prevSlideFn();
        }
        timerControlFn();
    }
});

// 터치 스와이프 안됨
$(".slide-wrap").swipe({
    swipeLeft : function(e){
        e.preventDefault();
        if( !$("slide-wrap".is(":animated")) ){
            nextSlideFn();
        }
        timerControlFn();
    },
    swipeRight : function(e){
        e.preventDefault();
        if( !$("slide-wrap".is(":animated")) ){
            prevSlideFn();
        }
        timerControlFn();
    }
}); 

$(".indacator-btn").each(function(index){
    $(this).on({
        click : function(){
            cnt = index;
            mainSlideFn();
            timerControlFn();
        }
    })
});
    
    function pageBtnFn(z){
        z>4? z=0 : z;
        $(".indacator-btn").removeClass("addBtn");
        $(".indacator-btn").eq(z).addClass("addBtn");
    };

    function initTimerFn(){
        setId = setInterval(nextSlideFn,5000);
    };
    
    initTimerFn();

    function timerControlFn(){
        clearInterval(setId);
        clearInterval(setId2);

        var cnt2 = 0;
        setId2 = setInterval(function(){
            cnt2++;

            if(cnt2>5){
                nextSlideFn();
                initTimerFn();
                clearInterval(setId2);
            }
            console.log(cnt2);
        },1000); // 정지하고 나서 1초씩 cnt 증가
    };
})(window, document, jQuery);