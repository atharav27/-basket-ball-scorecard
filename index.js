let homeScoreButtonOne = document.getElementById("home-score-btn-1")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0
let homeScoreButtonTwo = document.getElementById(id="home-score-btn-2")
let homeScoreButtonThree = document.getElementById("home-score-btn-3")
function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreThree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

// homeScore 2
let homeScoreButtonFour = document.getElementById("home-score-btn-4")
let homeScoreButtonFive = document.getElementById("home-score-btn-5")
let homeScoreButtonSix = document.getElementById("home-score-btn-6")
let homeStoreElOne = document.getElementById("home-score-two")
let homescoretwo  = 0

function increaseHomeScoreFour(){
    homescoretwo += 1
    homeStoreElOne.textContent = homescoretwo
}
function increaseHomeScoreFive(){
    homescoretwo += 2
    homeStoreElOne.textContent = homescoretwo
}
function increaseHomeScoreSix(){
    homescoretwo += 3
    homeStoreElOne.textContent = homescoretwo
}
