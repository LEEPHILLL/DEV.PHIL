
/*
var name = 'john' ;
var birth = 2000 ;
function getage(birthArg) {

        var num = 2017 - birthArg ;
        return num ;
}

var person = {
        name : 'aaaaa' ,
        birth : 2000 ,
        getage : function (birthArg) {
            var num = 2017-this.birth ;
            return num ;
        }
}
console.log(person.getage());
person.birth = 2010;
console.log(person.getage());
person.name = '22222' ;
console.log(person) ;
*/

var building ={
nation : "johnson" ,
city : 'johnathan' ,
birth : 2000 ,
period :  function(birthArg) {
        var num = 2017- this.birth ;
        return num ;
},
maker : ['mikl', 'pirr', 'kkjjn']
}

building.nation = "pohnson" ;
building.city = "johnatha123n";
building.birth = 2011500 ;
building.maker[0] = "ewoijefioje"
building.maker[1] = "sjsfpjeopjwo"

//timer provieded by javascript
//setTimeout( function(){ alert("2seconds later");}, 2000 );
//setTimeout( function(){ window.open ("http://www.naver.com", "네이버", "width=500, height = 500, resizeable=yes");} )
/*
var i = 0 ;
setInterval(function() {
    console.log("["+ i + "] 번째"); i++ ;
    }, 2000);
*/

//Math.round - 반올림.. ceil - 올림 .. floor - 내림
/*
var i = 0 ;
setInterval(function() {
    var num = Math.random() ;
    console.log(Math.round( (num*10) ));
    }, 10000);
*/
var i = 0 ;
var date = new Date() ;
console.log(date.getYear()+1900);
console.log(date.getFullYear()+"년");
console.log(date.getMonth()+"월");
console.log(date.getDate()+"일");
console.log(date.getDay()+"요일");
console.log(date.getHours()+"시");
console.log(date.getMinutes()+"분");
console.log(date.getMilliseconds()+"초");



/*
var person2 = new object() ;
person2.name = 'jjjjj';

console.log(person2.name) ;
console.log(person2['name']) ;
*/


