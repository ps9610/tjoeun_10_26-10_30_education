//마우스 이벤트
//메인버튼 이벤트 
//마우스 클릭 이벤트 동작
//마우스 오버시 동작
//키보드 접근 시 동작

/*
$("선택자").on({}); //on : poweron
$("선택자").off({}); // off : poweroff
$("선택자").one({}); //on : only one
*/

(function($){
    
    $(".main-btn").on({
        mouseenter:function(){
           
            $(".main-btn").removeClass("addMainbtn");
            $(this).addClass("addMainbtn");
           
            $(".sub").stop().slideUp(0);
            $(this).next().slideDown(500,"easeInQuad");
        },
        focusin:function(){
           
            $(".main-btn").removeClass("addMainbtn"); 
            $(this).addClass("addMainbtn");
        }
    });

   
    $("#nav").on({
        mouseleave:function(){
            $(".sub").stop().slideUp(500);
            $(".main-btn").removeClass("addMainbtn");
        },
    });

    //메인 버튼 클릭 링크 이동
    
     $(".main-btn").each(function(index){
        $(this).on({
            click:function(){
                if(index==0){
                    location.href="https://www.starbucks.co.kr/coffee/index.do";
                }
                else if(index==1){
                    location.href="https://www.starbucks.co.kr/menu/index.do";
                }
                else if(index==2){
                    location.href="https://www.starbucks.co.kr/store/index.do";
                }
                else if(index==3){
                    location.href="https://www.starbucks.co.kr/responsibility/index.do";
                }
                else if(index==4){
                    location.href="https://www.starbucks.co.kr/msr/index.do";
                }
                else if(index==5){
                    window.open("https://www.starbucks.co.kr/whats_new/index.do");
                }
            }
        });
    });
/*
//each() 메소드 실무적용
// .main-btn 버튼 6개 배열 자동화(0~5)
$(".main-btn").each(); //1 : each()만 입력함
$(".main-btn").each(function(){}); //2 : each의 callback function
$(".main-btn").each(function(){ 
    
}); //3 :콜백 함수 공간 확보
$(".main-btn").each(function(index){
                          // 👆 = eq

}); //4 : 콜백 함수 index(매개변수) 이벤트 입력
$(".main-btn").each(function(index){
    $(this).on({
        click:function(){
            console.log(index) //핸들러(index 번호 콜백)
            if(index==0){
                location.href="url"
            }
            else if(index==1){
                location.href="url"
            } //필요한 만큼 입력하기
        }
    });
}); //5 : click 이벤트 리스너, 조건문 핸들러(수행) 콜백
*/



/*
    $(".main-btn").eq(0).on({
        click:function(){
   location.href="https://www.starbucks.co.kr/coffee/index.do"; //BOM 
        }
    });

    $(".main-btn").eq(1).on({
        click:function(){
            location.href="https://www.starbucks.co.kr/menu/index.do";
        }
    });

    $(".main-btn").eq(2).on({
        click:function(){
            location.href="https://www.starbucks.co.kr/store/index.do";
        }
    });

    $(".main-btn").eq(3).on({
        click:function(){
            location.href="https://www.starbucks.co.kr/responsibility/index.do";
        }
    });

    $(".main-btn").eq(4).on({
        click:function(){
            location.href="https://www.starbucks.co.kr/msr/index.do";
        }
    });

    $(".main-btn").eq(5).on({
        click:function(){
            location.href="https://www.starbucks.co.kr/whats_new/index.do";
        }
    });
*/

})(jQuery);