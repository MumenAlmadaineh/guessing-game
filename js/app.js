'use strict';

let userName = prompt('Hello and welcome to my website the first list takes a game to try guessing who I am by five questions and please answer the questions by typing yes or no for now please enter your name bellow');
while (!userName){
  userName = prompt('You cannot enter here without enter your name so please enter your name');
}

let doIknowPrograming = prompt('Hello again ' + userName + ' this is a beautiful name this is the first question Do you think I know programing or not?').toLowerCase();

switch(doIknowPrograming) {
case 'yes':
case 'y':
  alert('That is right of course, I am known programming because I am who is built this web page');
  //console.log('right answer');
  break;
case 'no':
case 'n':
  alert('No, your answer is wrong because if I did not know to programming then I cannot build this web page');

  break;
default:
  alert('We have a problem are you sure you answer the question by typing yes or no');
}

let amIAlien = prompt('Thanks ' + userName + '  Now question number two Do you think I am alien?').toLowerCase();

switch(amIAlien) {
case 'yes':
case 'y':
  alert('No, your answer is wrong actually science has not yet proven the existence of aliens');
  //console.log('right answer');
  break;
case 'no':
case 'n':
  alert('Certainly, I am human, science has not yet proven the existence of aliens');

  break;
default:
  alert('We have a problem are you sure you answer the question by typing yes or no');
}

let doIlikeFood = prompt('Good for now ' + userName + ' please answer question number three Do you think I like food?').toLowerCase();

switch(doIlikeFood) {
case 'yes':
case 'y':
  alert('That is right of course, everybody likes food');
  //console.log('right answer');
  break;
case 'no':
case 'n':
  alert('Unfortunately, your answer is wrong all people like food');

  break;
default:
  alert('We have a problem are you sure you answer the question by typing yes or no');
}

let doIknowCars = prompt('Now ' + userName + ' question number four Do I know cars?').toLowerCase();

switch(doIknowCars) {
case 'yes':
case 'y':
  alert('Yes your answer is right of course all people know cars');
  //console.log('right answer');
  break;
case 'no':
case 'n':
  alert('Unfortunately, your answer is wrong really Do you think is there a person do not know cars');

  break;
default:
  alert('We have a problem are you sure you answer the question by typing yes or no');
}

let doIknowEnglish = prompt('Yes, I know question number four was a stupid question ^-^ now ' + userName + ' please answer the question number five Do I know English' ).toLowerCase();

switch(doIknowEnglish) {
case 'yes':
case 'y':
  alert('Yes your answer is right of course, I know English because I am who is typing these questions');
  //console.log('right answer');
  break;
case 'no':
case 'n':
  alert('Unfortunately, your answer is wrong because if I do not know English then how I can typing these questions');


  break;
default:
  alert('We have a problem are you sure you answer the question by typing yes or no');
}

let guessNumber = Number (prompt(`Now ${userName} try to guess a number between 1 to 5 and remember you have just 4 attempts`));

for (let i = 0; i < 3; i++) {
  if (guessNumber === 3){
    alert('Oh, cool you are guessed the number');
    // console.log(guessNumber);
    break;
  }
  else if (guessNumber === 1){
    alert('too low');
    // console.log(guessNumber);
    guessNumber = Number (prompt(`Now ${userName} try to guess a number between 1 to 5 and remember you have just 4 attempts`));
  }else if (guessNumber === 2){
    alert('too low');
    // console.log(guessNumber);
    guessNumber = Number (prompt(`Now ${userName} try to guess a number between 1 to 5 and remember you have just 4 attempts`));
  }else if (guessNumber === 4){
    alert('too high');
    // console.log(guessNumber);
    guessNumber = Number (prompt(`Now ${userName} try to guess a number between 1 to 5 and remember you have just 4 attempts`));
  }
  else if (guessNumber === 5){
    alert('too high');
    // console.log(guessNumber);
    guessNumber = Number (prompt(`Now ${userName} try to guess a number between 1 to 5 and remember you have just 4 attempts`));
  }
}
alert('The correct number is three');

let myFavProLun = ['Java', 'JavaScript', 'Kotlin', 'C++'];

let whatMyFavproLun = prompt(`${userName} Now try to guess my favorite programming language note  you have just 6 attempts`);

for (let i = 0; i < 5; i++){

  if (whatMyFavproLun === 'Java' || whatMyFavproLun === 'JavaScript' || whatMyFavproLun === 'Kotlin' || whatMyFavproLun === 'C++') {
    alert('Oh, cool you are guessed my favorite programming language');
    // console.log(whatMyFavproLun);
    break;
  }
  else if (whatMyFavproLun !== 'Java' || whatMyFavproLun !== 'JavaScript' || whatMyFavproLun !== 'Kotlin' || whatMyFavproLun !== 'C++') {
    whatMyFavproLun = prompt(`Try again ${userName} and remember you have just 6 attempts `);
    // console.log(whatMyFavproLun);
  }
}

alert(`my favorite programming language is: ${myFavProLun}`);

alert('Congratulation now you are finished all questions thanks a lot for your time with us I hope you have a good time');


let score = 0;

if (doIknowPrograming === 'yes' || doIknowPrograming === 'y'){
  score = score + 1;
}

if (amIAlien === 'no' || amIAlien === 'n')

  if (doIlikeFood === 'yes' || doIlikeFood === 'y'){
    score = score + 1;
  }

if (doIknowCars === 'yes' || doIknowCars === 'y'){
  score = score + 1;
}

if (doIlikeFood === 'yes' || doIlikeFood === 'y'){
  score = score + 1;
}

if (doIknowEnglish === 'yes' || doIknowEnglish === 'y'){
  score = score + 1;
}

if (guessNumber === 3){
  score = score + 1;
}

if (whatMyFavproLun === 'Java' || whatMyFavproLun === 'JavaScript' || whatMyFavproLun === 'Kotlin' || whatMyFavproLun === 'C++'){
  score = score + 1;
}

alert (`Thanks at all ${userName} your score is: ${score} from 7`);
