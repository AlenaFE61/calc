

let attempts = 5;
let totalWin = 0;
let currentAttempt = 100;
let secondPlay = false;
let one = 1;
let two = 2;
let three = 3;
let eight = 8;
let twelve = 12;
let twentyFive = 25;
let fifteen = 50;
let hundred = 100;
let twohundred = 200;

let showMessage = confirm('Привет, я загадал число от 0 до 100. Попробуй угадать его за 3 попытки!')
if (!showMessage) {
   alert('Жаль, у тебя был шанс')
} else{
  begin();
}

function begin(){
  casino()
}

function casino(){
  while (attempts > 0) {
    let random = getRandom(eight);
    let askUser =
      prompt(
        'Введи число от 0 to 100' + '\r' +
        'Осталось попыток:' + ' ' + attempts + '\r' +
        'Сумма приза: ' + totalWin + '\r' +
        'возможный приз за текущую попытку:' + currentAttempt, 0)
    switch (attempts) {
      case three: 
        !secondPlay ? currentAttempt -= fifteen : currentAttempt -= hundred;
        if (random === askUser) {
          !secondPlay ? totalWin += hundred : totalWin += twohundred;
        } else if (!askUser) {             
          attempts = 0;
        }
        break;
      case two: 
        !secondPlay ? currentAttempt -= twentyFive : currentAttempt -= fifteen;
        if (random === askUser) {
          !secondPlay ? totalWin += fifteen : totalWin += hundred;
        } else if (!askUser) {             
          attempts = 0;
        }
        break;
      case 1: 
        currentAttempt = 0;
        if (random === askUser) {
          !secondPlay ? totalWin += twentyFive : totalWin += fifteen;
        } else if (!askUser) {             
          attempts = 0;
        }
        break;
        default: 1;
    }    
    attempts--;

      if (attempts === 0 && totalWin === 0) {
      alert('Спасибо за игру, твой приз: ' + totalWin);
          if (confirm('Хочешь продолжить?')) {
            attempts = three;
            totalWin = 0;
            currentAttempt = twohundred;
            random = getRandom(twelve);
            secondPlay = true;
            casino();
          } else {
            alert('Спасибо за игру, твой приз: ' + totalWin)
          }
    } else if (attempts === 0) {
        alert('Поздравляю, ты победил!   Твой приз: ' + totalWin + '$');
        if (confirm('Хочешь продолжить?')) {
          attempts = three;
          currentAttempt = twohundred;
          random = getRandom(twelve);
          secondPlay = true;
          casino();
        } else {
          alert('Спасибо за игру, твой приз: ' + totalWin)
        }
      }
  }
}

function getRandom(a) {
  return Math.round(Math.random() * a).toString()
}