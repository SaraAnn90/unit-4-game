
let randomNumber; 

function getRandomArbitrary (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomArbitrary(19, 120) )

let userWins = 0;
let userlosses = 0;
let totalScore = 0;

let buttonOneValue = getRandomArbitrary(1,12);
let buttonTwoValue = getRandomArbitrary(1, 12);
let buttonThreeValue = getRandomArbitrary(1, 12);
let buttonFourValue = getRandomArbitrary(1, 12);

randomNumber = getRandomArbitrary(19,120);


$(".computer-number h2").text(randomNumber);

function gameRules(buttonValue) {
    totalScore = totalScore + buttonValue;
    $('.score-number h2').text(totalScore)
    if (totalScore === randomNumber){
        userWins = userWins + 1;
        $('.wins').text(userWins);
        randomNumber = getRandomArbitrary(19,120);
        $(".computer-number h2").text(randomNumber);
        totalScore = 0;
        $('.score-number h2').text(totalScore);
    } else if(totalScore > randomNumber) {
        userlosses = userlosses +1;
        $('.losses').text(userlosses);
        randomNumber = getRandomArbitrary(19,120);
        $(".computer-number h2").text(randomNumber);
        totalScore = 0;
        $('.score-number h2').text(totalScore);
    }
}

$(".button-0").click(function() {
    gameRules(buttonOneValue);
});

$(".button-1").click(function() {
    gameRules(buttonTwoValue);
});

$(".button-2").click(function() {
    gameRules(buttonThreeValue);
});

$(".button-3").click(function() {
    gameRules(buttonFourValue);
});



    