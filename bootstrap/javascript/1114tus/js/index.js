
var name = "john" ;

function third() {
    var c = "hey" ;
    console.log("third hey");
}
function second() {
    var b = "hi" ;
    third() ;
    console.log("second hi");
}
function first() {
    var a = "hello" ;
    second() ;
    console.log("first hello");
}

first () ;




/*
이름, 년도 출생 1980
은퇴 65세
얼마나 남았는지
        남았다면 얼마나 남았습니다
        넘었다면 이미 은퇴했습니다.
html브라우저
*/

/*은퇴이름 , 남은나이, 은퇴년, 남은나이*/
function checkretirement(retirename, remainage, retirementyear, retirementage) {
        var between = retirementage - remainage ;

        if(between > 0) {
            document.write(retirename+"는 은퇴가 "+between+"년 남았습니다") ;
        }  else if(between == 0) {
            document.write(retirename+"는 은퇴가 올해입니다") ;
        }  else{
            document.write(retirename+"는 이미 은퇴했습니다") ;
        }
        var str = "<br>"
        document.write(str)
        document.write("은퇴의 기준년도는"+ retirementyear +"입니다.") ;

        document.write(str)
        document.write("은퇴 나이는"+ retirementage +"입니다.") ;
}


/*이름 , 출생, 현재년도, 은퇴년*/
function yearsretirement(name, birth, year, retirementage){
        //var retirementage = 2017 ;
        var age = year - birth ;

    checkretirement(name, age, year, retirementage) ;
}

yearsretirement('john', 1980, 2017, 65) ;
        var str = "<br>"
        document.write(str)
yearsretirement('johnson', 2009, 2029, 20) ;





