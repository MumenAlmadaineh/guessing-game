'use strict';

let userName = prompt('Hello and welcome to my website the first list takes a game to try guessing who I am by five questions and please answer the questions by typing yes or no for now please enter your name bellow');

let doIknowPrograming = prompt('Hello again ' + userName + ' this is a beautiful name this is the first question Do you think I know programing or not?').toLowerCase();

switch(doIknowPrograming) {
case 'yes':
  alert('That is right of course, I am known programming because I am who is built this web page');
  //console.log('right answer');
  break;
case 'no':
  alert('No, your answer is wrong because if I did not know to programming then I cannot build this web page');

  break;
default:
  alert('We have a problem are you sure you answer the question by typing yes or no');
}

let amIAlien = prompt('Thanks ' + userName + '  Now question number two Do you think I am alien?').toLowerCase();

switch(amIAlien) {
case 'yes':
  alert('No, your answer is wrong actually science has not yet proven the existence of aliens');
  //console.log('right answer');
  break;
case 'no':
  alert('Certainly, I am human, science has not yet proven the existence of aliens');

  break;
default:
  alert('We have a problem are you sure you answer the question by typing yes or no');
}

let doIlikeFood = prompt('Good for now ' + userName + ' please answer question number three Do you think I like food?').toLowerCase();

switch(doIlikeFood) {
case 'yes':
  alert('That is right of course, everybody likes food');
  //console.log('right answer');
  break;
case 'no':
  alert('Unfortunately, your answer is wrong all people like food');

  break;
default:
  alert('We have a problem are you sure you answer the question by typing yes or no');
}

let doIknowCars = prompt(' now ' + userName + ' question number four Do I know cars?').toLowerCase();

switch(doIknowCars) {
case 'yes':
  alert('Yes your answer is right of course all people know cars');
  //console.log('right answer');
  break;
case 'no':
  alert('Unfortunately, your answer is wrong really Do you think is there a person do not know cars');

  break;
default:
  alert('We have a problem are you sure you answer the question by typing yes or no');
}

let doIknowEnglish = prompt('Yes, I know question number four was a stupid question ^-^ now ' + userName + ' please answer the last question Do I know English' ).toLowerCase();

switch(doIknowEnglish) {
case 'yes':
  alert('Yes your answer is right of course, I know English because I am who is typing these questions');
  //console.log('right answer');
  break;
case 'no':
  alert('Unfortunately, your answer is wrong because if I do not know English then how I can typing these questions');


  break;
default:
  alert('We have a problem are you sure you answer the question by typing yes or no');
}


alert('Congratulation now you are finished all questions thanks a lot for your time with us I hope you have a good time');
