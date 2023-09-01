function skillclose() {
 skill1.style.visibility = "hidden";
 skill2.style.visibility = "hidden";
 skill3.style.visibility = "hidden";
 skill4.style.visibility = "hidden";
 MGdp.style.visibility = "hidden";
 MAXdp.style.visibility = "hidden";
}
function skillopen() {
 skill1.style.visibility = "visible";
 skill2.style.visibility = "visible";
 skill3.style.visibility = "visible";
 skill4.style.visibility = "visible";
 if (PM[ID].mega === null && MGed === false) {
  MGdp.style.visibility = "visible";
 };
 if (PM[ID].MAX === null && MAXed === false) {
  MAXdp.style.visibility = "visible";
 };
}