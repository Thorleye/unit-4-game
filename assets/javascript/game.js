
$(document).ready(function(){
    //basic parameters
    var wins = 0
    var losses = 0
    var randomNumberArray = []
    //function to set 4 random numbers
    function crystalValues(){
        for (i = 0; i < 4; i++){
        randomNumberArray.push(Math.floor(Math.random()*11+1));
            $("#crystalOne").attr("data-points", randomNumberArray[0]);
            $("#crystalTwo").attr("points", randomNumberArray[1]);
            $("#crystalThree").attr("points", randomNumberArray[2]);
            $("#crystalFour").attr("points", randomNumberArray[3]);
        }
    }
        

    //function to set target Score
    function targetScore(){
        return [Math.floor(Math.random()* 101+19)]
        } 
        var goal = targetScore()

    //Game conditions//
    newGame()

    //function to add points when a certain crystal is clicked
    $("#crystalOne").on("click", function(){             
        var points = $(this).attr("data-points")
        currentScore = currentScore + points
        })
    $("#crystalTwo").on("click", function(){
        currentScore = currentScore + randomNumberArray[1]
        })
    $("#crystalThree").on("click", function(){
        currentScore = currentScore + randomNumberArray[2]
        })
    $("#crystalFour").on("click", function(){
        currentScore = currentScore + randomNumberArray[3]
        })
// function to run conditions when any crystal is clicked
    $(".crystal").on("click", function(){
        scoreUpdate()
    })

    //function to add value of img
    //$(".crystal").on("click", function(){
    // function addPoints(){
    // var points = $(this).attr("data-points")
    //    currentScore = currentScore + points
    //}}
    // note this would replace the currentScore function but it is returning a string instead of a number

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