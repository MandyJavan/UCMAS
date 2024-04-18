// let timerText = document.querySelector(".timerText");
// let question = document.querySelector(".question");
// let minuteDisplayer = document.querySelector(".minute");
// let secondDisplayer = document.querySelector(".second");
// let startBtn = document.querySelector("#start");
// let resetBtn = document.querySelector(".reset");
// let userInput = document.querySelector(".userInput");
// let nextBtn = document.querySelector(".next");
// let seconds = 60;
// let minutes = 8;
// let myinterval;
// let isStarted = false;
// let oneDigFiveR;
// let indexOp;

// function nextQuestion() {
//   oneDigFiveR = "";
//   for (let i = 0; i < 5; i++) {
//     oneDigFiveR += Math.floor(Math.random() * 9) + 1;
//     // console.log(`${i+1}: ${oneDigFiveR}`);
//   }

//   for (let i = 0; i < 2; i++) {
//     indexOp = Math.floor(Math.random()* 4);
//     oneDigFiveR[indexOp].push("-")
//   }

//   question.textContent = oneDigFiveR
//     oneDigFiveR[0] +
//     "-" +
//     oneDigFiveR[1] +
//     "+" +
//     oneDigFiveR[2] +
//     "+" +
//     oneDigFiveR[3] +
//     "+" +
//     oneDigFiveR[4];
//   userInput.value = "";
// }

// startBtn.addEventListener("click", countDown);
//   alert("started!")
// function countDown() {
//   if (!isStarted) {
//     isStarted = true;
//     nextQuestion();
//     minutes--;
//     myinterval = setInterval(() => {
//       seconds--;
//       secondDisplayer.textContent = seconds > 10 ? seconds : "0" + seconds;
//       minuteDisplayer.textContent = "0" + minutes;
//       if (secondDisplayer.textContent == "00") {
//         seconds = 10;
//         minutes--;
//       }
//       if (
//         secondDisplayer.textContent == "00" &&
//         minuteDisplayer.textContent == "00"
//       ) {
//         console.log("active");
//         clearInterval(myinterval);
//         seconds = 60;
//         minutes = 8;
//         secondDisplayer.textContent = "00";
//         minuteDisplayer.textContent = "00";
//         timerText.style.color = "red";
//       }
//     }, 1000);
//   }
// }

// resetBtn.addEventListener("click", () => {
//   isStarted = false;
//   clearInterval(myinterval);
//   seconds = 60;
//   minutes = 8;
//   secondDisplayer.textContent = "00";
//   minuteDisplayer.textContent = "08";
//   timerText.style.color = "black";
// });


let timerText = document.querySelector(".timerText");
let question = document.querySelector("#question");
let minuteDisplayer = document.querySelector("#minute");
let secondDisplayer = document.querySelector("#second");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector(".reset");
let userInput = document.querySelector("#userInput");
let nextQ = document.querySelector("#nextQ");
let seconds = 11;
let minutes = 2;
let myinterval;
let isStarted = false;
let oneDigFiveR = [];
let indexOp;
let counter = document.querySelector("#counter");
let point = 0;

startBtn.addEventListener("click", ()=> {
  isStarted = !isStarted
  if (isStarted) {
    nextQuestion()
    isCorrect(oneDigFiveR)
    myinterval = setInterval(()=>{
      secondDisplayer.textContent = seconds-- > 10 ? seconds : "0" + seconds; 
      if (seconds == 10) {
        minuteDisplayer.textContent = minutes-- < 10 && "0" + minutes;
      } else if (seconds == 0) {
        seconds = 11
      } 
      if (secondDisplayer.textContent === "00" && minuteDisplayer.textContent == "00"){
        clearInterval(myinterval);
        seconds = 60;
        minutes = 8;
        secondDisplayer.textContent = "00";
        minuteDisplayer.textContent = "00";
        timerText.style.color = "red";
        question.textContent = "Times up!"
      }
    }, 1000)
  } else {
    isStarted = !isStarted;
    
  }
})

resetBtn.addEventListener("click", ()=> {
  isStarted = !isStarted
  question.textContent = "Ready!"
  userInput.value = ""
  clearInterval(myinterval);
  seconds = 11;
  minutes = 2;
  secondDisplayer.textContent = "00";
  minuteDisplayer.textContent = "08";
  timerText.style.color = "initial";
})

function randomProblem() {
  for (let i = 0; i < 5; i++) {
    oneDigFiveR[i] = Math.floor(Math.random( )*9)+1;
  }
}

function nextQuestion() {
  randomProblem()
  if (isStarted) {
    question.textContent = oneDigFiveR
  } else {
      question.textContent = "Ready!"
      alert("You haven't started yet!")
  }
}

function isCorrect(problem) {
  let answer = problem.reduce((a, b)=> {
    return a + b
  })

  if (userInput.value == answer) {
    counter.textContent = point++
    console.log("Correct")
  } else {
    console.log("No!")
  }
}