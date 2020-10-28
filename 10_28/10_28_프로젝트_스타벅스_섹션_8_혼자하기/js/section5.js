//스크롤 이벤트 해야하기 때문에 3개 매개변수 다 필요함
;(function(window,document,$,undefined){
    
    //여태까지 했던 것들은 다 DOM, 오늘은 BOM
    // (Browser Object Modelling) 윈도우(창)에서 실행되는 이벤트: 홈페이지를 이동하는 location, 위-아래 올라갔다 내려갔다 하는 scroll, 화면 줄였다 늘렸다하는 resize
    //1. 섹션1 높이의 반정도(400px) scroll-top(가장 위에서 스크롤함) : 애니메이션 실행되게해라
    //      : 400px 넘어가면 한 번만 실행하게 toggle변수 사용할예정
    //      = 패럴럭스(parallelax) = 페이지 스크롤 이벤트
    //      + 강화할 수 있는 이벤트 : mousewheel
    //2. 애니메이션 : 섹션 5의 애니메이션 함수 호출 실행

    /*//문서 전체 길이 값 알아보기 
    $(window).scroll(function(){
        console.log("웹페이지가 갖고 있는 문서는 "+ $(document).length + "개 입니다.");
        console.log("웹페이지가 갖고 있는 슬라이드는 "+ $(".slide").length + "개 입니다.");
        console.log("실제 실행되는 슬라이드는 ", $(".slide").length-2);
        console.log( "현재 위치는 " + $(this).scrollTop() + "입니다.");
        console.log("문서 전체 높이는 "+ $(document).height() + "입니다.");
        console.log("문서 전체 넓이는 "+ $(document).width() + "입니다.");
        console.log($(document).height()-$(this).scrollTop());
        console.log("창 높이는 "+ $(window).height() + "입니다.");
        console.log("창 넓이는 "+ $(window).width() + "입니다.");
    });//scroll이벤트 시작*/

     var t = 0;
    //var t = 'scrollOff';

    /* var f = 0; */
    
    setTimeout(animationLoadFn,100);

    function animationLoadFn(){
        //#section5 .wrap .left
        $("#section5 .left") .stop().animate({ left:-1000 },0).animate({ left:0 },1000);
        $("#section5 .right").stop().animate({right:-1000 },0).animate({right:0 },1000);
    };
    
    function s5AnimationtFormatFn(){
        //#section5 .wrap .left
        $("#section5 .left") .stop().animate({ left: -1000 },1000); 
                                    // 초기 함수
        $("#section5 .right").stop().animate({ right:-1000 },1000); //자릿수맞춰서입력 = 체인방식
}
    function s5AnimationFn(){
        //#section5 .wrap .left
        $("#section5 .left") .stop().animate({ left: 0 },2000); 
                                                //실행하는 함수
        $("#section5 .right").stop().animate({ right:0 },2000);
    } 
    



    $(window).scroll(function(){

/*     if( $(this).scrollTop() == 0 ){
            t=0; //스크롤 탑 값이 맨 위 상단위치 0에 도달하면 다시 변수 초기화됨
            s5AnimationFormatFn();//애니메이션 포지션을 아예 초기화 시킴
        }
 */
// 변수 2개쓰는 방법
/*     if( $(this).scrollTop() < 400 ){// 스크롤 탑 값이 맨 위 상단위치 400 미만으로 도달하면 다시 변수 초기화됨
        if(f == 0)
            t=0 //위에 Top이 0인 경우의 조건문 지웠으니까 
            f=1;
            s5AnimationFormatFn();
        }
    
    if( $(this).scrollTop() >= 400 ){
        if(t==0){ //토글변수 t의 값이 0이면 함수 호출
            t=1; //호출 하고나서 바로 변수값 1로 변경 스크롤 실행 상태임
            f=0;
            s5AnimationFn();
        }    
    } */

    //변수 1개 쓰는 방법(스크롤 이벤트는 무조건 if문만 써야됨 (else if 안먹음))
     if( $(this).scrollTop() < 400 ){// 스크롤 탑 값이 맨 위 상단위치 400 미만으로 도달하면 다시 변수 초기화됨
        if(t == 0) // t와 함수의 animate left와는 관계없음
        s5AnimationtFormatFn();
            t=1; 
        }
    
    
     if( $(this).scrollTop() >= 400 ){
        if(t == 1) 
        s5AnimationFn();
            t=0; 
        } 

        
        
        /*// t 변수 이해하기
        //스크롤 이벤트는 무조건 if문만 써야됨 (elseif 안먹음)
        if( $(this).scrollTop() < 400 ){// 스크롤 탑 값이 맨 위 상단위치 400 미만으로 도달하면 다시 변수 초기화됨
            if(t == 'scrollOff') // t와 함수의 animate left와는 관계없음
            t ='scrollOn' //위에 Top이 0인 경우의 조건문 지웠으니까 
            s5AnimationFormatFn();
        }
        
        if( $(this).scrollTop() >= 400 ){
            if(t == 'scrollOn'){ //토글변수 t의 값이 ON이면 함수 호출
                t ='scrollOff'; //호출 하고나서 바로 변수값 OFF로 변경
                s5AnimationFn();
            }    
        };*/
        
/*         function s5AnimationtFormatFn(){
            //#section5 .wrap .left
            $("#section5 .left").stop().animate({ left: 0 },1000); 
                                        // 초기 함수
            $("#section5 .right").stop().animate({ right:0 },1000); //자릿수맞춰서입력 = 체인방식
    } */ 
        
/*          function s5AnimationFn(){
            //#section5 .wrap .left
            $("#section5 .left").stop().animate({ left: -1000 },2500); 
            //실행하는 함수
            $("#section5 .right").stop().animate({ right:-1000 },2500);
        }  */
});

})(window,document,$);