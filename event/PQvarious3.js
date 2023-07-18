function PKCO1() {
 if (changer === true) {
  if (F2 === "バトルスイッチ" && BOSS.blade === false && Bskiller.type !== "change") {
   Fdp21.style.visibility = "visible";
   Fdp22.style.visibility = "visible";
   BOSS.img2 = BOSS.bladeform2;
   PK2.src = BOSS.img2;
  };
  if (first === true) {
   last();
  } else {
   firsted = 1;
   BOSSPKCO();
  };
 } else {
  chaos = Math.random() * 100;
  if (PM[ID].abnormal === "sleepy" || (PM[ID].abnormal === "paralysis" && chaos <= 30)) {
   if (PM[ID].abnormal === "sleepy") {
    alert(PN1 + "はぐうぐう眠っている！");
   };
   if (PM[ID].abnormal === "paralysis" && chaos <= 30) {
    alert(PN1 + "体がしびれて動けない！");
   };
   if (F2 === "バトルスイッチ" && BOSS.blade === false && Bskiller.type !== "change") {
    Fdp21.style.visibility = "visible";
    Fdp22.style.visibility = "visible";
    BOSS.img2 = BOSS.bladeform2;
    PK2.src = BOSS.img2;
   };
   if (first === true) {
    last();
   } else {
    firsted = 1;
    BOSSPKCO();
   };
  } else {
   if (wince1 === true) {
    alert(PN1 + "はひるんで技が出せない！");
    last();
   } else {
    if ((nosong1 === true && skiller.song === true) || (gravities === true && skiller.skyjump === true)) {
     if (nosong1 === true && skiller.song === true) {
      alert(PN1 + "はじこくづきの効果で技が出せない！");
     };
     if (gravities === true && skiller.skyjump === true) {
      alert(PN1 + "は重力が強くて" + skiller.name + "ができない！");
     };
     setTimeout(seconddp,200);
    } else {
     if (F1 === "バトルスイッチ" && PM[ID].blade === true && skiller.type === "change") {
      Fdp11.style.visibility = "hidden";
      Fdp12.style.visibility = "hidden";
      PM[ID].blade = false;
      PM[ID].A = 70;
      PM[ID].B = 160;
      PM[ID].C = 70;
      PM[ID].D = 160;
      alert("シールドフォルムチェンジ！");
     };
     if (F1 === "バトルスイッチ" && PM[ID].blade === false && skiller.type !== "change") {
      Fdp11.style.visibility = "hidden";
      Fdp12.style.visibility = "hidden";
      PM[ID].blade = true;
      PM[ID].A = 160;
      PM[ID].B = 70;
      PM[ID].C = 160;
      PM[ID].D = 70;
      alert("ブレードフォルムチェンジ！");
     };
     if (Wattack !== true) {
      alert(PN1 + "の" + skiller.name + "!");
     };
     SNdp = skiller.name + "1";
     Wattack = false;
     if (field === "phycho" && firster1 === true && BOSS.bodytype1 !== "ひこう" && BOSS.bodytype2 !== "ひこう" && F2 !== "ふゆう") {
      alert(PN2 + "はサイコフィールドで守られている！");
      nodmg = true;
      setTimeout(seconddp,200);
     } else {
      if (skiller.type === "change" && skiller.mything === true) {
       if (skiller.up === true) {
        if (SNdp === "ソウルビート1") {
         if (PM[ID].HP <= PM[ID].MHP / 3) {
          nodmg = true;
          alert("しかし、うまく決まらなかった…。");
          setTimeout(seconddp,200);
         } else {
          futurehp1 = PM[ID].HP - Math.floor(PM[ID].MHP / 3);
          setTimeout(dmganimation1,200);
         };
        } else {
         setTimeout(seconddp,200);
        };
       } else {
        if (skiller.backwind === true) {
         alert("味方にに追い風が吹き始めた");
         backwind1 = true;
         windrate1 = 2;
         setTimeout(seconddp,200);
        } else {
         if (skiller.againheal === true) {
          PM[healID1].HP = Math.floor(PM[healID1].MHP / 2);
          diept += 1;
          PM[ID].healout = true;
          alert(PM[healID1].name + "は元気を取り戻した！");
          alert(PM[healID1].name + "は復活して戦える");
          setTimeout(seconddp,200);
         } else {
          if (skiller.un === true) {
           if (unspeed === true) {
            unspeed = false;
            unspeedpt = 0;
            alert(PN1 + "はゆがめられた時空をもとに戻した！");
           } else {
            unspeed = true;
            alert(PN1 + "は時空をゆがめた！");
           };
           setTimeout(seconddp,200);
          } else {
           if (skiller.heal === true) {
            heal1 = true;
            PM[ID].heal -= 1;
            if (PM[ID].MHP === PM[ID].HP) {
             alert("しかし、" + PN1 + "は体力が満タンだ！");
             setTimeout(dp1,200);
            } else {
             if (skiller.name === "こうごうせい" && (weather === "rainy" || weather === "sandstrom" || weather === "snowy")) {
              futurehp1 = PM[ID].HP + Math.floor(PM[ID].MHP / 4);
              if (futurehp1 > PM[ID].MHP) {
               futurehp1 = PM[ID].MHP;
              };
             } else {
              if (skiller.name === "こうごうせい" && weather === "sunny") {
               futurehp1 = PM[ID].HP + Math.floor(PM[ID].MHP / 3 * 2);
               if (futurehp1 > PM[ID].MHP) {
                futurehp1 = PM[ID].MHP;
               };
              } else {
               futurehp1 = PM[ID].HP + Math.floor(PM[ID].MHP / 2);
               if (futurehp1 > PM[ID].MHP) {
                futurehp1 = PM[ID].MHP;
               };
              };
             };
             healdp1 = true;
             if (skiller.name === "はねやすめ") {
              skyoff1 = true;
              PM[ID].bodytype2 = "null";
             };
             if (skiller.egg === true) {
              if (AR1 < 6) {
               AR1 = 6;
              };
              if (BR1 < 6) {
               BR1 = 6;
              };
              if (CR1 < 6) {
               CR1 = 6;
              };
              if (DR1 < 6) {
               DR1 = 6;
              };
              if (SR1 < 6) {
               SR1 = 6;
              };
             };
             setTimeout(grow1,500);
            };
           } else {
            if (skiller.barrier === true) {
             if (skiller.Pbarrier === true) {
              if (Pbarrier1 === true) {
               alert("しかし、うまく決まらなかった…。");
              } else {
               Pbarrier1 = true;
               PBing1 = true;
              };
             };
             if (skiller.Sbarrier === true) {
              if (Sbarrier1 === true) {
               alert("しかし、うまく決まらなかった…。");
              } else {
               Sbarrier1 = true;
               SBing1 = true;
              };
             };
             setTimeout(dp1,200);
            } else {
             if (skiller.drum === true) {
              if (PM[ID].HP <= Math.ceil(PM[ID].MHP / 2)) {
               alert("しかし、うまく決まらなかった…。");
               setTimeout(seconddp,200);
              } else {
               if (AR1 === 12) {
                alert(PN1 + "のこうげきはもう上がらない！");
                setTimeout(seconddp,200);
               } else {
                drum = true;
                AR1 = 12;
                ARdp1.innerHTML = rank[AR1].dp;
                futurehp1 = Math.floor(PM[ID].HP - PM[ID].MHP / 2);
                setTimeout(dmganimation1,200);
               };
              };
             } else {
              if (skiller.shield === true) {
               chaos = Math.random() * 100;
               if (shield2 === true || MAXshield2 === true || chaos > shieldrate[shieldpt1].rate) {
                alert("しかし、うまく決まらなかった…。");
                shieldpt1 = 0;
               } else {
                alert(PN1 + "は守りの体制に入った！");
                shieldpt1 += 1;
                shield1 = true;
               };
               setTimeout(seconddp,200);
              };
             };
            };
           };
          };
         };
        };
       };
      } else {
       if (skiller.secondattack === true && secondattack1 === false) {
        secondattack1 = true;
        if (SNdp === "ゴーストダイブ1") {
         alert(PN1 + "はどこかへ消えてしまった。");
         PK1.style.visibility = "hidden";
         setTimeout(seconddp,200);
        };
        if (SNdp === "ソーラービーム1") {
         alert(PN1 + "は光を吸収した！");
         if (weather === "sunny") {
         Wattack = true;
          setTimeout(PKCO1,200);
         } else {
          setTimeout(seconddp,200);
         };
        };
       } else {
        let hitrate = 0;
        chaos = Math.random() * 100;
        hitrate = skiller.hitrate;
        if (weather === "sunny" && skiller.name === "ぼうふう") {
         hitrate = 50;
        };
        if (F2 === "すながくれ" && weather === "sandstrom" || F2 === "ゆきがくれ" && weather === "snowy") {
         hitrate = Math.floor(hitrate / 5 * 4);
        };
        if (F1 === "はりきり" && (skiller.type === "heavy" || skiller.type === "angry" || skiller.type === "vitalpoint" || skiller.type === "bodypress" || skiller.type === "physics")) {
         hitrate = Math.floor(hitrate / 5 * 4);
        };
        if (gravities === true) {
         hitrate = Math.floor(hitrate / 3 * 5);
        };
        if ((chaos <= rank[KR2].KR * hitrate || F1 === "ノーガード" || F2 === "ノーガード" || (weather === "rainy" && (skiller.name === "かみなり" || skiller.name === "ぼうふう")) || (weather === "hail" && skiller.name === "ふぶき")) && (secondattack2 !== true || Bskiller.name === "ソーラービーム")) {
         if ((shield2 === true || MAXshield2 === true) && skiller.shieldbreak !== true && (skiller.direct !== true || F1 !== "ふかしのこぶし")) {
          alert(PN2 + "は攻撃から身を守った！");
          if (skiller.reaction === true) {
           reaction1 = true;
           minus = Math.ceil(PM[ID].MHP / 2);
           if (PM[ID].HP < minus) {
            minus = PM[ID].HP;
           };
           futurehp1 = PM[ID].HP - minus;
           if (Bskiller.name === "キングシールド") {
            KAD1 = true;
           };
           setTimeout(dmganimation1,200);
          } else {
           if (Bskiller.name === "キングシールド" && skiller.direct === true) {
            setTimeout(seconddp,200);
            KAD1 = true;
           } else {
            last();
           };
          };
         } else {
          if (skiller.type === "change") {
           if (skiller.putgift === true) {
            if (BOSS.bodytype1 === "あく" || BOSS.bodytype2 === "あく") {
             nodmg = true;
             alert(PN2 + "には効果はないようだ…");
             setTimeout(seconddp,200);
            } else {
             suicide1 = true;
             futurehp1 = 0;
             setTimeout(dmganimation1,200);
            };
           } else {
            if (skiller.halves === true) {
             futurehp1 = Math.floor((PM[ID].HP + BOSS.HP) / 2);
             futurehp2 = futurehp1;
             if (futurehp1 > PM[ID].MHP) {
              futurehp1 = PM[ID].MHP;
             };
             if (futurehp2 > BOSS.MHP) {
              futurehp2 = BOSS.MHP;
             };
             setTimeout(bothgrowcontract,300);
            } else {
             if (skiller.obsessed === true) {
              if (BOSS.MAX === true || BOSS.semiMAX === true) {
               alert(PN1 + "は首を横に振った。この技を仕掛けることはできないようだ…");
               setTimeout(seconddp,200);
              } else {
               let subminus;
               subminus = BOSS.HP - PM[ID].HP;
               if (subminus <= 0) {
                subminus = 0;
               };
               futurehp2 = BOSS.HP - subminus;
               if (BOSS.bodytype1 === "ゴースト" || BOSS.bodytype2 === "ゴースト") {
                dmg = 4;
                futurehp2 = BOSS.HP;
               };
               setTimeout(dmganimation2,200);
              };
             } else {
              if (skiller.onekill === true) {
               if (BOSS.MAX === true && BOSS.semiMAX === true) {
                alert(PN2 + "には効果がないようだ…。");
                setTimeout(seconddp,200);
               } else {
                if (F2 === "がんじょう" || (skiller.name === "じわれ" && F2 === "ふゆう")) {
                 onekilloff2 = true;
                 Fdp21.style.visibility = "visible";
                 Fdp22.style.visibility = "visible";
                 setTimeout(dp1,200);
                } else {
                 if (skiller.name === "じわれ" && (BOSS.bodytype1 === "ひこう" || BOSS.bodytype2 === "ひこう")) {
                  alert(PN2 + "には効果がないようだ…。");
                  setTimeout(seconddp,200);
                 } else {
                  futurehp2 = 0;
                  onekilloff2 = true;
                  setTimeout(dmganimation2,200);
                 };
                };
               };
              } else {
               if (skiller.sleepy === true) {
                if (BOSS.abnormal === "sleepy") {
                 alert(PN2 + "はすでに眠っている！");
                 setTimeout(seconddp,200);
                } else {
                 if (BOSS.bodytype1 === "くさ" || BOSS.bodytype2 === "くさ") {
                  alert(PN2 + "には効果がないようだ…");
                  setTimeout(seconddp,200);
                 } else {
                  alert("しかし、うまく決まらなかった…。");
                  setTimeout(seconddp,200);
                 };
                };
               } else {
                if (skiller.halflockdmg === true) {
                 futurehp2 = Math.floor(BOSS.HP / 2);
                 setTimeout(dmganimation2,200);
                } else {
                 if (skiller.counter === true) {
                  if (Bskiller.type === "heavy" || Bskiller.type === "angry" || Bskiller.type === "vitalpoint" || Bskiller.type === "bodypress" || Bskiller.type === "physics" || first !== true) {
                   alert("しかし、うまく決まらなかった…。");
                   setTimeout(seconddp,200);
                  } else {
                   if (BOSS.HP <= minus * 2) {
                    minus = BOSS.HP;
                   } else {
                    minus = minus * 2;
                   };
                   score += Math.ceil(minus * ((BOSS.D * rank[DR2].R) / Math.sqrt(PM[ID].C)) / Math.sqrt(skiller.power * 2) * 50);
                   alert("スコア " + score + " minus " + minus + " power " + skiller.power + " rate " + BOSS.D * rank[DR2].R / PM[ID].C + " spcial");
                   futurehp2 = BOSS.HP - minus;
                   setTimeout(dmganimation2,200);
                  };
                 } else {
                  if (skiller.swap === true) {
                   swap2 = true;
                   if (skiller.power === true) {
                    let A1 = PM[ID].A;
                    let C1 = PM[ID].C;
                    PM[ID].A = BOSS.A;
                    PM[ID].C = BOSS.C;
                    BOSS.A = A1;
                    BOSS.C = C1;
                    alert(PN1 + "はお互いの攻撃と特攻を入れ替えた！");
                   };
                   if (skiller.speed === true) {
                    let S1 = PM[ID].S;
                    PM[ID].S = BOSS.S;
                    BOSS.S = S1;
                    alert(PN1 + "はお互いの素早さを入れ替えた！");
                   };
                   setTimeout(seconddp,200);
                  };
                 };
                };
               };
              };
             };
            };
           };
          } else {
           if (PM[ID].lightout === true && SNdp === "でんこうそうげき1") {
            alert("しかし、うまく決まらなかった");
            setTimeout(seconddp,200);
           } else {
            let power = skiller.power;
            let weatherblock = 1;
            let calamity1 = 1;
            let calamity2 = 1;
            let ability1;
            let ability2;
            let ranks1;
            let ranks2;
            if (skiller.type === "heavy" || skiller.type === "angry" || skiller.type === "vitalpoint" || skiller.type === "bodypress" || skiller.type === "physics") {
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
            if (skiller.type === "heavy" || skiller.type === "assist" || skiller.type === "angry" || skiller.type === "vitalpoint" || skiller.type === "bodypress" || skiller.type === "specialblock" || skiller.type === "hpboost" || skiller.type === "revival") {
             if (skiller.type === "heavy") {
              if (BOSS.heavy < 10) {
               power = 20;
              } else {
               if (BOSS.heavy < 25) {
                power = 40;
               } else {
                if (BOSS.heavy < 50) {
                 power = 60;
                } else {
                 if (BOSS.heavy < 100) {
                  power = 80;
                 } else {
                  if (BOSS.heavy < 200) {
                   power = 100;
                  } else {
                   power = 120;
                  };
                 };
                };
               };
              };
             } else {
              if (skiller.type === "assist") {
               let AS = AR1 + BR1 + CR1 + DR1 + SR1 - 30;
               if (AS < 0) {
                AS = 0;
               };
               power = skiller.power + 20 * AS;
              } else {
               if (skiller.type === "angry") {
                power = skiller.power + 50 * PM[ID].done;
               } else {
                if (skiller.type === "vitalpoint") {
                 if (AR1 <= 5) {
                  ranks1 = 1;
                 };
                 if (BR2 > 6) {
                  ranks2 = 1;
                 };
                } else {
                 if (skiller.type === "bodypress") {
                  ability1 = PM[ID].B;
                  ranks1 = rank[BR1].R;
                 } else {
                  if (skiller.type === "specialblock") {
                   ability2 = BOSS.B;
                   ranks2 = rank[BR2].R;
                  } else {
                   if (skiller.type === "hpboost") {
                    power = Math.ceil(150 * PM[ID].HP / PM[ID].MHP);
                   } else {
                    if (skiller.type === "revival") {
                     if (PM[ID].HP < PM[ID].MHP / 48 * 2) {
                      power = 200;
                     } else {
                      if (PM[ID].HP < PM[ID].MHP / 48 * 5) {
                       power = 150;
                      } else {
                       if (PM[ID].HP < PM[ID].MHP / 48 * 10) {
                        power = 100;
                       } else {
                        if (PM[ID].HP < PM[ID].MHP / 48 * 17) {
                         power = 80;
                        } else {
                         if (PM[ID].HP < PM[ID].MHP / 48 * 33) {
                          power = 40;
                         } else {
                          power = 20;
                         };
                        };
                       };
                      };
                     };
                    } else {
                     if (skiller.heavy === true) {
                      if (BOSS.heavy * 5 <= PM[ID].heavy) {
                       power = 120;
                      } else {
                       if (BOSS.heavy * 4 <= PM[ID].heavy) {
                        power = 100;
                       } else {
                        if (BOSS.heavy * 3 <= PM[ID].heavy) {
                         power = 80;
                        } else {
                         if (BOSS.heavy * 2 <= PM[ID].heavy) {
                          power = 60;
                         } else {
                          if (BOSS.heavy > PM[ID].heavy) {
                           power = 20;
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
               };
              };
             };
            };
            if (skiller.useoutA === true) {
             ability1 = BOSS.A * rank[AR2].R;
            };
            if (F2 === "てんねん" && F1 !== "かたやぶり") {
             ranks1 = 1;
            };
            if (F1 === "てんねん" || skiller.noR === true) {
             ranks2 = 1;
            };
            vitalpt = plushit1;
            if (skiller.highrate === true) {
             vitalpt += 1;
            };
            if (skiller.hyperhitrate === true) {
             vitalpt += 3;
            };
            chaos = Math.random() * 100;
            if (chaos <= vital[vitalpt].R && (F2 !== "シェルアーマー" || F1 === "かたやぶり")) {
             chaosdp = true;
             if (ranks1 < 1) {
              ranks1 = 1;
             };
             if (ranks2 > 1) {
              ranks2 = 1;
             };
            };
            vitalpt = 0;
            if (F1 === "わざわいのつるぎ") {
             calamity2 = 0.75;
            };
            if (F1 === "わざわいのたま") {
             calamity2 = 0.75;
            };
            skiller.power = power;
            if (weather === "sandstrom" && (skiller.type === "special" || skiller.type === "assist") && (BOSS.bodytype1 === "じめん" || BOSS.bodytype1 === "いわ" || BOSS.bodytype2 === "じめん" || BOSS.bodytype2 === "いわ")) {
             weatherblock = 1.5;
            };
            if (weather === "snowy" && (skiller.type === "heavy" || skiller.type === "angry" || skiller.type === "vitalpoint" || skiller.type === "bodypress" || skiller.type === "physics") && (BOSS.bodytype1 === "こおり" || BOSS.bodytype2 === "こおり")) {
             weatherblock = 1.5;
            };
            
            minus = Math.floor((Math.floor(PM[ID].level * 2 / 5 + 2)) * (Math.floor((power * ability1 * calamity1 * ranks1) / (ability2 * weatherblock * calamity2 * ranks2))) / 50 + 2);
            
            if (skiller.wince === true && F2 !== "せいしんりょく") {
             chaos = Math.random() * 100;
             if (F1 === "てんのめぐみ") {
              blessing = 2;
             };
             if (chaos <= (30 * blessing)) {
              wince2 = true;
             };
             blessing = 1;
            };
            if (skiller.wince2 === true && F2 !== "せいしんりょく") {
             chaos = Math.random() * 100;
             if (F1 === "てんのめぐみ") {
              blessing = 2;
             };
             if (chaos <= (20 * blessing)) {
              wince2 = true;
             };
             blessing = 1;
            };
            if (F1 === "あくしゅう" && F2 !== "せいしんりょく" && wince2 !== true) {
             chaos = Math.random() * 100;
             if (chaos <= 10) {
              wince2 = true;
             };
            };
            skilltype = skiller.skilltype;
            if (skilltype === "ノーマル" && F1 === "フェアリースキン") {
             skilltype = "フェアリー";
             minus = Math.floor(minus / 10 * 13);
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
              if (skiller.type === "physics" || skiller.type === "angry" || skiller.type === "heavy" || skiller.type === "bodypress") {
               breakarmor = true;
              };
             };
            };
            if (F1 === "むしのしらせ") {
             if (PM[ID].HP <= PM[ID].MHP / 3) {
              if (skilltype === "bug") {
               minus = Math.floor(minus / 2 * 3);
              };
             };
            }; 
            if (F1 === "もうか") {
             if (PM[ID].HP <= PM[ID].MHP / 3) {
              if (skilltype === "fire") {
               minus = Math.floor(minus / 2 * 3);
              };
             };
            };
            if (skiller.AH === true) {
             AH = true;
            };
            if (skiller.AH2 === true) {
             AH2 = true;
            };
            afterback1 = false;
            if (afterback2 === true) {
             minus = minus * 2;
            };
            if (skiller.afterback === true) {
             afterback1 = true;
            };
            if (F2 === "ねつこうかん") {
             if (skilltype === "ほのお") {
              heatchange = true;
             };
            };
            if (skiller.CR1h === true) {
             chaos = Math.random() * 100;
             if (chaos <= 50) {
              CR1h1 = true;
             };
            };
            if (skiller.outBR0h === true) {
             chaos = Math.random() * 100;
             if (chaos <= 50) {
              outBR0h1 = true;
             };
            };
            if (skiller.Wattack === true) {
             WApt += 1;
             if (Wattacked === false) {
              Wattack = true;
             };
            };
            if (F2 === "マルチスケイル") {
             if (F1 !== "かたやぶり") {
              if (BOSS.HP === BOSS.MHP) {
               minus = Math.floor(minus / 2);
              };
             };
            };
            recoil1 = false;
            if (skiller.recoil === true) {
             recoil1 = true;
            };
            if ((((F2 === "ふゆう" && gravities !== true) || F2 === "どしょく") && skilltype === "じめん") || (F2 === "ちょすい" && skilltype === "みず") || (F2 === "ちくでん" && skilltype === "でんき") || (F2 === "ぼうおん" && skiller.song === true) &&  F1 !== "かたやぶり") {
             flying2 = true;
            };
            if (SNdp === "でんこうそうげき1") {
             PM[ID].lightout = true;
             PM[ID].bodytype2 = "null";
            };
            if ((F1 === "リベロ" || F1 === "へんげんじざい") && formed1 !== true) {
             PM[ID].bodytype1 = skilltype;
             PM[ID].bodytype2 = null;
             formed1 = true;
             transform1 = true;
             Fdp11.style.visibility = "visible";
             Fdp12.style.visibility = "visible";
            };
            if (skiller.direct === true || F1 === "かたいツメ") {
             minus = Math.floor(minus / 10 * 13);
            };
            if (skiller.AR1two === true) {
             chaos = Math.random() * 100;
             if (chaos <= 20) {
              AR1five1 = true;
             };
            };
            if (snowdown1 === true) {
             snowdown1 = false;
             minus = minus * 2;
            };
            if (Bskiller.snowdown === true) {
             snowdown2 = true;
            };
            if (skilltype === PM[ID].bodytype1 || skilltype === PM[ID].bodytype2) {
             if (F1 === "てきおうりょく") {
              minus = minus * 2;
             } else {
              minus = Math.floor(minus / 2 * 3);
             };
            };
            if (F1 === "トランジスタ" && skilltype === "でんき") {
             minus = Math.floor(minus / 2 * 3);
            };
            if (F1 === "りゅうのあぎと" && skilltype === "ドラゴン") {
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
             if (skiller.force === true) {
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
            if ((skiller.name === "かわらわり" || skiller.name === "サイコファング") && (Pbarrier2 === true || Sbarrier2 === true || Obarrier2 === true)) {
             if (Pbarrier2 === true) {
              Pbarrier2 = false;
              PBpt2 = 0;
              breakPB2 = true;
             };
             if (Sbarrier2 === true) {
              Sbarrier2 = false;
              SBpt2 = 0;
              breakSB2 = true;
             };
             if (Obarrier2 === true) {
              Obarrier2 = false;
              OBpt2 = 0;
              breakOB2 = true;
             };
            } else {
             if (F1 !== "すりぬけ" && Pbarrier2 === true && (skiller.type === "physics" || skiller.type === "angry" || skiller.type === "heavy" || skiller.type === "bodypress") && chaosdp !== true) {
              minus = Math.floor(minus / 2);
             };
             if (F1 !== "すりぬけ" && Sbarrier2 === true && (skiller.type === "special" || skiller.type === "assist" || skiller.type === "specialblock" || skiller.type === "hpboost") && chaosdp !== true) {
              minus = Math.floor(minus / 2);
             };
             if (F1 !== "すりぬけ" && Obarrier2 === true && chaosdp !== true) {
              minus = Math.floor(minus / 2);
             };
            };
            if (F1 === "テクニシャン" && skiller.power <= 60) {
             minus = Math.floor(minus / 2 * 3);
            };
            if ((F1 === "ちからもち" || F1 === "ヨガパワー") && (skiller.type === "physics" || skiller.type === "heavy" || skiller.type === "bodypress")) {
             minus = minus * 2;
            };
            if (secondattack1 === true) {
             secondattack1 = false;
             PK1.style.visibility = "visible";
            };
            if (skiller.reset === true) {
             if (BOSS.bodytype1 !== "はがね" && BOSS.bodytype2 !== "はがね") {
              smog = true;
              AR2 = 6;
              BR2 = 6;
              CR2 = 6;
              DR2 = 6;
              SR2 = 6;
              ARdp2.innerHTML = rank[AR2].dp;
              BRdp2.innerHTML = rank[BR2].dp;
              CRdp2.innerHTML = rank[CR2].dp;
              DRdp2.innerHTML = rank[DR2].dp;
              SRdp2.innerHTML = rank[SR2].dp;
             };
            };
            if (F2 === "こおりのりんぷん" && (skiller.type === "special" || skiller.type === "assist" || skiller.type === "specialblock")) {
             minus = Math.floor(minus / 2);
            };
            if (F1 === "きれあじ" && skiller.slice === true) {
             minus = Math.floor(minus / 2 * 3);
            };
            if (skiller.nosong === true) {
             nosongpt2 = 0;
             nosong2 = true;
            };
            if (F2 === "あついしぼう" && (skilltype === "ほのお" || skilltype === "こおり")) {
             minus = Math.floor(minus / 2);
            };
            if (F1 === "すなのちから" && (skilltype === "じめん" || skilltype === "いわ" || skilltype === "はがね") && weather === "sandstrom") {
             minus = Math.floor(minus / 10 * 13);
            };
            if (first === true && skiller.name === "しっぺがえし") {
             minus = minus * 2;
            };
            if (skiller === "ライジングボルト1" && field === "elec") {
             minus = minus * 2;
            };
            if (skiller === "ソーラービーム1" && (weather === "rainy" || weather === "sandstrom" || weather === "snowy")) {
             minus = Math.floor(minus / 2);
            };
            if (F1 === "はりきり" && (skiller.type === "heavy" || skiller.type === "angry" || skiller.type === "vitalpoint" || skiller.type === "bodypress" || skiller.type === "physics")) {
             minus = Math.floor(minus / 2 * 3);
            };
            if (F1 === "がんじょうあご" && skiller.fang === true) {
             minus = Math.floor(minus / 2 * 3);
            };
            if ((skiller.name === "でんげきくちばし" || skiller.name === "エラがみ") && first === false) {
             minus = minus * 2;
            };
            if (skiller.name === "Gのちから" && gravities === true) {
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
          };
         };
        } else {
         if (Wattack === true) {
          PKCO1();
         } else {
          shieldpt1 = 0;
          alert(PN2 + "には当たらなかった…。");
          if (skiller.reaction === true) {
           reaction1 = true;
           minus = Math.ceil(PM[ID].MHP / 2);
           if (PM[ID].HP < minus) {
            minus = PM[ID].HP;
           };
           futurehp1 = PM[ID].HP - minus;
           setTimeout(dmganimation1,200);
          } else {
           if (secondattack1 === true) {
            secondattack1 = false;
            PK1.style.visibility = "visible";
           };
           if (first === true) {
            last();
           } else {
            firsted = 1;
            BOSSPKCO();
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
}