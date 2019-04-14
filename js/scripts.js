var scene = "";
var section = "";
var b0 = false;
var b1_2_1 = false, b1_2_2 = false, b1_2_3 = false,b1_2_4 = false,b1_2_5 = false;
var b2_1_1=false
var b2_2_1=false,b2_2_2=false,b2_2_3=false,b2_2_4=false;
var slidein = false;
var transition = false;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function bye(){
  var y = window.scrollY;
  var cover = document.getElementById("cover");
  // var container = document.getElementById("container");
  if(y>2 && b0===false){
    cover.classList.toggle("hide");
    // container.classList.toggle("show");
    b0=true;
  }
}

function popBubble(){
  var y = window.scrollY;
  var h = document.body.scrollHeight;

 if(y<=1500){
    scene = "s1-2-";
    if(y>180 && y<=420){
      section = "1";
      popup(scene,section,b1_2_1);
      b1_2_1=true;
    }else if(y>390 && y<=590){
      section = "2";
      popup(scene,section,b1_2_2);
      b1_2_2=true;
    }else if(y>700 && y<=800){
      section = "3";
      popup(scene,section,b1_2_3);
      b1_2_3=true;
    }
    else if(y>1100 && y<=1200){
      section = "4";
      popup(scene,section,b1_2_4);
      b1_2_4=true;
    }
    else if(y>1300 && y<=1500){
      section = "5";
      popup(scene,section,b1_2_5);
      b1_2_5=true;
    }
  }
  else{
    scene = "s2-";
    if(y>2400 && y<=2800){
      section = "1-1";
      popup(scene,section,b2_1_1);
      b2_1_1=true;
    }else if(y>2450 && y<=3000){
      section = "2-1";
      popup(scene,section,b2_2_1);
      b2_2_1=true;
    }else if(y>3200 && y<=3300){
      section = "2-2";
      popup(scene,section,b2_2_2);
      b2_2_2=true;
    }else if(y>3200 && y<=3400){
      section = "2-3";
      popup(scene,section,b2_2_3);
      b2_2_3=true;
    }else if(y>3400 && y<=3600){
      section = "2-4";
      popup(scene,section,b2_2_4);
      var scene2=""
      var section2 = "lookleft";
      popup(scene2,section2,b2_2_4);
      b2_2_4=true;
    }
  }
}

function popup(scene,section,b){
  if(b===false){
    var popup = document.getElementById(scene+section);
    popup.classList.toggle("show");
  }
}

// var img = document.createElement("img");
var img = new Image();
img.src = "images/s2-03.png";

function slideIn(){
  slidein=true;
  if (slidein===true){
    document.body.appendChild(img);
    img.style.display="block";
    img.style.position="absolute";
    img.style.top="3715px";
    img.style.left="-100%";
    img.style.animation="slideIn 10s";
    img.style.WebkitAnimation="slideIn 10s";
    slidein = false;
    transition = true;
    if(transition===true){
      transit();
    }
  }
}

function transit(){
    var img = document.createElement("img");
      img.src = "images/s2-4.png";
      img.style.display="block";
      img.style.position="absolute";
      img.style.top="4500px";
      img.style.left="216px";
      document.body.append(img);
    var button = document.getElementById("but").style;
       button.opacity="1";
       button.top="5400px";
    transition = false;
}
