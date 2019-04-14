var scene = "";
var section = "";
var b4_1_1 = false, b4_1_2 = false, b4_1_3 = false;
var arrow=false;
var b4_2_1=false;
var b4_3_1=false,b4_3_2=false,b4_3_3=false;
var scroll=false;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function popBubble(){
  var y = window.scrollY;
  var h = document.body.scrollHeight;
  if(y<=400){
    scene = "s4-1-";
    if(y>5 && y<=150){
      section = "1";
      popup(scene,section,b4_1_1);
      b4_1_1=true;
    }else if(y>120 && y<=200){
      section = "2";
      popup(scene,section,b4_1_2);
      b4_1_2=true;
    }else if(y>280 && y<=340){
      section = "3";
      slideIn(scene,section,b4_1_3);
      b4_1_3=true;
    }
  }
  else if(y>2100 && y<=2200){
      if(scroll===false){
        document.body.style.overflowY=('hidden');
      }
  }
  else if(y>3800){
    scene = "s4-3-";
    if(y>3800 && y<=4300){
      section = "1";
      ringing(scene,section,b4_3_1);
      b4_3_1=true;
    }else if(y>4500 && y<=5000){
      section = "2";
      popup(scene,section,b4_3_2);
      b4_3_2=true;
      section2="3";
      popup(scene,section2,b4_3_3);
      b4_3_3=true;
    }
  }
}

function popup(scene,section,b){
  if(b===false){
    var popup = document.getElementById(scene+section);
    popup.classList.toggle("show");
  }
}

function ringing(scene,section,b){
   if(b===false){
     var ringing = document.getElementById(scene+section);
     ringing.classList.toggle("ring");
   }
 }

function camera(){
   scroll=true;
   // document.getElementById("#s4-2-1").style.opacity=("1");
   popup("s4-2-","1",b4_2_1);
   document.body.style.overflowY=('auto');
 }

function slideIn(scene,section,b){
  if (b===false){
    var img = document.getElementById(scene+section);
    img.style.animation="slideIn 2s";
    img.style.WebkitAnimation="slideIn 2s";
    img.style.left="20%";
    }
  }

function phoneRing() {
  var y = window.scrollY;

  if (y > 3800 && y<=5700) {
    document.getElementById("player").play();
  }
  else {
    document.getElementById("player").pause();
  }
}
