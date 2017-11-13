var name = 'john' ;
var name2 = 'jane' ;
var age =  26;
var age2 =  10;

console.log(typeof(name)) ;
console.log(typeof(age)) ;

console.log(name+age) ;

var unified = name + age ;
console.log(unified) ;
console.log(typeof(unified)) ;

var unified2 = name + (age+age2)
console.log(unified2) ;

var job, isMaried ;
job = "driver" ;
isMaried = "false" ;

var str = name+ ' is a' + age + ', job'+ job + ' is he married?'+ isMaried ;
console.log(str) ;


var str =  '"I'  + " 'm a " + 'student"';
console.log(str);

var html_str = ' &quot;I &#39; m a student &quot; ' ;
document.write(html_str) ;

var html_str2 = ' <html> <head> </head> <body> <h1>hello world</h1> </body> </html> ' ;
document.write(html_str2) ;

var h1_str3 = 'hello'
document.write(h1_str3) ;
var table_str3 =  ""+
 "<table border=\"1\">" +
    "<tr>"+
        "<th> 번 호 </th>"+
        "<th> 타 이 틀 </th> " +
        "<th> 설 명 </th> " +
        "<th> 비 고 </th> " +
    "</tr>" +
    "<tr>" +
        "<td> 1</td>" +
        "<td> html</td>" +
        "<td> 웹문서구조</td>" +
        "<td>  </td>" +
    "</tr>" +
    "<tr>" +
        "<td> 2</td>" +
        "<td> css</td>" +
        "<td> 디자인html</td>" +
        "<td> </td>" +
    "</tr>" +
    "<tr>" +
        "<td> 3</td>" +
        "<td> javascript</td>" +
        "<td> 동작구조</td>" +
        "<td> </td>" +
    "</tr>" ;
document.write(table_str3) ;

var lastname = prompt("what is last") ;
console.log(lastname);
document.write("<h1>"+lastname+"<h1>") ;

alert(lastname) ;

