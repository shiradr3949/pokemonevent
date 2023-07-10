let Pnameon = null;
while (Pnameon === null || Pnameon === "") {
 Pnameon = prompt("あなたの名前は？");
}
localStorage.setItem("names",Pnameon);
alert("強力なボスが現れました。選択して倒しましょう！");