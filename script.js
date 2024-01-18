var ans1El = document.querySelector("#answer1Text");
var ans2El = document.querySelector("#answer2Text");
var ans3El = document.querySelector("#answer3Text");
var ans4El = document.querySelector("#answer4Text");
var questionEl = document.querySelector("#question");
var submitEl = document.querySelector("#submit");
var timeEl = document.getElementById('time');
var startQuizEl = document.getElementById('start');
var submitQuizEl = document.getElementById('giveName');
var scoreListEl = document.getElementById('highscores');
var scoreLinkEl = document.getElementById('scoreLink');
var listItemScore = document.getElementById("listOScores");
var nameValue = document.getElementById("namePrompt");

var answered = 0;
var timeLeft = 100;
var scores = [
    {
    name: nameValue.value , score: timeLeft
    }
];
var questionArr = [
    {
        ask: "inside which HTML tag do we put the javascript?",
        guestAns1: "(a) scripting",
        guestAns2: "(b) script",
        guestAns3: "(c) link",
        guestAns4: "(d) main",
        answer: "(b) script"
    },
    {
        ask: "which is not a variable type in javascript?",
        guestAns1: "(a) var",
        guestAns2: "(b) const",
        guestAns3: "(c) let",
        guestAns4: "(d) char",
        answer: "(d) char"
    },
    {
        ask: "What kind of loop is done a limited amount of times?",
        guestAns1: "(a) for",
        guestAns2: "(b) while",
        guestAns3: "(c) as",
        guestAns4: "(d) each",
        answer: "(a) for"
    },
    {
        ask: "document.__________ is how you would get HTML elements by their ID.",
        guestAns1: "(a) querySelector",
        guestAns2: "(b) getElementbyTag",
        guestAns3: "(c) getElementbyClassName",
        guestAns4: "(d) getElementbyID",
        answer: "(d) getElementbyID"
    },  
    {
        ask: "Which logical operator would you use to say something is NOT",
        guestAns1: "(a) &",
        guestAns2: "(b) ||",
        guestAns3: "(c) !",
        guestAns4: "(d) =",
        answer: "(c) !"
    }
]
function hideSectionEl() {
    var startEl = document.getElementById("entry");
    var quizEl = document.getElementById("theQuiz");
    startEl.classList.add("makeHidden");
    quizEl.classList.remove("makeHidden");

}
// check which button is checked and set response to it when response is equal to array.answer they answered correctly
function getResponse(event){
    event.preventDefault();
    var btn1El = document.querySelector("#answer1");
    var btn2El = document.querySelector("#answer2");
    var btn3El = document.querySelector("#answer3");
    var btn4El = document.querySelector("#answer4");
    var response = ""; 
    let i = answered
    if(btn1El.checked){
        response = ans1El.textContent;
    }else if(btn2El.checked){
        response = ans2El.textContent;
    } else if(btn3El.checked){
        response = ans3El.textContent;
    }else if(btn4El.checked) {
        response = ans4El.textContent;}

    if ( questionArr[i].answer === response){
        answered++;
        changeQuestion();
    } else {timeLeft= timeLeft -10;
}
}
//changes the questions and answers to go down the options in the array
function changeQuestion(){
if (answered < questionArr.length ) {
    
    let i = answered;
    questionEl.textContent = questionArr[i].ask;
    ans1El.textContent = questionArr[i].guestAns1;
    ans1El.value = questionArr[i].guestAns1;
    ans2El.textContent = questionArr[i].guestAns2;
    ans2El.value = questionArr[i].guestAns2;
    ans3El.textContent = questionArr[i].guestAns3;
    ans3El.value = questionArr[i].guestAns3;
    ans4El.textContent = questionArr[i].guestAns4;
    ans4El.value = questionArr[i].guestAns4;
}
}
function countdown() {
    var timerInterval = setInterval(function() {
            timeLeft--;
            timeEl.textContent = "Time: " + timeLeft;
        if(timeLeft <= 0 || answered === questionArr.length){
            timeLeft === timeLeft;
            document.getElementById("theQuiz").classList.add("makeHidden");
            document.getElementById("scorePrompt").classList.remove("makeHidden");
            clearInterval(timerInterval);
        }
    }, 1000);
}
//makes the scores div hide and show upon clicking highscores
function showScores(){
    if(scoreListEl.classList.contains("makeHidden")){
        scoreListEl.classList.remove("makeHidden");
    } else scoreListEl.classList.add("makeHidden");
}
//store scores as JSON into local storage
function storeScore(){
    localStorage.setItem("scores", JSON.stringify(scores));
}
//submitting name and score 
function submitScore(event) {
    event.preventDefault();
    document.getElementById("scorePrompt").classList.add("makeHidden");
    scoreListEl.classList.remove("makeHidden");
    console.log(scores);
    scores.push({name:nameValue.value , score: timeLeft});
    storeScore();
    init();
}
function renderScores(){
    listItemScore.innerHTML = "";
    for (var x = 1; x < scores.length; x++){
        var li = document.createElement("li");
        li.textContent = scores[x].name +" "+ scores[x].score;
        li.setAttribute("data-index", x);
        listItemScore.appendChild(li);
    }
}
function init(){
   let storedScores = JSON.parse(localStorage.getItem("scores"));
    if(storedScores !== null){
        scores = storedScores;
        renderScores();
    }
}
changeQuestion();
init();
 startQuizEl.addEventListener('click', countdown);
 startQuizEl.addEventListener('click', hideSectionEl);
 submitEl.addEventListener("click", getResponse);
 submitQuizEl.addEventListener('click', submitScore);
 scoreLinkEl.addEventListener("click", showScores);

