function check() {
    //alert('check입니다');
    //var name = document.frm.name.value ;
    //var id = document.frm.id.value ;
    var name = document.getElementById('name').value ;
    var id = document.getElementById('id').value ;
    var password = document.frm.password.value ;
    var password2 = document.frm.password2.value ;
    var error = document.getElementById('name_error').value ;

    if(name == ""){
        alert("이름을 입력하세요");
        document.getElementById('name').focus();
        document.getElementById('name_error').textContent = "확인하세요";

        return false;
    }
        document.getElementById('name_error').style.display = 'none';




    if(id == ""){
        alert("id을 입력하세요");
        document.getElementById('id').focus();
        return false;
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