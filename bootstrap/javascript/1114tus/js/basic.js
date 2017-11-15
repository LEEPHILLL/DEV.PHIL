

function first(par) {
        console.log('test') ;
}

var first2 = function(par) {
        console.log('test') ;
}

var names = ['john', 'jam', 'mar'] ;
var numbers = [0,1, 2, 3,4, 5, 6, 7, 8, 9, 10] ;
var testarr = [ 1 , 'jam', true , names] ;

//document write(names) ;
//console.log(names) ;
//document write("<br>") ;
//document write(testarr) ;
//console.log(testarr) ;
console.log(names[2]) ;
names.push("log") ;

/*
console.log(names[3]) ;
names.push("log2") ;
console.log(names[4]) ;
names.push("log3") ;
names.push("log4") ;
*/

console.log(names[names.length-1]) ;

console.log(names. indexOf('jam')) ;
console.log(names. indexOf('log4')) ;

//초기값 비교해서 참.거직, 액션
console.log("length="+names.length) ;
for(var i=0 ; i < names.length ; i++) {
        console.log(names[i]);
}

//브레이크는 멈추는거 7~10에서 7이면 멈춤
console.log(numbers) ;
for(var i=0 ; i < numbers.length ; i++){
        if( i < 3  || i > 5 ){
            //console.log(numbers[i]);
            if(numbers[i] == 7 ) {
                console.log(numbers[i]+ '이면' );
             } else {
                console.log(numbers[i]);
             }

        } else {
                console.log("-----"+numbers[i]+"------")
             }
}
// 7에서 표시 / 나오지 않는 숫자 --로 나옴


