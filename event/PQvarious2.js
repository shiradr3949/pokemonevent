function test1() {
 if (MGstart === true) {
  MGstart = false;
  MGed = true;
  PM[ID].mega = true;
  alert(Pnameon + "のキーストーンと" + PN1 + "の" + PM[ID].MGknight + "が反応した！");
  PM[ID].MHP += PM[ID].MHPp;
  PM[ID].HP += PM[ID].MHPp;
  PM[ID].A += PM[ID].Ap;
  PM[ID].B += PM[ID].Bp;
  PM[ID].C += PM[ID].Cp;
  PM[ID].D += PM[ID].Dp;
  PM[ID].S += PM[ID].Sp;
  PM[ID].F = PM[ID].Fp;
  F1 = PM[ID].F;
  Fdp12.innerHTML = PM[ID].F;
  MHPdp.innerHTML = PM[ID].MHP;
  HPdp.innerHTML = PM[ID].HP;
  PM[ID].img1 = PM[ID].megaimg1;
  PK1.src = PM[ID].img1;
  MA.style.visibility = "visible";
  if (PM[ID].typechange === true) {
   PM[ID].bodytype1 = PM[ID].changetype1;
   PM[ID].bodytype2 = PM[ID].changetype2;
   PM[ID].color1 = PM[ID].changecolor1;
   PM[ID].color2 = PM[ID].changecolor2;
   type11.innerHTML = PM[ID].bodytype1;
   type12.innerHTML = PM[ID].bodytype2;
   type11.style.backgroundColor = PM[ID].color1;
   type12.style.backgroundColor = PM[ID].color2;
  };
  if (F1 === "ひでり" && sunny === false) {
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
   weather1 = true;
  };
 };
 if (MAXstart === true) {
  MAXstart = false;
  MAXed = true;
  PM[ID].MAX = true;
  alert(PN1 + "！ キョダイマックス！");
  PM[ID].MHP = PM[ID].MHP * 2;
  futurehp1 = PM[ID].HP * 2;
  MHPdp.innerHTML = PM[ID].MHP;
  PK1.src = PM[ID].MAXimg1;
  PK1.style.width = 400;
  dps.style.backgroundColor = "#FF407F";
  setTimeout(grow1,300);
 } else {
  setTimeout(test2,75);
 };
}
function test2() {
 if (changer === true) {
  bodytype1 = PM[ID].bodytype1;
  bodytype2 = PM[ID].bodytype2;
  alert("戻れ！" + PN1 + "！");
  PK1.style.visibility = "hidden";
  MA.style.visibility = "hidden";
  setTimeout(changing,200);
 } else {
  setTimeout(test3,200);
 };
}
function test3() {
 if (Fdown1 === true || fishes1 === true || weather1 === true) {
  setTimeout(plus1,50);
 } else {
  setTimeout(test4,200);
 };
}
function test4() {
 if (Fdown2 === true || fishes2 === true || weather2 === true) {
  setTimeout(plus2,50);
 } else {
  setTimeout(total,200);
 };
}
function total() {
 if ((F1 === "いたずらごころ" && skiller.type === "change") || skiller.snowdown === true || skiller.name === "トリックルーム" || skiller.shield === true || (PM[ID].MAX === true && skiller.type === "change") || skiller.name === "しんそく" || skiller.firster === true || (skiller.skyjump === true && gravities === true)) {
  if (F1 === "いたずらごころ") {
   firster1 = true;
   pt1 += 1
  };
  if (skiller.firster === true) {
   firster1 = true;
   pt1 += 1;
  };
  if (skiller.name === "しんそく") {
   firster1 = true;
   pt1 += 2;
  };
  if (skiller.snowdown === true || skiller.name === "トリックルーム") {
   pt1 -= 4;
  };
  if (skiller.skyjump === true && gravities === true) {
   pt1 -= 5;
  };
  if ((PM[ID].MAX === true && skiller.type === "change") || skiller.shield === true) {
   pt1 += 4;
   if (F1 === "バトルスイッチ" && PM[ID].blade === true) {
    Fdp11.style.visibility = "visible";
    Fdp12.style.visibility = "visible";
    PM[ID].img1 = PM[ID].shieldform1;
    PK1.src = PM[ID].img1;
   };
  };
 } else {
  let WS1 = 1;
  let WS2 = 1;
  if (backwind1 === true) {
   windpt1 += 1;
  };
  if (backwind2 === true) {
   windpt2 += 1;
  };
  if ((F1 === "すなかき" && weather === "sandstrom") || (F1 === "すいすい" && weather === "rainy") || (F1 === "ようりょくそ" && weather === "sunny")) {
   WS1 = 2;
  };
  if ((F2 === "すなかき" && weather === "sandstrom") || (F2 === "すいすい" && weather === "rainy") || (F2 === "ようりょくそ" && weather === "sunny")) {
   WS2 = 2;
  };
  if ((PM[ID].S * rank[SR1].R * windrate1 * WS1) < (BOSS.S * rank[SR2].R * windrate2 * WS2)) {
   if (unspeed === true) {
    unspeedpt += 1;
    pt1 += 1;
   } else {
    pt2 += 1;
   };
  } else {
   if (unspeed === true) {
    unspeedpt += 1;
    pt2 += 1;
   } else {
    pt1 += 1;
   };
  };
 };
 setTimeout(speed,50);
}
function speed() {
 if (pt1 < pt2) {
  first = true;
  BOSSPKCO();
 } else {
  if (PM[ID].MAX === true) {
   setTimeout(PKCOMAX1,400);
  } else {
   if (F1 === "バトルスイッチ" && PM[ID].blade === false && skiller.type !== "change") {
    Fdp11.style.visibility = "visible";
    Fdp12.style.visibility = "visible";
    PM[ID].img1 = PM[ID].bladeform1;
    PK1.src = PM[ID].img1;
   };
   setTimeout(PKCO1,400);
  };
 };
}
function grow1() {
 if (PM[ID].HP < futurehp1) {
  PM[ID].HP += 1;
  HPdp.innerHTML = PM[ID].HP;
  setTimeout(grow1,10);
 } else {
  if (healdp1 === true) {
   setTimeout(dp1,200);
  } else {
   if (AH === true || AH2 === true || AMH === true) {
    setTimeout(AHdp1,50);
   } else {
    if (F1 === "どしょく" || F1 === "ちょすい" || F1 === "ちくでん") {
     heal1 = true;
     setTimeout(seconddp,200);
    } else {
     setTimeout(test2,100);
    };
   };
  };
 };
}
function grow2() {
 if (PM[ID2].HP < futurehp2) {
  PM[ID2].HP += 1;
  HPdp2.innerHTML = PM[ID2].HP;
  setTimeout(grow2,10);
 } else {
  if (healdp2 === true) {
   setTimeout(dp2,200);
  } else {
   if (AH === true || AH2 === true || AMH === true) {
    setTimeout(AHdp2,50);
   } else {
    if (F2 === "どしょく" || F2 === "ちょすい" || F2 === "ちくでん") {
     heal2 = true;
     setTimeout(seconddp,200);
    } else {
     setTimeout(test3,100);
    };
   };
  };
 };
}
function bothgrowcontract() {
 if (PM[ID].HP !== futurehp1 || PM[ID2].HP !== futurehp2) {
  if (PM[ID].HP < futurehp1) {
   PM[ID].HP += 1;
   HPdp1.innerHTML = PM[ID].HP;
  } else {
   if (PM[ID].HP > futurehp1) {
    PM[ID].HP -= 1;
    HPdp1.innerHTML = PM[ID].HP;
   };
  };
  if (PM[ID2].HP < futurehp2) {
   PM[ID2].HP += 1;
   HPdp2.innerHTML = PM[ID2].HP;
  } else {
   if (PM[ID2].HP > futurehp2) {
    PM[ID2].HP -= 1;
    HPdp2.innerHTML = PM[ID2].HP;
   };
  };
  setTimeout(bothgrowcontract,12);
 } else {
  setTimeout(seconddp,100);
 };
}
function changing() {
 alert("ゆけ！ " + PN1 + "！");
 PK1.src = PM[ID].img1;
 PK1.style.visibility = "visible";
 Lv.innerHTML = PM[ID].level;
 name.innerHTML = PN1;
 HPdp.innerHTML = PM[ID].HP;
 MHPdp.innerHTML = PM[ID].MHP;
 Fdp11.innerHTML = PM[ID].name + "の";
 Fdp12.innerHTML = PM[ID].F;
 AR1 = 6;
 BR1 = 6;
 CR1 = 6;
 DR1 = 6;
 SR1 = 6;
 KR1 = 6;
 skill1dp.innerHTML = skill[PM[ID].skill1].name;
 skill2dp.innerHTML = skill[PM[ID].skill2].name;
 skill3dp.innerHTML = skill[PM[ID].skill3].name;
 skill4dp.innerHTML = skill[PM[ID].skill4].name;
 skill1.style.backgroundColor = skill[PM[ID].skill1].color;
 skill2.style.backgroundColor = skill[PM[ID].skill2].color;
 skill3.style.backgroundColor = skill[PM[ID].skill3].color;
 skill4.style.backgroundColor = skill[PM[ID].skill4].color;
 skill1.style.borderColor = "#000000";
 skill2.style.borderColor = "#000000";
 skill3.style.borderColor = "#000000";
 skill4.style.borderColor = "#000000";
 PK1.style.width = 200;
 dps.style.backgroundColor = "#F9F9F6";
 ARdp1.innerHTML = rank[AR1].dp;
 BRdp1.innerHTML = rank[BR1].dp;
 CRdp1.innerHTML = rank[CR1].dp;
 DRdp1.innerHTML = rank[DR1].dp;
 SRdp1.innerHTML = rank[SR1].dp;
 breakarmored1 = false;
 afterback1 = false;
 recoil = false;
 formed1 = false;
 plushit1 = 0;
 nosong1 = false;
 nosongpt1 = 0;
 if (PM[ID].mega === true) {
  MA.style.visibility = "visible";
 };
 if (F1 === "ぎょぐん" && PM[ID].HP > (PM[ID].MHP / 4) && PM[ID].img1 !== "../ポケモンクエスト画像/ヨワシ(are)1.png") {
  fishes1 = true
  Fdp11.style.visibility = "visible";
  Fdp12.style.visibility = "visible";
 } else {
  if (F1 === "いかく") {
   Fdown1 = true;
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
  } else {
   if ((F1 === "ひでり" && weather !== "sunny") || (F1 === "すなおこし" && weather !== "sandstrom")) {
    weather1 = true;
    Fdp11.style.visibility = "visible";
    Fdp12.style.visibility = "visible";
   } else {
    if ((F1 === "エレキメイカー" && field !== "elec") || (F1 === "サイコメイカー" && field !== "phycho") || (F1 === "ミストメイカー" && field !== "mist")) {
     field1 = true;
     Fdp11.style.visibility = "visible";
     Fdp12.style.visibility = "visible";
    };
   };
  };
 };
 if (changer === true) {
  setTimeout(test4,50);
 } else {
  if (down === true) {
   setTimeout(plus1,50);
  };
 };
}
function plus1() {
 if (fishes1 === true) {
  fishes1 = false;
  alert("ヨワシの群れが集まった！");
  PM[ID].A = PM[ID].Ap;
  PM[ID].B = PM[ID].Bp;
  PM[ID].C = PM[ID].Cp;
  PM[ID].D = PM[ID].Dp;
  PM[ID].heavy = PM[ID].heavies;
  PM[ID].img1 = PM[ID].imger1;
  PK1.src = PM[ID].img1;
  Fdp11.style.visibility = "hidden";
  Fdp12.style.visibility = "hidden";
  if (startdash1 === true) {
   setTimeout(start5,100);
  } else {
   if (down === true) {
    setTimeout(last,200);
   } else {
    setTimeout(test3,100);
   };
  };
 } else {
  if (Fdown1 === true) {
   Fdown1 = false;
   if (F2 === "クリアボディ") {
    if (clearbody === true) {
     clearbody = false;
     Fdown1 = false;
     alert(PN2 + "の能力は下がらない！");
     Fdp11.style.visibility = "hidden";
     Fdp12.style.visibility = "hidden";
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     if (startdash1 === true) {
      setTimeout(start5,100);
     } else {
      if (down === true) {
       setTimeout(last,200);
      } else {
       setTimeout(test4,100);
      };
     };
    } else {
     clearbody = true;
     Fdown1 = true;
     Fdp21.style.visibility = "visible";
     Fdp22.style.visibility = "visible";
     setTimeout(plus1,50);
    };
   } else {
    if (F1 === "いかく") {
     if (F2 === "かいりきバサミ" || F2 === "せいしんりょく") {
      noAdown = true;
     } else {
      if (AR2 <= 0) {
       alert(PN2 + "のこうげきはもう下がらない！");
      } else {
       AR2 -= 1;
       ARdp2.innerHTML = rank[AR2].dp;
       alert(PN2 + "のこうげきが下がった。");
      };
     };
    };
    Fdp11.style.visibility = "hidden";
    Fdp12.style.visibility = "hidden";
    if (F2 === "まけんき") {
     if (resist === true) {
      resist = false;
      alert(PN2 + "のこうげきがぐーんと上がった！");
      AR2 += 2;
      ARdp2.innerHTML = rank[AR2].dp;
      Fdp21.style.visibility = "hidden";
      Fdp22.style.visibility = "hidden";
      Fdown1 = false;
      if (startdash1 === true) {
       setTimeout(start5,100);
      } else {
       if (down === true) {
        setTimeout(last,200);
       } else {
        setTimeout(test4,100);
       };
      };
     } else {
      resist = true;
      Fdp21.style.visibility = "visible";
      Fdp22.style.visibility = "visible";
      F1 = "cansel";
      Fdown1 = true;
      setTimeout(plus1,50);
     };
    } else {
     if (noAdown === true) {
      if (notAdown === true) {
       noAdown = false;
       notAdown = false;
       alert(PN2 + "には効果はないようだ…。");
       Fdp21.style.visibility = "hidden";
       Fdp22.style.visibility = "hidden";
       Fdown1 = false;
       if (startdash1 === true) {
        setTimeout(start5,100);
       } else {
        if (down === true) {
         setTimeout(last,200);
        } else {
         setTimeout(test4,100);
        };
       };
      } else {
       notAdown = true;
       Fdp21.style.visibility = "visible";
       Fdp22.style.visibility = "visible";
       F1 = "cansel";
       Fdown1 = true;
       setTimeout(plus1,50);
      };
     } else {
      if (startdash1 === true) {
       setTimeout(start5,100);
      } else {
       if (down === true) {
        setTimeout(last,200);
       } else {
        setTimeout(test4,100);
       };
      };
     };
    };
   };
  } else {
   if (weather1 === true) {
    weather1 = false;
    weatherpt = 0;
    if (F1 === "ひでり") {
     weather = "sunny";
     Fdp11.style.visibility = "hidden";
     Fdp12.style.visibility = "hidden";
     alert("日差しが強くなった！");
    };
    if (F1 === "すなおこし") {
     weather = "sandstrom";
     Fdp11.style.visibility = "hidden";
     Fdp12.style.visibility = "hidden";
     alert("砂嵐が吹き荒れた！");
    };
    if (startdash1 === true) {
     setTimeout(start5,100);
    } else {
     if (down === true) {
      setTimeout(last,200);
     } else {
      setTimeout(test4,100);
     };
    };
   } else {
    if (field1 === true) {
     field1 = false;
     fieldpt = 0;
     if (F1 === "エレキメイカー") {
      field = "elec";
      Fdp11.style.visibility = "hidden";
      Fdp12.style.visibility = "hidden";
      alert("足元に電気がかけめぐる！");
     };
     if (F1 === "サイコメイカー") {
      field = "phycho";
      Fdp11.style.visibility = "hidden";
      Fdp12.style.visibility = "hidden";
      alert("足元が不思議な感じになった！");
     };
     if (F1 === "ミストメイカー") {
      field = "mist";
      Fdp11.style.visibility = "hidden";
      Fdp12.style.visibility = "hidden";
      alert("足元に霧が立ち込めた！");
     };
     if (startdash1 === true) {
      setTimeout(start5,100);
     } else {
      if (down === true) {
       setTimeout(last,200);
      } else {
       setTimeout(test4,100);
      };
     };
    } else {
     if (down === true) {
      setTimeout(last,200);
     };
    };
   };
  };
 };
}
function plus2() {
 if (fishes2 === true) {
  fishes2 = false;
  alert("ヨワシの群れが集まった！");
  PM[ID2].A = PM[ID2].Ap;
  PM[ID2].B = PM[ID2].Bp;
  PM[ID2].C = PM[ID2].Cp;
  PM[ID2].D = PM[ID2].Dp;
  PM[ID2].heavy = PM[ID2].heavies;
  PM[ID2].img2 = PM[ID2].imger2;
  PK2.src = PM[ID2].img2;
  Fdp21.style.visibility = "hidden";
  Fdp22.style.visibility = "hidden";
  if (startdash2 === true) {
   setTimeout(start6,100);
  } else {
   if (down2 === true) {
    setTimeout(last,200);
   } else {
    setTimeout(total,100);
   };
  };
 } else {
  if (Fdown2 === true) {
   Fdown2 = false;
   if (F1 === "クリアボディ") {
    if (clearbody === true) {
     clearbody = false;
     Fdown2 = false;
     alert(PN1 + "の能力は下がらない！");
     Fdp11.style.visibility = "hidden";
     Fdp12.style.visibility = "hidden";
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     if (startdash2 === true) {
      setTimeout(start6,100);
     } else {
      if (down2 === true) {
       setTimeout(last,200);
      } else {
       setTimeout(total,100);
      };
     };
    } else {
     clearbody = true;
     Fdown2 = true;
     Fdp11.style.visibility = "visible";
     Fdp12.style.visibility = "visible";
     setTimeout(plus2,100);
    };
   } else {
    if (F2 === "いかく") {
     if (F1 === "かいりきバサミ" || F1 === "せいしんりょく") {
      noAdown = true;
     } else {
      if (AR1 <= 0) {
       alert(PN1 + "のこうげきはもう下がらない！");
      } else {
       AR1 -= 1;
       ARdp1.innerHTML = rank[AR1].dp;
       alert(PN1 + "のこうげきが下がった。");
      };
     };
    };
    Fdp21.style.visibility = "hidden";
    Fdp22.style.visibility = "hidden";
    if (F1 === "まけんき") {
     if (resist === true) {
      resist = false;
      alert(PN1 + "のこうげきがぐーんと上がった！");
      AR1 += 2;
      ARdp1.innerHTML = rank[AR1].dp;
      Fdp11.style.visibility = "hidden";
      Fdp12.style.visibility = "hidden";
      Fdown2 = false;
      if (startdash2 === true) {
       setTimeout(start6,100);
      } else {
       if (down2 === true) {
        setTimeout(last,200);
       } else {
        setTimeout(total,100);
       };
      };
     } else {
      resist = true;
      Fdp11.style.visibility = "visible";
      Fdp12.style.visibility = "visible";
      F2 = "cansel";
      Fdown2 = true;
      setTimeout(plus2,50);
     };
    } else {
     if (noAdown === true) {
      if (notAdown === true) {
       noAdown = false;
       notAdown = false;
       alert(PN1 + "には効果はないようだ…。");
       Fdp11.style.visibility = "hidden";
       Fdp12.style.visibility = "hidden";
       Fdown2 = false;
       if (startdash2 === true) {
        setTimeout(start6,100);
       } else {
        if (down2 === true) {
         setTimeout(last,200);
        } else {
         setTimeout(total,100);
        };
       };
      } else {
       notAdown = true;
       Fdp11.style.visibility = "visible";
       Fdp12.style.visibility = "visible";
       F2 = "cansel";
       Fdown2 = true;
       setTimeout(plus2,50);
      };
     } else {
      if (startdash2 === true) {
       setTimeout(start6,100);
      } else {
       if (down2 === true) {
        setTimeout(last,200);
       } else {
        setTimeout(total,100);
       };
      };
     };
    };
   };
  } else {
   if (weather2 === true) {
    weather2 = false;
    weatherpt = 0;
    if (F2 === "ひでり") {
     weather = "sunny";
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     alert("日差しが強くなった！");
    };
    if (F2 === "すなおこし") {
     weather = "sandstrom";
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     alert("砂嵐が吹き荒れた！");
    };
    if (startdash2 === true) {
     setTimeout(start6,100);
    } else {
     if (down2 === true) {
      setTimeout(last,200);
     } else {
      setTimeout(total,100);
     };
    };
   } else {
    if (field2 === true) {
     field2 = false;
     fieldpt = 0;
     if (F2 === "エレキメイカー") {
      field = "elec";
      Fdp21.style.visibility = "hidden";
      Fdp22.style.visibility = "hidden";
      alert("足元に電気がかけめぐる！");
     };
     if (F2 === "サイコメイカー") {
      field = "phycho";
      Fdp21.style.visibility = "hidden";
      Fdp22.style.visibility = "hidden";
      alert("足元が不思議な感じになった！");
     };
     if (F2 === "ミストメイカー") {
      field = "mist";
      Fdp21.style.visibility = "hidden";
      Fdp22.style.visibility = "hidden";
      alert("足元に霧が立ち込めた！");
     };
     if (startdash2 === true) {
      setTimeout(start6,100);
     } else {
      if (down2 === true) {
       setTimeout(last,200);
      } else {
       setTimeout(total,100);
      };
     };
    } else {
     if (down2 === true) {
      setTimeout(last,200);
     };
    };
   };
  };
 };
}