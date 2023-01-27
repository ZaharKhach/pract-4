"use strict"
// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
// Пример:
// showExperience(personalPlanPeter) => '1 month'
// P.S. желательно использовать деструктуризацию, но не обязательно
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         const { languages } = plan.skills;
//         let string = languages.join(` `);
//         //console.log(string.toUpperCase());
//         return `Мне ${plan.age} и я владею языками:${string.toUpperCase()}`;
//     }
// };
// personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// let {programmingLangs} = personalPlanPeter.skills;
// for (let key in programmingLangs){
//     console.log(programmingLangs[key])
//     console.log(key);
// };
// const {programmingLangs} = personalPlanPeter.skills;
// console.log(Object.keys(programmingLangs).length);

// function showExperience(plan) {
//     const { exp } = plan.skills;
//     return exp;
// }

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
// Пример:
// showProgrammingLangs(personalPlanPeter)  =>
// "Язык js изучен на 20% Язык php изучен на 10%"
// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
// P.S. Для переноса строки используется \n в конце строки.

// function showProgrammingLangs(plan) {
//     const { programmingLangs } = plan.skills;
//     let result = '';
//     if (Object.keys(programmingLangs).length === 0) {
//         return result;
//     } else {
//         for (let key in programmingLangs) {
//             result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;

//         }
//     }
//     return console.log(result);
// }
// showProgrammingLangs(personalPlanPeter);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i].toLowerCase());
//     }
// }

// standardizeStrings(favoriteCities);

// const arrString = someString.split('');
// const arrResult = [];
// for(let i = 0; i < arrString.length; i ++){
//     console.log(`${i}й эелемент не замененого массива: ${arrString[i]}`);
// }
// for(let i = 1; i <= arrString.length; i++){
//     arrResult[i - 1] = arrString[arrString.length - i]
//     console.log(`${i}й эелемент замененого массива: ${arrResult[i -1]}`);
// }
// console.log (arrResult.join(``));



// const someString = 'This is some strange string';
// const test = 12;
// function reverse(str) {
//     if(typeof(str) !== 'string'){
//         return "Ошибка!";
//     }
//     const arr = str.split('');
//     const newArr = []
//     for (let i = 1; i <= arr.length; i++){
//         newArr[i - 1] = arr[arr.length - i];
//     }
//     return newArr.join(``);
// }
// console.log (someString);
// console.log(reverse(someString));
// console.log(reverse(test));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = '';
    if (arr.length === 0) {
        result = 'Нет доступных валют';
    } else {
        result = 'Доступные волюты\n';
        arr.array.forEach(function (currentValue, i, arr) {
            if (currentValue !== missingCurr) {
                result += `${currentValue}\n`;
            }
        });
    }
    return result;
}