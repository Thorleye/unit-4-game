
$(document).ready(function(){
    //basic parameters
    var wins = 0
    var losses = 0
   
    //function to set 4 random numbers
    function crystalValues(){
        one =Math.floor(Math.random()*11+1)
        two = Math.floor(Math.random()*11+1)
        three = Math.floor(Math.random()*11+1)
        four = Math.floor(Math.random()*11+1)
        console.log(one, two, three, four)}

    //function to set target Score
    function targetScore(){
        return [Math.floor(Math.random()* 101+19)]
        } 
        var goal = targetScore()

    //Game conditions//
    newGame()

    //function to add points when a certain crystal is clicked
    $("#crystalOne").on("click", function(){             
        currentScore = currentScore + one
        })
    $("#crystalTwo").on("click", function(){
        currentScore = currentScore + two
        })
    $("#crystalThree").on("click", function(){
        currentScore = currentScore + three
        })
    $("#crystalFour").on("click", function(){
        currentScore = currentScore + four
        })
// function to run conditions when any crystal is clicked
    $(".crystal").on("click", function(){
        scoreUpdate()
    })

    //win conditions
        function scoreUpdate(){
            if (currentScore == goal){
                wins++
                newGame()
            }

            if (currentScore > goal){
                losses++
                newGame()
            }   

        else {$("#points").html("<p>Current Score: " + currentScore);}          
        }

    //Here are the game conditions
        function newGame(){
            goal = targetScore();
            crystalValues();
            $("#goal").html("<p> Target Score is: " + goal + "</p>")
            $("#wins").html("<p> Wins: " + wins + "<br> Losses: " + losses);  //wins loss div
            currentScore = 0
            $("#points").html("<p>Current Score: " + currentScore);  //score counter div
        }
})