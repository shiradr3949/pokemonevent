function PKCOMAX1() {
 if (changer === true) {
  if (first === true) {
   last();
  } else {
   firsted = 1;
   BOSSPKCO();
  };
 } else {
  if (skiller.type === "change") {
   alert(PN1 + "は" + skiller.name + "を使った！");
  } else {
   alert(PN1 + "！ " + skiller.name + "！");
  };
  SNdp = skiller.name + "1";
  if (skiller.type === "change") {
   chaos = Math.random() * 100;
   if (shield2 === true || MAXshield2 === true || chaos > shieldrate[shieldpt1].rate) {
    alert("しかし、うまく決まらなかった…。");
    shieldpt1 = 0;
   } else {
    alert(PN1 + "は守りの体制に入った！");
    shieldpt1 += 1;
    MAXshield1 = true;
   };
   setTimeout(seconddp,200);
  } else {
   if (secondattack2 !== true) {
    if (MAXshield2 === true && skiller.MAXshieldbreak !== true) {
     alert(PN2 + "は攻撃から身を守った！");
     last();
    } else {
     let power = skiller.power;
     let weatherblock = 1;
     let calamity1 = 1;
     let calamity2 = 1;
     let ability1;
     let ability2;
     let ranks1;
     let ranks2;
     if (skiller.type === "physics") {
      ability1 = PM[ID].A;
      ability2 = BOSS.B;
      ranks1 = rank[AR1].R;
      ranks2 = rank[BR2].R;
     } else {
      ability1 = PM[ID].C;
      ability2 = BOSS.D;
      ranks1 = rank[CR1].R;
      ranks2 = rank[DR2].R;
     };
     if (F1 === "そうだいしょう") {
      ability1 += Math.floor(ability1 * dies / 10);
     };
     if (F1 === "よわき" && PM[ID].HP <= PM[ID].MHP / 2) {
      ability1 = Math.floor(ability1 / 2);
     };
     if (F2 === "てんねん" && F1 !== "かたやぶり") {
      ranks1 = 1;
     };
     if (F1 === "てんねん" && F2 !== "かたやぶり") {
      ranks2 = 1;
     };
     vitalpt = plushit1;
     if (skiller.hyperhitrate === true) {
      vitalpt = 3;
     } else {
      if (skiller.highhitrate === true) {
       vitalpt += 1;
      };
     };
     chaos = Math.random() * 100;
     if (chaos <= vital[vitalpt].R && (F2 !== "シェルアーマー" || F1 === "かたやぶり")) {
      chaosdp = true;
     };
     vitalpt = 0;
     if (weather === "sandstrom" && skiller.type === "special" && (BOSS.bodytype1 === "じめん" || BOSS.bodytype1 === "いわ" || BOSS.bodytype2 === "じめん" || BOSS.bodytype2 === "いわ")) {
      weatherblock = 1.5;
     };
     if (weather === "snowy" && skiller.type === "physics" && (BOSS.bodytype1 === "こおり" || BOSS.bodytype2 === "こおり")) {
      weatherblock = 1.5;
     };

      minus = Math.floor((Math.floor(PM[ID].level * 2 / 5 + 2)) * (Math.floor((power * ability1 * calamity1 * ranks1) / (ability2 * weatherblock * calamity2 * ranks2))) / 50 + 2);

     skilltype = skiller.skilltype;
     if (skiller.wince === true && F2 !== "せいしんりょく") {
      chaos = Math.random() * 100;
      if (chaos <= 30) {
       wince2 = true;
      };
     };
     if (skiller.punch === true && F1 === "てつのこぶし") {
      minus = Math.floor(minus / 10 * 12);
     };
     if (F2 === "もふもふ") {
      if (skiller.direct === true) {
       minus = Math.floor(minus / 2);
      };
      if (skilltype === "ほのお") {
       minus = minus * 2;
      };
     };
     if (F2 === "くだけるよろい") {
      if (breakarmored2 === false) {
       if (skiller.type === "physics") {
        breakarmor = true;
       };
      };
     };
     if (F1 === "むしのしらせ") {
      if (PM[ID].HP <= PM[ID].MHP / 3) {
       if (skilltype === "むし") {
        minus = Math.floor(minus / 2 * 3);
       };
      };
     };
     if (F1 === "もうか") {
      if (PM[ID].HP <= PM[ID].MHP / 3) {
       if (skilltype === "ほのお") {
        minus = Math.floor(minus / 2 * 3);
       };
      };
     };
     if (afterback2 === true) {
      minus = minus * 2;
     };
     if (F2 === "ねつこうかん") {
      if (skilltype === "ほのお") {
       heatchange = true;
      };
     };
     if (F2 === "マルチスケイル") {
      if (F1 !== "かたやぶり") {
       if (BOSS.HP === BOSS.MHP) {
        minus = Math.floor(minus / 2);
       };
      };
     };
     if (((F2 === "ふゆう" && gravities !== true) || F2 === "どしょく") && skilltype === "じめん" && F1 !== "かたやぶり") {
      flying2 = true;
     };
     if ((F1 === "リベロ" || F1 === "へんげんじざい") && formed1 !== true) {
      PM[ID].bodytype1 = skilltype;
      PM[ID].bodytype2 = null;
      formed1 = true;
      transform1 = true;
      Fdp11.style.visibility = "visible";
      Fdp12.style.visibility = "visible";
     };
     if (skiller.direct === true || F1 === "かたいつめ") {
      minus = Math.floor(minus / 10 * 13);
     };
     if (skilltype === PM[ID].bodytype1 || skilltype === PM[ID].bodytype2) {
      if (F1 === "てきおうりょく") {
       minus = minus * 2;
      } else {
       minus = Math.floor(minus / 2 * 3);
      };
     };
     if (weather === "sunny" || weather === "endearth") {
      if (skilltype === "ほのお") {
       minus = Math.floor(minus / 2 * 3);
      };
      if (skilltype === "みず") {
       if (weather === "endearth") {
        minus = 0;
        nodmg = true;
       } else {
        minus = Math.floor(minus / 2);
       };
      };
     };
     if (weather === "rainy" || weather === "startsea") {
      if (skilltype === "みず") {
       minus = Math.floor(minus / 2 * 3);
      };
      if (skilltype === "ほのお") {
       if (weather === "startsea") {
        minus = 0;
        nodmg = true;
       } else {
        minus = Math.floor(minus / 2);
       };
      };
     };
     if (field === "phycho") {
      if (skilltype === "エスパー") {
       minus = Math.floor(minus / 10 * 13);
      };
     };
     if (field === "elec") {
      if (skilltype === "でんき") {
       minus = Math.floor(minus / 10 * 13);
      };
     };
     if (field === "mist") {
      if (skilltype === "ドラゴン") {
       minus = Math.floor(minus / 2);
      };
     };
     if (skiller.sunny === true && weather !== "sunny") {
      sunny = true;
     };
     if (skiller.rainy === true && weather !== "rainy") {
      rainy = true;
     };
     if (skiller.sandstrom === true && weather !== "sandstrom") {
      sandstrom = true;
     };
     if (skiller.snowy === true && weather !== "snowy") {
      snowy = true;
     };
     if (skiller.phycho === true && field !== "phycho") {
      phycho = true;
     };
     if (skiller.elec === true && field !== "elec") {
      elec = true;
     };
     if (skiller.mist === true && field !== "mist") {
      mist = true;
     };
     if (skiller.grass === true && field !== "grass") {
      grass = true;
     };
     if (shield2 === true) {
      shielddp2 = true;
      minus = Math.floor(minus / 4);
     };
     if (skiller.barrier === true && Obarrier1 !== true) {
      Obarrier1 = true;
      OBing1 = true;
     };
     if (F1 !== "すりぬけ" && Pbarrier2 === true && skiller.type === "physics" && chaosdp !== true) {
      PBed = true;
      minus = Math.floor(minus / 2);
     };
     if (F1 !== "すりぬけ" && Sbarrier2 === true && skiller.type === "special" && chaosdp !== true) {
      SBed = true;
      minus = Math.floor(minus / 2);
     };
     if (F1 !== "すりぬけ" && Obarrier2 === true && chaosdp !== true) {
      OBed = true;
      minus = Math.floor(minus / 2);
     };
     if (F2 === "こおりのりんぷん" && skiller.type === "special") {
      minus = Math.floor(minus / 2);
     };
     if (skiller.nofield === true) {
      weather = "unknown";
      field = "unknown";
      Pbarrier2 = false;
      Sbarrier2 = false;
      Obarrier2 = false;
      weatherpt = 0;
      fieldpt = 0;
      PBpt2 = 0;
      SBpt2 = 0;
      OBpt2 = 0;
     };
     if (skiller.AMH === true) {
      AMH = true;
     };
     if (F2 === "あついしぼう" && (skilltype === "ほのお" || skilltype === "こおり")) {
      minus = Math.floor(minus / 2);
     };
     if (F1 === "はりきり" && skiller.type === "physics") {
      minus = Math.floor(minus / 2 * 3);
     };
     if (skiller.gravity === true && gravities !== true) {
      gravity = true;
     };
     if ((F1 === "ちからもち" || F1 === "ヨガパワー") && skiller.type === "physics") {
      minus = minus * 2;
     };
     if (F1 === "きれあじ" && skiller.slice === true) {
       minus = Math.floor(minus / 2 * 3);
     };
     if (F1 === "トランジスタ" && skilltype === "でんき") {
      minus = Math.floor(minus / 2 * 3);
     };
     if (F1 === "りゅうのあぎと" && skilltype === "ドラゴン") {
      minus = Math.floor(minus / 2 * 3);
     };
     if (chaosdp === true) {
      minus = Math.ceil(minus / 2 * 3);
     };
     shieldpt1 = 0;
     bodytype1 = BOSS.bodytype1;
     bodytype2 = BOSS.bodytype2;
     type();
    };
   } else {
    shieldpt1 = 0;
    alert(PN2 + "には当たらなかった…。");
    if (first === true) {
     last();
    } else {
     firsted = 1;
     BOSSPKCO();
    };
   };
  };
 };
}
function BOSSPKCO() {
 if (tries === 0) {
  tryer = true;
  if (BOSS.MAX === true) {
   Bskilltype[0] = MAXskill[BOSS.skill1].skilltype;
   Bskilltype[1] = MAXskill[BOSS.skill2].skilltype;
   Bskilltype[2] = MAXskill[BOSS.skill3].skilltype;
   Bskilltype[3] = MAXskill[BOSS.skill4].skilltype;
  } else {
   Bskilltype[0] = skill[BOSS.skill1].skilltype;
   Bskilltype[1] = skill[BOSS.skill2].skilltype;
   Bskilltype[2] = skill[BOSS.skill3].skilltype;
   Bskilltype[3] = skill[BOSS.skill4].skilltype;
  };
  skilltype = Bskilltype[tries];
  if (changer !== true) {
   bodytype1 = PM[ID].bodytype1;
   bodytype2 = PM[ID].bodytype2;
  };
  type();
 } else {
  dmg = 2;
  if (tries === 4) {
   tryer = false;
   if (BOSS.name === "フーパ" && (typer[0] === typer[1] || typer[0] === typer[2] || typer[0] === typer[3])) {
    typer[0] -= 1;
   };
   if (BOSS.name === "グラードン" && typer[0] !== "nodmg") {
    if (typer[1] <= typer[0] && typer[2] <= typer[0] && typer[3] <= typer[0] && (typer[0] === typer[1] || typer[0] === typer[2] || typer[0] === typer[3])) {
     typer[0] += 1;
    };
   };
   if (BOSS.name === "カイオーガ" && typer[1] <= typer[0] && typer[2] <= typer[0] && typer[3] <= typer[0] && (typer[0] === typer[1] || typer[0] === typer[2] || typer[0] === typer[3])) {
    typer[0] += 1;
   };
   if (typer[0] === 4 || typer[1] === 4 || typer[2] === 4 || typer[3] === 4) {
    if (typer[0] === 4) {
     if (BOSS.MAX === true) {
      MAXskill[BOSS.skill1].type = BOSS.type1;
      MAXskill[BOSS.skill1].power = BOSS.power1;
      select[selected] = MAXskill[BOSS.skill1];
     } else {
      select[selected] = skill[BOSS.skill1];
     };
     selected += 1;
    };
    if (typer[1] === 4) {
     if (BOSS.MAX === true) {
      MAXskill[BOSS.skill2].type = BOSS.type2;
      MAXskill[BOSS.skill2].power = BOSS.power2;
      select[selected] = MAXskill[BOSS.skill2];
     } else {
      select[selected] = skill[BOSS.skill2];
     };
     selected += 1;
    };
    if (typer[2] === 4) {
     if (BOSS.MAX === true) {
      MAXskill[BOSS.skill3].type = BOSS.type3;
      MAXskill[BOSS.skill3].power = BOSS.power3;
      select[selected] = MAXskill[BOSS.skill3];
     } else {
      select[selected] = skill[BOSS.skill3];
     };
     selected += 1;
    };
    if (typer[3] === 4) {
     if (BOSS.MAX === true) {
      MAXskill[BOSS.skill4].type = BOSS.type4;
      MAXskill[BOSS.skill4].power = BOSS.power4;
      select[selected] = MAXskill[BOSS.skill4];
     } else {
      select[selected] = skill[BOSS.skill4];
     };
     selected += 1;
    };
    chaos = Math.floor(Math.random() * selected);
    Bskiller = select[chaos];
   } else {
    if (typer[0] === 3 || typer[1] === 3 || typer[2] === 3 || typer[3] === 3) {
     if (typer[0] === 3) {
      if (BOSS.MAX === true) {
       MAXskill[BOSS.skill1].type = BOSS.type1;
       MAXskill[BOSS.skill1].power = BOSS.power1;
       select[selected] = MAXskill[BOSS.skill1];
      } else {
       select[selected] = skill[BOSS.skill1];
      };
      selected += 1;
     };
     if (typer[1] === 3) {
      if (BOSS.MAX === true) {
       MAXskill[BOSS.skill2].type = BOSS.type2;
       MAXskill[BOSS.skill2].power = BOSS.power2;
       select[selected] = MAXskill[BOSS.skill2];
      } else {
       select[selected] = skill[BOSS.skill2];
      };
      selected += 1;
     };
     if (typer[2] === 3) {
      if (BOSS.MAX === true) {
       MAXskill[BOSS.skill3].type = BOSS.type3;
       MAXskill[BOSS.skill3].power = BOSS.power3;
       select[selected] = MAXskill[BOSS.skill3];
      } else {
       select[selected] = skill[BOSS.skill3];
      };
      selected += 1;
     };
     if (typer[3] === 3) {
      if (BOSS.MAX === true) {
       MAXskill[BOSS.skill4].type = BOSS.type4;
       MAXskill[BOSS.skill4].power = BOSS.power4;
       select[selected] = MAXskill[BOSS.skill4];
      } else {
       select[selected] = skill[BOSS.skill4];
      };
      selected += 1;
     };
     chaos = Math.floor(Math.random() * selected);
     Bskiller = select[chaos];
    } else {
     if (typer[0] === 2 || typer[1] === 2 || typer[2] === 2 || typer[3] === 2) {
      if (typer[0] === 2) {
       if (BOSS.MAX === true) {
        MAXskill[BOSS.skill1].type = BOSS.type1;
        MAXskill[BOSS.skill1].power = BOSS.power1;
        select[selected] = MAXskill[BOSS.skill1];
       } else {
        select[selected] = skill[BOSS.skill1];
       };
       selected += 1;
      };
      if (typer[1] === 2) { 
       if (BOSS.MAX === true) {
        MAXskill[BOSS.skill2].type = BOSS.type2;
        MAXskill[BOSS.skill2].power = BOSS.power2;
        select[selected] = MAXskill[BOSS.skill2];
       } else {
        select[selected] = skill[BOSS.skill2];
       };
       selected += 1;
      };
      if (typer[2] === 2) {
       if (BOSS.MAX === true) {
        MAXskill[BOSS.skill3].type = BOSS.type3;
        MAXskill[BOSS.skill3].power = BOSS.power3;
        select[selected] = MAXskill[BOSS.skill3];
       } else {
        select[selected] = skill[BOSS.skill3];
       };
       selected += 1;
      };
      if (typer[3] === 2) {
       if (BOSS.MAX === true) {
        MAXskill[BOSS.skill4].type = BOSS.type4;
        MAXskill[BOSS.skill4].power = BOSS.power4;
        select[selected] = MAXskill[BOSS.skill4];
       } else {
        select[selected] = skill[BOSS.skill4];
       };
       selected += 1;
      };
      chaos = Math.floor(Math.random() * selected);
      Bskiller = select[chaos];
     } else {
      if (typer[0] === 1 || typer[1] === 1 || typer[2] === 1 || typer[3] === 1) {
       if (typer[0] === 1) {
        if (BOSS.MAX === true) {
         MAXskill[BOSS.skill1].type = BOSS.type1;
         MAXskill[BOSS.skill1].power = BOSS.power1;
         select[selected] = MAXskill[BOSS.skill1];
        } else {
         select[selected] = skill[BOSS.skill1];
        };
        selected += 1;
       };
       if (typer[1] === 1) {
        if (BOSS.MAX === true) {
         MAXskill[BOSS.skill2].type = BOSS.type2;
         MAXskill[BOSS.skill2].power = BOSS.power2;
         select[selected] = MAXskill[BOSS.skill2];
        } else {
         select[selected] = skill[BOSS.skill2];
        };
        selected += 1;
       };
       if (typer[2] === 1) {
        if (BOSS.MAX === true) {
         MAXskill[BOSS.skill3].type = BOSS.type3;
         MAXskill[BOSS.skill3].power = BOSS.power3;
         select[selected] = MAXskill[BOSS.skill3];
        } else {
         select[selected] = skill[BOSS.skill3];
        };
        selected += 1;
       };
       if (typer[3] === 1) {
        if (BOSS.MAX === true) {
         MAXskill[BOSS.skill4].type = BOSS.type4;
         MAXskill[BOSS.skill4].power = BOSS.power4;
         select[selected] = MAXskill[BOSS.skill4];
        } else {
         select[selected] = skill[BOSS.skill4];
        };
        selected += 1;
       };
       chaos = Math.floor(Math.random() * selected);
       Bskiller = select[chaos];
      } else {
       if (typer[0] === 0 || typer[1] === 0 || typer[2] === 0 || typer[3] === 0) {
        if (typer[0] === 0) {
         if (BOSS.MAX === true) {
          MAXskill[BOSS.skill1].type = BOSS.type1;
          MAXskill[BOSS.skill1].power = BOSS.power1;
          select[selected] = MAXskill[BOSS.skill1];
         } else {
          select[selected] = skill[BOSS.skill1];
         };
         selected += 1;
        };
        if (typer[1] === 0) {
         if (BOSS.MAX === true) {
          MAXskill[BOSS.skill2].type = BOSS.type2;
          MAXskill[BOSS.skill2].power = BOSS.power2;
          select[selected] = MAXskill[BOSS.skill2];
         } else {
          select[selected] = skill[BOSS.skill2];
         };
         selected += 1;
        };
        if (typer[2] === 0) {
         if (BOSS.MAX === true) {
          MAXskill[BOSS.skill3].type = BOSS.type3;
          MAXskill[BOSS.skill3].power = BOSS.power3;
          select[selected] = MAXskill[BOSS.skill3];
         } else {
          select[selected] = skill[BOSS.skill3];
         };
         selected += 1;
        };
        if (typer[3] === 0) {
         if (BOSS.MAX === true) {
          MAXskill[BOSS.skill4].type = BOSS.type4;
          MAXskill[BOSS.skill4].power = BOSS.power4;
          select[selected] = MAXskill[BOSS.skill4];
         } else {
          select[selected] = skill[BOSS.skill4];
         };
         selected += 1;
        };
        chaos = Math.floor(Math.random() * selected);
        Bskiller = select[chaos];
       };
      };
     };
    };
   };
   tries = 0;
   selected = 0;
   if (BOSS.MAX === true) {
    PKCOMAX2();
   } else {
    PKCO2();
   };
  } else {
   skilltype = Bskilltype[tries];
   type();
  };   
 };
}
function PKCOMAX2() {
 chaos = Math.random() * 100;
 if (chaos <= 20 && F1 !== "null") {
  F1 = "null";
  alert(PN2 + "は味方の特性の効果を打ち消した！");
 } else {
  chaos = Math.random() * 100;
  if (chaos <= 40 && (AR1 > 6 || BR1 > 6 || CR1 > 6 || DR1 > 6 || SR1 > 6 || KR1 > 6)) {
   AR1 = 6;
   BR1 = 6;
   CR1 = 6;
   DR1 = 6;
   SR1 = 6;
   KR1 = 6;
   alert(PN2 + "は味方の能力をもとにもどした！");
  };
 };
 chaos = Math.random() * 100;
 if (chaos <= 40 && (AR2 < 6 || BR2 < 6 || CR2 < 6 || DR2 < 6 || SR2 < 6 || KR2 < 6)) {
  if (AR2 < 6) {
   AR2 = 6;
  };
  if (BR2 < 6) {
   BR2 = 6;
  };
  if (CR2 < 6) {
   CR2 = 6;
  };
  if (DR2 < 6) {
   DR2 = 6;
  };
  if (SR2 < 6) {
   SR2 = 6;
  };
  if (KR2 < 6) {
   KR2 = 6;
  };
  alert(PN2 + "は自分にかかっている悪い効果を打ち消した！");
 };
 ARdp1.innerHTML = rank[AR1].dp;
 BRdp1.innerHTML = rank[BR1].dp;
 CRdp1.innerHTML = rank[CR1].dp;
 DRdp1.innerHTML = rank[DR1].dp;
 SRdp1.innerHTML = rank[SR1].dp;
 ARdp2.innerHTML = rank[AR2].dp;
 BRdp2.innerHTML = rank[BR2].dp;
 CRdp2.innerHTML = rank[CR2].dp;
 DRdp2.innerHTML = rank[DR2].dp;
 SRdp2.innerHTML = rank[SR2].dp;
 alert(PN2 + "の" + Bskiller.name + "！");
 SNdp = Bskiller.name + "2";
 if (secondattack1 !== true) {
  if (MAXshield1 === true && Bskiller.MAXshieldbreak !== true && F2 !== "ふかしのこぶし") {
   alert(PN1 + "は攻撃から身を守った！");
   last();
  } else {
   let power = Bskiller.power;
   let weatherblock = 1;
   let calamity1 = 1;
   let calamity2 = 1;
   let ability1;
   let ability2;
   let ranks1;
   let ranks2;
   if (Bskiller.type === "physics") {
    ability1 = BOSS.A;
    ability2 = PM[ID].B;
    ranks1 = rank[AR2].R;
    ranks2 = rank[BR1].R;
   } else {
    ability1 = BOSS.C;
    ability2 = PM[ID].D;
    ranks1 = rank[CR2].R;
    ranks2 = rank[DR1].R;
   };
   if (F2 === "よわき" && BOSS.HP <= BOSS.MHP / 2) {
    ability1 = Math.floor(ability1 / 2);
   };
   if (F1 === "てんねん" && F2 !== "かたやぶり") {
    ranks1 = 1;
   };
   if (F2 === "てんねん" && F1 !== "かたやぶり") {
    ranks2 = 1;
   };
   vitalpt = plushit1;
   if (Bskiller.hyperhitrate === true) {
    vitalpt = 3;
   } else {
   if (Bskiller.highhitrate === true) {
     vitalpt += 1;
    };
   };
   chaos = Math.random() * 100;
   if (chaos <= vital[vitalpt].R && (F1 !== "シェルアーマー" || F2 === "かたやぶり")) {
    chaosdp = true;
   };
   vitalpt = 0;
   if (weather === "sandstrom" && Bskiller.type === "special" && (PM[ID].bodytype1 === "じめん" || PM[ID].bodytype1 === "いわ" || PM[ID].bodytype2 === "じめん" || PM[ID].bodytype2 === "いわ")) {
    weatherblock = 1.5;
   };
   if (weather === "snowy" && Bskiller.type === "physics" && (PM[ID].bodytype1 === "こおり" || PM[ID].bodytype2 === "こおり")) {
    weatherblock = 1.5;
   };
   
   minus = Math.floor((Math.floor(BOSS.level * 2 / 5 + 2)) * (Math.floor((power * ability1 * calamity1 * ranks1) / (ability2 * weatherblock * calamity2 * ranks2))) / 50 + 2);
   
   skilltype = Bskiller.skilltype;
   if (Bskiller.punch === true && F2 === "てつのこぶし") {
    minus = Math.floor(minus / 10 * 12);
   };
   if (F1 === "もふもふ") {
    if (Bskiller.direct === true) {
     minus = Math.floor(minus / 2);
    };
    if (skilltype === "ほのお") {
     minus = minus * 2;
    };
   };
   if (F1 === "くだけるよろい") {
    if (breakarmored1 === false) {
     if (Bskiller.type === "physics") {
      breakarmor = true;
     };
    };
   };
   if (F2 === "むしのしらせ") {
    if (BOSS.HP <= BOSS.MHP / 3) {
     if (skilltype === "むし") {
      minus = Math.floor(minus / 2 * 3);
     };
    };
   };
   if (F2 === "もうか") {
    if (BOSS.HP <= BOSS.MHP / 3) {
     if (skilltype === "ほのお") {
      minus = Math.floor(minus / 2 * 3);
     };
    };
   };
   if (afterback1 === true) {
    minus = minus * 2;
   };
   if (F1 === "ねつこうかん") {
    if (skilltype === "ほのお") {
     heatchange = true;
    };
   };
   if (F1 === "マルチスケイル") {
    if (F2 !== "かたやぶり") {
     if (PM[ID].HP === PM[ID].MHP) {
      minus = Math.floor(minus / 2);
     };
    };
   };
   if (((F1 === "ふゆう" && gravities !== true) || F1 === "どしょく") && skilltype === "じめん" && F2 !== "かたやぶり") {
    flying1 = true;
   };
   if ((F2 === "リベロ" || F2 === "へんげんじざい") && formed2 !== true) {
    BOSS.bodytype1 = skilltype;
    BOSS.bodytype2 = null;
    formed2 = true;
    transform2 = true;
    Fdp21.style.visibility = "visible";
    Fdp22.style.visibility = "visible";
   };
   if (Bskiller.direct === true || F2 === "かたいつめ") {
    minus = Math.floor(minus / 10 * 13);
   };
   if (skilltype === BOSS.bodytype1 || skilltype === BOSS.bodytype2) {
    if (F2 === "てきおうりょく") {
     minus = minus * 2;
    } else {
     minus = Math.floor(minus / 2 * 3);
    };
   };
   if (weather === "sunny" || weather === "endearth") {
    if (skilltype === "ほのお") {
     minus = Math.floor(minus / 2 * 3);
    };
    if (skilltype === "みず") {
     if (weather === "endearth") {
      minus = 0;
      nodmg = true;
     } else {
      minus = Math.floor(minus / 2);
     };
    };
   };
   if (weather === "rainy" || weather === "startsea") {
    if (skilltype === "みず") {
     minus = Math.floor(minus / 2 * 3);
    };
    if (skilltype === "ほのお") {
     if (weather === "startsea") {
      minus = 0;
      nodmg = true;
     } else {
      minus = Math.floor(minus / 2);
     };
    };
   };
   if (Bskiller.sunny === true && weather !== "sunny") {
    sunny = true;
   };
   if (Bskiller.rainy === true && weather !== "rainy") {
    rainy = true;
   };
   if (Bskiller.sandstrom === true && weather !== "sandstrom") {
    sandstrom = true;
   };
   if (Bskiller.snowy === true && weather !== "snowy") {
    snowy = true;
   };
   if (Bskiller.phycho === true && field !== "phycho") {
    phycho = true;
   };
   if (Bskiller.elec === true && field !== "elec") {
    elec = true;
   };
   if (Bskiller.mist === true && field !== "mist") {
    mist = true;
   };
   if (Bskiller.grass === true && field !== "grass") {
    grass = true;
   };
   if (field === "phycho") {
    if (skilltype === "エスパー") {
     minus = Math.floor(minus / 10 * 13);
    };
   };
   if (field === "elec") {
    if (skilltype === "でんき") {
     minus = Math.floor(minus / 10 * 13);
    };
   };
   if (field === "mist") {
    if (skilltype === "ドラゴン") {
     minus = Math.floor(minus / 2);
    };
   };
   if (shield1 === true) {
    shielddp1 = true;
    minus = Math.floor(minus / 4);
   };
   if (Bskiller.barrier === true && Obarrier2 !== true) {
    Obarrier2 = true;
    OBing2 = true;
   };
   if (F2 !== "すりぬけ" && Pbarrier1 === true && Bskiller.type === "physics" && chaosdp !== true) {
    PBed = true;
    minus = Math.floor(minus / 2);
   };
   if (F2 !== "すりぬけ" && Sbarrier1 === true && Bskiller.type === "special" && chaosdp !== true) {
    SBed = true;
    minus = Math.floor(minus / 2);
   };
   if (F2 !== "すりぬけ" && Obarrier1 === true && chaosdp !== true) {
    OBed = true;
    minus = Math.floor(minus / 2);
   };
   if (F1 === "こおりのりんぷん" && Bskiller.type === "special") {
    minus = Math.floor(minus / 2);
   };
   if (Bskiller.nofield === true) {
    weather = "unknown";
    field = "unknown";
    Pbarrier1 = false;
    Sbarrier1 = false;
    Obarrier1 = false;
    weatherpt = 0;
    fieldpt = 0;
    PBpt1 = 0;
    SBpt1 = 0;
    OBpt1 = 0;
   };
   if (Bskiller.AMH === true) {
    AMH = true;
   };
   if (Bskiller.hyperhitrate === true) {
    hyperhitrate = true;
   };
   if (F1 === "あついしぼう" && (skilltype === "ほのお" || skilltype === "こおり")) {
    minus = Math.floor(minus / 2);
   };
   if (F2 === "はりきり" && Bskiller.type === "physics") {
    minus = Math.floor(minus / 2 * 3);
   };
   if (Bskiller.gravity === true && gravities !== true) {
    gravity = true;
   };
   if ((F2 === "ちからもち" || F2 === "ヨガパワー") && Bskiller.type === "physics") {
    minus = minus * 2;
   };
   if (F2 === "きれあじ" && Bskiller.slice === true) {
    minus = Math.floor(minus / 2 * 3);
   };
   if (F2 === "トランジスタ" && skilltype === "でんき") {
    minus = Math.floor(minus / 2 * 3);
   };
   if (F2 === "りゅうのあぎと" && skilltype === "ドラゴン") {
    minus = Math.floor(minus / 2 * 3);
   };
   if (chaosdp === true) {
    minus = Math.ceil(minus / 2 * 3);
   };
   shieldpt2 = 0;
   bodytype1 = PM[ID].bodytype1;
   bodytype2 = PM[ID].bodytype2;
   type();
  };
 } else {
  shieldpt2 = 0;
  alert(PN1 + "には当たらなかった…。");
  if (first === true) {
   firsted = 1;
   if (PM[ID].MAX === true) {
    PKCOMAX1();
   } else {
    PKCO1();
   };
  } else {
   last();
  };
 };
}