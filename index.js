var readlineSync = require('readline-sync');

var score = 0;

var topScores = [
  {
    name:'Abhishek',
    score:50
  },
{
  name:'Pratyush',
  score: 20
}
];

var questionList = [
  {
  question:'Where do I live ?',
  answer: 'Purulia'
},
{
  question:'Where do I work from?',
  answer: 'Work from home'
},
{
  question:'What is my favourite food ?',
  answer: 'Samosa'
},
{
  question:'What is my favourite drink ?',
  answer: 'Lassi'
},
{
  question:'What is my hobby?',
  answer: 'Gardening'
}
];

function welcome(){
  var userName = readlineSync.question('What is your name ?');
  console.log('Welcome '+userName+' to Do you know Abhishek ?');
}

function playGame(ques,ans){
  var ansOfUser = readlineSync.question(ques);
  if(ansOfUser.toUpperCase() === ans.toUpperCase()){
    console.log('right');
    score+=10;
  }
  else{
    console.log('wrong');
  }
  console.log('your current score: '+score);
  console.log('--------------------');
}

function gameStart(){
  for(let i=0 ; i< questionList.length ; i++){
    var currentQuestion = questionList[i];
    playGame(currentQuestion.question,currentQuestion.answer);
  }
}

function showScores(){
  console.log('Cheers, your total score: '+score);
  console.log("Check out the top scores, if you should be there ping me and I'll update it");
  topScores.map(score=>console.log(score.name + ' : ' + score.score))
}

welcome();
gameStart();
showScores();










