
function calculateage(birth2, birth){
        var age  = birth2 - birth ;

       if(age ===27 ) {
            return "20대" ;
       } else if (age === 10 ) {
            return "10대" ;
       } else if (age === 7 ) {
            return "아동" ;
       }

        return age ;
}

var birth = 2017 ;
var birth2 = 2011 ;

var agejohn = calculateage(birth, birth2) ;
console.log(agejohn) ;

//var agejohn = 2017 - 1990 ;
//var agejohn = calculateage(1990) ;

//var agemike = 2017 - 1900 ;
//var agemina = 2017 - 1802 ;

var scope = "global scope" ;

function checkscope(scope) {

    var scope = scope ;

    console.log(scope) ;
    scope = "local scope" ;

}

checkscope(scope) ;
console.log(scope) ;

//console.log("agejohn;"+agejohn) ;
//console.log("agemike;"+agemike) ;
//console.log("agemina;"+agemina) ;