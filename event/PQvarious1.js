function substart() {
 attack.onclick = function() {
  if (attackstorage === true) {
   attackstorage = false;
   Adp.innerHTML = "たたかう";
   change.style.visibility = "visible";
   MG.src = "../pokemonquestimg/メガシンカ1.png";
   MGstart = false;
   MAX.src = "../pokemonquestimg/ダイマックス1.png";
   MAXstart = false;
   if (PM[ID].MAX !== true) {
    skill1.style.borderColor = "#000000";
    skill2.style.borderColor = "#000000";
    skill3.style.borderColor = "#000000";
    skill4.style.borderColor = "#000000";
    skill1dp.innerHTML = skill[PM[ID].skill1].name;
    skill2dp.innerHTML = skill[PM[ID].skill2].name;
    skill3dp.innerHTML = skill[PM[ID].skill3].name;
    skill4dp.innerHTML = skill[PM[ID].skill4].name;
    skill1.style.backgroundColor = skill[PM[ID].skill1].color;
    skill2.style.backgroundColor = skill[PM[ID].skill2].color;
    skill3.style.backgroundColor = skill[PM[ID].skill3].color;
    skill4.style.backgroundColor = skill[PM[ID].skill4].color;
   };
   skillclose();
   subPK.style.visibility = "hidden";
  } else {
   attackstorage = true;
   Adp.innerHTML = "戻る";
   change.style.visibility = "hidden";
   skillopen();
  };
 };
 change.onclick = function() {
  if (changestorage === true) {
   changestorage = false;
   Cdp.innerHTML = "ポケモン";
   attack.style.visibility = "visible";
   subPK.style.visibility = "hidden";
  } else {
   changestorage = true;
   Cdp.innerHTML = "戻る";
   attack.style.visibility = "hidden";
   subPK.style.visibility = "visible";
  };
 };
 skill1.onclick = function() {
  if (PM[ID].MAX === true || MAXstart === true) {
   skiller = MAXskill[PM[ID].MAXskill1];
   if (skill[PM[ID].skill1].type === "change" && skill[PM[ID].skill1].onekill !== true && skill[PM[ID].skill1].counter !== true) {
    skiller.type = "change";
   } else {
    if (skill[PM[ID].skill1].type === "special" || skill[PM[ID].skill1].type === "assist") {
     skiller.type = "special";
    } else {
     skiller.type = "physics";
    };
   };
   if (skill[PM[ID].skill1].power <= 40) {
    skiller.power = 90;
   } else {
    if (skill[PM[ID].skill1].power <= 50) {
     skiller.power = 100;
    } else {
     if (skill[PM[ID].skill1].power <= 60) {
      skiller.power = 110;
     } else {
      if (skill[PM[ID].skill1].power <= 70) {
       skiller.power = 120;
      } else {
       if (skill[PM[ID].skill1].power <= 100) {
        skiller.power = 130;
       } else {
        if (skill[PM[ID].skill1].power <= 140) {
         skiller.power = 140;
        } else {
         skiller.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller = skill[PM[ID].skill1];
  };
  if (recoil === true || (PM[ID].heal === 0 && (skiller.name === "じこさいせい" || skiller.name === "はねやすめ" || skiller.name === "たまごうみ" || skiller.name === "なまける"))) {
   alert("その技は使えないよ");
  } else {
   attackstorage = false;
   Adp.innerHTML = "たたかう";
   attack.style.visibility = "hidden";
   change.style.visibility = "hidden";
   skillclose();
   setTimeout(BOSSPKCO,100);
  };
 };
 skill2.onclick = function() {
  if (PM[ID].MAX === true || MAXstart === true) {
   skiller = MAXskill[PM[ID].MAXskill2];
   if (skill[PM[ID].skill2].type === "change" && skill[PM[ID].skill2].onekill !== true && skill[PM[ID].skill2].counter !== true) {
    skiller.type = "change";
   } else {
    if (skill[PM[ID].skill2].type === "special" || skill[PM[ID].skill2].type === "assist") {
     skiller.type = "special";
    } else {
     skiller.type = "physics";
    };
   };
   if (skill[PM[ID].skill2].power <= 40) {
    skiller.power = 90;
   } else {
    if (skill[PM[ID].skill2].power <= 50) {
     skiller.power = 100;
    } else {
     if (skill[PM[ID].skill2].power <= 60) {
      skiller.power = 110;
     } else {
      if (skill[PM[ID].skill2].power <= 70) {
       skiller.power = 120;
      } else {
       if (skill[PM[ID].skill2].power <= 100) {
        skiller.power = 130;
       } else {
        if (skill[PM[ID].skill2].power <= 140) {
         skiller.power = 140;
        } else {
         skiller.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller = skill[PM[ID].skill2];
  };
  if (recoil === true || (PM[ID].heal === 0 && (skiller.name === "じこさいせい" || skiller.name === "はねやすめ" || skiller.name === "たまごうみ" || skiller.name === "なまける"))) {
   alert("その技は使えないよ");
  } else {
   attackstorage = false;
   Adp.innerHTML = "たたかう";
   attack.style.visibility = "hidden";
   change.style.visibility = "hidden";
   skillclose();
   setTimeout(BOSSPKCO,100);
  };
 };
 skill3.onclick = function() {
  if (PM[ID].MAX === true || MAXstart === true) {
   skiller = MAXskill[PM[ID].MAXskill3];
   if (skill[PM[ID].skill3].type === "change" && skill[PM[ID].skill3].onekill !== true && skill[PM[ID].skill3].counter !== true) {
    skiller.type = "change";
   } else {
    if (skill[PM[ID].skill3].type === "special" || skill[PM[ID].skill3].type === "assist") {
     skiller.type = "special";
    } else {
     skiller.type = "physics";
    };
   };
   if (skill[PM[ID].skill3].power <= 40) {
    skiller.power = 90;
   } else {
    if (skill[PM[ID].skill3].power <= 50) {
     skiller.power = 100;
    } else {
     if (skill[PM[ID].skill3].power <= 60) {
      skiller.power = 110;
     } else {
      if (skill[PM[ID].skill3].power <= 70) {
       skiller.power = 120;
      } else {
       if (skill[PM[ID].skill3].power <= 100) {
        skiller.power = 130;
       } else {
        if (skill[PM[ID].skill3].power <= 140) {
         skiller.power = 140;
        } else {
         skiller.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller = skill[PM[ID].skill3];
  };
  if (recoil === true || (PM[ID].heal === 0 && (skiller.name === "じこさいせい" || skiller.name === "はねやすめ" || skiller.name === "たまごうみ" || skiller.name === "なまける"))) {
   alert("その技は使えないよ");
  } else {
   attackstorage = false;
   Adp.innerHTML = "たたかう";
   attack.style.visibility = "hidden";
   change.style.visibility = "hidden";
   skillclose();
   setTimeout(BOSSPKCO,100);
  };
 };
 skill4.onclick = function() {
  if (PM[ID].MAX === true || MAXstart === true) {
   skiller = MAXskill[PM[ID].MAXskill4];
   if (skill[PM[ID].skill4].type === "change" && skill[PM[ID].skill4].onekill !== true && skill[PM[ID].skill4].counter !== true) {
    skiller.type = "change";
   } else {
    if (skill[PM[ID].skill4].type === "special" || skill[PM[ID].skill4].type === "assist") {
     skiller.type = "special";
    } else {
     skiller.type = "physics";
    };
   };
   if (skill[PM[ID].skill4].power <= 40) {
    skiller.power = 90;
   } else {
    if (skill[PM[ID].skill4].power <= 50) {
     skiller.power = 100;
    } else {
     if (skill[PM[ID].skill4].power <= 60) {
      skiller.power = 110;
     } else {
      if (skill[PM[ID].skill4].power <= 70) {
       skiller.power = 120;
      } else {
       if (skill[PM[ID].skill4].power <= 100) {
        skiller.power = 130;
       } else {
        if (skill[PM[ID].skill4].power <= 140) {
         skiller.power = 140;
        } else {
         skiller.power = 150;
        };
       };
      };
     };
    };
   };
  } else {
   skiller = skill[PM[ID].skill4];
  };
  if (PM[ID].heal === 0 && (skiller.name === "じこさいせい" || skiller.name === "はねやすめ" || skiller.name === "たまごうみ" || skiller.name === "なまける") || (PM[ID].healout === true && skiller.name === "さいきのいのり")) {
   alert("その技は使えないよ");
  } else {
   if (skiller.name === "さいきのいのり") {
    againheal = true;
    change.style.visibility = "hidden";
    subPK.style.visibility = "visible";
    skillclose();
   } else {
    attackstorage = false;
    Adp.innerHTML = "たたかう";
    attack.style.visibility = "hidden";
    change.style.visibility = "hidden";
    skillclose();
    setTimeout(BOSSPKCO,100);
   };
  };
 };
 MGdp.onclick = function() {
  if (MGstart === false) {
   MG.src = "../pokemonquestimg/メガシンカ2.png";
   MGstart = true;
  } else {
   MG.src = "../pokemonquestimg/メガシンカ1.png";
   MGstart = false;
  };
 };
 MAXdp.onclick = function() {
  if (MAXstart === false) {
   MAX.src = "../pokemonquestimg/ダイマックス2.png";
   MAXstart = true;
   skill1.style.borderColor = "#FF407F";
   skill2.style.borderColor = "#FF407F";
   skill3.style.borderColor = "#FF407F";
   skill4.style.borderColor = "#FF407F";
   skill1dp.innerHTML = MAXskill[PM[ID].MAXskill1].name;
   skill2dp.innerHTML = MAXskill[PM[ID].MAXskill2].name;
   skill3dp.innerHTML = MAXskill[PM[ID].MAXskill3].name;
   skill4dp.innerHTML = MAXskill[PM[ID].MAXskill4].name;
   skill1.style.backgroundColor = MAXskill[PM[ID].MAXskill1].color;
   skill2.style.backgroundColor = MAXskill[PM[ID].MAXskill2].color;
   skill3.style.backgroundColor = MAXskill[PM[ID].MAXskill3].color;
   skill4.style.backgroundColor = MAXskill[PM[ID].MAXskill4].color;
  } else {
   MAX.src = "../pokemonquestimg/ダイマックス1.png";
   MAXstart = false;
   skill1.style.borderColor = "#000000";
   skill2.style.borderColor = "#000000";
   skill3.style.borderColor = "#000000";
   skill4.style.borderColor = "#000000";
   skill1dp.innerHTML = skill[PM[ID].skill1].name;
   skill2dp.innerHTML = skill[PM[ID].skill2].name;
   skill3dp.innerHTML = skill[PM[ID].skill3].name;
   skill4dp.innerHTML = skill[PM[ID].skill4].name;
   skill1.style.backgroundColor = skill[PM[ID].skill1].color;
   skill2.style.backgroundColor = skill[PM[ID].skill2].color;
   skill3.style.backgroundColor = skill[PM[ID].skill3].color;
   skill4.style.backgroundColor = skill[PM[ID].skill4].color;
  };
 };
 subPK1.onclick = function() {
  if (PM[0].HP <= 0) {
   if (againheal === true) {
    againheal = false;
    attackstorage = false;
    Adp.innerHTML = "たたかう";
    attack.style.visibility = "hidden";
    healID = 0;
    subPK.style.visibility = "hidden";
    setTimeout(BOSSPKCO,100);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
    };
    if (PM[ID].mega === true) {
     PM[ID].mega = false;
     PM[ID].MHP = PMm.slice(ID,(ID + 1))[0].MHP;
     PM[ID].A = PMm.slice(ID,(ID + 1))[0].A;
     PM[ID].B = PMm.slice(ID,(ID + 1))[0].B;
     PM[ID].C = PMm.slice(ID,(ID + 1))[0].C;
     PM[ID].D = PMm.slice(ID,(ID + 1))[0].D;
     PM[ID].S = PMm.slice(ID,(ID + 1))[0].S;
     PM[ID].F = PMm.slice(ID,(ID + 1))[0].F;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
     PM[ID].color1 = PMm.slice(ID,(ID + 1))[0].color1;
     PM[ID].color2 = PMm.slice(ID,(ID + 1))[0].color2;
     PM[ID].heavy = PMm.slice(ID,(ID + 1))[0].heavy;
     PM[ID].img1 = PMm.slice(ID,(ID + 1))[0].img1;
    };
    if (F1 === "バトルスイッチ") {
     PM[ID].img1 = PM[ID].shieldform1;
     PM[ID].blade = false;
     PM[ID].A = 70;
     PM[ID].B = 160;
     PM[ID].C = 70;
     PM[ID].D = 160;
    };
    ID = 0;
    namedp1.innerHTML = PM[ID].name;
    type11.innerHTML = PM[ID].bodytype1;
    type12.innerHTML = PM[ID].bodytype2;
    type11.style.backgroundColor = PM[ID].color1;
    type12.style.backgroundColor = PM[ID].color2;
    F1 = PM[ID].F;
    subPK.style.visibility = "hidden";
    changing();
   } else {
    if (againheal === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let CF = confirm(PM[0].name + "に入れ替えますか?");
     if (CF === true) {
      if (ID !== 0) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
        PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
       };
       if (PM[ID].F === "さいせいりょく") {
        PM[ID].HP += Math.floor(PM[ID].MHP / 3);
        if (PM[ID].HP > PM[ID].MHP) {
         PM[ID].HP = PM[ID].MHP;
        };
       };
       if (PM[ID].MAX === true) {
        PM[ID].MAX = false;
        PM[ID].MHP = PM[ID].MHP / 2;
        PM[ID].HP = Math.ceil(PM[ID].HP / 2);
       };
       if (F1 === "バトルスイッチ") {
        PM[ID].img1 = PM[ID].shieldform1;
        PM[ID].blade = false;
        PM[ID].A = 70;
        PM[ID].B = 160;
        PM[ID].C = 70;
        PM[ID].D = 160;
       };
       bodytype1 = PM[ID].bodytype1;
       bodytype2 = PM[ID].bodytype2;
       ID = 0;
       F1 = PM[ID].F;
       namedp1.innerHTML = PM[ID].name;
       type11.innerHTML = PM[ID].bodytype1;
       type12.innerHTML = PM[ID].bodytype2;
       type11.style.backgroundColor = PM[ID].color1;
       type12.style.backgroundColor = PM[ID].color2;
       changer = true;
       changestorage = false;
       skiller = skill[25].name;
       bothchange += 1;
       Cdp.innerHTML = "ポケモン";
       change.style.visibility = "hidden";
       subPK.style.visibility = "hidden";
       setTimeout(BOSSPKCO,100);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK2.onclick = function() {
  if (PM[1].HP <= 0) {
   if (againheal === true) {
    againheal = false;
    attackstorage = false;
    Adp.innerHTML = "たたかう";
    attack1.style.visibility = "hidden";
    healID = 1;
    subPK.style.visibility = "hidden";
    setTimeout(BOSSPKCO,100);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
    };
    if (PM[ID].mega === true) {
     PM[ID].mega = false;
     PM[ID].MHP = PMm.slice(ID,(ID + 1))[0].MHP;
     PM[ID].A = PMm.slice(ID,(ID + 1))[0].A;
     PM[ID].B = PMm.slice(ID,(ID + 1))[0].B;
     PM[ID].C = PMm.slice(ID,(ID + 1))[0].C;
     PM[ID].D = PMm.slice(ID,(ID + 1))[0].D;
     PM[ID].S = PMm.slice(ID,(ID + 1))[0].S;
     PM[ID].F = PMm.slice(ID,(ID + 1))[0].F;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
     PM[ID].color1 = PMm.slice(ID,(ID + 1))[0].color1;
     PM[ID].color2 = PMm.slice(ID,(ID + 1))[0].color2;
     PM[ID].heavy = PMm.slice(ID,(ID + 1))[0].heavy;
     PM[ID].img1 = PMm.slice(ID,(ID + 1))[0].img1;
    };
    if (F1 === "バトルスイッチ") {
     PM[ID].img1 = PM[ID].shieldform1;
     PM[ID].blade = false;
     PM[ID].A = 70;
     PM[ID].B = 160;
     PM[ID].C = 70;
     PM[ID].D = 160;
    };
    ID = 1;
    namedp1.innerHTML = PM[ID].name;
    type11.innerHTML = PM[ID].bodytype1;
    type12.innerHTML = PM[ID].bodytype2;
    type11.style.backgroundColor = PM[ID].color1;
    type12.style.backgroundColor = PM[ID].color2;
    F1 = PM[ID].F;
    subPK.style.visibility = "hidden";
    changing();
   } else {
    if (againheal === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let CF = confirm(PM[1].name + "に入れ替えますか?");
     if (CF === true) {
      if (ID !== 1) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
        PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
       };
       if (PM[ID].F === "さいせいりょく") {
        PM[ID].HP += Math.floor(PM[ID].MHP / 3);
        if (PM[ID].HP > PM[ID].MHP) {
         PM[ID].HP = PM[ID].MHP;
        };
       };
       if (PM[ID].MAX === true) {
        PM[ID].MAX = false;
        PM[ID].MHP = PM[ID].MHP / 2;
        PM[ID].HP = Math.ceil(PM[ID].HP / 2);
       };
       if (F1 === "バトルスイッチ") {
        PM[ID].img1 = PM[ID].shieldform1;
        PM[ID].blade = false;
        PM[ID].A = 70;
        PM[ID].B = 160;
        PM[ID].C = 70;
        PM[ID].D = 160;
       };
       bodytype1 = PM[ID].bodytype1;
       bodytype2 = PM[ID].bodytype2;
       ID = 1;
       F1 = PM[ID].F;
       namedp1.innerHTML = PM[ID].name;
       type11.innerHTML = PM[ID].bodytype1;
       type12.innerHTML = PM[ID].bodytype2;
       type11.style.backgroundColor = PM[ID].color1;
       type12.style.backgroundColor = PM[ID].color2;
       changer = true;
       changestorage = false;
       skiller = skill[25].name;
       bothchange += 1;
       Cdp.innerHTML = "ポケモン";
       change.style.visibility = "hidden";
       subPK.style.visibility = "hidden";
       setTimeout(BOSSPKCO,100);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK3.onclick = function() {
  if (PM[2].HP <= 0) {
   if (againheal === true) {
    againheal = false;
    attackstorage = false;
    Adp.innerHTML = "たたかう";
    attack.style.visibility = "hidden";
    healID = 2;
    subPK.style.visibility = "hidden";
    setTimeout(BOSSPKCO,100);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
    };
    if (PM[ID].mega === true) {
     PM[ID].mega = false;
     PM[ID].MHP = PMm.slice(ID,(ID + 1))[0].MHP;
     PM[ID].A = PMm.slice(ID,(ID + 1))[0].A;
     PM[ID].B = PMm.slice(ID,(ID + 1))[0].B;
     PM[ID].C = PMm.slice(ID,(ID + 1))[0].C;
     PM[ID].D = PMm.slice(ID,(ID + 1))[0].D;
     PM[ID].S = PMm.slice(ID,(ID + 1))[0].S;
     PM[ID].F = PMm.slice(ID,(ID + 1))[0].F;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
     PM[ID].color1 = PMm.slice(ID,(ID + 1))[0].color1;
     PM[ID].color2 = PMm.slice(ID,(ID + 1))[0].color2;
     PM[ID].heavy = PMm.slice(ID,(ID + 1))[0].heavy;
     PM[ID].img1 = PMm.slice(ID,(ID + 1))[0].img1;
    };
    if (F1 === "バトルスイッチ") {
     PM[ID].img1 = PM[ID].shieldform1;
     PM[ID].blade = false;
     PM[ID].A = 70;
     PM[ID].B = 160;
     PM[ID].C = 70;
     PM[ID].D = 160;
    };
    ID = 2;
    F1 = PM[ID].F;
    PN1 = PM[ID].name;
    namedp1.innerHTML = PM[ID].name;
    type11.innerHTML = PM[ID].bodytype1;
    type12.innerHTML = PM[ID].bodytype2;
    type11.style.backgroundColor = PM[ID].color1;
    type12.style.backgroundColor = PM[ID].color2;
    subPK.style.visibility = "hidden";
    changing();
   } else {
    if (againheal === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
　   let CF = confirm(PM[2].name + "に入れ替えますか?");
     if (CF === true) {
      if (ID !== 2) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
        PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
       };
       if (PM[ID].F === "さいせいりょく") {
        PM[ID].HP += Math.floor(PM[ID].MHP / 3);
        if (PM[ID].HP > PM[ID].MHP) {
         PM[ID].HP = PM[ID].MHP;
        };
       };
       if (PM[ID].MAX === true) {
        PM[ID].MAX = false;
        PM[ID].MHP = PM[ID].MHP / 2;
        PM[ID].HP = Math.ceil(PM[ID].HP / 2);
       };
       if (F1 === "バトルスイッチ") {
        PM[ID].img1 = PM[ID].shieldform1;
        PM[ID].blade = false;
        PM[ID].A = 70;
        PM[ID].B = 160;
        PM[ID].C = 70;
        PM[ID].D = 160;
       };
       bodytype1 = PM[ID].bodytype1;
       bodytype2 = PM[ID].bodytype2;
       ID = 2;
       F1 = PM[ID].F;
       namedp1.innerHTML = PM[ID].name;
       type11.innerHTML = PM[ID].bodytype1;
       type12.innerHTML = PM[ID].bodytype2;
       type11.style.backgroundColor = PM[ID].color1;
       type12.style.backgroundColor = PM[ID].color2;
       changer = true;
       changestorage = false;
       skiller = skill[25].name;
       bothchange += 1;
       Cdp.innerHTML = "ポケモン";
       change.style.visibility = "hidden";
       subPK.style.visibility = "hidden";
       setTimeout(BOSSPKCO,100);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK4.onclick = function() {
  if (PM[3].HP <= 0) {
   if (againheal === true) {
    againheal = false;
    attackstorage = false;
    Adp.innerHTML = "たたかう";
    attack.style.visibility = "hidden";
    healID1 = 3;
    subPK.style.visibility = "hidden";
    setTimeout(BOSSPKCO,200);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
    };
    if (PM[ID].mega === true) {
     PM[ID].mega = false;
     PM[ID].MHP = PMm.slice(ID,(ID + 1))[0].MHP;
     PM[ID].A = PMm.slice(ID,(ID + 1))[0].A;
     PM[ID].B = PMm.slice(ID,(ID + 1))[0].B;
     PM[ID].C = PMm.slice(ID,(ID + 1))[0].C;
     PM[ID].D = PMm.slice(ID,(ID + 1))[0].D;
     PM[ID].S = PMm.slice(ID,(ID + 1))[0].S;
     PM[ID].F = PMm.slice(ID,(ID + 1))[0].F;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
     PM[ID].color1 = PMm.slice(ID,(ID + 1))[0].color1;
     PM[ID].color2 = PMm.slice(ID,(ID + 1))[0].color2;
     PM[ID].heavy = PMm.slice(ID,(ID + 1))[0].heavy;
     PM[ID].img1 = PMm.slice(ID,(ID + 1))[0].img1;
    };
    if (F1 === "バトルスイッチ") {
     PM[ID].img1 = PM[ID].shieldform1;
     PM[ID].blade = false;
     PM[ID].A = 70;
     PM[ID].B = 160;
     PM[ID].C = 70;
     PM[ID].D = 160;
    };
    ID = 3;
    namedp1.innerHTML = PM[ID].name;
    type11.innerHTML = PM[ID].bodytype1;
    type12.innerHTML = PM[ID].bodytype2;
    type11.style.backgroundColor = PM[ID].color1;
    type12.style.backgroundColor = PM[ID].color2;
    F1 = PM[ID].F;
    subPK.style.visibility = "hidden";
    changing();
   } else {
    if (againheal === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let CF = confirm(PM[3].name + "に入れ替えますか?");
     if (CF === true) {
      if (ID !== 3) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
        PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
       };
       if (PM[ID].F === "さいせいりょく") {
        PM[ID].HP += Math.floor(PM[ID].MHP / 3);
        if (PM[ID].HP > PM[ID].MHP) {
         PM[ID].HP = PM[ID].MHP;
        };
       };
       if (PM[ID].MAX === true) {
        PM[ID].MAX = false;
        PM[ID].MHP = PM[ID].MHP / 2;
        PM[ID].HP = Math.ceil(PM[ID].HP / 2);
       };
       if (F2 === "バトルスイッチ") {
        PM[ID].img1 = PM[ID].shieldform1;
        PM[ID].blade = false;
        PM[ID].A = 70;
        PM[ID].B = 160;
        PM[ID].C = 70;
        PM[ID].D = 160;
       };
       bodytype1 = PM[ID].bodytype1;
       bodytype2 = PM[ID].bodytype2;
       ID = 3;
       namedp1.innerHTML = PM[ID].name;
       type11.innerHTML = PM[ID].bodytype1;
       type12.innerHTML = PM[ID].bodytype2;
       type11.style.backgroundColor = PM[ID].color1;
       type12.style.backgroundColor = PM[ID].color2;
       F1 = PM[ID].F;
       changer = true;
       changestorage = false;
       skiller = skill[25].name;
       bothchange += 1;
       Cdp.innerHTML = "ポケモン";
       change.style.visibility = "hidden";
       subPK.style.visibility = "hidden";
       setTimeout(BOSSPKCO,500);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK5.onclick = function() {
  if (PM[4].HP <= 0) {
   if (againheal === true) {
    againheal = false;
    attackstorage1 = false;
    Adp.innerHTML = "たたかう";
    attack1.style.visibility = "hidden";
    healID = 4;
    subPK.style.visibility = "hidden";
    setTimeout(BOSSPKCO,200);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
    };
    if (PM[ID].mega === true) {
     PM[ID].mega = false;
     PM[ID].MHP = PMm.slice(ID,(ID + 1))[0].MHP;
     PM[ID].A = PMm.slice(ID,(ID + 1))[0].A;
     PM[ID].B = PMm.slice(ID,(ID + 1))[0].B;
     PM[ID].C = PMm.slice(ID,(ID + 1))[0].C;
     PM[ID].D = PMm.slice(ID,(ID + 1))[0].D;
     PM[ID].S = PMm.slice(ID,(ID + 1))[0].S;
     PM[ID].F = PMm.slice(ID,(ID + 1))[0].F;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
     PM[ID].color1 = PMm.slice(ID,(ID + 1))[0].color1;
     PM[ID].color2 = PMm.slice(ID,(ID + 1))[0].color2;
     PM[ID].heavy = PMm.slice(ID,(ID + 1))[0].heavy;
     PM[ID].img1 = PMm.slice(ID,(ID + 1))[0].img1;
    };
    if (F2 === "バトルスイッチ") {
     PM[ID].img1 = PM[ID].shieldform1;
     PM[ID].blade = false;
     PM[ID].A = 70;
     PM[ID].B = 160;
     PM[ID].C = 70;
     PM[ID].D = 160;
    };
    ID = 4;
    namedp1.innerHTML = PM[ID].name;
    type11.innerHTML = PM[ID].bodytype1;
    type12.innerHTML = PM[ID].bodytype2;
    type11.style.backgroundColor = PM[ID].color1;
    type12.style.backgroundColor = PM[ID].color2;
    F1 = PM[ID].F;
    subPK.style.visibility = "hidden";
    changing();
   } else {
    if (againheal === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let CF = confirm(PM[4].name + "に入れ替えますか?");
     if (CF === true) {
      if (ID !== 4) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
        PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
       };
       if (PM[ID].F === "さいせいりょく") {
        PM[ID].HP += Math.floor(PM[ID].MHP / 3);
        if (PM[ID].HP > PM[ID].MHP) {
         PM[ID].HP = PM[ID].MHP;
        };
       };
       if (PM[ID].MAX === true) {
        PM[ID].MAX = false;
        PM[ID].MHP = PM[ID].MHP / 2;
        PM[ID].HP = Math.ceil(PM[ID].HP / 2);
       };
       if (F1 === "バトルスイッチ") {
        PM[ID].img1 = PM[ID].shieldform1;
        PM[ID].blade = false;
        PM[ID].A = 70;
        PM[ID].B = 160;
        PM[ID].C = 70;
        PM[ID].D = 160;
       };
       bodytype1 = PM[ID].bodytype1;
       bodytype2 = PM[ID].bodytype2;
       ID = 4;
       F1 = PM[ID].F;
       namedp1.innerHTML = PM[ID].name;
       type11.innerHTML = PM[ID].bodytype1;
       type12.innerHTML = PM[ID].bodytype2;
       type11.style.backgroundColor = PM[ID].color1;
       type12.style.backgroundColor = PM[ID].color2;
       changer = true;
       changestorage = false;
       skiller = skill[25].name;
       bothchange += 1;
       Cdp.innerHTML = "ポケモン";
       change.style.visibility = "hidden";
       subPK.style.visibility = "hidden";
       setTimeout(BOSSPKCO,500);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 subPK6.onclick = function() {
  if (PM[5].HP <= 0) {
   if (againheal === true) {
    againheal = false;
    attackstorage = false;
    Adp.innerHTML = "たたかう";
    attack.style.visibility = "hidden";
    healID = 5;
    subPK.style.visibility = "hidden";
    setTimeout(BOSSPKCO,200);
   } else {
    alert("そのポケモンはひんしだよ！");
   };
  } else {
   if (down === true) {
    if (formed1 === true) {
     formed1 = false;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
    };
    if (PM[ID].mega === true) {
     PM[ID].mega = false;
     PM[ID].MHP = PMm.slice(ID,(ID + 1))[0].MHP;
     PM[ID].A = PMm.slice(ID,(ID + 1))[0].A;
     PM[ID].B = PMm.slice(ID,(ID + 1))[0].B;
     PM[ID].C = PMm.slice(ID,(ID + 1))[0].C;
     PM[ID].D = PMm.slice(ID,(ID + 1))[0].D;
     PM[ID].S = PMm.slice(ID,(ID + 1))[0].S;
     PM[ID].F = PMm.slice(ID,(ID + 1))[0].F;
     PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
     PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
     PM[ID].color1 = PMm.slice(ID,(ID + 1))[0].color1;
     PM[ID].color2 = PMm.slice(ID,(ID + 1))[0].color2;
     PM[ID].heavy = PMm.slice(ID,(ID + 1))[0].heavy;
     PM[ID].img1 = PMm.slice(ID,(ID + 1))[0].img1;
    };
    if (F1 === "バトルスイッチ") {
     PM[ID].img1 = PM[ID].shieldform1;
     PM[ID].blade = false;
     PM[ID].A = 70;
     PM[ID].B = 160;
     PM[ID].C = 70;
     PM[ID].D = 160;
    };
    ID = 5;
    F1 = PM[ID].F;
    namedp1.innerHTML = PM[ID].name;
    type11.innerHTML = PM[ID].bodytype1;
    type12.innerHTML = PM[ID].bodytype2;
    type11.style.backgroundColor = PM[ID].color1;
    type12.style.backgroundColor = PM[ID].color2;
    subPK.style.visibility = "hidden";
    changing();
   } else {
    if (againheal === true) {
     alert("そのポケモンはまだ戦えるよ");
    } else {
     let CF = confirm(PM[5].name + "に入れ替えますか?");
     if (CF === true) {
      if (ID !== 5) {
       if (formed1 === true) {
        formed1 = false;
        PM[ID].bodytype1 = PMm.slice(ID,(ID + 1))[0].bodytype1;
        PM[ID].bodytype2 = PMm.slice(ID,(ID + 1))[0].bodytype2;
       };
       if (PM[ID].F === "さいせいりょく") {
        PM[ID].HP += Math.floor(PM[ID].MHP / 3);
        if (PM[ID].HP > PM[ID].MHP) {
         PM[ID].HP = PM[ID].MHP;
        };
       };
       if (PM[ID].MAX === true) {
        PM[ID].MAX = false;
        PM[ID].MHP = PM[ID].MHP / 2;
        PM[ID].HP = Math.ceil(PM[ID].HP / 2);
       };
       if (F1 === "バトルスイッチ") {
        PM[ID].img1 = PM[ID].shieldform1;
        PM[ID].blade = false;
        PM[ID].A = 70;
        PM[ID].B = 160;
        PM[ID].C = 70;
        PM[ID].D = 160;
       };
       bodytype1 = PM[ID].bodytype1;
       bodytype2 = PM[ID].bodytype2;
       ID = 5;
       F1 = PM[ID].F;
       namedp1.innerHTML = PM[ID].name;
       type11.innerHTML = PM[ID].bodytype1;
       type12.innerHTML = PM[ID].bodytype2;
       type11.style.backgroundColor = PM[ID].color1;
       type12.style.backgroundColor = PM[ID].color2;
       changer = true;
       changestorage = false;
       skiller = skill[25].name;
       bothchange += 1;
       Cdp.innerHTML = "ポケモン";
       change.style.visibility = "hidden";
       subPK.style.visibility = "hidden";
       setTimeout(BOSSPKCO,500);
      } else {
       alert("そのポケモンは場に出ているよ");
      };
     };
    };
   };
  };
 };
 hpbardp();
 setTimeout(start2,100);
 body.style.visibility = "visible";
}