let minutes = 30;
let seconds = 00;

/* leaving this in here because this feels like a much more elegant way to do a quiz, but ultimately I couldn't quite get it right. 
So instead I'm doing a function for each question, which is lame but at least I know it will work
let allQuestions = {
  Q0 : [{question: 'Please select an answer 1'}, {answers: ['a','b','c','d']}],
  Q1 : [{question: 'Please select an answer 2'}, {answers: ['a2','b2','c2','d2']}]
    }
for (var property in allQuestions) {
  currentQuestion = allQuestions[property];
  currentQuestionAnswersA = currentQuestion[1].answers[0]
  currentQuestionAnswersB = currentQuestion[1].answers[1]
  currentQuestionAnswersC = currentQuestion[1].answers[2]
  currentQuestionAnswersD = currentQuestion[1].answers[3]
  console.log(currentQuestion[0].question)
  console.log(currentQuestionAnswersA)
  //Setup the question
  document.getElementById("Question").textContent = currentQuestion[0].question;
  //Setup Answer 1
  document.getElementById("A1-Label").textContent = currentQuestionAnswersA;
  document.getElementById("A1").value = currentQuestionAnswersA;
  //Setup Answer 2
  document.getElementById("A2-Label").textContent = currentQuestionAnswersB;
  document.getElementById("A2").value = currentQuestionAnswersB;
  //Setup Answer 1
  document.getElementById("A3-Label").textContent = currentQuestionAnswersC;
  document.getElementById("A3").value = currentQuestionAnswersC;
    //Setup Answer 2
  document.getElementById("A4-Label").textContent = currentQuestionAnswersD;
  document.getElementById("A4").value = currentQuestionAnswersD;
}
*/
qNum = 0;
answerKey = ['null','A','B','C','D']
currentScore = 0;
function score() {
  qNum += 1; 
  if (document.getElementById("A1").checked ){
    window.localStorage.setItem(qNum, "A");
  }
  if (document.getElementById("A2").checked ){
    window.localStorage.setItem(qNum, "B");
  }
  if (document.getElementById("A3").checked ){
    window.localStorage.setItem(qNum, "C");
  }
  if (document.getElementById("A4").checked ){
    window.localStorage.setItem(qNum, "D");
  }
  let scoreCheck = window.localStorage.getItem(qNum)
  let fakeAns = 'A';
  if(scoreCheck == answerKey[qNum]) {
    currentScore += 1;
    document.getElementById("score").textContent = "Current Score: " + currentScore;
  }
}
arrayOfQuestions = [

function Q1() {
  
  document.getElementById("Question").textContent = "In Javascript, fixed values are called: ";
  //A1
  document.getElementById("A1-Label").textContent = "literals";
  document.getElementById("A1").value = 'A';

  //A2
  document.getElementById("A2-Label").textContent = "variables";
  document.getElementById("A2").value = 'B';
  //A3
  document.getElementById("A3-Label").textContent = "pointers";
  document.getElementById("A3").value = 'C';
  
  //A4
  document.getElementById("A4-Label").textContent = "objects";
  document.getElementById("A4").value = 'D';
  var x = document.createElement("INPUT");
  x.setAttribute("type", "button");
  x.setAttribute("id", "Submit");
  x.setAttribute("class","btn btn-primary")
  x.setAttribute("onclick","arrayOfQuestions[1]()")
  x.setAttribute("value", "Submit")
  document.getElementById("buttons").appendChild(x);
},

function Q2() {
  score()
  document.getElementById("Question").textContent = "JavaScript _______ are containers for storing data values";
  //A1
  document.getElementById("A1-Label").textContent = "dates";
  document.getElementById("A1").value = 'A';

  //A2
  document.getElementById("A2-Label").textContent = "variables";
  document.getElementById("A2").value = 'B';
  //A3
  document.getElementById("A3-Label").textContent = "operators";
  document.getElementById("A3").value = 'C';
  
  //A4
  document.getElementById("A4-Label").textContent = "loops";
  document.getElementById("A4").value = 'D';
  
  
  x = document.getElementById("Submit");
  x.setAttribute("onclick","arrayOfQuestions[2]()");
},
function Q3() {
  score()
  document.getElementById("Question").textContent = "Select one item that is required for a javascript function";
  //A1
  document.getElementById("A1-Label").textContent = "variable";
  document.getElementById("A1").value = 'A';

  //A2
  document.getElementById("A2-Label").textContent = "literal";
  document.getElementById("A2").value = 'B';
  //A3
  document.getElementById("A3-Label").textContent = "function keyword";
  document.getElementById("A3").value = 'C';
  
  //A4
  document.getElementById("A4-Label").textContent = "square brackets";
  document.getElementById("A4").value = 'D';
  
  
  x = document.getElementById("Submit");
  x.setAttribute("onclick","arrayOfQuestions[3]()");
  
  //document.body.appendChild(x);
},

function Q4() {
  score()
  document.getElementById("Question").textContent = "What are the name:value pairs in javascript objects?";
  //A1
  document.getElementById("A1-Label").textContent = "literals";
  document.getElementById("A1").value = 'A';

  //A2
  document.getElementById("A2-Label").textContent = "methaphoricals";
  document.getElementById("A2").value = 'B';
  //A3
  document.getElementById("A3-Label").textContent = "variables";
  document.getElementById("A3").value = 'C';
  
  //A4
  document.getElementById("A4-Label").textContent = "properties";
  document.getElementById("A4").value = 'D';
  
  
  x = document.getElementById("Submit");
  x.setAttribute("onclick","endGame()");
  //x.setAttribute("data-toggle","modal");
  //x.setAttribute("data-target","#myModal");

},

]

function endGame()
  {
    score();
    //modal.classList.toggle("show-modal");
    x = document.getElementById("Submit")
    x.setAttribute("data-toggle","modal");
    x.setAttribute("data-target","#myModal");
  };

function startTest() {
  setInterval("change ()",1000);
  arrayOfQuestions[0]()
}

function change () {
    //seconds -= 1;
    document.getElementById("Timer").textContent= "Time Remaining: " + minutes + ":" + seconds;
    if (seconds == 0) {
        minutes -= 1;
        seconds = 60;
    }
    seconds -= 1;
    document.getElementById("Timer").textContent= "Time Remaining: " + minutes + ":" + seconds;
}


