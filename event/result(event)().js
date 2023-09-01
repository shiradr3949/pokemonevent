const taskclear = Number(localStorage.getItem("taskclear"));
const task1 = localStorage.getItem("task1");
const task2 = localStorage.getItem("task2");
const task3 = localStorage.getItem("task3");
const name = localStorage.getItem("BOSSname");
let score = Number(localStorage.getItem("score"));
let body = document.getElementById("body");
let scorerate = 0;
let TCpt = 0;
let semiscore;
let namedp;
let star = [0,1,2];
let tasks = [0,1,2];
let scorept = 0;
let scoredp = [0,1,2,3,4,5,6,7,8,9];

window.onload = function() {
 start1();
}
function start1() {
 scoredp[0] = document.getElementById("score1");
 scoredp[1] = document.getElementById("score2");
 scoredp[2] = document.getElementById("score3");
 scoredp[3] = document.getElementById("score4");
 scoredp[4] = document.getElementById("score5");
 scoredp[5] = document.getElementById("score6");
 scoredp[6] = document.getElementById("score7");
 scoredp[7] = document.getElementById("score8");
 scoredp[8] = document.getElementById("score9");
 scoredp[9] = document.getElementById("score10");
 star[0] = document.getElementById("star1");
 star[1] = document.getElementById("star2");
 star[2] = document.getElementById("star3");
 tasks[0] = document.getElementById("task1");
 tasks[1] = document.getElementById("task2");
 tasks[2] = document.getElementById("task3");
 namedp = document.getElementById("name");
 namedp.innerHTML = name;
 body.style.visibility = "visible";
 loop();
}

function start2() {
 scoredp[9 - scorerate].innerHTML = Math.floor(score / Math.pow(10,9));
 semiscore = Math.floor(score / Math.pow(10,scorerate + 1) * 10 / Math.pow(10,9 - scorerate)) * Math.pow(10,9 - scorerate);
 score -= semiscore * Math.pow(10,scorerate + 1) / 10;
 scoredp[8 - scorerate].innerHTML = Math.floor(score / Math.pow(10,8));
 semiscore = Math.floor(score / Math.pow(10,scorerate + 1) * 10 / Math.pow(10,8 - scorerate)) * Math.pow(10,8 - scorerate);
 score -= semiscore * Math.pow(10,scorerate + 1) / 10;
 scoredp[7 - scorerate].innerHTML = Math.floor(score / Math.pow(10,7));
 semiscore = Math.floor(score / Math.pow(10,scorerate + 1) * 10 / Math.pow(10,7 - scorerate)) * Math.pow(10,7 - scorerate);
 score -= semiscore * Math.pow(10,scorerate + 1) / 10;
 scoredp[6 - scorerate].innerHTML = Math.floor(score / Math.pow(10,6));
 if (0 <= 5 - scorerate) {
  semiscore = Math.floor(score / Math.pow(10,scorerate + 1) * 10 / Math.pow(10,6 - scorerate)) * Math.pow(10,6 - scorerate);
  score -= semiscore * Math.pow(10,scorerate + 1) / 10;
  scoredp[5 - scorerate].innerHTML = Math.floor(score / Math.pow(10,5));
 } else {
  scoredp[4].innerHTML = " ";
 };
 if (0 <= 4 - scorerate) {
  semiscore = Math.floor(score / Math.pow(10,scorerate + 1) * 10 / Math.pow(10,5 - scorerate)) * Math.pow(10,5 - scorerate);
  score -= semiscore * Math.pow(10,scorerate + 1) / 10;
  scoredp[4 - scorerate].innerHTML = Math.floor(score / Math.pow(10,4));
 } else {
  scoredp[5].innerHTML = " ";
 };
 if (0 <= 3 - scorerate) {
  semiscore = Math.floor(score / Math.pow(10,scorerate + 1) * 10 / Math.pow(10,4 - scorerate)) * Math.pow(10,4 - scorerate);
  score -= semiscore * Math.pow(10,scorerate + 1) / 10;
  scoredp[3 - scorerate].innerHTML = Math.floor(score / Math.pow(10,3));
 } else {
  scoredp[6].innerHTML = " ";
 };
 if (0 <= 2 - scorerate) {
  semiscore = Math.floor(score / Math.pow(10,scorerate + 1) * 10 / Math.pow(10,3 - scorerate)) * Math.pow(10,3 - scorerate);
  score -= semiscore * Math.pow(10,scorerate + 1) / 10;
  scoredp[2 - scorerate].innerHTML = Math.floor(score / Math.pow(10,2));
 } else {
  scoredp[7].innerHTML = " ";
 };
 if (0 <= 1 - scorerate) {
  semiscore = Math.floor(score / Math.pow(10,scorerate + 1) * 10 / Math.pow(10,2 - scorerate)) * Math.pow(10,2 - scorerate);
  score -= semiscore * Math.pow(10,scorerate + 1) / 10;
  scoredp[1 - scorerate].innerHTML = Math.floor(score / Math.pow(10,1));
 } else {
  scoredp[8].innerHTML = " ";
 };
 if (0 <= 0 - scorerate) {
  semiscore = Math.floor(score / Math.pow(10,scorerate + 1) * 10 / Math.pow(10,1 - scorerate)) * Math.pow(10,1 - scorerate);
  score -= semiscore * Math.pow(10,scorerate + 1) / 10;
  scoredp[0].innerHTML = Math.floor(score / Math.pow(10,scorerate + 1) * 10);
 } else {
  scoredp[9].innerHTML = " ";
 };
 scoredisplay();
}
function scoredisplay() {
 if (10 - scorerate !== scorept) {
  scoredp[scorept].style.visibility = "visible";
  scorept += 1;
  setTimeout(scoredisplay,300);
 } else {
  setTimeout(TC,750);
 };
}
function loop() {
 if (score < 1000000000) {
  score = score * 10;
  scorerate += 1;
  setTimeout(loop,50);
 } else {
  start2();
 };
}
function TC() {
 if (TCpt === 0) {
  if (1 <= taskclear) {
   //star[0].style.visibility = "visible";
   star[0].src = "BOSSimg/star.png";
  };
 } else {
  if (TCpt === 1) {
   if (2 <= taskclear) {
    //star[1].style.visibility = "visible";
    star[1].src = "BOSSimg/star.png";
   };
  } else {
   if (TCpt === 2) {
    if (3 <= taskclear) {
     //star[2].style.visibility = "visible";
     star[2].src = "BOSSimg/star.png";
    };
   };
  };
 };
 TCpt += 1;
 if (TCpt < 3) {
  setTimeout(TC,750);
 } else {
  setTimeout(taskcleared,400);
 };
}
function taskcleared() {
 if (task1 === "true") {
  tasks[0].src = "BOSSimg/star.png"; 
 };
 if (task2 === "true") {
  tasks[1].src = "BOSSimg/star.png"; 
 };
 if (task3 === "true") {
  tasks[2].src = "BOSSimg/star.png"; 
 };
}