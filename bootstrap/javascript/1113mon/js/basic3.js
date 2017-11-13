
var name = 'john' ;
var age = 26 ;
var ismarried = 'yes' ;
var ismarried2 = 'yes' ;

if(ismarried === 'yes'){
    console.log("john is married");

} else if (ismarried === 'no'){
    console.log("jane is married");
} else if (ismarried === 'no1'){
    console.log("who is married");
}  else {
    console.log("i don't know");
}

if(23 ==23) {
    console.log("23 ==  number") ;
}

if(23 =="23") {
    console.log("23 == ") ;
}
if(23 ==="23") {
    console.log("23 === 3rd") ;
}

var job = 'driver';

job = prompt('what does he do') ;

switch(job){

    case 'driver';
        console.log('job is driver') ;
        break ;
    case 'teacher';
        console.log('job is teacher') ;
        break ;
    case 'hhhh';
        console.log('job is hhhh') ;
        break ;

    default ;
        console.log('I don\'t know') ;


}
