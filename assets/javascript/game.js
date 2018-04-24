$(document).ready(function () {

  var gemOne;
  var gemTwo;
  var gemThree;
  var gemFour;
  var randomComp;
  var userscore = 0;
  var wins = 0;
  var losses = 0;

  // make a random number to achieve

  // init game goal number

  function initalize() {
    randomComp = 19 + Math.floor(Math.random() * 102);
    // make four random numbers
    gemOne = 1 + Math.floor(Math.random() * 12);
    gemTwo = 1 + Math.floor(Math.random() * 12);
    gemThree = 1 + Math.floor(Math.random() * 12);
    gemFour = 1 + Math.floor(Math.random() * 12);
    userscore = 0;
    $("#randomNumber").html(randomComp);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#userscore").html(userscore);

  }

  function checkwin() {
    if (userscore > randomComp) {
      losses++;
      console.log("loss has been added: " + losses);
      initalize();
    }
    if (userscore == randomComp) {
      wins++;
      console.log("win has been added: " + wins);
      initalize();
    }

  }


  initalize();

  $("header").on("click", ".one", function () {
    console.log("one");
    userscore += gemOne;
    $("#userscore").html(userscore);
    checkwin();

  });

  $("header").on("click", ".two", function () {
    console.log("two");
    userscore += gemTwo;
    $("#userscore").html(userscore);
    checkwin();

  });

  $("header").on("click", ".three", function () {
    console.log("three");
    userscore += gemThree;
    $("#userscore").html(userscore);
    checkwin();

  });

  $("header").on("click", ".four", function () {
    console.log("four");
    userscore += gemFour;
    $("#userscore").html(userscore);
    checkwin();

  });

 




});