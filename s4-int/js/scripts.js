var laptop = false;
var cupboard = false;
var b1 = false;
var b2 = false;

function message1() {
  cupboard = true;
  slideIn("cupboard-slide","Left",cupboard);
  cupboard = false;
 b1 = true;

  if (b1===true && b2 === true) {
    setInterval(function(){transit();},4000);
  }
}

function message2() {
  laptop = true;
  slideIn("laptop-slide", "Right",laptop);
  laptop = false;

  b2 = true;

  if (b1 ===true && b2===true) {
    setInterval(function(){transit();},4000);
  }
}

function slideIn(name,direction,b) {
  if (b===true) {
    var img =
    document.getElementById(name);
    img.style.animation="slideIn"+direction+" 0.5s";
    img.style.WebkitAnimation="slideIn"+direction+" 0.5s";
    if(direction==="Left"){
      img.style.left="0%";
    }else{
      img.style.right="0%";
  }
}
}


function transit(){
  var button =
  document.getElementById("Paulisculprit");
    button.style.visibility="visible";

    b1 = false;
    b2 = false;

  var button1 = document.getElementById("choice1").style;
    button1.top="544px";
    button1.left="27%";

  var button2 = document.getElementById("choice2").style;
    button2.top="544px";
    button2.left="46%";

  console.log(button2);
}
