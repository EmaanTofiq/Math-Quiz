var playing=false;
var score;
var timeremaining;
var action;
var correctAns;
// if we click on strt/reset btn
document.getElementById('start-reset').onclick=function(){
    // if we are playing
    if(playing==true){
       // reload page
        location.reload();   
    }
    else{ // if we r nt playing
        playing=true;
    //    set score to 0
    score=0;
    document.getElementById("scorevalue").innerHTML=score;
        // show countdown box
    document.getElementById('time-btn').style.display='block';
    timeremaining=60;
    document.getElementById('time-val').innerHTML=timeremaining;
        // hide game over
        hide('game-over'); 
    // chng btn to reset

    document.getElementById('start-reset').innerHTML="Reset Game";
        // start countdown
        startcountdown();
        // generate new ques
        generateQA();

    }
}

// if we clk on ans box

for(var i=1;i<5;i++){
    document.getElementById('op'+i).onclick=function(){
        if(this.innerHTML==correctAns){
            score++;
            document.getElementById('scorevalue').innerHTML=score;
            hide('wrong');
            show('correct');
            setTimeout(function(){
                hide('correct')
            },1000)
            generateQA();
        }
        else{
            document.getElementById('wrong').style.display='block';
            setTimeout(function(){
                hide('wrong')
            },1000)
        }
    }
}
//    if correct
    // yes?
        // show correct box for 1 sec
        // incrz scr by 1
        // generate new ques
    // no?
        // show try again box for 1 sec


function startcountdown(){
// start counter

    action=setInterval(function(){
        timeremaining-=1;
    document.getElementById('time-val').innerHTML=timeremaining;
    if(timeremaining==0){
        // stop counter

        stopcountdown();
        show('game-over');
        document.getElementById('game-over').innerHTML='<p>game over!</p> <p>your score is ' + score +'.</p>';
        hide('time-btn');  
        hide('correct');
        hide('wrong');
        playing=false; 
    document.getElementById('start-reset').innerHTML="Start Game";
    }
    },1000)
   

}

function stopcountdown(){
    clearInterval(action);
}

function hide(id){
    // hide elements
    document.getElementById(id).style.display='none';
}
function show(id){
    // show elements
    document.getElementById(id).style.display='block';
}
function generateQA(){
    var x=1+Math.round(9*Math.random());
    var y=1+Math.round(9*Math.random());
    correctAns=x*y;
    document.getElementById('question').innerHTML=x+'x'+y;
    var correctPos=1+Math.round(3*Math.random());
    // correct answer
    document.getElementById('op'+correctPos).innerHTML=correctAns;
    // wrong answer
    var answer=[correctAns];
    for(var i=1;i<5;i++){
        if(i!==correctPos){
            var wrongAns;
            do {
             wrongAns=1+Math.round(9*Math.random())*1+Math.round(9*Math.random());
            } while (answer.indexOf(wrongAns)>-1);
            
            document.getElementById('op'+i).innerHTML=wrongAns;
            answer.push(wrongAns);
        }
        }

}