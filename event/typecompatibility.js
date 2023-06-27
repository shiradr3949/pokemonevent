function type() {
 if (skilltype === "ノーマル") {
  if (bodytype2 === "いわ" || bodytype2 === "いわ") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ゴースト" || bodytype2 === "ゴースト") {
   nodmg = true;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg - 1;
  };
 };
 if (skilltype === "かくとう") {
  if (bodytype1 === "ノーマル" || bodytype2 === "ノーマル") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "どく" || bodytype2 === "どく") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ひこう" || bodytype2 === "ひこう") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "むし" || bodytype2 === "むし") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "いわ" || bodytype2 === "いわ") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "ゴースト" || bodytype2 === "ゴースト") {
   nodmg = true;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "こおり" || bodytype2 === "こおり") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "エスパー" || bodytype2 === "エスパー") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "あく" || bodytype2 === "あく") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "フェアリー" || bodytype2 === "フェアリー") {
   dmg = dmg - 1;
  };
 };
 if (skilltype === "どく") {
  if (bodytype1 === "どく" || bodytype2 === "どく") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "じめん" || bodytype2 === "じめん") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "いわ" || bodytype2 === "いわ") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ゴースト" || bodytype2 === "ゴースト") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   nodmg = true;
  };
  if (bodytype1 === "くさ" || bodytype2 === "くさ") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "フェアリー" || bodytype2 === "フェアリー") {
   dmg = dmg + 1;
  };
 };
 if (skilltype === "じめん") {
  if (bodytype1 === "どく" || bodytype2 === "どく") {
   dmg = dmg + 1;
  };
  if ((bodytype1 === "ひこう" || bodytype2 === "ひこう") && gravities !== true) {
   nodmg = true;
  };
  if (bodytype1 === "むし" || bodytype2 === "むし") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "いわ" || bodytype2 === "いわ") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "ほのお" || bodytype2 === "ほのお") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "でんき" || bodytype2 === "でんき") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "くさ" || bodytype2 === "くさ") {
   dmg = dmg - 1;
  };
 };
 if (skilltype === "ひこう") {
  if (bodytype1 === "かくとう" || bodytype2 === "かくとう") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "むし" || bodytype2 === "むし") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "いわ" || bodytype2 === "いわ") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "でんき" || bodytype2 === "でんき") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "くさ" || bodytype2 === "くさ") {
   dmg = dmg + 1;
  };
 };
 if (skilltype === "むし") {
  if (bodytype1 === "かくとう" || bodytype2 === "かくとう") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "どく" || bodytype2 === "どく") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ひこう" || bodytype2 === "ひこう") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ゴースト" || bodytype2 === "ゴースト") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ほのお" || bodytype2 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "くさ" || bodytype2 === "くさ") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "エスパー" || bodytype2 === "エスパー") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "あく" || bodytype2 === "あく") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "フェアリー" || bodytype2 === "フェアリー") {
   dmg = dmg - 1;
  };
 };
 if (skilltype === "いわ") {
  if (bodytype1 === "かくとう" || bodytype2 === "かくとう") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "じめん" || bodytype2 === "じめん") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ひこう" || bodytype2 === "ひこう") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "むし" || bodytype2 === "むし") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ほのお" || bodytype2 === "ほのお") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "こおり" || bodytype2 === "こおり") {
   dmg = dmg + 1;
  };
 };
 if (skilltype === "ゴースト") {
  if (bodytype1 === "ノーマル" || bodytype2 === "ノーマル") {
   nodmg = true;
  };
  if (bodytype1 === "ゴースト" || bodytype2 === "ゴースト") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "エスパー" || bodytype2 === "エスパー") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "あく" || bodytype2 === "あく") {
   dmg = dmg - 1;
  };
 };
 if (skilltype === "はがね") {
  if (bodytype1 === "いわ" || bodytype2 === "いわ") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ほのお" || bodytype2 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "みず" || bodytype2 === "みず") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "くさ" || bodytype2 === "くさ") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "でんき" || bodytype2 === "でんき") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "こおり" || bodytype2 === "こおり") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "フェアリー" || bodytype2 === "フェアリー") {
   dmg = dmg + 1;
  };
 };
 if (skilltype === "ほのお") {
  if (bodytype1 === "むし" || bodytype2 === "むし") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "いわ" || bodytype2 === "いわ") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "ほのお" || bodytype2 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "みず" || bodytype2 === "みず") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "くさ" || bodytype2 === "くさ") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "こおり" || bodytype2 === "こおり") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "ドラゴン" || bodytype2 === "ドラゴン") {
   dmg = dmg - 1;
  };
 };
 if (skilltype === "みず") {
  if (bodytype1 === "じめん" || bodytype2 === "じめん") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "いわ" || bodytype2 === "いわ") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "ほのお" || bodytype2 === "ほのお") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "みず" || bodytype2 === "みず") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "くさ" || bodytype2 === "くさ") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ドラゴン" || bodytype2 === "ドラゴン") {
   dmg = dmg - 1;
  };
 };
 if (skilltype === "でんき") {
  if (bodytype1 === "じめん" || bodytype2 === "じめん") {
   nodmg = true;
  };
  if (bodytype1 === "ひこう" || bodytype2 === "ひこう") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "みず" || bodytype2 === "みず") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "でんき" || bodytype2 === "でんき") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "くさ" || bodytype2 === "くさ") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ドラゴン" || bodytype2 === "ドラゴン") {
   dmg = dmg - 1;
  };
 };
 if (skilltype === "くさ") {
  if (bodytype1 === "どく" || bodytype2 === "どく") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "じめん" || bodytype2 === "じめん") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "ひこう" || bodytype2 === "ひこう") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "むし" || bodytype2 === "むし") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "いわ" || bodytype2 === "いわ") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ほのお" || bodytype2 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "みず" || bodytype2 === "みず") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "くさ" || bodytype2 === "くさ") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ドラゴン" || bodytype2 === "ドラゴン") {
   dmg = dmg - 1;
  };
 };
 if (skilltype === "こおり") {
  if (bodytype1 === "じめん" || bodytype2 === "じめん") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "ひこう" || bodytype2 === "ひこう") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ほのお" || bodytype2 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "みず" || bodytype2 === "みず") {
   dmg = dmg - 1;
   if (skiller === "フリーズドライ1" || skiller === "フリーズドライ2") {
    dmg += 2;
   };
  };
  if (bodytype1 === "くさ" || bodytype2 === "くさ") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "こおり" || bodytype2 === "こおり") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ドラゴン" || bodytype2 === "ドラゴン") {
   dmg = dmg + 1;
  };
 };
 if (skilltype === "エスパー") {
  if (bodytype1 === "かくとう" || bodytype2 === "かくとう") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "どく" || bodytype2 === "どく") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "エスパー" || bodytype2 === "エスパー") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "あく" || bodytype2 === "あく") {
   nodmg = true;
  };
 };
 if (skilltype === "ドラゴン") {
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ドラゴン" || bodytype2 === "ドラゴン") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "フェアリー" || bodytype2 === "フェアリー") {
   nodmg = true;
  };
 };
 if (skilltype === "あく") {
  if (bodytype1 === "かくとう" || bodytype2 === "かくとう") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ゴースト" || bodytype2 === "ゴースト") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "エスパー" || bodytype2 === "エスパー") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "あく" || bodytype2 === "あく") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "フェアリー" || bodytype2 === "フェアリー") {
   dmg = dmg - 1;
  };
 };
 if (skilltype === "フェアリー") {
  if (bodytype1 === "かくとう" || bodytype2 === "かくとう") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "どく" || bodytype2 === "どく") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "はがね" || bodytype2 === "はがね") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ほのお" || bodytype2 === "ほのお") {
   dmg = dmg - 1;
  };
  if (bodytype1 === "ドラゴン" || bodytype2 === "ドラゴン") {
   dmg = dmg + 1;
  };
  if (bodytype1 === "あく" || bodytype2 === "あく") {
   dmg = dmg + 1;
  };
 };
 typefor();
}
function typefor() {
 if (tryer === true) {
  if (nodmg === true) {
   typer[tries] = "nodmg";
   nodmg = false;
  } else {
   typer[tries] = dmg;
  };
  tries += 1;
  BOSSPKCO();
 } else {
  if (nodmg === true || flying1 === true || flying2 === true) {
   minus = 0;
   dmg = 2;
   nodmg = true
   if (flying1 === true) {
    flying1 = false;
    Fdp11.style.visibility = "visible";
    Fdp12.style.visibility = "visible";
   };
   if (flying2 === true) {
    flying2 = false;
    Fdp21.style.visibility = "visible";
    Fdp22.style.visibility = "visible";
   };
  } else {
   if (dmg === 4) {
    minus = Math.floor(minus / 100 * 256);
   } else {
    if (dmg === 3) {
     minus = Math.floor(minus / 10 * 16);
    } else {
     if (dmg === 1) {
      minus = Math.floor(minus / 100 * 63);
     } else {
      if (dmg === 0) {
       minus = Math.floor(minus / 1000 * 244);
      };
     };
    };
   };
  };
  setTimeout(rate,100);
 };
}