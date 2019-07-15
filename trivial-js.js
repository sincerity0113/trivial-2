var myQuestions = [
  {
      question: "Which of the following is used to create web page?",
      answers: {
          a: 'css',
          b: 'java',
          c: 'html',
          d: 'ajax'
    },
    correctAnswer: 'c'
  },
  {
    question: "What is the name of the when javascript was created?",
    answers: {
          a: 'java',
          b: 'treehouse',
          c: 'iivescript',
          d: 'window'
    },
    correctAnswer: 'c'
  },
  {
    question: "What is the A.P.I's stands for?",
    answers: {
        a: 'apple pineapple ingredient',
        b: 'application program interface',
        c: 'artificial powered intelligence',
        d: 'android personal intel'
    },
    correctAnswer: 'c'
  },
  {
    question: "The time factor when determining the efficiency of algorithm is measured by?",
    answers: {
        a: 'Counting microseconds',
        b: 'Counting the number of key operations',
        c: 'Counting the number of statements',
        d: 'Counting the kilobytes of algorithm'
    },
    correctAnswer: 'b'
  },  
  {
  question: "How many type faces inside property \"font-family\?",
  answers: {
      a: '1',
      b: 'maxium2',
      c: 'unlimited',
      d: '2'
    },
  correctAnswer: 'c'
  },  
  {
  question: "What is JavaScript designed for following purpose?",
  answers: {
      a: 'To Style HTML Pages',
      b: 'To Perform Server Side Scripting Opertion',
      c: 'To add interactivity to HTML Pages',
      d: 'none of above'
    },
  correctAnswer: 'b'
  },  
  {
  question: "Which JavaScript variable cannot be used as First character but can be use after first character?",
  answers: {
      a: 'Dollar Sigh',
      b: 'Asterisk',
      c: 'Underscore',
      d: 'Digit'
    },
  correctAnswer: 'd'
  },  
  {
  question: " Which of the following is not a reserved word in JavaScript?",
  answers: {
      a: 'Interface',
      b: 'Throws',
      c: 'Program',
      d: 'Short'
    },
  correctAnswer: 'c'
  },  

];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer){
      
      var output = [];
      var answers;

      
      for(var i=0; i<questions.length; i++){
          
          
          answers = [];

          
          for(letter in questions[i].answers){

              
              answers.push(
                  '<label>'
                      + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                      + letter + ': '
                      + questions[i].answers[letter]
                  + '</label>'
              );
          }

          
          output.push(
              '<div class="question">' + questions[i].question + '</div>'
              + '<div class="answers">' + answers.join('') + '</div>'
          );
      }

      
      quizContainer.innerHTML = output.join('');
  }

      interval = setInterval(startTimer, 1000);  


  function showResults(questions, quizContainer, resultsContainer){
      
      
      var answerContainers = quizContainer.querySelectorAll('.answers');      
      var userAnswer = '';
      var numCorrect = 0;      
      
      for(var i=0; i<questions.length; i++){          
          userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
          
          
          if(userAnswer===questions[i].correctAnswer){             
              numCorrect++;               
              answerContainers[i].style.color = 'lightgreen';
          }

          else{             
              answerContainers[i].style.color = 'red';
          }
      }

      clearInterval(interval);
    
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  showQuestions(questions, quizContainer);  
 
  submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
  }
}

document.getElementById('timer').innerHTML =
  03 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  
  
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; 
  if (sec < 0) {sec = "59"};
  if (sec <= 0 && min == 0) {clearInterval};
  return sec;
}








