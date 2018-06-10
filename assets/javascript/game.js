//basic parameters
var wins = 0
var losses = 0
//function to set points per crystal
var crystal = crystalPoints 
function(crystalPoints){
    return [Math.floor(Math.random()*12)]
} 
//function to set target points
var goal = targetScore 
function(targetScore){
   return [Math.floor(Math.random()* 130)]
} 

//need the function to assign points from crystal to score
$(document).ready(function){

    function(crystalPoints){
    $(".crystal").on("click",function(){
      
    })
    }

}
//need too assign variable numbers to the appropriate div
$("#wins").html("<p> wins:" + wins + "<br> Losses:" + losses);