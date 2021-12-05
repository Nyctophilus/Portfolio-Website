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


















    function showcoffe(){
  document.getElementById('coffe').classList.toggle("show");
  console.log("coffeeeeeeeeee");
}





/* rain */ 
function setVolume(val)
    {
        var player1 = document.getElementById('audio1');
        console.log('Before: ' + player1.volume);
        player1.volume = val / 1;
        console.log('After: ' + player1.volume);


        
    }


function play_rain(){

var player = document.getElementById('audio1');
        player.volume = .5 / 1;



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


/* lighting */

function setVolume2(val){
var player2 = document.getElementById('audio2');
        console.log('2Before: ' + player2.volume);
        player2.volume = val / 1;
        console.log('2After: ' + player2.volume);

}

function play_lighting(){

var player = document.getElementById('audio2');
        player.volume = .5 / 1;



  var sliderBar = document.getElementById('volume-slider2');
  sliderBar.classList.toggle("v-slider");

  var play_lighting = document.getElementById("audio2");
  

  if(play_lighting.paused){
  play_lighting.play();
  console.log("listen to the lighting!");}


  else{
  play_lighting.pause();
  console.log("lighting has Stopped!");}

}


/* wind */

function setVolume3(val){
var player2 = document.getElementById('audio3');
        console.log('3Before: ' + player2.volume);
        player2.volume = val / 1;
        console.log('3After: ' + player2.volume);

}

function play_wind(){

var player = document.getElementById('audio3');
        player.volume = .5 / 1;



  var sliderBar = document.getElementById('volume-slider3');
  sliderBar.classList.toggle("v-slider");

  var play = document.getElementById("audio3");
  

  if(play.paused){
  play.play();
  console.log("listen to the wind!");}


  else{
  play.pause();
  console.log("wind has Stopped!");}

}



/* river */

function setVolume4(val){
var player = document.getElementById('audio4');
        player.volume = val / 1;
}

function play_river(){

var player = document.getElementById('audio4');
        player.volume = .5 / 1;



  var sliderBar = document.getElementById('volume-slider4');
  sliderBar.classList.toggle("v-slider");

  var play = document.getElementById("audio4");
  

  if(play.paused){
  play.play();
  console.log("listen to the river!");}


  else{
  play.pause();
  console.log("river has Stopped!");}

}



/* shore */

function setVolume5(val){
var player = document.getElementById('audio5');
        player.volume = val / 1;
}

function play_shore(){

var player = document.getElementById('audio5');
        player.volume = .5 / 1;



  var sliderBar = document.getElementById('volume-slider5');
  sliderBar.classList.toggle("v-slider");

  var play = document.getElementById("audio5");
  

  if(play.paused){
  play.play();
  console.log("listen to the shore!");}


  else{
  play.pause();
  console.log("shore has Stopped!");}

}


/* shore */

function setVolume6(val){
var player = document.getElementById('audio6');
        player.volume = val / 1;
}

function play_fire(){

var player = document.getElementById('audio6');
        player.volume = .5 / 1;



  var sliderBar = document.getElementById('volume-slider6');
  sliderBar.classList.toggle("v-slider");

  var play = document.getElementById("audio6");
  

  if(play.paused){
  play.play();
  console.log("listen to the fire!");}


  else{
  play.pause();
  console.log("fire has Stopped!");}

}


/* bird */

function setVolume6(val){
var player = document.getElementById('audio7');
        player.volume = val / 1;
}

function play_bird(){

var player = document.getElementById('audio7');
        player.volume = .5 / 1;



  var sliderBar = document.getElementById('volume-slider7');
  sliderBar.classList.toggle("v-slider");

  var play = document.getElementById("audio7");
  

  if(play.paused){
  play.play();
  console.log("listen to the bird!");}


  else{
  play.pause();
  console.log("bird dead!");}

}







function floatHRT(){
        var hrt = document.getElementById("hearts-alpaca");
        hrt.classList.toggle("hearts-ff");
}






// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}













function getMeAcoffee() {
        var GetMeDrink = document.getElementById("coffeeMac");
        GetMeDrink.classList.toggle("drinkshow");
}