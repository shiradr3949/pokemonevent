function rate() {
 if (transform1 === true) {
  transform1 = false;
  alert(PN1 + "は" + skilltype + "タイプになった！");
  Fdp11.style.visibility = "hidden";
  Fdp12.style.visibility = "hidden";
 };
 if (transform2 === true) {
  transform2 = false;
  alert(PN2 + "は" + skilltype + "タイプになった！");
  Fdp21.style.visibility = "hidden";
  Fdp22.style.visibility = "hidden";
 };
 if (first === true) {
  if (firsted === 1) {
   if (F2 === "フィルター" && dmg > 2) {
    minus = Math.floor(minus / 4 * 3);
   };
   if (BOSS.HP < minus) {
    minus = BOSS.HP;
    if (F2 === "がんじょう" && minus === BOSS.MHP) {
     minus -= 1;
    };
   };
   futurehp2 = BOSS.HP - minus;
   setTimeout(dmganimation2,200);
  } else {
   if (F1 === "フィルター" && dmg > 2) {
    minus = Math.floor(minus / 4 * 3);
   };
   if (F2 === "ブレインフォース" && dmg > 2) {
    minus = Math.floor(minus / 4 * 5);
   };
   if (PM[ID].HP < minus) {
    minus = PM[ID].HP;
    if (F1 === "がんじょう" && minus === PM[ID].MHP) {
     minus -= 1;
    };
   };
   futurehp1 = PM[ID].HP - minus;
   if (PM[ID].done !== false) {
    PM[ID].done += 1;
    if (PM[ID].done === 7) {
     PM[ID].done = 6;
    };
   };
   setTimeout(dmganimation1,200);
  };
 } else {
  if (firsted === 1) {
   if (F1 === "フィルター" && dmg > 2) {
    minus = Math.floor(minus / 4 * 3);
   };
   if (F2 === "ブレインフォース" && dmg > 2) {
    minus = Math.floor(minus / 4 * 5);
   };
   if (PM[ID].HP < minus) {
    minus = PM[ID].HP;
    if (F1 === "がんじょう" && minus === PM[ID].MHP) {
     minus -= 1;
    };
   };
   futurehp1= PM[ID].HP - minus;
   if (PM[ID].done !== false) {
    PM[ID].done += 1;
    if (PM[ID].done === 7) {
     PM[ID].done = 6;
    };
   };
   setTimeout(dmganimation1,200);
  } else {
   if (F2 === "フィルター" && dmg > 2) {
    minus = Math.floor(minus / 4 * 3);
   };
   if (BOSS.HP < minus) {
    minus = BOSS.HP;
    if (F2 === "がんじょう" && minus === BOSS.MHP) {
     minus -= 1;
     Fdp21.style.visibility = "visible";
     Fdp22.style.visibility = "visible";
    };
   };
   futurehp2 = BOSS.HP - minus;
   setTimeout(dmganimation2,200);
  };
 };
}
function dmganimation1() {
 if (PM[ID].HP > futurehp1) {
  if (F1 === "ばけのかわ" && PM[ID].ghostskin === true) {
   PM[ID].ghostskin = false;
   if (F2 !== "かたやぶり" && Bskiller.noF !== true) {
    dmg = 2;
    chaosdp = false;
    AH = false;
    outskin = true;
    futurehp1 = Math.floor(PM[ID].MHP / 8 * 7);
    Fdp11.style.visibility = "visible";
    Fdp12.style.visibility = "visible";
   } else {
    PM[ID].img1 = PM[ID].afterimg;
    PK1.src = PM[ID].img1;
   };
  };
  PM[ID].HP -= 1;
  HPdp.innerHTML = PM[ID].HP;
  setTimeout(dmganimation1,5);
 } else {
  if (reaction === true || suicide1 === true) {
   if (suicide1 !== true) {
    alert(PN1 + "は勢い余って地面にぶつかった！");
    if (PM[ID].HP <= 0) {
     suicide1 = true;
    };
   };
   setTimeout(seconddp,200);
  } else {
   if (drum === true) {
    setTimeout(dp1,200);
   } else {
    setTimeout(dp2,200);
   };
  };
 };
}
function dmganimation2() {
 if (BOSS.HP > futurehp2) {
  BOSS.HP -= 1;
  if (hpbars + 1 !== Math.ceil(BOSS.HP / BOSS.MHP * 100)) {
   hpbar[hpbars].style.color = "#FFFFFF";
   hpbar[hpbars].style.backgroundColor = "#FFFFFF";
   hpbars -= 1;
  };
  setTimeout(dmganimation2,10);
 } else {
  setTimeout(dp1,200);
 };
}
function dp1() {
 if (nodmg === true) {
  if (skilltype === "みず" && weather === "endearth") {
   rainy = false;
   alert("強い日差しの影響でみずタイプのこうげきが蒸発した！");
  } else {
   if (skilltype === "ほのお" && weather === "startsea") {
   sunny = false;
    alert("強い雨の影響でほのおタイプのこうげきがかき消された！");
   } else {
    alert(PN2 + "には" + display[dmg].dp);
   };
  };
  Wattack = false;
  AH = false;
  dmg = 2;
  Fdp11.style.visibility = "hidden";
  Fdp12.style.visibility = "hidden";
  if (SNdp === "でんこうそうげき1") {
   alert(PN1 + "はでんきを使い果たした！");
   PM[ID].color2 = "#FFFFFF";
   type12.style.backgroundColor = PM[ID].color2;
  };
  if (F2 === "どしょく" || F2 === "ちょすい" || F2 === "ちくでん") {
   futurehp2 = BOSS.HP + Math.floor(BOSS.MHP / 4);
   if (futurehp2 > BOSS.MHP) {
    futurehp2 = BOSS.MHP;
   };
   setTimeout(grow2,100);
  } else {
   setTimeout(seconddp,100);
  };
 } else {
  if (skiller.Wattack === true) {
   if (chaosdp === true) {
    chaosdp = false;
    alert("急所に当たった！");
   };
   if (BOSS.HP <= 0) {
    alert(WApt +"回当たった！");
    WApt = 0;
    Wattacked = false;
    Wattack = false;
    if (dmg !== 2) {
     alert(display[dmg].dp);
     dmg = 2;
    };
    if (illusion2 === true) {
     vision2 = true;
    };
    setTimeout(seconddp,100);
   } else {
    if (Wattack === true) {
     Wattacked = true;
     dmg = 2;
     if (outskin === true) {
      outskin = false;
      alert(PN2 + "のばけのかわがはがれた！");
      Fdp21.style.visibility = "hidden";
      Fdp22.style.visibility = "hidden";
      BOSS.img2 = BOSS.afterimg;
      PK2.src = BOSS.img2;
     };
     setTimeout(PKCO1,500);
    } else {
     alert(WApt +"回当たった！");
     WApt = 0;
     Wattacked = false;
     if (dmg !== 2) {
      alert(display[dmg].dp);
      dmg = 2;
     };
     if (illusion2 === true) {
      vision2 = true;
     };
     setTimeout(seconddp,100);
    };
   };
  } else {
   if (dmg !== 2) {
    alert(display[dmg].dp);
    dmg = 2;
   };
   if (chaosdp === true) {
    chaosdp = false;
    alert("急所に当たった！");
   };
   if (healdp1 === true) {
    healdp1 = false;
    alert(PN1 + "の体力が回復した。");
   };
   if (AH === true || AH2 === true || AMH === true) {
    if (AH === true) {
     futurehp1 = PM[ID].HP + Math.floor(minus / 2);
    };
    if (AH2 === true) {
     futurehp1 = PM[ID].HP + Math.floor(minus / 4 * 3);
    };
    if (AMH === true) {
     futurehp1 = PM[ID].HP + Math.floor(PM[ID].MHP / 6);
    };
    if (futurehp1 > PM[ID].MHP) {
     futurehp1 = PM[ID].MHP;
    };
    grow1();
   } else {
    dp11();
   };
  };
 };
}
function dp11() {
 if (sturdy2 === true) {
  sturdy2 = false;
  if (F2 === "がんじょう" && BOSS.MHP === (minus + 1)) {
   alert(PN2 + "は持ちこたえた！");
   Fdp21.style.visibility = "hidden";
   Fdp22.style.visibility = "hidden";
  };
  if (F2 === "すなはき" && weather !== "sandstrom" && minus !== 0) {
   alert("砂嵐が吹き荒れた！");
   weather = "sandstrom";
   weatherpt = 0;
   Fdp21.style.visibility = "hidden";
   Fdp22.style.visibility = "hidden";
  };
  setTimeout(seconddp,100);
 } else {
  if (SNdp === "でんこうそうげき1") {
   alert(PN1 + "はでんきを使い果たした！");
   PM[ID].color2 = "#FFFFFF";
   type12.style.backgroundColor = PM[ID].color2;
  };
  if (drum === true) {
   drum = false;
   alert(PN1 + "は体力を削ってパワーぜんかい！");
  };
  if (outskin === true) {
   outskin = false;
   alert(PN2 + "のばけのかわがはがれた！");
   BOSS.img2 = BOSS.afterimg;
   PK2.src = BOSS.img2;
   Fdp21.style.visibility = "hidden";
   Fdp22.style.visibility = "hidden";
  };
  if (illusion2 === true) {
   vision2 = true;
  };
  if (shielddp2 === true) {
   shielddp2 = false;
   alert(PN2 + "は守り切れずダメージを受けた…。");
  };
  if (onekilloff2 === true) {
   onekilloff2 = false;
   if (F2 === "がんじょう" || (skiller1.name === "じわれ" && F2 === "ふゆう")) {
    alert(PN2 + "には効果がないようだ…。");
    Fdp21.style.visibility = "hidden";
    Fdp22.style.visibility = "hidden";
   } else {
    alert("一撃必殺！");
   };
  };
  if (skiller.highhitrating === true) {
   plushit1 += 1;
   if (plushit1 > 3) {
    plushit1 = 3;
   } else {
    alert(PN1 + "は張り切っている！");
   };
  };
  if (smog === true) {
   smog = false;
   alert(PN2 + "の能力変化がもとに戻った！");
  };
  if (breakPB2 === true) {
   breakPB2 = false;
   alert(PN2 + "のリフレクターがなくなった！");
  };
  if (breakSB2 === true) {
   breakSB2 = false;
   alert(PN2 + "のひかりのかべがなくなった！");
  };
  if (breakOB2 === true) {
   breakOB2 = false;
   alert(PN2 + "のオーロラベールがなくなった！");
  };
  if (PBing1 === true) {
   PBing1 = false;
   alert(Pnameon + "のポケモンはリフレクターで物理に強くなった！");
  };
  if (SBing1 === true) {
   SBing1 = false;
   alert(Pnameon + "のポケモンはひかりのかべで特殊に強くなった！");
  };
  if (OBing1 === true) {
   OBing1 = false;
   alert(Pnameon + "のポケモンはオーロラベールで物理と特殊に強くなった！");
  };
  if (F2 === "がんじょう" && BOSS.MHP === (minus + 1)) {
   Fdp21.style.visibility = "visible";
   Fdp22.style.visibility = "visible";
   sturdy2 = true;
   setTimeout(dp11,100);
  } else {
   if (F2 === "すなはき" && weather !== "sandstrom" && minus !== 0) {
    Fdp21.style.visibility = "visible";
    Fdp22.style.visibility = "visible";
    sturdy2 = true;
    setTimeout(dp11,100);
   } else {
    setTimeout(seconddp,100);
   };
  };
 };
}
function AHdp1() {
 if (AMH === true) {
  alert(PN1 + "の体力が回復した！");
 } else {
  alert(PN1 + "は"+ PN2 + "から体力を吸い取った！");
 };
 AH = false;
 AH2 = false;
 AMH = false;
 dp11();
}
function dp2() {
 if (nodmg === true) {
  if (skilltype === "みず" && weather === "endearth") {
   rainy = false;
   alert("強い日差しの影響でみずタイプのこうげきが蒸発した！");
  } else {
   if (skilltype === "ほのお" && weather === "startsea") {
   sunny = false;
    alert("強い雨の影響でほのおタイプのこうげきがかき消された！");
   } else {
    alert(PN1 + "には" + display[dmg].dp);
   };
  };
  Wattack = false;
  AH = false;
  dmg = 2;
  Fdp21.style.visibility = "hidden";
  Fdp22.style.visibility = "hidden";
  if (F1 === "どしょく" || F1 === "ちょすい" || F1 === "ちくでん") {
   futurehp1 = PM[ID].HP + Math.floor(PM[ID].MHP / 4);
   if (futurehp1 > PM[ID].MHP) {
    futurehp1 = PM[ID].MHP;
   };
   setTimeout(grow1,100);
  } else {
   setTimeout(seconddp,100);
  };
 } else {
  if (Bskiller.Wattack === true) {
   if (chaosdp === true) {
    chaosdp = false;
    alert("急所に当たった！");
   };
   if (PM[ID].HP <= 0) {
    alert(WApt +"回当たった！");
    WApt = 0;
    Wattacked = false;
    Wattack = false;
    if (dmg !== 2) {
     alert(display[dmg].dp);
     dmg = 2;
    };
    if (illusion1 === true) {
     vision1 = true;
    };
    setTimeout(seconddp,100);
   } else {
    if (Wattack === true) {
     Wattacked = true;
     dmg = 2;
     if (outskin === true) {
      outskin = false;
      alert(PN1 + "のばけのかわがはがれた！");
      Fdp11.style.visibility = "hidden";
      Fdp12.style.visibility = "hidden";
      PM[ID].img1 = PM[ID].afterimg;
      PK1.src = PM[ID].img1;
     };
     setTimeout(PKCO2,500);
    } else {
     alert(WApt +"回当たった！");
     WApt = 0;
     Wattacked = false;
     if (dmg !== 2) {
      alert(display[dmg].dp);
      dmg = 2;
     };
     if (illusion1 === true) {
      vision1 = true;
     };
     setTimeout(seconddp,100);
    };
   };
  } else {
   if (dmg !== 2) {
    alert(display[dmg].dp);
    dmg = 2;
   };
   if (chaosdp === true) {
    chaosdp = false;
    alert("急所に当たった！");
   };
   if (healdp2 === true) {
    healdp2 = false;
    alert(PN2 + "の体力が回復した。");
   };
   if (AH === true || AH2 === true || AMH === true) {
    if (AH === true) {
     futurehp2 = BOSS.HP + Math.floor(minus / 2);
    };
    if (AH2 === true) {
     futurehp2 = BOSS.HP + Math.floor(minus / 4 * 3);
    };
    if (AMH === true) {
     futurehp2 = BOSS.HP + Math.floor(BOSS.MHP / 6);
    };
    if (futurehp2 > BOSS.MHP) {
     futurehp2 = BOSS.MHP;
    };
    grow2();
   } else {
    dp22();
   };
  };
 };
}
function dp22() {
 if (sturdy1 === true) {
  sturdy1 = false;
  if (F1 === "がんじょう" && PM[ID].MHP === (minus + 1)) {
   alert(PN1 + "は持ちこたえた！");
   Fdp11.style.visibility = "hidden";
   Fdp12.style.visibility = "hidden";
  };
  if (F1 === "すなはき" && weather !== "sandstrom" && minus !== 0) {
   alert("砂嵐が吹き荒れた！");
   weather = "sandstrom";
   weatherpt = 0;
   Fdp21.style.visibility = "hidden";
   Fdp22.style.visibility = "hidden";
  };
  setTimeout(seconddp,200);
 } else {
  if (drum === true) {
   drum = false;
   alert(PN2 + "は体力を削ってパワーぜんかい！");
  };
  if (outskin === true) {
   outskin = false;
   alert(PN1 + "のばけのかわがはがれた！");
   PM[ID].img1 = PM[ID].afterimg;
   PK1.src = PM[ID].img1;
   Fdp11.style.visibility = "hidden";
   Fdp12.style.visibility = "hidden";
  };
  if (illusion1 === true) {
   vision1 = true;
  };
  if (shielddp1 === true) {
   shielddp1 = false;
   alert(PN1 + "は守り切れずダメージを受けた…。");
  };
  if (onekilloff1 === true) {
   onekilloff1 = false;
   if (F1 === "がんじょう" || (Bskiller.name === "じわれ" && F1 === "ふゆう")) {
    alert(PN1 + "には効果がないようだ…。");
    Fdp11.style.visibility = "hidden";
    Fdp12.style.visibility = "hidden";
   } else {
    alert("一撃必殺！");
   };
  };
  if (Bskiller.highhitrating === true) {
   plushit2 += 1;
   if (plushit2 > 3) {
    plushit2 = 3;
   } else {
    alert(PN2 + "は張り切っている！");
   };
  };
  if (smog === true) {
   smog = false;
   alert(PN1 + "の能力変化がもとに戻った！");
  };
  if (breakPB1 === true) {
   breakPB1 = false;
   alert("味方のリフレクターがなくなった！");
  };
  if (breakSB1 === true) {
   breakSB1 = false;
   alert("味方のひかりのかべがなくなった！");
  };
  if (breakOB1 === true) {
   breakOB1 = false;
   alert("味方のオーロラベールがなくなった！");
  };
  if (PBing2 === true) {
   PBing2 = false;
   alert(PN2 + "はリフレクターで物理に強くなった！");
  };
  if (SBing2 === true) {
   SBing2 = false;
   alert(PN2 + "はひかりのかべで特殊に強くなった！");
  };
  if (OBing2 === true) {
   OBing2 = false;
   alert(PN2 + "はオーロラベールで物理と特殊に強くなった！");
  };
  if (F1 === "がんじょう" && PM[ID].MHP === (minus + 1)) {
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
   sturdy1 = true;
   setTimeout(dp22,100);
  } else {
   if (F1 === "すなはき" && weather !== "sandstrom" && minus !== 0) {
    Fdp11.style.visibility = "visible";
    Fdp12.style.visibility = "visible";
    sturdy1 = true;
    setTimeout(dp22,100);
   } else {
    setTimeout(seconddp,100);
   };
  };
 };
}
function AHdp2() {
 if (AMH === true) {
  alert(PN2 + "の体力が回復した！");
 } else {
  alert(PN2 + "は"+ PN1 + "から体力を吸い取った！");
 };
 AH = false;
 AH2 = false;
 AMH = false;
 dp22();
}
function testfor1() {
 if (firsted === 2) {
  minus = 0;
 };
 if (sunny === true) {
  sunny = false;
  alert("日差しが強くなった！");
  weather = "sunny";
  weatherpt = 0;
 };
 if (rainy === true) {
  rainy = false;
  alert("雨が降り始めた！");
  weather = "rainy";
  weatherpt = 0;
 };
 if (sandstrom === true) {
  sandstrom = false;
  alert("砂嵐が吹き荒れた！");
  weather = "sandstrom";
  weatherpt = 0;
 };
 if (snowy === true) {
  snowy = false;
  alert("雪が降り始めた！");
  weather = "snowy";
  weatherpt = 0;
 };
 if (phycho === true) {
  phycho = false;
  alert("足元が不思議な感じになった！");
  field = "phycho";
  fieldpt = 0;
 };
 if (elec === true) {
  elec = false;
  alert("足元に電気がかけめぐる！");
  field = "elec";
  fieldpt = 0;
 };
 if (mist === true) {
  mist = false;
  alert("足元に霧が立ち込めた！");
  field = "mist";
  fieldpt = 0;
 };
 if (grass === true) {
  grass = false;
  alert("足元に草がわい茂った！");
  field = "grass";
  fieldpt = 0;
 };
 if (field !== "cansel" && Bskiller.breakfield === true) {
  field = "cansel";
  fieldpt = 0;
  alert("フィールドがもとに戻った！");
 };
 if (gravity === true && gravities !== true) {
  gravity = false;
  alert("重力が強くなった！");
  gravities = true;
  gravitypt = 0;
 };
 if (skyoff1 === true) {
  skyoff1 = false;
  PM[ID].bodytype2 = "ひこう";
 };
 if (PM[ID].HP <= 0) {
  alert(PN1 + "は倒れた…。");
  dier1 = true;
  if (PM[ID].MAX === true) {
   PM[ID].MAX = false;
   PK1.style.width = 200;
   PM[ID].MHP = PM[ID].MHP / 2;
   MHPdp.innerHTML = PM[ID].MHP;
   dps.style.backgroundColor = "#F9F9F6";
  };
  changer = false;
  reaction = false;
  PK1.style.visibility = "hidden";
  MA.style.visibility = "hidden";
  dies += 1;
  if (dies === diept) {
   alert(Pnameon + "にはもう戦えるポケモンがいない！");
   alert("疲れて動けなくなった瀕死のポケモンたちをかばいながら、" + Pnameon + "は急いでポケモンセンターへ向かった…");
  } else {
   down = true;
   subPK.style.visibility = "visible";
  };
 } else {
  if (reaction === true) {
   reaction = false;
   if (first === true) {
    last();
   } else {
    firsted = 1;
    BOSSPKCO();
   };
  } else {
   if (first === true) {
    if (suicide2 === true) {
     suicide2 = false;
     setTimeout(testfor2,200);
    } else {
     if (PM[ID].MAX === true) {
      setTimeout(PKCOMAX1,200);
     } else {
      setTimeout(PKCO1,200);
     };
    };
   } else {
    if (suicide2 === true) {
     suicide2 = false;
     setTimeout(testfor2,200);
    } else {
     last();
    };
   };
  };
 };
}
function testfor2() {
 if (firsted === 2) {
  minus = 0;
 };
 if (sunny === true) {
  sunny = false;
  alert("日差しが強くなった！");
  weather = "sunny";
  weatherpt = 0;
 };
 if (rainy === true) {
  rainy = false;
  alert("雨が降り始めた！");
  weather = "rainy";
  weatherpt = 0;
 };
 if (sandstrom === true) {
  sandstrom = false;
  alert("砂嵐が吹き荒れた！");
  weather = "sandstrom";
  weatherpt = 0;
 };
 if (snowy === true) {
  snowy = false;
  alert("雪が降り始めた！");
  weather = "snowy";
  weatherpt = 0;
 };
 if (phycho === true) {
  phycho = false;
  alert("足元が不思議な感じになった！");
  field = "phycho";
  fieldpt = 0;
 };
 if (elec === true) {
  elec = false;
  alert("足元に電気がかけめぐる！");
  field = "elec";
  fieldpt = 0;
 };
 if (mist === true) {
  mist = false;
  alert("足元に霧が立ち込めた！");
  field = "mist";
  fieldpt = 0;
 };
 if (grass === true) {
  grass = false;
  alert("足元に草がわい茂った！");
  field = "grass";
  fieldpt = 0;
 };
 if (field !== "cansel" && skiller.breakfield === true) {
  field = "cansel";
  fieldpt = 0;
  alert("フィールドがもとに戻った！");
 };
 if (gravity === true && gravities !== true) {
  gravity = false;
  alert("重力が強くなった！");
  gravities = true;
  gravitypt = 0;
 };
 if (skyoff2 === true) {
  skyoff2 = false;
  BOSS.bodytype2 = "ひこう";
 };
 if (BOSS.HP <= 0) {
  alert(PN2 + "は倒れた…。");
  dier2 = true;
  PK2.style.visibility = "hidden";
 } else {
  reaction = false;
  if (first === true) {
   first = false;
   last();
  } else {
   if (suicide1 === true) {
    suicide1 = false;
    setTimeout(testfor1,200);
   } else {
    BOSSPKCO();
   };
  };
 };
}
function last() {
 if (F1 === "ぎょぐん" && PM[ID].HP <= 30 && PM[ID].scatter === false) {
  if (scatter === true) {
   scatter = false;
   alert("ヨワシの群れが散り散りになった！");
   PM[ID].A = PMm.slice(ID,(ID + 1))[0].A;
   PM[ID].B = PMm.slice(ID,(ID + 1))[0].B;
   PM[ID].C = PMm.slice(ID,(ID + 1))[0].C;
   PM[ID].D = PMm.slice(ID,(ID + 1))[0].D;
   PM[ID].heavy = PMm.slice(ID,(ID + 1))[0].heavy;
   PM[ID].img1 = PMm.slice(ID,(ID + 1))[0].img1;
   PK1.src = PM[ID].img1;
   PM[ID].scatter = true;
   Fdp11.style.visibility = "hidden";
   Fdp12.style.visibility = "hidden";
   setTimeout(last,100);
  } else {
   scatter = true;
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
   setTimeout(last,100);
  };
 } else {
  if (F2 === "ぎょぐん" && BOSS.HP <= 30 && BOSS.scatter === false) {
   if (scatter === true) {
    scatter = false;
    alert("ヨワシの群れが散り散りになった！");
    BOSS.A = PMm.slice(ID2,(ID2 + 1))[0].A;
    BOSS.B = PMm.slice(ID2,(ID2 + 1))[0].B;
    BOSS.C = PMm.slice(ID2,(ID2 + 1))[0].C;
    BOSS.D = PMm.slice(ID2,(ID2 + 1))[0].D;
    BOSS.heavy = PMm.slice(ID2,(ID2 + 1))[0].heavy;
    BOSS.img2 = PMm.slice(ID2,(ID2 + 1))[0].img2;
    PK2.src = BOSS.img2;
    BOSS.scatter = true;
    Fdp21.style.visibility = "hidden";
    Fdp22.style.visibility = "hidden";
    setTimeout(last,100);
   } else {
    scatter = true;
    Fdp21.style.visibility = "visible";
    Fdp22.style.visibility = "visible";
    setTimeout(last,100);
   };
  } else {
   if (F1 === "かそく" && dier1 !== true) {
    if (SR1 < 12) {
     if (speeder1 === true) {
      speeder1 = false;
      SR1 += 1;
      SRdp1.innerHTML = rank[SR1].dp;
      alert(PN1 + "のすばやさが上がった！");
      dier1 = true;
      Fdp11.style.visibility = "hidden";
      Fdp12.style.visibility = "hidden";
      setTimeout(last,100);
     } else {
      speeder1 = true;
      Fdp11.style.visibility = "visible";
      Fdp12.style.visibility = "visible";
      setTimeout(last,100);
     };
    } else {
     dier1 = true;
     setTimeout(last,100);
    };
   } else {
    if (F2 === "かそく") {
     if (SR2 < 12) {
      if (speeder2 === true) {
       speeder2 = false;
       SR2 += 1;
       SRdp2.innerHTML = rank[SR2].dp;
       alert(PN2 + "のすばやさが上がった！");
       dier2 = true;
       Fdp21.style.visibility = "hidden";
       Fdp22.style.visibility = "hidden";
       setTimeout(last,100);
      } else {
       speeder2 = true;
       Fdp21.style.visibility = "visible";
       Fdp22.style.visibility = "visible";
       setTimeout(last,100);
      };
     } else {
      dier2 = true;
      setTimeout(last,100);
     };
    } else {
     if (F1 === "ダルマモード" && PM[ID].daruma === false && PM[ID].HP <= PM[ID].MHP / 2) {
      if (daruma === true) {
       daruma = false;
       alert("ダルマモード発動！");
       PM[ID].daruma = true;
       PM[ID].A += PM[ID].Ap;
       PM[ID].S += PM[ID].Sp;
       PM[ID].bodytype2 = PM[ID].changetype;
       PM[ID].color2 = PM[ID].changecolor;
       type12.innerHTML = PM[ID].bodytype2;
       type12.style.backgroundColor = PM[ID].color2;
       Fdp11.style.visibility = "hidden";
       Fdp12.style.visibility = "hidden";
       setTimeout(last,100);
      } else {
       daruma = true;
       Fdp11.style.visibility = "visible";
       Fdp12.style.visibility = "visible";
       PM[ID].img1 = PM[ID].darumaimg1;
       PK1.src = PM[ID].img1;
       setTimeout(last,100);
      };
     } else {
      if (F2 === "ダルマモード" && BOSS.daruma === false && BOSS.HP <= BOSS.MHP / 2) {
       if (daruma === true) {
        daruma = false;
        alert("ダルマモード発動！");
        BOSS.daruma = true;
        BOSS.A += BOSS.Ap;
        BOSS.S += BOSS.Sp;
        BOSS.bodytype2 = BOSS.changetype;
        BOSS.color2 = BOSS.changecolor;
        type22.innerHTML = BOSS.bodytype2;
        type22.style.backgroundColor = BOSS.color2;
        Fdp21.style.visibility = "hidden";
        Fdp22.style.visibility = "hidden";
        setTimeout(last,100);
       } else {
        daruma = true;
        Fdp21.style.visibility = "visible";
        Fdp22.style.visibility = "visible";
        BOSS.img2 = BOSS.darumaimg2;
        PK2.src = BOSS.img2;
        setTimeout(last,100);
       };
      } else {
       if ((F2 === "スワームチェンジ" && BOSS.perfect !== true && BOSS.HP <= BOSS.MHP / 2) || swarm === true) {
        if (swarm === true) {
         swarm = false;
         BOSS.perfect = true;
         alert(PN2 + "はパーフェクトフォルムに変わった！");
         Fdp21.style.visibility = "hidden";
         Fdp22.style.visibility = "hidden";
         setTimeout(last,200);
        } else {
         alert("たくさんの気配を感じる…！");
         swarm = true;
         Fdp21.style.visibility = "visible";
         Fdp22.style.visibility = "visible";
         BOSS.img = BOSS.changeimg;
         PK2.src = BOSS.img;
         BOSS.MHP = BOSS.MHP + 216;
         BOSS.S -= 10;
         futurehp2 = BOSS.HP + 216;
         hpbars = Math.ceil(BOSS.HP / BOSS.MHP * 100);
         setTimeout(grow2,300);
        };
       } else {
        if (windpt1 === 4) {
         alert("味方のおいかぜが止んだ");
         backwind1 = false;
         windrate1 = 1;
         windpt1 = 0;
        };
        if (unspeedpt === 5) {
         alert("時空がもとに戻った！");
         unspeed = false;
         unspeedpt = 0;
        };
        if (PM[ID].MAX === true) {
         MAXpt += 1;
        };
        if (MAXpt === 3 && PM[ID].MAX === true) {
         PM[ID].MAX = false;
         PK1.src = PM[ID].img1;
         PK1.style.width = 200;
         PM[ID].MHP = PM[ID].MHP / 2;
         PM[ID].HP = Math.ceil(PM[ID].HP / 2);
         HPdp.innerHTML = PM[ID].HP;
         MHPdp.innerHTML = PM[ID].MHP;
         dps.style.backgroundColor = "#F9F9F6";
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
         setTimeout(last,500);
        } else {
         if (weather !== "cansel" && weather !== "endearth" && weather !== "startsea") {
          weatherpt += 1;
          if (weatherpt === 5) {
           weather = "cansel";
           weatherpt = 0;
           alert("天候がもとに戻った！");
          };
         };
         if (field !== "cansel") {
          fieldpt += 1;
          if (fieldpt === 5) {
           field = "cansel";
           fieldpt = 0;
           alert("フィールドがもとに戻った！");
          };
         };
         if (gravities === true) {
          gravitypt += 1;
          if (gravitypt === 5) {
           gravities = false;
           gravitypt = 0;
           alert("重力がもとに戻った！");
          };
         };
         if (Pbarrier1 === true) {
          PBpt1 += 1;
          if (PBpt1 === 5) {
           Pbarrier1 = false;
           alert("味方のリフレクターがなくなった…。");
          };
         };
         if (Sbarrier1 === true) {
          SBpt1 += 1;
          if (SBpt1 === 5) {
           Sbarrier1 = false;
           alert("味方のひかりのかべがなくなった…。");
          };
         };
         if (Obarrier1 === true) {
          OBpt1 += 1;
          if (OBpt1 === 5) {
           Obarrier1 = false;
           alert("味方のオーロラベールがなくなった…。");
          };
         };
         if (Pbarrier2 === true) {
          PBpt2 += 1;
          if (PBpt2 === 5) {
           Pbarrier2 = false;
           alert(PN2 + "のリフレクターがなくなった…。");
          };
         };
         if (Sbarrier2 === true) {
          SBpt2 += 1;
          if (SBpt2 === 5) {
           Sbarrier2 = false;
           alert(PN2 + "のひかりのかべがなくなった…。");
          };
         };
         if (Obarrier2 === true) {
          OBpt2 += 1;
          if (OBpt2 === 5) {
           Obarrier2 = false;
           alert(PN2 + "のオーロラベールがなくなった…。");
          };
         };
         if (nosong1 === true) {
          nosongpt1 += 1;
          if (nosongpt1 === 2) {
           nosongpt1 = 0;
           nosong1 = false;
          };
         };
         if (nosong2 === true) {
          nosongpt2 += 1;
          if (nosongpt2 === 2) {
           nosongpt2 = 0;
           nosong2 = false;
          };
         };
         if (skyoff2 === true) {
          skyoff2 = false;
          BOSS.bodytype2 = "ひこう";
         };
         if (skyoff1 === true) {
          skyoff1 = false;
          PM[ID].bodytype2 = "ひこう";
         };
         changer = false;
         down = false;
         wince1 = false;
         wince2 = false;
         snowdown1 = false;
         snowdown2 = false;
         shield1 = false;
         shield2 = false;
         MAXshield1 = false;
         MAXshield2 = false;
         firster1 = false;
         firster2 = false;
         bothchange = 0;
         first = false; 
         firsted = 0;
         pt1 = 0;
         pt2 = 0;
         dmg = 2;
         dier1 = false;
         dier2 = false;
         SNdp = "off";
         if (secondattack1 === true) {
          setTimeout(test1,100);
         } else {
          attack.style.visibility = "visible";
          change.style.visibility = "visible";
         };
        };
       };
      };
     };
    };
   };
  };
 };
}
function pause() {
 if (voice > 0) {
  voice -= 0.01;
  audio1.volume = voice;
  setTimeout(pause,10);
 } else {
  audio1.pause();
 };
}