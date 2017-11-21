//var dice =Math.floor(Math.random()*6)+1;
//document.querySelector('#score-0').textContent = dice;
//document.querySelector('#current-0').textContent = dice;
//document.querySelector('#current-0').innerHTML = '<em>'+dice+"<em>";
//document.querySelector('.dice').style.display = 'none';
//document.querySelector('.dice').src = '..img/dice-1.png' ;

var dice ;
var roundScore ;
var activePlayer ;
var scores ;
var gamePlaying ;

function init () {
    roundScore = 0 ;
    activePlayer = 0;
    scores = [0,0] ;
    gamePlaying = true ;
    //시작할때 주사위 보이지 않게
    document.querySelector('.dice').style.display='none' ;
    //시작할때 숫자들 모두 0으로, 겟엘리먼트아이디는 아이디 포함 샵 필요없음 textContent 는 아이디값
    document.getElementById('score-0').textContent = 0 ;
    document.getElementById('score-1').textContent = 0 ;
    document.getElementById('current-0').textContent = 0 ;
    document.getElementById('current-1').textContent = 0 ;

    //승리한 위너 텍스트 변경
    document.getElementById('name-0').textContent = 'player 1' ;
    document.getElementById('name-1').textContent = 'player 2' ;
    //위너 클래스 삭제
    document.querySelector('.player-0-panel').classList.remove('winner') ;
    document.querySelector('.player-1-panel').classList.remove('winner') ;
    //엑티브 클래스 삭제
    document.querySelector('.player-0-panel').classList.remove('active') ;
    document.querySelector('.player-1-panel').classList.remove('active') ;
    //처음 플레이어1 에게 엑티브 클래스 추가
    document.querySelector('.player-0-panel').classList.add('active') ;
}
init() ;

//콜백 함수 불러서 어떤 값을 빼게해줌
var btn_roll = function() {
    //alert('roll 버튼 클릭');
    if(gamePlaying) {
    //1.랜덤 숫자 나오게 하기
        var dice = Math.floor(Math.random()*6)+1 ;
        console.log(dice) ;
    //주사위 그림 보여주기
    //document.querySelector('.dice').style.display='block' ;
        var diceDOM = document.querySelector('.dice') ;
       diceDOM.style.display = 'block' ;
       diceDOM.src='./img/dice-'+dice+'.png' ;
    //클릭, 랜덤 값 에 따른 맞는 이미지 출력
    //document.getElementById('score-0').textContent = dice ;
    //3, 주사위가 1이 나오면 플레이어가 바뀐다,, dice가 1이 아니면 !==1
       if (dice !==1){
          //add score
                roundScore += dice ;
                document.querySelector('#current-'+activePlayer).textContent = roundScore ;
       } else {
            //next player
            nextPlayer() ;
        }
    }
};

document.querySelector('.btn-roll').addEventListener('click',btn_roll);

function btn_hold(){
    //alert('hold 버튼을 눌렀습니다.');
    //1.current 값을 score에 더함
    scores[activePlayer] += roundScore ;

    // 2. 화면변경
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]
    var input = document.querySelector('.final-score').value ;
    console.log('input='+input);
    var winningScore ;
    if(input) {
        winningScore = input ;
    } else {
        winningScore = 20 ;
    }
    //3. 백점이 넘으면 ..50
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-'+activePlayer).textContent = 'winner' ;
        document.querySelector('.dice').style.display = 'none' ;

        //이겼을때 클래스 변경
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner') ;
        //document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active') ;
        gamePlaying = false ;
    } else {
        nextPlayer();
    }

}
document.querySelector('.btn-hold').addEventListener('click', btn_hold) ;

//플레이어 변동
function nextPlayer(){

        if(activePlayer == 0){
            activePlayer = 1 ;
        } else {
            activePlayer = 0;
        }
        //activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        //위에 if 액티브플레이어 를 한줄의 조건문으로 바꿈
        roundScore = 0 ;
        document.getElementById('current-0').textContent = 0 ;
        document.getElementById('current-1').textContent = 0 ;
        //패널 바꾸기
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //플레이어 바뀔 때 주사위 안보이기
        document.querySelector('.dice').style.display = 'none' ;

}
function btn_new() {
    //alert('새로운 게임을 눌렀습니다');
    init() ;
}
document.querySelector('.btn-new').addEventListener('click', btn_new);
