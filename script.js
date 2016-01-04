/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var divTwo = document.getElementById("divtwo");
var firstDivTwo = divTwo;

//var tweenOne = new TweenLite(firstDivTwo, 1 , {width:"50%"});
//
//TweenLite.to(firstDivTwo, 1.5, {width:200});
//TweenLite.to(firstDivTwo, 3.5, {width:400});
var time1 = new TimelineLite();

time1.pause();
time1.to(firstDivTwo, 1, {width:"50%"});
time1.to(firstDivTwo, 1 , {height:"400px"});
time1.to(firstDivTwo, 1 , {opacity:0.5}, "+=0.75");
time1.to(firstDivTwo, 1, {backgroundColor:"#FF0000"},"-=0.5");
time1.add("myLabel", 3);
//time1.pause();
//
time1.resume();
time1.restart();