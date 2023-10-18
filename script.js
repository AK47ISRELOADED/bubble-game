var timer = 60;
var score = 0;
var hitrn = 0;


function makebubble(){
    var clutter= "";


for(var i=1; i<=119;i++){
    var rn = Math.floor(Math.random()*10);
   clutter += ` <div id="bubble">${rn}</div>`;
}

document.querySelector("#bottom").innerHTML = clutter;      


}

function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#bottom").innerHTML = ` <h1> GAME OVER .</h1> `;
             }
    },1000)
}

function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function  inncresescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#bottom"),addEventListener("click",  function(dets) {
    var clknum  = Number(dets.target.textContent);
    if(  clknum == hitrn ){
        inncresescore();
        getnewhit();
        makebubble();
    }
    else{

    }
});

runtimer();
makebubble();
getnewhit();
