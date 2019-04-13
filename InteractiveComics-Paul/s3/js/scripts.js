var usb = false;
var folder = false;
var b1 = false;
var b2 = false;

function message1(){
  alert("There is nothing special with this flower vase.");
}
function message2(){
  alert("It is Winnie's certificate of being an outstanding researcher of criminal psychology.")
}
function message3(){
  alert("There is only a pile of blank A4 paper.")
}
function USB(){
  usb = true;
  slideIn("Usb","Right",usb);
  usb = false;
  b1 = true;
  if(b1===true && b2===true){
    setInterval(function(){transit();},2000);
  }
}
function FOLDER(){
  folder = true;
  slideIn("Folder","Left",folder);
  folder = false;
  b2 = true;
  if(b1===true && b2===true){
    setInterval(function(){transit();},2000);
  }
}

function slideIn(name,direction,b){
  if (b===true){
    var img = document.getElementById(name);
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
  var button = document.getElementById("but");
     button.style.visibility="visible";
  b1 = false;
  b2 = false;
}
