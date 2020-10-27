//; = 이전 실행하던것을 종료함 () ; = 새로운 스크립트를 시작함
;(function($){
    var cnt = 0;
    var z = 0;
    // nextSlideCountFn();

    //1-1.next SLide Count(cnt가 증가하냐 감소하냐) 함수
    function nextSlideCountFn(){
        cnt++; //1) 먼저 되고 
        mainSlideFn(); //2) 그 담에 1번 정보를 전달받으면서 호출하면서 함수실행
    }
    //1-2.prev SLide Count(cnt가 증가하냐 감소하냐) 함수
    function prevSlideCountFn(){
        cnt--;
        mainSlideFn();
    }
    //2. mainSlideFn 함수 -> 5번줄처럼 테스트 한 번 해보기
    function mainSlideFn(){
        $(".slide-wrap").stop().animate({left:(-1438*cnt)},200,function(){ //이동이 된 다음에 리턴이 가장 깔끔하게 되는 방법이 콜백함수
            cnt>4? cnt=0 : cnt;
            cnt<0? cnt=4 : cnt;
            $(".slide-wrap").stop().animate({left:(-1438*cnt)},0) //5번 사진이 보였는데 이동속도가 0이니까 처음으로 돌아가는 모습이 보이지 않고 초기의 사진으로 돌아옴 = 초기의 값으로 리턴됨
        });
        cnt>4? z=0 : z=cnt; // cnt= 위에서 쓰고 있는 거 그대로 써야됨 -> z를 사용하는 방법
        pageBtnFn();
    };

    //3-1. 다음 화살 버튼 클릭 이벤트 리스너(이벤트 받을 준비) / 이벤트 핸들러(이벤트 실행하는 주체)
    $(".next-btn").on({
        click : function(e){
            e.preventDefault();
            if( !$(".slide-wrap").is(":animated") ){
                nextSlideCountFn();
                //= cnt++;
                //  mainSlideFn();
            };
        }
    });
    //3-2. 이전 화살 버튼 클릭 이벤트 리스너(이벤트 받을 준비) / 이벤트 핸들러(이벤트 실행하는 주체)
    $(".prev-btn").on({
        click : function(e){
            e.preventDefault();
            if( !$(".slide-wrap").is(":animated") ){
                prevSlideCountFn();
            };
        }
    });

    //4-1-1.indicator button(page-btn); 이벤트 함수 (해당 슬라이드 버튼에 표시되게 하는 것)
    function pageBtnFn(){ // 선택자 : JS용 따로 안 만들었으면 그냥 써
        $(".page-btn-wrap li").removeClass("addPage"); //addClass된 모든 요소들->초기값 만들어줌
        $(".page-btn-wrap li").eq(z).addClass("addPage");
        // $(".page-btn-wrap li").eq(1).addClass("addPage");에서 eq값 = cnt랑 동일하니까 pageBtnFn은 main함수 밑에서 cnt 값을 받아와야 
        //    그 cnt 값을 전달받을 수 있음
        //4-1-2. 삼항연산자(조건주석문) 넣기
        //  4-1-1 상태에선 리턴이 되면 1번 페이지 버튼에 표시되지 않음 = main에서 cnt가 5까지 출력되기 때문에 
        //          -> pageBtnFn에서의 문제니까 여기 함수 안에서 해결
        //          -> cnt라는 매개변수를 받을 전달인자 하나 만들어서 삼항연산자 연결해도 되고
        //              그냥 z를 전역변수로 써도 됨 ( z>4? z=0 : z; )
    };
    //4-2.indicator button(page-btn); 클릭 이벤트리스너, 이벤트핸들러 (버튼 누르면 해당 슬라이드 돌려져서 옴)
    $(".page-btn").each(function(index){
        //console.log(index); // each에 사용할 요소들이 몇개인지 확인(test) = 여기 버튼 5개인거 확인
        $(this).on({
            click : function(e){
                e.preventDefault(); // a링크가 본래 가지고있는 초기화 버튼을 막음
                console.log(index)//내가 클릭한(이벤트 걸어놓은) 버튼이(요소가) 실행되는지 확인
                cnt=index; //클릭한 슬라이드 번호 -> 전역변수 변경해줌 = 이 홈페이지 전체의 cnt가 내가 클릭한 것으로 바뀐거임
                mainSlideFn();
            }
        });
    });
///////////////////////////////////////////////////////////////// 1단계 완료 /////////////////////////////////////////////////////////////////













})(jQuery);

