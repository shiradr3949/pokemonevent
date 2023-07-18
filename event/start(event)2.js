const body = document.getElementById("body");
let Pnameon = null;
while (Pnameon === null || Pnameon === "") {
 Pnameon = prompt("あなたの名前は？");
};
localStorage.setItem("names",Pnameon);
alert("強力なボスが現れました。選択して倒しましょう！");

let name;
let img;
let DCdp;
let Srate;
let HPrate;
let Rrate;
let button;
let DCN;
let note1;
let note2;
let icon1;
let resist;
let apocalypse;
let EN = 0;
let unlocked = false;

window.onload = function() {
 start();
};
function start() {
 name = document.getElementById("name");
 img = document.getElementById("img");
 DCdp = document.getElementById("DCdp");
 Srate = document.getElementById("Srate");
 HPrate = document.getElementById("HPrate");
 Rrate = document.getElementById("Rrate");
 note1 = document.getElementById("note1");
 note2 = document.getElementById("note2");
 icon1 = document.getElementById("icon1");
 resist = document.getElementById("resist");
 apocalypse = document.getElementById("apocalypse");
 button = document.getElementById("button");
 button.onclick = function() {
  DCN = document.getElementById("difficulty");
  radioNodeList = DCN.elements["difficulty"];
  DCN = radioNodeList.value;
  localStorage.setItem("eventnumber",EN);
  localStorage.setItem("scorerate",DC[DCN].score);
  localStorage.setItem("HPrate",DC[DCN].HP);
  localStorage.setItem("Rrate",DC[DCN].R);
  localStorage.setItem("resist",DC[DCN].note2);
  if (DC[DCN].note1 === "ボスの全ての能力がアップ") {
   localStorage.setItem("allup",true);
  } else {
   localStorage.setItem("allup",false);
  };
  if (DC[DCN].note1 === "ボスの全ての能力がとてもアップ") {
   localStorage.setItem("allup2",true);
  } else {
   localStorage.setItem("allup2",false);
  };
  if (DC[DCN].note1 === "ボスの全ての能力がかなりアップ") {
   localStorage.setItem("allup3",true);
  } else {
   localStorage.setItem("allup3",false);
  };
  if (DC[DCN].note1 === "ボスの全ての能力がものすごくアップ") {
   localStorage.setItem("allup4",true);
  } else {
   localStorage.setItem("allup4",false);
  };
  if (DC[DCN].note1 === "ボスの全ての能力が異常にアップ") {
   localStorage.setItem("allup5",true);
  } else {
   localStorage.setItem("allup5",false);
  };
  if (DC[DCN].note1 === "ボスの全ての能力が最大までアップ") {
   localStorage.setItem("allup6",true);
  } else {
   localStorage.setItem("allup6",false);
  };
  window.location.href = "pokemonselect(event).html";
 };
 window.addEventListener("keydown",function(e) {
  if (e.code === "KeyL" && EN !== 0) {
   EN -= 1;
   img.src = BOSS[EN].img;
   name.innerHTML = BOSS[EN].name;
  };
  if (e.code === "KeyR" && EN !== 9) {
   EN += 1;
   img.src = BOSS[EN].img;
   name.innerHTML = BOSS[EN].name;
  };
  DCN = document.getElementById("difficulty");
  radioNodeList = DCN.elements["difficulty"];
  DCN = radioNodeList.value;
  if (e.code === "KeyU" && DCN === "8") {
   if (unlocked === true) {
    unlocked = false;
    apocalypse.style.visibility = "hidden";
   } else {
    unlocked = true;
    apocalypse.style.visibility = "visible";
   };
  };
 });
 body.style.visibility = "visible";
}
function difficulties() {
 DCN = document.getElementById("difficulty");
 radioNodeList = DCN.elements["difficulty"];
 DCN = radioNodeList.value;
 DCdp.innerHTML = DC[DCN].dp;
 Srate.innerHTML = DC[DCN].score;
 HPrate.innerHTML = DC[DCN].HP;
 Rrate.innerHTML = DC[DCN].R;
 note1.innerHTML = DC[DCN].note1;
 icon1.innerHTML = DC[DCN].icon1;
 if (DC[DCN].icon2 === true) {
  resist.style.visibility = "visible";
  note2.innerHTML = DC[DCN].note2;
 } else {
  resist.style.visibility = "hidden";
 };
}