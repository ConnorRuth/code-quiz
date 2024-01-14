var ans1El = document.querySelector("#answer1Text");
var btn1El = document.querySelector("#answer1");
var ans2El = document.querySelector("#answer2Text");
var btn2El = document.querySelector("#answer2");
var ans3El = document.querySelector("#answer3Text");
var btn3El = document.querySelector("#answer3");
var ans4El = document.querySelector("#answer4Text");
var btn4El = document.querySelector("#answer4");
var questionEl = document.querySelector("#question");
var submitEl = document.querySelector("#submit");
var timeEl = document.getElementById('time');
var startQuizEl =document.getElementById('start');
var answered = 0;
var timeLeft = 100;
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
        ask: "which is not a variable type in javascript",
        guestAns1: "(a) var",
        guestAns2: "(b) const",
        guestAns3: "(c) let",
        guestAns4: "(d) char",
        answer: "(d) char"
    }
]


// check which button is checked and set response to it when response is equal to array.answer they answered correctly
function getResponse(event){
    event.preventDefault();
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
        console.log("YOU ARE RIGHT"); 
        answered++;
        changeQuestion();
    } else {console.log("YOU ARE WRONG");
            timeLeft= timeLeft -10;
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
        if(timeLeft <= 0 || answered > questionArr.length){
            var score = timeLeft ;
            if(score < 0){
                score = 0;
            }
            clearInterval(timerInterval);
        }
        
    }, 500);
}
 startQuizEl.addEventListener('click', countdown);
 submitEl.addEventListener("click", getResponse);
console.log(ans1El.textContent);
console.log(typeof btn1El.checked);

//if (element.matches('div')) {
  //  var state = element.getAttribute("data-state");

changeQuestion();
