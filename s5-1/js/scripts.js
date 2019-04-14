var scene = "";
var section = "";
var b5_1_2 = false, b5_1_4 = false, b5_1_5 = false;
var bFall=false;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function popBubble(){
  var y = window.scrollY;
  var h = document.body.scrollHeight;
  scene = "s5-1-";
  if(y>1000 && y<=1300){
    section = "2";
    popup(scene,section,b5_1_2);
    b5_1_2=true;
  }else if(y>2600 && y<=3000){
    section = "4";
    popup(scene,section,b5_1_4);
    b5_1_4=true;
    if(b5_1_4===true){
      bFall=true;
      fall(scene,section,bFall);
    }
    bFall=false;
  }else if(y>3700 && y<=h){
    section = "5";
    popup(scene,section,b5_1_5);
    b5_1_5=true;
  }
}

function popup(scene,section,b){
  if(b===false){
    var popup = document.getElementById(scene+section);
    popup.classList.toggle("show");
  }
}

function fall(scene,section,b){
  if (b===true){
    var img = document.getElementById(scene+section);
    img.style.animation="fall 2.5s";
    img.style.WebkitAnimation="fall 2.5s";
    img.style.left="550px";
    img.style.top="250px";
    img.style.width="30%";
    }
  }
