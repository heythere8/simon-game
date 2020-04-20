var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];

var i=0;
var userClickedPattern = [];
var started=false;


$(".btn").click(function() {
var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);
sound(userChosenColour);
animation(userChosenColour);
checkanswer(userClickedPattern.length-1);
});


$(document).keypress(function() {
  if (!started) {
    nextsequence();
    started = true;
  }
});


function nextsequence(){
userClickedPattern=[];
i++;
$("#level-title").text("Level " + i);
var randomNumber=Math.floor(Math.random()*4);
var randomChoosenColour=buttonColours[randomNumber];
gamePattern.push(randomChoosenColour);
animation(randomChoosenColour);
sound(randomChoosenColour);



}
function animation(vaule){
  $("."+vaule).addClass("pressed");
  setTimeout(function(){$("."+vaule).removeClass("pressed");}, 100);
}

function sound(key)
{
switch (key)
{
  case "red":
  var crash=new Audio("sounds/red.mp3");
  crash.play();
  break;
  case "blue":
  var kick=new Audio("sounds/blue.mp3");
  kick.play();
  break;
  case "green":
  var snare=new Audio("sounds/green.mp3");
  snare.play();
  break;
  case "yellow":
  var tom1=new Audio("sounds/yellow.mp3");
  tom1.play();
  break;

  default:  var tom2=new Audio("sounds/wrong.mp3");
    tom2.play();
}
}


function checkanswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
     
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function(){nextsequence();},1000);
    }
  }
  else{
    wrong()
    }

}
function startover(){
  i=0;
  gamePattern=[];
  started=false;

}
function wrong(){
  $("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass("game-over");}, 300);
    $("h1").text("Game over press any key to play again");
    sound("wrong");
    startover();
}
