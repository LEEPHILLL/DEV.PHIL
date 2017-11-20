function button(move){
    var site ;
    if (move ==='daum' ) {
        site="다음";
    } else if (move ==='naver' ) {
        site="네이버";
    }
    var check = confirm(site +'으로 이동합니다');

    console.log("check="+check);
    if( (move === 'daum') && check ){
        window.open("https://www.daum.net");
    }else if( (move=== 'naver') && check){
        window.open("https://www.naver.com");
    }

}
function btn_mouseover(){
    alert('마우스가 올라갔습니다.');
}

/*
function input_alert(){
    alert('세글자 이상 입력')
}
*/