// GLOBAL VARIABLES
// =================================================================

// Crystal Variables
var crystal = {
  angelAuraQuartz:
  {
    name: "angelAuraQuartz",
    value: 0
  },
  blueQuartz:
  {
    name: "blueQuartz",
    value: 0
  },
  roseQuartz:
  {
    name: "roseQuartz",
    value: 0
  },
  whiteQuartz:
  {
    name: "whiteQuartz",
    value: 0
  }
};

// Scores (Current and Target)
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// =================================================================

// Helper Function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts the Game (and restarts the game)
var startGame = function() {

  // Reset the Current Score
  currentScore = 0;

  // Set a new Target Score (between 19 and 120)
  targetScore = getRandom(19, 120);

  // Set different values for each of the crystals (between 1 and 12)
  crystal.angelAuraQuartz.value = getRandom(1, 12);
  crystal.blueQuartz.value = getRandom(1, 12);
  crystal.roseQuartz.value = getRandom(1, 12);
  crystal.whiteQuartz.value = getRandom(1, 12);

  // Change the HTML to reflect all of these changes
  $("#your-score").text(currentScore);
  $("#target-score").text(targetScore);


  // Testing Console
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Angel Aura Quartz: " + crystal.angelAuraQuartz.value + " | Blue Quartz: " + crystal.blueQuartz.value + " | Rose Quartz: " + crystal.roseQuartz.value +
    " | White Quartz: " + crystal.whiteQuartz.value);
  console.log("-----------------------------------");
};

// Check if User Won or Lost and Reset the Game
var checkWin = function() {

  // Check if currentScore is larger than targetScore
  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");

    // Add to Loss Counter
    lossCount++;

    // Change Loss Count HTML
    $("#loss-count").text(lossCount);

    // Restart the game
    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");

    // Add to the Win Counter
    winCount++;

    // Change Win Count HTML
    $("#win-count").text(winCount);

    // Restart the game
    startGame();
  }

};

// Respond to clicks on the crystals
var addValues = function(clickedCrystal) {

  // Change currentScore
  currentScore += clickedCrystal.value;

  // Change the HTML to reflect changes in currentScore
  $("#your-score").text(currentScore);

  // Call the checkWin Function
  checkWin();

  // Testing Console
  console.log("Your Score: " + currentScore);
};

// MAIN PROCESS
// =================================================================

// Starts the Game the First Time.
startGame();

$("#angelAuraQuartz").click(function() {
  addValues(crystal.angelAuraQuartz);
});

$("#blueQuartz").click(function() {
  addValues(crystal.blueQuartz);
});

$("#roseQuartz").click(function() {
  addValues(crystal.roseQuartz);
});

$("#whiteQuartz").click(function() {
  addValues(crystal.whiteQuartz);
});
