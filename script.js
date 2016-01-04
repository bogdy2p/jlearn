/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var currentWindow = window;
var windowWidth = currentWindow.innerWidth;
var windowHeight = currentWindow.innerHeight;


var divTwo = document.getElementById("divtwo");
var firstDivTwo = divTwo;

var bigCircle = document.getElementById("circleDiv");
var smallCircle = document.getElementById("smallCircle");

//var tweenOne = new TweenLite(firstDivTwo, 1 , {width:"50%"});
//
//TweenLite.to(firstDivTwo, 1.5, {width:200});
//TweenLite.to(firstDivTwo, 3.5, {width:400});
//var t1 = new TimelineLite();
//


var bigCircleDiameter = 150;

var bigCircleScreenCenter = windowWidth / 2 - bigCircleDiameter / 2;
console.log(bigCircleScreenCenter);





var c1 = new TimelineMax();


c1.to(bigCircle, 0.1, {x: bigCircleScreenCenter});



c1.pause();

c1.to(bigCircle, 2, {height: bigCircleDiameter, width: bigCircleDiameter});
c1.to(bigCircle, 0.4, {border: "5px solid yellow"});


c1.to(smallCircle, 0, {width: "10px", height: "10px"});
//c1.to(smallCircle, 0 , {position: )




c1.to(smallCircle, 5, {rotation: 720, transformOrigin: "left -75px"});

//c1.resume();