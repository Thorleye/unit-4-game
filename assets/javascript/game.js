//basic parameters
var wins = 0
var losses = 0
var currentScore = 0

//need too assign variable numbers to the appropriate div
//on.ready so the divs load when the game loads

    $(document).ready(function(){
$("#goal").html(goal)
$("#wins").html("<p> Wins:" + wins + "<br> Losses:" + losses);  //wins loss div
$("#points").html("<p>Current Score: " + currentScore);  //score counter div
    })

//function to set points per crystal
var crystal = crystalPoints 
function crystalPoints(){
    return [Math.floor(Math.random()*12)]
} 
//function to set target points
var goal = targetScore 
function targetScore(){
   return [Math.floor(Math.random()* 130)]
} 

//need the function to assign points from crystal to score
//$(document).ready(function(){
  //  $(".crystal").on("click",function(crystalPoints)
    //})
    


