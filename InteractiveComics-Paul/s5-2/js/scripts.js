var scene = "";
var section = "";
var downloading=false, arrow=false;
var b5_2_1_step1=false, b5_2_1_step2=false;
var b5_2_1_3 = false, b5_2_1_complete = false, b5_2_1_paul=false, b5_2_1_sure = false;
var b5_2_2_1=false, b5_2_2_2=false;
var b5_2_3_1=false;
var b5_2_4_1=false, b5_2_4_2=false;


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function addImg(){
  popup("downloading","",downloading);
  popup("arrow","",arrow);
  var body=document.body;
    body.style.overflowY=('auto');
}

function popBubble(){
  var y = window.scrollY;
  console.log(y);
  var h = document.body.scrollHeight;
  if(y<=3700){
    scene = "s5-2-1-";
    if(y>550 && y<=600){
      section = "step1";
      popup(scene,section,b5_2_1_step1);
      b5_2_1_step1=true;
    }else if(y>700 && y<=800){
      section = "step2";
      popup(scene,section,b5_2_1_step2);
      b5_2_1_step2=true;
      slideIn("s5-2-1-3",b5_2_1_3);
      b5_2_1_3=true;
    }else if(y>2600 && y<=2700){
      section = "complete";
      popup(scene,section,b5_2_1_complete);
      b5_2_1_complete=true;
      section2 = "paul";
      popup(scene,section2,b5_2_1_paul);
      b5_2_1_paul=true;
    }else if(y>3600 && y<=3700){
      section = "sure";
      popup(scene,section,b5_2_1_sure);
      b5_2_1_sure=true;
    }
  }
  else if(y>3600 && y<=5500){
    scene = "s5-2-2-";
    if(y>5000 && y<=5100){
      section = "1";
      popup(scene,section,b5_2_2_1);
      b5_2_2_1 = true;
    }else if(y>5400 && y<=5500){
      section = "2";
      popup(scene,section,b5_2_2_2);
      b5_2_2_2 = true;
    }
  }
  else if(y>6200 && y<=6300){
    scene = "s5-2-3-";
    section = "1";
    popup(scene, section, b5_2_3_1);
    b5_2_3_1=true;
  }
  else if(y>7500){
    scene = "s5-2-4-";
    if(y>7800 && y<=8000){
      section = "1";
      popup(scene,section,b5_2_4_1);
      b5_2_4_1 = true;
    }else if(y>8700 && y<=8800){
      section = "2";
      popup(scene,section,b5_2_4_2);
      b5_2_4_2 = true;
    }
  }
}

function popup(scene,section,b){
  if(b===false){
    var popup = document.getElementById(scene+section);
    popup.classList.toggle("show");
  }
}

function slideIn(name,b){
  if (b===false){
    var img = document.getElementById(name);
    img.style.animation="slideIn"+" 2.5s";
    img.style.WebkitAnimation="slideIn"+" 2.5s";
    img.style.left="0px";
  }
}

function footsteps() {
  var y = window.scrollY;

  if (y > 400 && y<=3300) {
    document.getElementById("player").play();
  }
  else {
    document.getElementById("player").pause();
  }
}
