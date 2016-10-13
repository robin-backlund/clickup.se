$("#largeLink1, #navbar1-link1, #navbar2-link1").on("click" , function (event) {
  document.getElementById("myNav").style.height = "0%";
  $(window).scrollTo($("#navbar2-trigger"),800);
  return false;
});
$("#largeLink2, #navbar1-link2, #navbar2-link2").on("click" , function (event) {
  document.getElementById("myNav").style.height = "0%";
  $(window).scrollTo($("#navbar2-trigger2"),800);
  return false;
});
$("#button").on("click" , function (event) {
  $(window).scrollTo($("#navbar2-trigger"),800);
  return false;
});
$("#largeLink3, #navbar1-link3, #navbar2-link3").on("click" , function (event) {
  document.getElementById("myNav").style.height = "0%";
  $(window).scrollTo($("#navbar2-trigger3"),800);
  return false;
});
$("#largeLink4, #navbar1-link4, #navbar2-link4").on("click" , function (event) {
  document.getElementById("myNav").style.height = "0%";
  $(window).scrollTo($("#navbar2-trigger4"),800);
  return false;
});
