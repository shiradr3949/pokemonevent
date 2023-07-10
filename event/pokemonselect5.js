const body = document.getElementById("body");
const eventnumber = Number(localStorage.getItem("eventnumber"));
let setbutton;
let PK;
let PKname;
let left;
let right;
let highleft;
let highright;
let subPKL;
let subPKR;
let SL1;
let SL2;
let SL3;
let SL4;
let skill1;
let skilldp1;
let skill2;
let skilldp2;
let skill3;
let skilldp3;
let skill4;
let skilldp4;
let icon1;
let icon2;
let icon3;
let icon4;
let type;
let damage;
let rate;
let dp;
let subdp;
let HP;
let Lv;
let F;
let Fdp;
let type1;
let type2;
let attack;
let block;
let contact;
let defense;
let speed;
let PK1;
let PK2;
let PK3;
let PK4;
let PK5;
let PK6;
let Imrotom;
let Imivs;
let PM1 = false;
let PM2 = false;
let PM3 = false;
let PM4 = false;
let PM5 = false;
let PM6 = false;
let MAXer = false;
let ID = 0;

window.onload = function() {
 start();
}

function start() {
 setbutton = document.getElementById("set");
 PK = document.getElementById("PK");
 PKname = document.getElementById("PKname");
 F = document.getElementById("F");
 Fdp = document.getElementById("Fdp");
 SL1 = document.getElementById("SL1");
 SL2 = document.getElementById("SL2");
 SL3 = document.getElementById("SL3");
 SL4 = document.getElementById("SL4");
 skilldp1 = document.getElementById("skilldp1");
 skilldp2 = document.getElementById("skilldp2");
 skilldp3 = document.getElementById("skilldp3");
 skilldp4 = document.getElementById("skilldp4");
 icon1 = document.getElementById("icon1");
 icon2 = document.getElementById("icon2");
 icon3 = document.getElementById("icon3");
 icon4 = document.getElementById("icon4");
 type = document.getElementById("type");
 damage = document.getElementById("damage");
 rate = document.getElementById("rate");
 dp = document.getElementById("dp");
 subdp = document.getElementById("subdp");
 HP = document.getElementById("HP");
 Lv = document.getElementById("Lv");
 type1 = document.getElementById("type1");
 type2 = document.getElementById("type2");
 attack = document.getElementById("attack");
 block = document.getElementById("block");
 contact = document.getElementById("contact");
 defense = document.getElementById("defense");
 speed = document.getElementById("speed");
 PK1 = document.getElementById("PK1");
 PK2 = document.getElementById("PK2");
 PK3 = document.getElementById("PK3");
 PK4 = document.getElementById("PK4");
 PK5 = document.getElementById("PK5");
 PK6 = document.getElementById("PK6");
 left = document.getElementById("left");
 highright = document.getElementById("highright");
 highleft = document.getElementById("highleft");
 right = document.getElementById("right");
 subPKL = document.getElementById("subPKL");
 subPKR = document.getElementById("subPKR");
 Imrotom = document.getElementById("Imrotom");
 Imivs = document.getElementById("Imivs");
 setbutton.style.visibility = "hidden";
 type1.style.backgroundColor = data[0].color1;
 type2.style.backgroundColor = data[0].color2;
 subPKL.src = data[81].img;
 subPKR.src = data[ID + 1].img;
 chaos = Math.random() * 100;
 if (BOSS[eventnumber].OC === true && chaos <= 33) {
  BOSS[eventnumber].img = BOSS[eventnumber].OCimg;
 };
 localStorage.setItem("BOSS",JSON.stringify(BOSS[eventnumber]));
 Imrotom.style.visibility = "hidden";
 Imivs.style.visibility = "hidden";
 dp.style.visibility = "hidden";
 change();
 chaos = Math.random() * 100;
 if (chaos <= 10) {
  data[20].img1 = data[20].OCimg1;
  data[20].img2 = data[20].OCimg2;
  data[20].img = data[20].OCimg;
  data[20].megaimg1 = data[20].OCmegaimg1;
  data[20].megaimg2 = data[20].OCmegaimg2;
  data[20].A += 20;
  data[20].B += 20;
  data[20].C += 20;
  data[20].D += 20;
  data[20].othercolor = true;
 };
 skill1 = document.getElementById("skill1").addEventListener( "click",function() {
  SL2.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFFFFF";
  SL1.style.backgroundColor = "#FFE44E";
  type.innerHTML = skill[data[ID].skill1].type;
  damage.innerHTML = skill[data[ID].skill1].power;
  rate.innerHTML = skill[data[ID].skill1].hitrate;
  subdp.innerHTML = skill[data[ID].skill1].sub;
  dp.style.visibility = "visible";
 });
 skill2 = document.getElementById("skill2").addEventListener( "click",function() {
  SL1.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFFFFF";
  SL2.style.backgroundColor = "#FFE44E";
  type.innerHTML = skill[data[ID].skill2].type;
  damage.innerHTML = skill[data[ID].skill2].power;
  rate.innerHTML = skill[data[ID].skill2].hitrate;
  subdp.innerHTML = skill[data[ID].skill2].sub;
  dp.style.visibility = "visible";
 });
 skill3 = document.getElementById("skill3").addEventListener( "click",function() {
  SL1.style.backgroundColor = "#FFFFFF";
  SL2.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFE44E";
  type.innerHTML = skill[data[ID].skill3].type;
  damage.innerHTML = skill[data[ID].skill3].power;
  rate.innerHTML = skill[data[ID].skill3].hitrate;
  subdp.innerHTML = skill[data[ID].skill3].sub;
  dp.style.visibility = "visible";
 });
 skill4 = document.getElementById("skill4").addEventListener( "click",function() {
  SL1.style.backgroundColor = "#FFFFFF";
  SL2.style.backgroundColor = "#FFFFFF";
  SL3.style.backgroundColor = "#FFFFFF";
  SL4.style.backgroundColor = "#FFE44E";
  type.innerHTML = skill[data[ID].skill4].type;
  damage.innerHTML = skill[data[ID].skill4].power;
  rate.innerHTML = skill[data[ID].skill4].hitrate;
  subdp.innerHTML = skill[data[ID].skill4].sub;
  dp.style.visibility = "visible";
 });
 setbutton.onclick = function() {
  setbutton.style.visibility = "hidden";
  alert("Let's go!");
  window.location.href = "VSstrongpokemon.html";
 };
 window.addEventListener("keydown",function(e) {
  if (e.code === "KeyA") {
   alert("BOSSNo. " + eventnumber + " " + BOSS[eventnumber].name);
  };
  if (e.code === "KeyS") {
   if (data[ID].skill4 === 99 && ID === 57) {
    data[ID].skill4 = 24;
    skilldp4.innerHTML = skill[data[ID].skill4].name;
    icon4.src = skill[data[ID].skill4].icon;
    type.innerHTML = skill[data[ID].skill4].type;
    damage.innerHTML = skill[data[ID].skill4].power;
    rate.innerHTML = skill[data[ID].skill4].hitrate;
    subdp.innerHTML = skill[data[ID].skill4].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFFFFF";
    SL4.style.backgroundColor = "#FFE44E";
    dp.style.visibility = "visible";
   };
   if (data[ID].skill3 === 116 && ID === 60) {
    data[ID].skill3 = 149;
    skilldp3.innerHTML = skill[data[ID].skill3].name;
    icon3.src = skill[data[ID].skill3].icon;
    type.innerHTML = skill[data[ID].skill3].type;
    damage.innerHTML = skill[data[ID].skill3].power;
    rate.innerHTML = skill[data[ID].skill3].hitrate;
    subdp.innerHTML = skill[data[ID].skill3].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFE44E";
    SL4.style.backgroundColor = "#FFFFFF";
    dp.style.visibility = "visible";
   };
  };
  if (e.code === "KeyD") {
   if (data[ID].skill4 === 24 && ID === 57) {
    data[ID].skill4 = 99;
    skilldp4.innerHTML = skill[data[ID].skill4].name;
    icon4.src = skill[data[ID].skill4].icon;
    type.innerHTML = skill[data[ID].skill4].type;
    damage.innerHTML = skill[data[ID].skill4].power;
    rate.innerHTML = skill[data[ID].skill4].hitrate;
    subdp.innerHTML = skill[data[ID].skill4].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFFFFF";
    SL4.style.backgroundColor = "#FFE44E";
    dp.style.visibility = "visible";
   };
  };
  if (e.code === "KeyH") {
   if (data[ID].skill3 === 149 && ID === 60) {
    data[ID].skill3 = 116;
    skilldp3.innerHTML = skill[data[ID].skill3].name;
    icon3.src = skill[data[ID].skill3].icon;
    type.innerHTML = skill[data[ID].skill3].type;
    damage.innerHTML = skill[data[ID].skill3].power;
    rate.innerHTML = skill[data[ID].skill3].hitrate;
    subdp.innerHTML = skill[data[ID].skill3].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFE44E";
    SL4.style.backgroundColor = "#FFFFFF";
    dp.style.visibility = "visible";
   };
  };
  if (e.code === "KeyW") {
   if (data[ID].skill4 === 46 && ID === 63) {
    data[ID].skill4 = 155;
    skilldp4.innerHTML = skill[data[ID].skill4].name;
    icon4.src = skill[data[ID].skill4].icon;
    type.innerHTML = skill[data[ID].skill4].type;
    damage.innerHTML = skill[data[ID].skill4].power;
    rate.innerHTML = skill[data[ID].skill4].hitrate;
    subdp.innerHTML = skill[data[ID].skill4].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFFFFF";
    SL4.style.backgroundColor = "#FFE44E";
    dp.style.visibility = "visible";
   };
  };
  if (e.code === "KeyM" && PM1 === true) {
   if (data[ID].skill4 === 155 && ID === 63) {
    data[ID].skill4 = 46;
    skilldp4.innerHTML = skill[data[ID].skill4].name;
    icon4.src = skill[data[ID].skill4].icon;
    type.innerHTML = skill[data[ID].skill4].type;
    damage.innerHTML = skill[data[ID].skill4].power;
    rate.innerHTML = skill[data[ID].skill4].hitrate;
    subdp.innerHTML = skill[data[ID].skill4].sub;
    SL1.style.backgroundColor = "#FFFFFF";
    SL2.style.backgroundColor = "#FFFFFF";
    SL3.style.backgroundColor = "#FFFFFF";
    SL4.style.backgroundColor = "#FFE44E";
    dp.style.visibility = "visible";
   } else {
    if (MAXer === true) {
     alert("ダイマックスアメがありません。");
    } else {
     let MAX = confirm("選択したポケモンにダイマックスアメをあげますか？");
     let subdata;
     if (MAX === true) {
      if (PM6 === true) {
       subdata = JSON.parse(localStorage.getItem("PK6"));
       if (subdata.MAX !== null) {
        if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
         alert("そのポケモンに使っても効果はないよ…。");
        } else {
         MAXer = true;
         subdata.MAX = null;
         subdata.MAXimg1 = subdata.img1;
         subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
         subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
         subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
         subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
         localStorage.setItem("PK6",JSON.stringify(subdata));
         alert(subdata.name + "はダイマックスができるようになった！");
        };
       } else {
        alert("そのポケモンはキョダイマックスするぞ！");
       };
      } else {
       if (PM5 === true) {
        subdata = JSON.parse(localStorage.getItem("PK5"));
        if (subdata.MAX !== null) {
         if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
          alert("そのポケモンに使っても効果はないよ…。");
         } else {
          MAXer = true;
          subdata.MAX = null;
          subdata.MAXimg1 = subdata.img1;
          subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
          subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
          subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
          subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
          localStorage.setItem("PK5",JSON.stringify(subdata));
          alert(subdata.name + "はダイマックスができるようになった！");
         };
        } else {
         alert("そのポケモンはキョダイマックスするぞ！");
        };
       } else {
        if (PM4 === true) {
         subdata = JSON.parse(localStorage.getItem("PK4"));
         if (subdata.MAX !== null) {
          if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
           alert("そのポケモンに使っても効果はないよ…。");
          } else {
           MAXer = true;
           subdata.MAX = null;
           subdata.MAXimg1 = subdata.img1;
           subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
           subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
           subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
           subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
           localStorage.setItem("PK4",JSON.stringify(subdata));
           alert(subdata.name + "はダイマックスができるようになった！");
          };
         } else {
          alert("そのポケモンはキョダイマックスするぞ！");
         };
        } else {
         if (PM3 === true) {
          subdata = JSON.parse(localStorage.getItem("PK3"));
          if (subdata.MAX !== null) {
           if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
            alert("そのポケモンに使っても効果はないよ…。");
           } else {
            MAXer = true;
            subdata.MAX = null;
            subdata.MAXimg1 = subdata.img1;
            subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
            subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
            subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
            subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
            localStorage.setItem("PK3",JSON.stringify(subdata));
            alert(subdata.name + "はダイマックスができるようになった！");
           };
          } else {
           alert("そのポケモンはキョダイマックスするぞ！");
          };
         } else {
          if (PM2 === true) {
           subdata = JSON.parse(localStorage.getItem("PK2"));
           if (subdata.MAX !== null) {
            if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
             alert("そのポケモンに使っても効果はないよ…。");
            } else {
             MAXer = true;
             subdata.MAX = null;
             subdata.MAXimg1 = subdata.img1;
             subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
             subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
             subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
             subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
             localStorage.setItem("PK2",JSON.stringify(subdata));
             alert(subdata.name + "はダイマックスができるようになった！");
            };
           } else {
            alert("そのポケモンはキョダイマックスするぞ！");
           };
          } else {
           if (PM1 === true) {
            subdata = JSON.parse(localStorage.getItem("PK1"));
            if (subdata.MAX !== null) {
             if (subdata.mega === null || subdata.F === "ぎょぐん" || subdata.F === "イリュージョン" || subdata.daruma === false || subdata.F === "バトルスイッチ") {
              alert("そのポケモンに使っても効果はないよ…。");
             } else {
              MAXer = true;
              subdata.MAX = null;
              subdata.MAXimg1 = subdata.img1;
              subdata.MAXskill1 = skill[subdata.skill1].skillnumber;
              subdata.MAXskill2 = skill[subdata.skill2].skillnumber;
              subdata.MAXskill3 = skill[subdata.skill3].skillnumber;
              subdata.MAXskill4 = skill[subdata.skill4].skillnumber;
              localStorage.setItem("PK1",JSON.stringify(subdata));
              alert(subdata.name + "はダイマックスができるようになった！");
             };
            } else {
             alert("そのポケモンはキョダイマックスするぞ！");
            };
           };
          };
         };
        };
       };
      };
     };
    };
   };
  };
 });
 PK.onclick = function() {
  if (PM1 === true) {
   if (PM2 === true) {
    if (PM3 === true) {
     if (PM4 === true) {
      if (PM5 === true) {
       PK6.src = data[ID].img;
       chaos = Math.floor(Math.random(chaos) * 10);
       data[ID].S = S[ID][chaos];
       localStorage.setItem("PK6",JSON.stringify(data[ID]));
       PM6 = true;
       setbutton.style.visibility = "visible";
      } else {
       PK5.src = data[ID].img;
       chaos = Math.floor(Math.random(chaos) * 10);
       data[ID].S = S[ID][chaos];
       localStorage.setItem("PK5",JSON.stringify(data[ID]));
       PM5 = true;
      };
     } else {
      PK4.src = data[ID].img;
      chaos = Math.floor(Math.random(chaos) * 10);
      data[ID].S = S[ID][chaos];
      localStorage.setItem("PK4",JSON.stringify(data[ID]));
      PM4 = true;
     };
    } else {
     PK3.src = data[ID].img;
     chaos = Math.floor(Math.random(chaos) * 10);
     data[ID].S = S[ID][chaos];
     localStorage.setItem("PK3",JSON.stringify(data[ID]));
     PM3 = true;
    };
   } else {
    PK2.src = data[ID].img;
    chaos = Math.floor(Math.random(chaos) * 10);
    data[ID].S = S[ID][chaos];
    localStorage.setItem("PK2",JSON.stringify(data[ID]));
    PM2 = true;
   };
  } else {
   PK1.src = data[ID].img;
   chaos = Math.floor(Math.random(chaos) * 10);
   data[ID].S = S[ID][chaos];
   localStorage.setItem("PK1",JSON.stringify(data[ID]));
   PM1 = true;
  };
 };
 left.onclick = function() {
  ID -= 1;
  lefter();
 };
 right.onclick = function() {
  ID += 1;
  righter();
 };
 highleft.onclick = function() {
  ID -= 3;
  lefter();
 };
 highright.onclick = function() {
  ID += 3;
  righter();
 };
 PK1.onclick = function() {
  if (PM2 === false) {
   PK1.src = "../pokemonquestimg/モンスターボール.png";
   PM1 = false;
  };
 };
 PK2.onclick = function() {
  if (PM3 === false) {
   PK2.src = "../pokemonquestimg/モンスターボール.png";
   PM2 = false;
  };
 };
 PK3.onclick = function() {
  if (PM4 === false) {
   PK3.src = "../pokemonquestimg/モンスターボール.png";
   PM3 = false;
  };
 };
 PK4.onclick = function() {
  if (PM5 === false) {
   PK4.src = "../pokemonquestimg/モンスターボール.png";
   PM4 = false;
  };
 };
 PK5.onclick = function() {
  if (PM6 === false) {
   PK5.src = "../pokemonquestimg/モンスターボール.png";
   PM5 = false;
  };
 };
 PK6.onclick = function() {
  PK6.src = "../pokemonquestimg/モンスターボール.png";
  PM6 = false;
  setbutton.style.visibility = "hidden";
 };
 body.style.visibility = "visible";
}
function lefter() {
 if (ID < 0) {
  ID = 81 + (ID + 1);
 };
 subPKR.style.visibility = "visible";
 change();
 if (ID === 0) {
  subPKR.src = data[ID + 1].img;
  subPKL.src = data[81].img;
 } else {
  if (ID === 81) {
   subPKR.src = data[0].img;
  } else {
   subPKR.src = data[ID + 1].img;
  };
  subPKL.src = data[ID - 1].img;
 };
}
function righter() {
 if (ID > 81) {
  ID = 0 + (ID - 82) ;
 };
 subPKL.style.visibility = "visible";
 change();
 if (ID === 81) {
  subPKR.src = data[0].img;
  subPKL.src = data[ID - 1].img;
 } else {
  if (ID === 0) {
   subPKL.src = data[81].img;
  } else {
   subPKL.src = data[ID - 1].img;
  };
  subPKR.src = data[ID + 1].img;
 };
}
function change() {
 PK.src = data[ID].img;
 PKname.innerHTML = data[ID].name;
 Lv.innerHTML = data[ID].level;
 F.innerHTML = data[ID].F;
 Fdp.innerHTML = data[ID].Fdp;
 type1.style.backgroundColor = data[ID].color1;
 type2.style.backgroundColor = data[ID].color2;
 type1.innerHTML = data[ID].bodytype1;
 type2.innerHTML = data[ID].bodytype2;
 HP.innerHTML = data[ID].HP;
 attack.innerHTML = data[ID].A;
 block.innerHTML = data[ID].B;
 contact.innerHTML = data[ID].C;
 defense.innerHTML = data[ID].D;
 speed.innerHTML = S[ID][4];
 skilldp1.innerHTML = skill[data[ID].skill1].name;
 skilldp2.innerHTML = skill[data[ID].skill2].name;
 skilldp3.innerHTML = skill[data[ID].skill3].name;
 skilldp4.innerHTML = skill[data[ID].skill4].name;
 icon1.src = skill[data[ID].skill1].icon;
 icon2.src = skill[data[ID].skill2].icon;
 icon3.src = skill[data[ID].skill3].icon;
 icon4.src = skill[data[ID].skill4].icon;
 SL1.style.backgroundColor = "#FFFFFF";
 SL2.style.backgroundColor = "#FFFFFF";
 SL3.style.backgroundColor = "#FFFFFF";
 SL4.style.backgroundColor = "#FFFFFF";
 dp.style.visibility = "hidden";
 if (data[ID].othercolor === true) {
  attack.style.color = "#FF1C1C";
  block.style.color = "#FF1C1C";
  contact.style.color = "#FF1C1C";
  defense.style.color = "#FF1C1C";
 } else {
  attack.style.color = "#000000";
  block.style.color = "#000000";
  contact.style.color = "#000000";
  defense.style.color = "#000000";
 };
 if (data[ID].changing === true && ID === 43) {
  Imrotom.style.visibility = "visible";
 } else {
  Imrotom.style.visibility = "hidden";
 };
 if (data[ID].changing === true && ID === 15) {
  Imivs.style.visibility = "visible";
 } else {
  Imivs.style.visibility = "hidden";
 };
};
function changerotom() {
 let number = Number(document.getElementById("rotom").value);
 let display = document.getElementById("rotom");
 display.style.backgroundImage = rotom[number].url;
 data[ID].img1 = rotom[number].img1;
 data[ID].img2 = rotom[number].img2;
 data[ID].img = rotom[number].img;
 PK.src = data[ID].img;
 data[ID].bodytype2 = rotom[number].type;
 data[ID].color2 = rotom[number].color;
 type2.innerHTML = data[ID].bodytype2;
 type2.style.backgroundColor = data[ID].color2;
 data[ID].skill1 = rotom[number].skill1;
 data[ID].skill2 = rotom[number].skill2;
 data[ID].skill3 = rotom[number].skill3;
 data[ID].A = rotom[number].A;
 data[ID].B = rotom[number].B;
 data[ID].C = rotom[number].C;
 data[ID].D = rotom[number].D;
 S[ID] = rotomS[rotom[number].subN];
 attack.innerHTML = rotom[number].A;
 block.innerHTML = rotom[number].B;
 contact.innerHTML = rotom[number].C;
 defense.innerHTML = rotom[number].D;
 speed.innerHTML = rotomS[rotom[number].subN][4];
 skilldp1.innerHTML = skill[data[ID].skill1].name;
 skilldp2.innerHTML = skill[data[ID].skill2].name;
 skilldp3.innerHTML = skill[data[ID].skill3].name;
 skilldp4.innerHTML = skill[data[ID].skill4].name;
 icon1.src = skill[data[ID].skill1].icon;
 icon2.src = skill[data[ID].skill2].icon;
 icon3.src = skill[data[ID].skill3].icon;
 icon4.src = skill[data[ID].skill4].icon;
 SL1.style.backgroundColor = "#FFFFFF";
 SL2.style.backgroundColor = "#FFFFFF";
 SL3.style.backgroundColor = "#FFFFFF";
 SL4.style.backgroundColor = "#FFFFFF";
 dp.style.visibility = "hidden"
}
function changeivs() {
 let number = Number(document.getElementById("ivs").value);
 let display = document.getElementById("ivs");
 display.style.backgroundImage = `url(${ivs[number].img})`;
 data[ID].img1 = ivs[number].img1;
 data[ID].img2 = ivs[number].img2;
 data[ID].img = ivs[number].img;
 PK.src = data[ID].img;
 data[ID].name = ivs[number].name;
 PKname.innerHTML = data[ID].name;
 data[ID].bodytype1 = ivs[number].bodytype1;
 data[ID].color1 = ivs[number].color1;
 type1.innerHTML = data[ID].bodytype1;
 type1.style.backgroundColor = data[ID].color1;
 data[ID].skill1 = ivs[number].skill1;
 data[ID].skill2 = ivs[number].skill2;
 data[ID].skill3 = ivs[number].skill3;
 data[ID].skill4 = ivs[number].skill4;
 data[ID].MHP = ivs[number].MHP;
 data[ID].HP = ivs[number].HP;
 data[ID].A = ivs[number].A;
 data[ID].B = ivs[number].B;
 data[ID].C = ivs[number].C;
 data[ID].D = ivs[number].D;
 S[ID] = ivsS[number];
 HP.innerHTML = data[ID].HP;
 attack.innerHTML = ivs[number].A;
 block.innerHTML = ivs[number].B;
 contact.innerHTML = ivs[number].C;
 defense.innerHTML = ivs[number].D;
 speed.innerHTML = ivsS[number][4];
 data[ID].F = ivs[number].F;
 data[ID].Fdp = ivs[number].Fdp;
 F.innerHTML = data[ID].F
 Fdp.innerHTML = data[ID].Fdp;
 skilldp1.innerHTML = skill[data[ID].skill1].name;
 skilldp2.innerHTML = skill[data[ID].skill2].name;
 skilldp3.innerHTML = skill[data[ID].skill3].name;
 skilldp4.innerHTML = skill[data[ID].skill4].name;
 icon1.src = skill[data[ID].skill1].icon;
 icon2.src = skill[data[ID].skill2].icon;
 icon3.src = skill[data[ID].skill3].icon;
 icon4.src = skill[data[ID].skill4].icon;
 SL1.style.backgroundColor = "#FFFFFF";
 SL2.style.backgroundColor = "#FFFFFF";
 SL3.style.backgroundColor = "#FFFFFF";
 SL4.style.backgroundColor = "#FFFFFF";
 dp.style.visibility = "hidden"
}