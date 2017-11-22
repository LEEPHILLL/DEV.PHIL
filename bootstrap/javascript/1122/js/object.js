var John = {
    name : 'John',
    birthYear : 1990 ,
    job : 'student'
}

//john.name = 'jane' ;
var Jane = {
    name : 'Jane' ,
    birthYear : 2000 ,
    job : 'teacher'
}

var Person = function (name, birthYear, job) {
    this.name = name ;
    this.birthYear = birthYear ;
    this.job = job ;
}

var Mark = new Person("Mark", 2010, 'doctor') ;
var arr = [] ;
arr.push(John) ;
arr.push(Jane) ;
arr.push(Mark) ;

//console.log(arr[2].name) ;

var text = "" ;

text +="<table border=\'1\'>" ;
text +="    <tr>" ;
text +="        <th>#</th>" ;
text +="        <th>이름</th>" ;
text +="        <th>생년</th>" ;
text +="        <th>직업</th>" ;
text +="    </tr>" ;

for(var i=0 ; i < arr.length ; i++) {
    text +="<tr>"
    text +="    <td>"+(i+1)+"</td>"
    text +="    <td>"+arr[i].name+"</td>"
    text +="    <td>"+arr[i].birthYear+"</td>"
    text +="    <td>"+arr[i].job+"</td>"
    text +="</tr>"
}

text +="</table>";
document.write(text) ;


var register = function (name, birth, job, shelter, post, date) {
    this.name = name ;
    this.birth = birth ;
    this.job = job ;
    this.shelter = shelter ;
    this.post = post ;
    this.date = date ;
}

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();

var hour = now.getHours() ;
var minute = now.getMinutes() ;
var second = now.getMilliseconds() ;

var registerArr = [] ;

//registerArr.push(new register("park", "doctor", "seoul", "101", year+"-"+(month+1)+"-"+date, hour+"-"+minute)) ;
var now = new Date ;
registerArr.push(new register("park", 2000, "doctor", "seoul", "101", now)) ;

var now1 = new Date ;
registerArr.push(new register("mart", 1598, "designer", "bussn", "102", now1)) ;

var now2 = new Date ;
registerArr.push(new register("peter", 1784, "teacher", "suwon", "1012", now2)) ;

var now3 = new Date ;
registerArr.push(new register("jame", 1654, "ceo", "uljin", "112", now3)) ;

var now4 = new Date ;
registerArr.push(new register("jp.morgan", 1987, "actor", "israel", "113",now4)) ;

var jobs = ["doctor","designer","teacher","ceo","actor"];

var text = "" ;

text +="<table border=\'1\'>" ;
text +="    <tr>" ;
text +="        <th>/</th>" ;
text +="        <th>이름</th>" ;
text +="        <th>생년</th>" ;
text +="        <th>직업</th>" ;
text +="        <th>거주지</th>" ;
text +="        <th>우편번호</th>" ;
text +="        <th>가입날짜</th>" ;
text +="        <th>가입시간</th>" ;
text +="    </tr>" ;

for(var i=0 ; i < registerArr.length ; i++) {
    text +="<tr>"
    text +="    <td>"+(registerArr.length-i)+"</td>"
    text +="    <td>"+registerArr[i].name+"</td>"
    text +="    <td><button onclick=\"display("+registerArr[i].birth+")\">"+registerArr[i].birth+"</button></td>"
    //text +="    <td>"+registerArr[i].job+"</td>"
    text +="    <td>";
    text +="        <select>";
                    for(var j=0 ; j < jobs.length ; j++){
                        if(registerArr[i].job == jobs[j]) {
    text +="            <option selected>"+jobs[j]+"</option>";
                        } else {
    text +="            <option>"+jobs[j]+"</option>";
                        }
                    }
    text +="        </select>";
    text +="    </td>";

    text +="    <td>"+registerArr[i].shelter+"</td>"
    text +="    <td><input type =\'text\' value=\'"+ registerArr[i].post+"\'>"+registerArr[i].post+"</td>"
    var day = registerArr[i].date ;
    //text += "<td>"+day+"</td>" ;
    text +="    <td>"+day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate()+"</td>"
    text +="    <td>"+day.getHours()+":"+day.getMinutes()+":"+day.getSeconds()+"</td>"
    text +="</tr>"
}
function display(birth) {
    var now = new Date ;
    var age = now.getFullYear()-birth ;
    alert(age+"입니다 ")
}

// i는 0부터 무한대 ... 무한대-i가 되야
text +="</table>";
document.write(text) ;
//자바스크립트에서 따옴표 쓸라면 역슬래쉬 있어야
