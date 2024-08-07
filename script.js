function pressRed() {
    var redButton = document.getElementById("Red");
    var RedCurrwidth = redButton.clientWidth; // 400
    redButton.style.width = (RedCurrwidth + 60) + "px";

    var blueButton = document.getElementById("Blue");
    var blueCurrwidth = blueButton.clientWidth; // 400
    blueButton.style.width = (blueCurrwidth - 30) + "px";
    if (redCurrwidth > 1400) {
        alert("Red Wins")
    }
}
function pressBlue() {
    var blueButton = document.getElementById("Blue");
    var blueCurrwidth = blueButton.clientWidth; // 400
    blueButton.style.width = (blueCurrwidth + 60) + "px";

    var redButton = document.getElementById("Red");
    var redCurrwidth = redButton.clientWidth; // 400
    redButton.style.width = (redCurrwidth - 30) + "px";
    if (blueCurrwidth > 1400) {
        alert("Blue Wins")
    }
}

function RedFunction() {
    let x = document.getElementById("redCurrwidth")
    x = 1
}
