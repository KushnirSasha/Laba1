//C:\Users\User\Desktop



var readlineSync = require('readline-sync');
class Utils {
    static generateRandomNumber(min = 0, max = 9, countDigits) {
        let digitsArray = [];
        while (digitsArray.length < countDigits) {
            let digit = this.randomInteger(min, max);

            if (!digitsArray.includes(digit)) {
                digitsArray.push(digit);
            }

            if (digitsArray[0] === 0) {
                digitsArray = [];
            }
        }
        let randomNum = +digitsArray.join('');
        return randomNum;
    }
    static randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }
}




let bulls = 0
let cows = 0
let condition = true
let counter = 0;
let numbers = [0, 0, 0, 0]
let numbersValue = parseInt(Utils.generateRandomNumber(0, 9, 4), 10)

console.log('Вітаю у грі!')
while (condition) {
    let purpose = [0, 0, 0, 0]
    console.log('Будь ласка, введіть чотирьохзначне число, використовуючи різні цифри: ')
    let purposeValue = Number(readlineSync.question(' '))

    numbers[0] = Math.floor(numbersValue / 1000)

    numbers[1] = Math.floor((numbersValue / 100) % 10)

    numbers[2] = Math.floor((numbersValue % 100) / 10)

    numbers[3] = Math.floor((numbersValue % 100) % 10)

    purpose[0] = Math.floor(purposeValue / 1000)

    purpose[1] = Math.floor((purposeValue / 100) % 10)

    purpose[2] = Math.floor((purposeValue % 100) / 10)

    purpose[3] = Math.floor((purposeValue % 100) % 10)

    console.log(purpose)



    for (var i = 0; i < 4; i++) {
        if (numbers[i] === purpose[i]) {
            counter++;
        }
    }
    if (counter === 4) {
        condition = false;
    }
    counter = 0
    for (let i = 0; i < 4; i++) {
        if (purpose[i] === numbers[i]) {
            bulls++
        }
        if (numbers.includes(purpose[i])) {
            cows++
        }
    }




    cows -= bulls

    console.log('Биків: ' + bulls)

    console.log('Корів: ' + cows)

    bulls = 0;

    cows = 0;
}


console.log('Дякую за гру')
console.log('(Лабораторна робота №1 з КПП Кушнір Олександр)')