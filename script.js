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
var answered = 0;
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

function getResponse(event){
    event.preventDefault();
    var response = ""; 
    if(btn1El.checked === true){
        response = ans1El.textContent;
    }else if(btn2El.checked === true){
        response = ans2El.textContent;
    }
   
   console.log(response)
}



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

submitEl.addEventListener("click", getResponse);

console.log(ans1El.textContent);
