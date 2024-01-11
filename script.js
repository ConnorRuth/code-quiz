var ans1El = document.querySelector("#answer1Text");
var ans2El = document.querySelector("#answer2Text");
var ans3El = document.querySelector("#answer3Text");
var ans4El = document.querySelector("#answer4Text");
var questionEl = document.querySelector("#question");
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

if (answered < questionArr.length ) {
    let i = answered;
    questionEl.textContent = questionArr[i].ask;
    ans1El.textContent = questionArr[i].guestAns1;
    ans2El.textContent = questionArr[i].guestAns2;
    ans3El.textContent = questionArr[i].guestAns3;
    ans4El.textContent = questionArr[i].guestAns4;
}



console.log(ans1El.textContent);
