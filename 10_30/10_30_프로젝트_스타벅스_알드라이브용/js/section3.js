;(function(window, document, $){


var cnt = 0;
var setId = 0;
var setId2 = 0;

//2-1. next
    function nextSlideCountFn(){
        cnt++;
        mainSlideFn();
    } 

//2-1. prev
function prevSlideCountFn(){
    cnt--;
    mainSlideFn(); 
}

//  메인 슬라이드 함수
    function mainSlideFn(){
        $(".slide-wrap").stop().animate({ left : -829 * cnt }, 600, function(){
            if(cnt>3){
                cnt=0;
            }
            if(cnt<0){
                cnt=3;
            }
            $(".slide-wrap").stop().animate({ left : -829 * cnt },0);
            $('.slide').removeClass('addSlide');
            $('.slide').eq(cnt+1).addClass('addSlide');
        });
        pageBtnFn(cnt);
    }
    
    //이벤트 리스너 & 이벤트 핸들러
    
//4-1. next
    $(".next-btn").on({
        click:function(){
            if( !$(".slide-wrap").is(":animated")){
                nextSlideCountFn();
            }
        timerControlFn();

        }
    });

// 4-3. 터치 스와이프
$(".slide-wrap").swipe({
    swipeLeft : function(){ // nextSlide
        if( !$(".slide-wrap").is(":animated")){
            nextSlideCountFn();
            }
            timerControlFn();
    },
    swipeRight : function(){ //prevSlide
        if( !$(".slide-wrap").is(":animated")){
            prevSlideCountFn();
        }
        timerControlFn();
    }
});
/* 모바일 버전 : 
$(".slide-wrap").on({    // 슬라이드 전체를 터치하겟다는것임
    swipeleft : function(){
    },
    swiperight : function(){
    }
});
*/

//4-2. prev
    $(".prev-btn").on({ 
        click:function(){
        if( !$(".slide-wrap").is(":animated")){
            prevSlideCountFn();
        }
        timerControlFn();
        }
    });

//  5.배열처리하
$(".page-btn").each(function(index){ 
    $(this).on({
        click:function(){
            cnt=index;
            mainSlideFn();
            clearInterval(setId);
            $(".pause-play-btn").addClass("addPlay");
            timerControlFn();
        }
    });
});

//6. 페이지버튼
function pageBtnFn(z){
    z>3? z=0 : z;
    $(".page-btn").removeClass("addPagebtn");
    $(".page-btn").eq(z).addClass("addPagebtn");
}

//  7. 3초 간격으로 다음 슬라이드 카운트 시켜주기 
function initTimerFn(){
    setId = setInterval(nextSlideCountFn,3000);
} 
//  8-2. 재생/중지버튼 has클래스
    $(".pause-play-btn").on({
        click:function(){
            var x = null;
                x = $(this).hasClass("addPlay");
            
                if( x==false ){ 
                    clearInterval(setId);
                    clearInterval(setId2);
                    $(this).addClass("addPlay");
                }
                else if ( x==true ){
                    nextSlideCountFn();
                    initTimerFn();
                    $(this).removeClass("addPlay");
                }
        }
    });

function timerControlFn(){

    clearInterval(setId);
    clearInterval(setId2);

    $(".pause-play-btn").addClass("addPlay");
        var cnt2 = 0;
        setId2 = setInterval(function(){ 
            cnt2++;
            if( cnt2>9 ){
                nextSlideCountFn();
                initTimerFn();
                clearInterval(setId2);
                $(".pause-play-btn").removeClass("addPlay");
            }
            //console.log(cnt2);
        },1000);
    }
    $(".promotion-btn").on({
        click:function(e){
            e.preventDefault();

            $(this).toggleClass("addUp"); 
            $("#section3").stop().slideToggle(400,"easeInCubic"); 
        
            if( $(".promotion-btn").hasClass("addUp") ){
                    initTimerFn(); // 카운트 0 초기화
                    $(".pause-play-btn").removeClass("addPlay");//플레이정지버튼 초기화
                }
            else {
                clearInterval(setId);//슬라이드 타이머 중지
                clearInterval(setId2);
                cnt = 0;
                $(".slide-wrap").stop().animate({ left:-829*cnt },0);// 리셋
                $(".slide").removeClass("addSlide");
                $(".slide").eq(cnt+1).addClass("addSlide"); //opacity 초기화
                pageBtnFn(cnt); //페이지버튼 초기화
                $(".pause-play-btn").addClass("addPlay"); //플레이정지버튼 초기화
            }
        }
    });

})(window, document, jQuery);
