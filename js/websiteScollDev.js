$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: '0.2'
    }
  });
  var scene1 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 640
  })
        .setPin("#steps1")
        .addIndicators()
        .addTo(controller);
  var scene2 = new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    duration: 680
  })
        .setPin("#steps2")
        .addIndicators()
        .addTo(controller);
});
var waypoint3 = new Waypoint({
  element: document.getElementById('step1fade1'),
  handler: function(direction) {
    if(direction == "down"){
      document.getElementById('step1').style.height = "400px";
    }else if (direction == "up") {
      document.getElementById('step1').style.height = "500px";
    }
  }
})
var waypoint4 = new Waypoint({
  element: document.getElementById('step1fade2'),
  handler: function(direction) {
    if(direction == "down"){
      document.getElementById('step1').style.height = "300px";
    }else if (direction == "up") {
      document.getElementById('step1').style.height = "400px";
    }
  }
})
var waypoint5 = new Waypoint({
  element: document.getElementById('step1fade3'),
  handler: function(direction) {
    if(direction == "down"){
      document.getElementById('step1').style.height = "200px";
    }else if (direction == "up") {
      document.getElementById('step1').style.height = "300px";
    }
  }
})
var waypoint6 = new Waypoint({
  element: document.getElementById('step1fade4'),
  handler: function(direction) {
    if(direction == "down"){
      document.getElementById('step1').style.height = "100px";
    }else if (direction == "up") {
      document.getElementById('step1').style.height = "200px";
    }
  }
})
var waypoint7 = new Waypoint({
  element: document.getElementById('navbar2-trigger'),
  handler: function(direction) {
    if(direction == "down"){
      $("#navbar-shadow2").css("margin-top","0");
      $("#navbar-shadow2").addClass("slideInDown");
      $("#navbar-shadow2").removeClass("slideOutUp");
      $("#navbar2-link1").toggleClass("hovered");
    }else if (direction == "up") {
      $("#navbar-shadow2").removeClass("slideInDown");
      $("#navbar-shadow2").addClass("slideOutUp");
      $("#navbar2-link1").toggleClass("hovered");
    }
  }
})
var waypoint8 = new Waypoint({
  element: document.getElementById('navbar2-trigger2'),
  handler: function(direction) {
    if(direction == "down"){
      $("#navbar2-link2").toggleClass("hovered");
      $("#navbar2-link1").toggleClass("hovered");
    }else if (direction == "up") {
      $("#navbar2-link1").toggleClass("hovered");
      $("#navbar2-link2").toggleClass("hovered");
    }
  }
})
var waypoint9 = new Waypoint({
  element: document.getElementById('navbar2-trigger3'),
  handler: function(direction) {
    if(direction == "down"){
      $("#navbar2-link3").toggleClass("hovered");
      $("#navbar2-link2").toggleClass("hovered");
    }else if (direction == "up") {
      $("#navbar2-link2").toggleClass("hovered");
      $("#navbar2-link3").toggleClass("hovered");
    }
  }
})
var waypoint10 = new Waypoint({
  element: document.getElementById('navbar2-trigger4'),
  handler: function(direction) {
    if(direction == "down"){
      $("#navbar2-link4").toggleClass("hovered");
      $("#navbar2-link3").toggleClass("hovered");
    }else if (direction == "up") {
      $("#navbar2-link3").toggleClass("hovered");
      $("#navbar2-link4").toggleClass("hovered");
    }
  }
})
var waypoint = new Waypoint({
  element: document.getElementById('sec4border'),
  handler: function(direction) {
    if(direction == "down"){
      document.getElementById('steps1').style.height = "40px";
    }else if (direction == "up") {
      document.getElementById('steps1').style.height = "600px";
    }
  }
})
var waypoint2 = new Waypoint({
  element: document.getElementById('sec5border'),
  handler: function(direction) {
    if(direction == "down"){
      document.getElementById('steps2').style.height = "40px";
    }else if (direction == "up") {
      document.getElementById('steps2').style.height = "600px";
    }
  }
})
