//2 FizzBuzz. Напишите программу, которая выводит через console.log все числа 
// от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна 
// выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете 
// – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся
//  и на 3 и на 5

// const filter = function () {

//     for (let i = 0; i <= 100; i++) {
        
        
//         if ( 
//             i % 5 === 0 && i % 3 === 0
//         ) {
//             console.log('FizzBuzz');
//         } else  if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if ( 
//             i % 5 === 0 
//         ) {
//             console.log('Buzz');
//         } else   {
//             console.log(i);
//         }
        
//     }
//     return filter;

// }
// filter();


// 4 \\ Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

// let minNumber = function (num1, num2) {

//    minNumber = num1 < num2 ?   num1 :  num2;

//     return minNumber;
// }

// console.log(minNumber(10, -25));



// console.log('строчкa'.charAt(5));

// 6 \\  Напишите функцию countBs, которая принимает строку в качестве аргумента, 
// и возвращает количество символов “B”, содержащихся в строке.Затем напишите функцию 
// countChar, которая работает примерно как countBs, только принимает второй параметр — 
// символ, который мы будем искать в строке (вместо того, чтобы просто считать количество 
// символов “B”). Для этого переделайте функцию countBs.


// console.log( countBs("The quick brown fox jumped over the lazy dog") );
// const string = "The quick rown fox jumped over the lazy dog and Boy uilds house";
// let countBs = 0;

// const count = string.includes('b') ? countBs += 1 : console.log('no letter');

// console.log( string.includes('b') );
// console.log( count );

// const countBs = function (string, b) {
//     let countBs = 0;
//     let letter = string.toLowerCase();

//     console.log(letter);

//     for (const element of letter) {
        
    
//         if (element.includes(b)) {
//             countBs += 1;

//         }
//     }

//     return countBs;
// }

// console.log( countBs("The quick brown foxb jumped over bb the lazy dog", 'b') );