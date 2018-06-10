
$(document).ready(function(){
    //basic parameters
    var wins = 0
    var losses = 0
    var currentScore = 0
   
    //function to set 4 random numbers
    function crystalValues(){
        one =(Math.floor(Math.random()*11+1))
        two = Math.floor(Math.random()*11+1)
        three = Math.floor(Math.random()*11+1)
        four = Math.floor(Math.random()*11+1)
        console.log(one, two, three, four)}

    //function to set target points
    function targetScore(){
        return [Math.floor(Math.random()* 101+19)]
        } 
        var goal = targetScore()

    //Game conditions//
    reset()
    $("#goal").html("<p> Target Score is: " + goal + "</p>")
    $("#wins").html("<p> Wins:" + wins + "<br> Losses:" + losses);  //wins loss div
    $("#points").html("<p>Current Score: " + currentScore);  //score counter div
    
    //function to set points per crystal
    $("#crystalOne").on("click", function(){             //adds points to current points
        currentScore = currentScore + one
        $("#points").html(currentScore);
    })
    $("#crystalTwo").on("click", function(){
        currentScore = currentScore + two
        $("#points").html(currentScore);
    })
    $("#crystalThree").on("click", function(){
        currentScore = currentScore + three
        $("#points").html(currentScore);
        })
    $("#crystalFour").on("click", function(){
        currentScore = currentScore + four
        $("#points").html(currentScore);
        })
    
    //win conditions

    if (currentScore === goal){
        wins++
        reset()
    }

    if (currentScore > goal){
        losses++
        reset()
    }
    //a reset game function
    
    

    function reset(){
        goal = targetScore();
        crystalValues();
        currentScore = 0
    }
})

