/*
var num = 10;  console.log(num) ; //10

num = num +1 ;  console.log(num) ; //11
num++ ;  console.log(num) ; //12
num +=1 ;  console.log(num) ; //13

num +=3 ;  console.log(num) ; // num= num+ 3 , 16

for( var i=0 ; i < 10 ; i+=2) {
        console.log(i);
}


var num3 = 10/2 ;
var num4 = 11%2 ;
var number = 0 ;

if (number) {
    console.log("number true")
} else {
    console.log("number false")
}
var name ;
if (name) {
    console.log("name true")
} else {
    console.log("name false")
}

for( var i=0 ; i < 10 ; i++) {
        if((i%2) == 0 ) {
        console.log(i);
        }
}

for( var i=0 ; i < 10 ; i++) {

        if(i > 3 && i <= 6 ) {
            continue ;
            console.log("ㅇㅇㅇㅇ");
        }  else if(i == 7 ) {
            console.log("끝");
        }  else {
            console.log(i);
        }
}


else if(i == 1 ) {
            console.log("안녕");
        } else if(i == 5 ) {
            console.log("절반");
        }


        if (i < 7 ) {
            continue ;
        }  else

var i=0 ;

while(true){
    i++ ;
    if( i >= 10 ){
    break ;
    }
    console.log("h11h11111h ; ["+i+"]" ) ;

}

var i=0 ;

while( i < 10 ){
    i++ ;
    console.log("h11h11111h ; ["+i+"]" ) ;
}
*/

var col = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ;
var col1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] ;
var col2 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] ;
var col3 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ;
var col4 = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50] ;
var col5 = [51, 52, 53, 45, 55, 56, 57, 58, 59, 60] ;
var col6 = [61, 62, 63, 46, 65, 66, 67, 68, 69, 70] ;
var col7 = [71, 72, 73, 47, 75, 76, 77, 78, 79, 80] ;
var col8 = [81, 82, 83, 48, 85, 86, 87, 88, 89, 90] ;
var col9 = [91, 92, 93, 49, 95, 96, 97, 98, 99, 100] ;

/*
console.log(col[3]) ;
console.log(col.length) ;

for(i = 0 ; i < col7.length ; i++ ) {
    console.log(col7[i]) ; // 개별 원소들이 출력
}
col.push(11) ;
var col10 = [];

for ( i=100 ; i <= 120 ; i++ ) {
        col10.push(i);
}
        console.log(col10) ;
*/

var row = [col, col1, col2, col3, col4, col5, col6, col7, col8, col9] ;
console.log(row[0] [0])
console.log(row[1] [0])
console.log(row[8] [1])

for (var i = 0 ; i < row.length ; i++  ) {

        for (var j = 0 ; j < row[i].length ; j++  ) {
        console.log(row[i][j]) ;
        }
}

var arr = [] ;
for (var i = 0 ; i < 10 ; i++  ) {
    arr[i] = [] ;
    for (var j = 0 ; j < 10 ; j++  ) {
        var num = i*10 + j+1 ;
        arr[i][j] = num ;
        //console.log(row[i])
    }
}
