function email_check( email ) {

    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email));

}

function check() {
    //alert('check입니다');
    //var name = document.frm.name.value ;
    //var id = document.frm.id.value ;
    var name = document.getElementById('name').value ;
    var id = document.getElementById('id').value ;
    var password = document.frm.password.value ;
    var password2 = document.frm.password2.value ;
    var error = document.getElementById('name_error').value ;

    var job = document.frm.job.value ;
    var gender = document.frm.gender.value ;
    var email = document.getElementById('email').value ;
    var languageCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    var englishCheck = /^[A-Za-z0-9+]*$/;

    function addFocusName () {
        var param = document.getElementById('name').value ;
        if(param == "") {
            document.getElementById('name_error').textContent = "이름을 입력하세요" ;
        }
    }

    function addBlurName() {
        var param = document.getElementById('name').value ;
        if(param !== "") {
            document.getElementById('name_error').textContent= "" ;
        }
    }
    if(name == ""){
        alert("이름을 입력하세요");
        document.frm.name.focus() ;
        document.getElementById('name').addEventListener('focus',addFocusName) ;
        document.getElementById('name').addEventListener('blur',addFocusName) ;
        //document.getElementById('name').focus();
        //document.getElementById('name_error').textContent = "확인하세요";
        return false;
    }
    if(!languageCheck.test(check)) {
        alert("한글만 써요")
        document.frm.name.focus();
        return false ;
    }
       // document.getElementById('name_error').style.display = 'none';
    if(!email_check(email)) {
        alert('형식이 잘못됨');
        document.frm.email.focus() ;
        return false;
    }
    if(id == ""){
        alert("id을 입력하세요");
        document.getElementById('id').focus();
        return false;
    }
    if(!englishCheck.test(id)){
        alert('아이디는 영어랑 숫자만 ') ;
        document.frm.id.focus() ;
        return false ;
    }
    if(password == ""){
        alert("password 입력하세요");
        document.frm.password.focus();
        return false;
    }
    if(password2 == ""){
        alert("password 확인 입력하세요");
        document.frm.password2.focus();
        return false;
    }
     if(password !== password2) {
        alert("다시 입력")
        document.frm.password2.value = "";
        document.frm.password2.focus();
        return false ;
    }

    console.log(password+"-"+password2)
    var chk = confirm('send data to server');
    if(chk) {
    console.log("name="+name+", id="+id) ;
    document.frm.submit() ;
    } else {
        return false ;
    }

}
