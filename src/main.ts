import './style.css'
// alert('hello')
// console.log('hello')
// let name = 'John'
// let admin = name
// console.log(admin)

// 1.
// let a = parseInt(prompt('Введите число')as string)
// alert(a ** 2)

// 2.
// let x = parseFloat(prompt('Введите число') as string)
// let y = parseFloat(prompt('Введите число') as string)
// alert((x + y) / 2)

// 3.
// let a = parseFloat(prompt('Введите длину квадрата') as string)
// alert(a * a)

// 4.
// let a = parseFloat(prompt('Введите длину в киломентрах') as string)
// alert(a * 0.621371)

// 5.
// let x = parseFloat(prompt('Введите x') as string)
// let y = parseFloat(prompt('Введите y') as string)
// alert(x + y)
// alert(x - y)
// alert(x * y)
// alert(x / y)

// 6.
// let a =parseFloat(prompt('Enter number a') as string)
// let b =parseFloat(prompt('Enter number b') as string)
// alert((-b)/a)

// 7.
// let a = parseFloat(prompt('Enter hours') as string)
// let b = parseFloat(prompt('Enter minutes') as string)
// alert()

// 8.
// let a = parseFloat(prompt('Введите трёх значное число') as string)
// a = Math.floor(a / 10) % 10
// alert(a)




// ДЗ 1



// 1.
// let a = prompt('Enter your name')
// alert('Привет, ' + a + '!')

// 2.
// let a = parseFloat(prompt('Enter your year of birth') as string)
// const x = 2023
// alert(x - a)

// 3.
// let a = parseFloat(prompt('Введите длину стороны квадрата') as string)
// alert(a * 4)

// 4.
// let a = parseFloat(prompt('Введите радиус окружности') as string)
// const PI = 3.14
// alert(PI * (a ** 2))

// 5.
// let a = parseFloat(prompt('Введите расстояние в км между двумя городами') as string)
// let b = parseFloat(prompt('Введите за сколько часов ходите добраться') as string)
// alert(a / b)

// 6.
// let a = parseFloat(prompt('Введите сумму в долларах') as string)
// const x = 0.90
// alert(a * x)

// 7.
// let a = parseInt(prompt('Введите колличество гигабайт ') as string)
// alert(Math.floor(a*1000/820))

// 8.
// let a = parseFloat(prompt('Введите сумму денег') as string)
// let b = parseFloat(prompt('Введите цену одной щоколадки') as string)
// alert( 'Можно купить школадок ' + Math.floor(a / b))
// alert( 'Сдача ' + a % b)


// PZ

// let a = prompt('Какое официальное название JavaScript?')
// if (a == 'ECMAScript') {
//     alert('Верно!')
// } else {
//     alert('Вы не знаете ECMAScript?')
// }


// let result = (a + b < 4) ? 'Мало' : 'Много'
// alert(result)

// let number = parseFloat(prompt('Введите число') as string)
// if (number > 0) {
//     alert(1)
// } if else (number < 0) {
//     alert(-1)
// } else {
//     alert(0)
// }

// let login = ''
// let massage = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' :
// ''
// alert(massage)


// const number = +(prompt('Введите число между 0 и 3', '') as string)
//  switch (number) {
//      case 0:
//          alert('Вы ввели число 1')
//          break
//     case 1:
//         alert('Вы ввели число 1')
//         break
//     case 2:
//     case 3:    
//         alert('Вы ввели число 2, а может и 3')      
//         break   
//  }
 

// PZ 1


// let age = +(prompt('Введите возраст') as string)
// let age = 13
//  if (age >= 14 && age <= 90) {
//      console.log(true)
//  }
//  if (!(age >= 14 && age <= 90)) {
//      console.log(1)
//  }
//  if (age < 14 || age > 90) {
//      console.log(2)
//  }

// let a = +(prompt('Enter number 1 - 12') as string)
// switch (a) {
//     case 1:
//         alert('Январь')
//         break
//     case 2:
//         alert('Ферваль')
//         break    
//     case 3:
//         alert('Март')
//         break 
//     case 4:
//         alert('Апрель')
//         break
//     case 5:
//         alert('Май')
//         break
//     case 6:
//         alert('Июнь')
//         break 
//     case 7:
//         alert('Июль')
//         break
//     case 8:
//         alert('Август')
//         break
//     case 9:
//         alert('Сентябрь')
//         break    
//     case 10:
//         alert('Октябрь')
//         break
//     case 11:
//         alert('Ноябрь') 
//         break
//     case 12:
//         alert('Декабрь')  
//         break
//     default:
//         alert('Это не число месяца')
//         break                                  

// }



// ДЗ 2

// 1.
// let a = +(prompt("Введите ваш возраст") as string);
// if (0 < a && a < 12) {
//  alert("ребёнок");
// }if (12 <= a && a < 18) {
//   alert("подросток");
// }if (18 <= a && a <= 60) {
//   alert("взрослый");
// }if (60 < a) {
//   alert("пенсионер");
// }

// 2.
// let a = +(prompt("Введите цифру от 0 до 9") as string);
//   switch (a) {
//    case 1:
//     alert("!");
//     break;
//    case 2:
//     alert("@");
//     break;
//    case 3:
//     alert("#");
//     break;
//    case 4:
//     alert("$");
//     break;
//    case 5:
//     alert("%");
//     break;
//    case 6:
//     alert("^");
//     break; 
//       case 7:
//     alert("&");
//     break;
//       case 8:
//     alert("*");
//     break;
//     case 9:
//      alert("(")
//      break;
     
//   }

// 3.
// let a = +(prompt("Введите трехзначное число") as string);
// let b = a % 10;
// let c = ((a - b) / 10) % 10;
// let d = ((((a - b) / 10)- c) / 10) % 10;
// if (b == c && c == d && b == d) {
//   alert("Все цифры равны");
// }
// else if (c == d) {
//     alert ("Равны первая и вторая цифры") 
//    }
// else if (b == c) {
//  alert ("Равны вторая и третья цифры") 
// }
// else if (b == d) {
//  alert ("Равны первая и третья цифры") 
// }

// 4.
// let a = +(prompt('Введите год') as string)
// if (a % 400 == 0 || a % 4 == 0 && a % 100 != 0){
// alert('Високосный год')}
// else {
//     alert('Невисокосный год')
// }

// 6.
// let a = prompt('Введите в какую валюту хотите перевести рубли, EUR, UAN, AZN','Eur')
// let b = parseFloat(prompt('Введите количество денег, которые вы хотели бы перевести в калькуляторе валют', '10000') as string)
// const value = {
//     Eur: 103.47,
//     Uan: 12.59,
//     Azn: 53.24
// }
// switch(a){
//     case 'Eur': 
//     alert(b * value.Eur)
//     break
//     case 'Uan':
//     alert(b * value.Uan)
//     break
//     case 'Azn':
//     alert(b * value.Azn)
//     break
//     default:
//         alert('Что то пошло не так...')
// }

// 7.
// let a = +(prompt('Введите сумму покупки') as string )
// let c = ((a / 100) * 3)
// let b = ((a / 100) * 5)
// let x = ((a / 100) * 7)
// if  (200 <= a && a <= 300) {
//     alert(a - c)
// } else if (301 <= a && a <= 500) {
//     alert(a - b) 
// } else if (a > 500 ) {
//     alert(a - x)
// } else {
//     alert(a)
// }

// 8.
// let a = +(prompt('Введите периметр квадрата') as string)
// let b = +(prompt('Введите длину откружности') as string)
// let c = (a / 4)
// if (c >= b) {
//     alert('Такая окружность может поместиться в квадрат')
// } else {
//     alert('Такая окружность не может поместиться в квадрат')
// }

// 9.
// const a = {
//     aOne: prompt('Какие у меня любимые цветы?', 'Варианты ответов: Розы, Альстромерии, Лилии'),
//     aTwo: prompt('Какого числа у меня день рождение?', 'Варианты ответов: 9, 21, 4'),
//     aThree: prompt('Кто из них мне нравится больше всего?', 'Варианты ответов: Пчёлы, Паучки, Кузнечики')
// } 
// let points = 0
// if (a.aOne == 'Лилии'){
//     points += 2
// }
// if (a.aTwo == '4'){
//     points += 2
// } 
// if (a.aThree == 'Паучки'){
//     points += 2
// }
// if(points > 0){
//     alert(`Вы набрали ${points} Очка(ов)`)
// }
// else {
//     alert('Ты меня совсем не знаешь...')
// }


// PZ WHILE FOR

// let i = 0
// while ( i < 3){
//     alert(`number ${i}!`)
//     i++
// }

// let num = 0
// do {
//     num = +(prompt('Введите число больше 100') as string)
// }    while(num <=100)

// let n = 10
// for (let i=2;i<=n;i++){
//     for (let j=2;j<i;j++){
//         if (i%j) break
//     }
// }


// DZ 3

// 1.
// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.
// let a = +(prompt('Введите первое число') as string)
// let b = +(prompt('Введите второе число') as string)
// let sum = 0
// while (a <= b){
//     sum += a
//     a++
// } alert(sum)

// 2.
// Запросить 2 числа и найти только наибольший общий
// делитель.
// let a = +(prompt('Введите первое число') as string)
// let b = +(prompt('Введите второе число') as string)
// while(a != b){
//     if (a > b){
//         a = a - b
//     } else {
//        b = b - a
//     }
// } alert(a) 

// 6.
// Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хо-
// чет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.
// let answer = true
// while (answer) {
//   let intNumb1 = parseFloat(prompt('Введите число/цифру, которое хотите вычислить', '12') as string)
//   let intSign = prompt('Введите знак, который будет вычислять', '+ - * /')
//   let intNumb2 = parseFloat(prompt('Введите число/цыфру, которое хотите вычислить', '12') as string)
//   let res = 0
//   switch (intSign) {
//     case '-':
//       res = intNumb1 - intNumb2
//       break
//     case '+':
//       res = intNumb1 + intNumb2
//       break
//     case '*':
//       res = intNumb1 * intNumb2
//       break
//     case '/':
//       res = intNumb1 / intNumb2
//       break
//   }
//   answer = confirm(`Результат ${res}. Посчитать что-нибудь ещё?`)
// }

// 3.
// Запросить у пользователя число и вывести все делители
// этого числа.
// let a = +(prompt ("введите число для определения делителей") as string);
// for (let  i = 1 ; i <= a ; i ++) {
//   if (a % i == 0) {
//     alert(i); 
//   }
//   else {
//     continue;
//   }
// }

// 4.
// Определить количество цифр в введенном числе.
// let a = +(prompt ("введите число") as string)
//    for(let i = 1; a > 1; i ++) {
//       a /= 10;
//       alert ( i );
//    }

// 7.
// let day = true;
// let nextDay = prompt('Напишите сегодняшний день, чтобы увидеть следующий', 'Пятница') as string;
// while (day) {

//   switch (nextDay) {
//     case 'Понедельник':
//       nextDay = 'Вторник'
//       break
//     case 'Вторник':
//       nextDay = 'Среда'
//       break
//     case 'Среда':
//       nextDay = 'Четверг'
//       break
//     case 'Четверг':
//       nextDay = 'Пятница'
//       break
//     case 'Пятница':
//       nextDay = 'Суббота'
//       break
//     case 'Суббота':
//       nextDay = 'Воскресенье'
//       break
//     case 'Воскресенье':
//       nextDay = 'Понедельник'
//       break
//     default:
//       nextDay = 'Понедельник'
// }

//   day = confirm(`Cледующий день ${nextDay}, хотите узнать следующий день?`);
// }

// 9.
// Вывести таблицу умножения для всех чисел от 2 до 9
// Каждое число необходимо умножить на числа от 1 до 10
// console.log("Таблица умножения"); 
// for (let j = 2; j <= 9; j++){  
// console.log(""); 
// for (let i = 1; i <=10; i++)  
// { 
// console.log(i + "*" + j + "=" +(i*j) ); 
 
// }  
 
// } 


// PZ function
// 1.
// function min(a, b){
//     if(a < b){
//         return a
//     } else {
//         return b 
//     }
// }
//  min(2, 5)

// 2.
// let a = +(prompt('Введите число') as string)
// let b = +(prompt('Введите степень') as string)
//  function one(a, b){
//      let result = a

//      for (let i = 1; i < b; i++){
//      result *= a
//      }
//      return result
//  }
 
//  if (b >= 1 && b % 1 == 0){
//      alert( one(a, b))
//  } else {
//      alert('Введите другую степень')
//  }

// 5.
// function showCalc(n:number){
//     for (let i = 2; i<10; i++){
//         console.log(n,'*', i, '=', n*1)
//     }
// }

// for (let i = 2; i<10; i++ ){
//     showCalc(i)
// }

// PZ 4

// 1.
// Написать функцию, которая принимает 2 числа и возвра-
// щает меньшее из них.
// let a = prompt('Введите первое число','5')
// let b = prompt('Введите второе число','8')
// function moon (a, b){
//     if(a<b){
//         alert(`${b} больше`)
//     }
//     else{
//         alert(`${a} больше`)
//     }
//     return
// }
// moon(a, b)

function unique(arr) {
    let result = [] 
    for (let str of arr){
       if (result.includes(str)) {
        result.push(str)
       }
    }
    return result
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  alert( unique(strings) ); // кришна, харе, :-O