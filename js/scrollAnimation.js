$("#largeLink1, #navbar1-link1, #navbar2-link1").on("click touchstart" , function (event) {
  document.getElementById("myNav").style.height = "0%";
  $(window).scrollTo($("#navbar2-trigger"),500);
});
$("#largeLink2, #navbar1-link2, #navbar2-link2").on("click touchstart" , function (event) {
  document.getElementById("myNav").style.height = "0%";
  $(window).scrollTo($("#navbar2-trigger2"),500);
});
$("#button").on("click touchstart" , function (event) {
  $(window).scrollTo($("#navbar2-trigger2"),500);
});
$("#largeLink3, #navbar1-link3, #navbar2-link3").on("click touchstart" , function (event) {
  document.getElementById("myNav").style.height = "0%";
  $(window).scrollTo($("#navbar2-trigger3"),500);
});
$("#largeLink4, #navbar1-link4, #navbar2-link4").on("click touchstart" , function (event) {
  document.getElementById("myNav").style.height = "0%";
  $(window).scrollTo($("#navbar2-trigger4"),500);
});
