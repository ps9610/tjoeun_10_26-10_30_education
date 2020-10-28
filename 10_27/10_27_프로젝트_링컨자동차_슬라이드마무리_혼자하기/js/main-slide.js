;(function($){

    var cnt = 0;
    var z = 0;
    //1.이전, 다음, 메인 슬라이드 만들기
    function nextSlideFn(){
        cnt++;
        mainSlideFn();
    };

    function prevSlideFn(){
        cnt--;
        mainSlideFn();
    };

    function mainSlideFn(){
        $(".slide-wrap").stop().animate({left : -1438 * cnt},200,function(){
            cnt>4? cnt=0:cnt;
            cnt<0? cnt=4:cnt;
            console.log(cnt)
            $(".slide-wrap").stop().animate({left : -1438 * cnt},0);
        });
        cnt>4? z=0:z=cnt;
        pageBtnFn();
    };
        
    //2.이전,다음 클릭 이벤트 리스너(이벤트 받을 준비)/핸들러(이벤트 실행)
    $(".next-btn").on({
        click:function(e){
            e.preventDefault();
            if( !$(".slide-wrap").is(":animated") ){
                nextSlideFn();
            }
        }
    });
    $(".prev-btn").on({
        click:function(e){
            e.preventDefault();
            if( !$(".slide-wrap").is(":animated") ){
            prevSlideFn();
            }
        }
    });    
    //3.페이지 버튼 이벤트
    function pageBtnFn(){
        $(".page-btn-wrap li").removeClass("addPage");
        $(".page-btn-wrap li").eq(z).addClass("addPage");
    };
    //4.페이지 버튼 클릭 이벤트
    $(".page-btn").each(function(index){
        $(this).on({        
            click:function(e){
                e.preventDefault();
                cnt=index;
                nextSlideFn();
                mainSlideFn();
            }
        });
    })

    $(".slide-wrap").swipe({
        swipeLeft:function(){
            if( !$(this).is(":animated") ){
                nextSlideFn();
            }
        },
        swipeRight:function(){
            if( !$(this).is(":animated") ){
                prevSlideFn();
            }
        }
    })
    //5.페이지 버튼 애니메이션 작동 시에만 실행시키기
    //  2번에 추가
})(jQuery);