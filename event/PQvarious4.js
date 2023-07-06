function PKCO2() {
 chaos = Math.random() * 100;
 if (BOSS.abnormal === "sleepy" || (BOSS.abnormal === "paralysis" && chaos <= 30)) {
  if (BOSS.abnormal === "sleepy") {
   alert(PN2 + "はぐうぐう眠っている！");
  };
  if (BOSS.abnormal === "paralysis" && chaos <= 30) {
   alert(PN2 + "体がしびれて動けない！");
  };
  if (F1 === "バトルスイッチ" && PM[ID].blade === false && skiller.type !== "change") {
   Fdp11.style.visibility = "visible";
   Fdp12.style.visibility = "visible";
   PM[ID].img1 = PM[ID].bladeform1;
   PK1.src = PM[ID].img1;
  };
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
 } else {
  if (wince2 === true) {
   alert(PN2 + "はひるんで技が出せない！");
   last();
  } else {
   if ((nosong2 === true && Bskiller.song === true) || (gravities === true && Bskiller.skyjump === true)) {
    if (nosong2 === true && Bskiller.song === true) {
     alert(PN2 + "はじこくづきの効果で技が出せない！");
    };
    if (gravities === true && Bskiller.skyjump === true) {
     alert(PN2 + "は重力が強くて" + Bskiller.name + "ができない！");
    };
    setTimeout(seconddp,200);
   } else {
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
    if (F2 === "バトルスイッチ" && BOSS.blade === true && Bskiller.type === "change") {
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     BOSS.blade = false;
     BOSS.A = 70;
     BOSS.B = 160;
     BOSS.C = 70;
     BOSS.D = 160;
     alert("シールドフォルムチェンジ！");
    };
    if (F2 === "バトルスイッチ" && BOSS.blade === false && Bskiller.type !== "change") {
     Fdp21.style.visibility = "hidden";
     Fdp22.style.visibility = "hidden";
     BOSS.blade = true;
     BOSS.A = 160;
     BOSS.B = 70;
     BOSS.C = 160;
     BOSS.D = 70;
     alert("ブレードフォルムチェンジ！");
    };
    alert(PN2 + "の" + Bskiller.name + "!");
    SNdp = Bskiller.name + "2";
    if (field === "phycho" && firster2 === true && PM[ID].bodytype1 !== "ひこう" && PM[ID].bodytype2 !== "ひこう" && F1 !== "ふゆう") {
     alert(PN1 + "はサイコフィールドで守られている！");
     nodmg = true;
     setTimeout(seconddp,200);
    } else {
     let hitrate = 0;
     chaos = Math.random() * 100;
     hitrate = Bskiller.hitrate;
     if (weather === "sunny" && Bskiller.name === "ぼうふう") {
      hitrate = 50;
     };
     if (F1 === "すながくれ" && weather === "sandstrom" || F2 === "ゆきがくれ" && weather === "snowy") {
      hitrate = Math.floor(hitrate / 5 * 4);
     };
     if (F2 === "はりきり" && (Bskiller.type === "heavy" || Bskiller.type === "angry" || Bskiller.type === "vitalpoint" || Bskiller.type === "bodypress" || Bskiller.type === "physics")) {
      hitrate = Math.floor(hitrate / 5 * 4);
     };
     if (gravities === true) {
      hitrate = Math.floor(hitrate / 3 * 5);
     };
     if ((chaos <= rank[KR1].KR * hitrate || F1 === "ノーガード" || F2 === "ノーガード" || (weather === "rainy" && (Bskiller.name === "かみなり" || Bskiller.name === "ぼうふう")) || (weather === "hail" && Bskiller.name === "ふぶき")) && (secondattack1 !== true || skiller.name === "ソーラービーム") || BOSS.semiMAX === true) {
      if ((shield1 === true || MAXshield1 === true) && Bskiller.shieldbreak !== true && (Bskiller.direct !== true || F2 !== "ふかしのこぶし")) {
       alert(PN1 + "は攻撃から身を守った！");
       if (skiller.name === "キングシールド" && Bskiller.direct === true) {
        KAD2 = true;
        setTimeout(seconddp,200);
       } else {
        last();
       };
      } else {
       let power = Bskiller.power;
       let weatherblock = 1;
       let calamity1 = 1;
       let calamity2 = 1;
       let ability1;
       let ability2;
       let ranks1;
       let ranks2;
       if (Bskiller.type === "heavy" || Bskiller.type === "angry" || Bskiller.type === "vitalpoint" || Bskiller.type === "bodypress" || Bskiller.type === "physics") {
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
       if (Bskiller.type === "vitalpoint") {
        if (AR2 <= 5) {
         ranks1 = 1;
        };
        if (BR1 > 6) {
         ranks2 = 1;
        };
       };
       if (Bskiller.useoutA === true) {
        ability1 = PM[ID].A * rank[AR1].R;
       };
       if (F1 === "てんねん" && F2 !== "かたやぶり") {
        ranks1 = 1;
       };
       if (F2 === "てんねん" || Bskiller.noR === true) {
        ranks2 = 1;
       };
       vitalpt = plushit2;
       if (Bskiller.highrate === true) {
        vitalpt += 1;
       };
       if (Bskiller.hyperhitrate === true) {
        vitalpt += 3;
       };
       chaos = Math.random() * 100;
       if (chaos <= vital[vitalpt].R && (F1 !== "シェルアーマー" || F2 === "かたやぶり")) {
        chaosdp = true;
        if (ranks1 < 1) {
         ranks1 = 1;
        };
        if (ranks2 > 1) {
         ranks2 = 1;
        };
       };
       vitalpt = 0;
       if (F2 === "わざわいのつるぎ") {
        calamity2 = 0.75;
       };
       if (F2 === "わざわいのたま") {
        calamity2 = 0.75;
       };
       if (weather === "sandstrom" && (Bskiller.type === "special" || Bskiller.type === "assist") && (PM[ID].bodytype1 === "じめん" || PM[ID].bodytype1 === "いわ" || PM[ID].bodytype2 === "じめん" || PM[ID].bodytype2 === "いわ")) {
        weatherblock = 1.5;
       };
       if (weather === "snowy" && (Bskiller.type === "heavy" || Bskiller.type === "angry" || Bskiller.type === "vitalpoint" || Bskiller.type === "bodypress" || Bskiller.type === "physics") && (PM[ID].bodytype1 === "こおり" || PM[ID].bodytype2 === "こおり")) {
        weatherblock = 1.5;
       };
       
       minus = Math.floor((Math.floor(BOSS.level * 2 / 5 + 2)) * (Math.floor((power * ability1 * calamity1 * ranks1) / (ability2 * weatherblock * calamity2 * ranks2))) / 50 + 2);
       
       if (Bskiller.wince === true && F1 !== "せいしんりょく") {
        chaos = Math.random() * 100;
        if (F2 === "てんのめぐみ") {
         blessing = 2;
        };
        if (chaos <= (30 * blessing)) {
         wince1 = true;
        };
        blessing = 1;
       };
       if (Bskiller.wince2 === true && F1 !== "せいしんりょく") {
        chaos = Math.random() * 100;
        if (F2 === "てんのめぐみ") {
         blessing = 2;
        };
        if (chaos <= (20 * blessing)) {
         wince1 = true;
        };
        blessing = 1;
       };
       if (F2 === "あくしゅう" && F1 !== "せいしんりょく" && wince1 !== true) {
        chaos = Math.random() * 100;
        if (chaos <= 10) {
         wince1 = true;
        };
       };
       if (Bskiller.highrate === true) {
        highhitrate = true;
       };
       if (Bskiller.hyperhitrate === true) {
        hyperhitrate = true;
       };
       skilltype = Bskiller.skilltype;
       if (skilltype === "ノーマル" && F2 === "フェアリースキン") {
        skilltype = "フェアリー";
        minus = Math.floor(minus / 10 * 13);
       };
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
         if (Bskiller.type === "physics" || Bskiller.type === "angry" || Bskiller.type === "heavy" || Bskiller.type === "bodypress") {
          breakarmor = true;
         };
        }; 
       };
       if (F2 === "むしのしらせ") {
        if (BOSS.HP <= BOSS.MHP / 3) {
         if (skilltype === "bug") {
          minus = Math.floor(minus / 2 * 3);
         };
        };
       };
       if (F2 === "もうか") {
        if (BOSS.HP <= BOSS.MHP / 3) {
         if (skilltype === "fire") {
          minus = Math.floor(minus / 2 * 3);
         };
        };
       };
       if (Bskiller.AH === true) {
        AH = true;
       };
       if (Bskiller.AH2 === true) {
        AH2 = true;
       };
       if (afterback2 === true) {
        afterback2 = false;
       };
       if (afterback1 === true) {
        minus = minus * 2;
       };
       if (Bskiller.afterback === true) {
        afterback2 = true;
       };
       if (F1 === "ねつこうかん") {
        if (skilltype === "ほのお") {
         heatchange = true;
        };
       };
       if (Bskiller.CR1h === true) {
        chaos = Math.random() * 100;
        if (chaos <= 50) {
         CR1h2 = true;
        };
       };
       if (Bskiller.outBR0h === true) {
        chaos = Math.random() * 100;
        if (chaos <= 50) {
         outBR0h2 = true;
        };
       };
       if (F1 === "マルチスケイル") {
        if (F2 !== "かたやぶり") {
         if (PM[ID].HP === PM[ID].MHP) {
          minus = Math.floor(minus / 2);
         };
        };
       };
       if ((((F1 === "ふゆう" && gravities !== true && Bskiller.noF !== true) || F1 === "どしょく") && skilltype === "じめん") || (F1 === "ちょすい" && skilltype === "みず") || (F1 === "ちくでん" && skilltype === "でんき") || (F1 === "ぼうおん" && Bskiller.song === true) && F2 !== "かたやぶり") {
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
       if (Bskiller.direct === true || F2 === "かたいツメ") {
        minus = Math.floor(minus / 10 * 13);
       };
       if (Bskiller.AR1two === true) {
        chaos = Math.random() * 100;
        if (chaos <= 20) {
         AR1five2 = true;
        };
       };
       if (snowdown2 === true) {
        snowdown2 = false;
        minus = minus * 2;
       };
       if (skiller.snowdown === true) {
        snowdown1 = true;
       };
       if (skilltype === BOSS.bodytype1 || skilltype === BOSS.bodytype2) {
        if (F2 === "てきおうりょく") {
         minus = minus * 2;
        } else {
         minus = Math.floor(minus / 2 * 3);
        };
       };
       if (F2 === "トランジスタ" && skilltype === "でんき") {
        minus = Math.floor(minus / 2 * 3);
       };
       if (F2 === "りゅうのあぎと" && skilltype === "ドラゴン") {
        minus = Math.floor(minus / 2 * 3);
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
        if (Bskiller.force === true) {
         minus = Math.floor(minus / 2 * 3);
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
       if ((Bskiller.name === "かわらわり" || Bskiller.name === "サイコファング") && (Pbarrier1 === true || Sbarrier1 === true || Obarrier1 === true)) {
        if (Pbarrier1 === true) {
         breakPB1 = true;
         Pbarrier1 = false;
         PBpt1 = 0;
        };
        if (Sbarrier1 === true) {
         breakSB1 = true;
         Sbarrier1 = false;
         SBpt1 = 0;
        };
        if (Obarrier1 === true) {
         breakOB1 = true;
         Obarrier1 = false;
         OBpt1 = 0;
        };
       } else {
        if (F2 !== "すりぬけ" && Pbarrier1 === true && (Bskiller.type === "physics" || Bskiller.type === "angry" || Bskiller.type === "heavy" || Bskiller.type === "bodypress") && chaosdp !== true) {
         PBed = true;
         minus = Math.floor(minus / 2);
        };
        if (F2 !== "すりぬけ" && Sbarrier1 === true && (Bskiller.type === "special" || Bskiller.type === "assist" || Bskiller.type === "specialblock" || Bskiller.type === "hpboost") && chaosdp !== true) {
         SBed = true;
         minus = Math.floor(minus / 2);
        };
        if (F2 !== "すりぬけ" && Obarrier1 === true && chaosdp !== true) {
         OBed = true;
         minus = Math.floor(minus / 2);
        };
       };
       if (F2 === "テクニシャン" && Bskiller.power <= 60) {
        minus = Math.floor(minus / 2 * 3);
       };
       if ((F2 === "ちからもち" || F2 === "ヨガパワー") && (Bskiller.type === "physics" || Bskiller.type === "heavy" || Bskiller.type === "bodypress")) {
        minus = minus * 2;
       };
       if (Bskiller.reset === true) {
        if (PM[ID].bodytype1 !== "はがね" && PM[ID].bodytype2 !== "はがね") {
         smog = true;
         AR1 = 6;
         BR1 = 6;
         CR1 = 6;
         DR1 = 6;
         SR1 = 6;
         ARdp1.innerHTML = rank[AR1].dp;
         BRdp1.innerHTML = rank[BR1].dp;
         CRdp1.innerHTML = rank[CR1].dp;
         DRdp1.innerHTML = rank[DR1].dp;
         SRdp1.innerHTML = rank[SR1].dp;
        };
       };
       if (F1 === "こおりのりんぷん" && (Bskiller.type === "special" || Bskiller.type === "assist" || Bskiller.type === "specialblock")) {
        minus = Math.floor(minus / 2);
       };
       if (F2 === "きれあじ" && Bskiller.slice === true) {
        minus = Math.floor(minus / 2 * 3);
       };
       if (Bskiller.nosong === true) {
        nosongpt1 = 0;
        nosong1 = true;
       };
       if (F1 === "あついしぼう" && (skilltype === "ほのお" || skilltype === "こおり")) {
        minus = Math.floor(minus / 2);
       };
       if (F2 === "すなのちから" && (skilltype === "じめん" || skilltype === "いわ" || skilltype === "はがね") && weather === "sandstrom") {
        minus = Math.floor(minus / 10 * 13);
       };
       if (first === false && Bskiller.name === "しっぺがえし") {
        minus = minus * 2;
       };
       if (SNdp === "ライジングボルト2" && field === "elec") {
        minus = minus * 2;
       };
       if (SNdp === "ソーラービーム2" && (weather === "rainy" || weather === "sandstrom" || weather === "snowy")) {
        minus = Math.floor(minus / 2);
       };
       if (F2 === "はりきり" && (Bskiller.type === "heavy" || Bskiller.type === "angry" || Bskiller.type === "vitalpoint" || Bskiller.type === "bodypress" || Bskiller.type === "physics")) {
        minus = Math.floor(minus / 2 * 3);
       };
       if (F2 === "がんじょうあご" && Bskiller.fang === true) {
        minus = Math.floor(minus / 2 * 3);
       };
       if ((Bskiller.name === "でんげきくちばし" || Bskiller.name === "エラがみ") && first === true) {
        minus = minus * 2;
       };
       if (Bskiller.name === "Gのちから" && gravities === true) {
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
        setTimeout(PKCOMAX1,100);
       } else {
        setTimeout(PKCO1,100);
       };
      } else {
       last();
      };
     };
    };
   };
  };
 };
}