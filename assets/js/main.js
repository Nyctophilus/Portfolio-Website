document.addEventListener("DOMContentLoaded",function(){new SweetScroll({}),particlesJS("particles-js",{particles:{number:{value:30,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"polygon",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:19.18081918081918,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}},nb:80},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})},!1);


function moblieAlert() {
  alert("My mobile numbers: 01000962127 & 01125595287");
};


function darkModeToggle() {
  var element = document.getElementById("bod");
  element.classList.toggle('dark-mode');
}

function mailpop(){

  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function mclick() {

  navigator.clipboard.writeText("mohammed.yuossry@gmail.com");
  alert("Mail has been copied to clipboard!👇🤗🤩")
}


function initVolume(val)
    {
        var player = document.getElementById('audio1');
        player.volume=.5;
        player.volume = val / 1;
    }
function setVolume(val)
    {
        var player = document.getElementById('audio1');
        console.log('Before: ' + player.volume);
        player.volume = val / 1;
        console.log('After: ' + player.volume);
    }

function play_rain(){
  var sliderBar = document.getElementById('volume-slider');
  sliderBar.classList.toggle("v-slider");

  var play_rain = document.getElementById("audio1");
  

  if(play_rain.paused){
  play_rain.play();
  console.log("listen to the rain!");}


  else{
  play_rain.pause();
  console.log("rain has Stopped!");}

}

function play_lighting(){
  var sliderBar = document.getElementById('volume-slider2');
  sliderBar.classList.toggle("v-slider");

  var play_rain = document.getElementById("audio2");
  

  if(play_rain.paused){
  play_rain.play();
  console.log("listen to the lighting!");}


  else{
  play_rain.pause();
  console.log("lighting has Stopped!");}

}

