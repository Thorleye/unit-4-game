
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
    newGame()

    //function to set points per crystal
    $("#crystalOne").on("click", function(){             //adds points to current points
        currentScore = currentScore + one
        scoreUpdate()
    })
    $("#crystalTwo").on("click", function(){
        currentScore = currentScore + two
        scoreUpdate()
    })
    $("#crystalThree").on("click", function(){
        currentScore = currentScore + three
       scoreUpdate()
        })
    $("#crystalFour").on("click", function(){
        currentScore = currentScore + four
        scoreUpdate()
        })
    
    //win conditions


    //a reset game function
    
    function scoreUpdate(){
        if (currentScore == goal){
            wins++
            newGame()
        }
        
       else if (currentScore > goal){
            losses++
            newGame()
        }   

        else {$("#points").html(currentScore);}          
    }

    //Here are the game conditions
    function newGame(){
        goal = targetScore();
        crystalValues();
        $("#goal").html("<p> Target Score is: " + goal + "</p>")
        $("#wins").html("<p> Wins:" + wins + "<br> Losses:" + losses);  //wins loss div
        currentScore = 0
        $("#points").html("<p>Current Score: " + currentScore);  //score counter div
    }
})

