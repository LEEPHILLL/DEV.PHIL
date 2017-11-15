

function getDay(year,month){

        var lastMonth = new Array(31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        var mon2 ;

            //윤년체크
            if(year % 4 == 0){
                mon2 = true ;
            }
            if(year % 100 == 0){
                mon2 = false ;
            }
            if(year % 400 == 0){
                mon2 = true ;
            }
            if(mon2){
                lastMonth[1] = 29 ;
            } else {
                lastMonth[1] = 28 ;
            }

            return lastMonth[month];
            }

function drawCalendar(firstDay, days, date, year, month) {
        document.write("firstDay="+firstDay+"days="+days+"date="+date+"year;"+year+", month;"+month )
        var text = "<center>" ;
        text += "<table border=\'1\'>";
        text +="    <th colspan='7' bgcolor= '#ffffcc'>";
        text +="       "+year+"년" +(month+1) +"월" ;
        text +=         "</th>" ;
        text +=         "<tr>" ;

var weekday = new Array("일","월","화","수","목","금","토")
for( var i =0 ; i < weekday.length ; i++){
        text +=     "<td width='100' height='90'>"+weekday[i]+"</td>"
}
        text +=         "</tr>" ;

        var digit = 1; //날짜
        var curCeil= 1; //몇칸을띠울지
        var rowSize = Math.ceil( ( days+firstDay -1)/7 ) ;

        for(var row =1 ; row <= rowSize ; row++){
            text += "<tr>";

            for(var col=1; col<= 7 ; col++ ){
                if(digit>days){
                //마지막 남은 공간 개수 맞추기(날짜 맞추기)
                    n = (Math.ceil((days+firstDay-1)/7))*7 - (curCeil+days-1);
                    for(var i=1 ; i<=n ; i++){
                        text +="<td>&nbsp;</td>"
                    }
                    //마지막 날짜 이후 없앰
                    break ;
                }
                if(curCeil<firstDay){
                    text += "<td>&nbsp;</td>"
                    curCeil++;
                } else {
                    text += "<td height=40>"+digit+"</td>";
                    digit++;
                }
            }
        }

        text += "</table>" ;
        text += "</center>" ;

        return text ;
}

var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();


var firstDayInstance = new Date(year, month, 1) ;
//매월 1일 앞에 이전달이 몇칸인지
var firstDay = firstDayInstance.getDay() +1 ;
var days = getDay(year, month);

var mycalendar = drawCalendar(firstDay, days, date, year, month) ;
document.write(mycalendar) ;