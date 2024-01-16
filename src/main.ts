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

// function unique(arr) {
//     let result = [] 
//     for (let str of arr){
//        if (result.includes(str)) {
//         result.push(str)
//        }
//     }
//     return result
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   alert( unique(strings) ); // кришна, харе, :-O




// DZ modul 2 week 3
// 1. Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.
// function printStatistics(str) {
//   let lettersCount = 0;
//   let digitsCount = 0;
//   let otherCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     const x = str[i];
//     if (/[a-zA-Z]/.test(x)) {
//       lettersCount++;
//     } else if (/[а-яА-Я]/.test(x)) {
//       lettersCount++;
//     } else if (/[0-9]/.test(x)) {
//       digitsCount++;
//     } else {
//       otherCount++;
//     }
//   }
//   console.log("Количество букв:", lettersCount);
//   console.log("Количество цифр:", digitsCount);
//   console.log("Количество других знаков:", otherCount);
// }
// const str = "Hello123! Пример 345 строки.";
// printStatistics(str);


// 2.Написать функцию, которая принимает двузначное число
// и возвращает его в текстовом виде.
// Например: 35 – тридцать пять, 89 – восемьдесят девять,
// 12 – двенадцать.
// function numberToText(num) {
//   const units = [
//     "", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"
//   ];

//   const tens = [
//     "", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"
//   ];

//   const exceptions = {
//     10: "десять",
//     11: "одиннадцать",
//     12: "двенадцать",
//     13: "тринадцать",
//     14: "четырнадцать",
//     15: "пятнадцать",
//     16: "шестнадцать",
//     17: "семнадцать",
//     18: "восемнадцать",
//     19: "девятнадцать"
//   };

//   if (num < 10) {
//     return units[num];
//   }

//   if (num >= 10 && num < 20) {
//     return exceptions[num];
//   }

//   const unitDigit = num % 10;
//   const tensDigit = Math.floor(num / 10);

//   return tens[tensDigit] + " " + units[unitDigit];
// }
// console.log(numberToText(89))

// 3.Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.
// function replaceCharacters(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     const x = str[i];

//     if (/[A-Z]/.test(x)) {
//       result += x.toLowerCase();
//     } else if (/[a-z]/.test(x)) {
//       result += x.toUpperCase();
//     } else if (/[0-9]/.test(x)) {
//       result += "_";
//     } else {
//       result += x;
//     }
//   }

//   return result;
// }
// console.log(replaceCharacters("Hello123"))


// 5.Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектно-
// ориентированное программирование в ООП.
// function createAbbreviation(x) {
//   const words = x.split(" ");
//   let abbreviation = "";

//   for (let i = 0; i < words.length; i++) {
//     abbreviation += words[i][0].toUpperCase();
//   }

//   return abbreviation;
// }
// console.log(createAbbreviation("cascading style sheets"))

// Реализовать класс, который описывает css класс.
// Класс CssClass должен содержать внутри себя:
// ■ название css класса;
// ■ массив стилей;
// ■ метод для установки стиля;
// ■ метод для удаления стиля;
// ■ метод getCss(), который возвращает css код в виде стро-
// ки.

// class CssClass {
//     constructor(className){
//         this.className = className
//         this.styles = []
//     }

//     setStyle(property, value){
//         this.styles[property] = value
//     }

//     removeStyle(property){
//         delete
//         this.styles[property]
//     }
// }



// DZ modul 2 week 4

// 1.
// class Circle {
//     constructor(radius) {
//       this._radius = radius;
//     }
  
//     get radius() {
//       return this._radius;
//     }
  
//     set radius(value) {
//       if (value >= 0) {
//         this._radius = value;
//       } else {
//         console.error("Радиус не может быть отрицательным.");
//       }
//     }
  
//     get diameter() {
//       return this._radius * 2;
//     }
  
//     get area() {
//       return Math.PI * this._radius ** 2;
//     }
  
//     get circumference() {
//       return 2 * Math.PI * this._radius;
//     }
//   }
  
  
//   const circle = new Circle(8);
//   console.log(circle.radius); 
//   console.log(circle.diameter); 
//   console.log(circle.area); 
//   console.log(circle.circumference);


// Реализуйте класс ExtendedDate, унаследовав его от стандарт -
//   ного класса Date и добавив следующие возможности:
// ■ метод для вывода даты(числа и месяца) текстом;
// ■ метод для проверки – это прошедшая дата или будущая
//   (если прошедшая, то метод возвращает false; если буду -
//   щая или текущая, то true);
// ■ метод для проверки – високосный год или нет;
// ■ метод, возвращающий следующую дату.
// Создайте объект класса ExtendedDate и выведите на экран
// результаты работы новых методов.

// function numberToText(n: number) {
//     if (n < -99 || n > 99) return 'Неверное число'
//     let minusStr = ''
//     let sN = ''
//     const numberWithMinus = n.toString()
//     if (numberWithMinus[0] == '-') {
//       minusStr = 'минус '
//       sN = numberWithMinus.slice(1)
//     } else {
//       sN = n.toString()
//     }
//     const oneNumber = [, 'первое', 'второе', 'третье', 'четвёртое', 'пятое', 'шестое', 'седьмое', 'восьмое', 'девятое']
//     const secondOfTen = ['десятое', 'одиннадцатое', 'двенадцатое', 'тринадцатое', 'четырнадцатое', 'пятьнадцатое', 'шестьнадцатое', 'семьнадцатое', 'восемьнадцатое', 'девятьнадцатое']
//     const firstOfMoreTen = [, , 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
//     const firstOfMoreTenRound = [, , 'двадцатое', 'тридцатое', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто']
//     if (sN.length == 1) {
//       return minusStr + oneNumber[+sN[0]]
//     }
//     if (sN.length == 2) {
//       if (sN[0] == '1') {
//         return minusStr + secondOfTen[+sN[1]]
//       }
//       if (sN[1] == '0') {
//         return minusStr + firstOfMoreTenRound[+sN[0]]
//       }
//       return minusStr + firstOfMoreTen[+sN[0]] + ' ' + oneNumber[+sN[1]]
//     }
//   }
  
//   class ExtendedDate extends Date {
//     getRussianDate() {
//       const month = ['января', 'февряля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
//       return numberToText(this.getDate()) + ' ' + month[this.getMonth()]
//     }
//     isFuture() {
//       return this.getTime() > Date.now()
//     }
//     isLeap() {
//       const year = this.getFullYear()
//       return year%4==0 && (year%100!=0 || year%400==0)
//     }
//     nextDate() {
//       return new ExtendedDate(this.setDate(this.getDate()+1))
//     }
//   }
  
//   console.log(new Date('10-02-2023'))
//   console.log(new ExtendedDate('10-02-2023'))
//   console.log(ExtendedDate.now())
//   console.log(new ExtendedDate(Date.now()-24*3600*1000).getRussianDate())
//   console.log(new ExtendedDate(Date.now()-24*3600*1000).isFuture())
//   console.log(new ExtendedDate().isFuture())
//   console.log(new ExtendedDate(Date.now() + 24 * 3600 * 1000).isFuture())
//   console.log(new ExtendedDate().isLeap())
//   console.log(new ExtendedDate('10-02-2024').isLeap())
//   console.log(new ExtendedDate('10-02-2300').isLeap())
//   console.log(new ExtendedDate('10-02-2400').isLeap())
//   console.log(new ExtendedDate().nextDate().nextDate().nextDate())
  
// Реализовать класс, описывающий простой маркер. В классе
// должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере (в про-
// центах);
// ■ метод для печати (метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов.
// const markerInput = document.getElementById('marker') as HTMLInputElement
// const typeMarker = document.getElementById('type_marker') as HTMLDivElement
// const refuillButton = document.getElementById('refill')as HTMLButtonElement
// class Marker {
//   color
//   ink = 100
//   constructor(color:string, ink:number){
//     this.color = color
//     this.ink = ink
//   }
//   draw(data:string){
//     typeMarker.innerHTML += `<span style="opacity: ${this.ink/100}; color:${this.color}">${data}</span>`
//     if(data != ' ') this.ink -=0.5
//   }
//   refuill(){
//     console.log(this.ink)
//     this.ink=100
//   }
// }
// const myMarker = new Marker("red", 80);

// document.addEventListener('click',(e)=>{
//   // @ts-ignore
//   if (e.target.id == 'refill') {
    
//     console.log(myMarker.ink)
//     myMarker.refuill()

//   }
// })


// markerInput.addEventListener('input',(e)=>{
//   const inputEvent = e as InputEvent
//   if(inputEvent.inputType == 'insertText'){
//     if (typeof inputEvent.data == 'string') myMarker.draw(inputEvent.data)
//   }
// })

// Реализовать класс, описывающий геометрическую фигуру со
// свойствами и методами:
// ■ get-свойство для получения названия фигуры;
// ■ метод для вывода информации о фигуре (стороны и их
// длина);
// ■ метод для вычисления площади фигуры;
// ■ метод для вычисления периметра фигуры.
// Реализуйте классы-наследники: квадрат, прямоугольник и
// треугольник. Переопределите методы вывода и вычислений в
// классах-наследниках.
// Создайте массив с различными фигурами и выведите инфор-
// мацию о каждой фигуре, включая площадь и периметр.
// class Shape {
//     name
//     sides
//     constructor(name: string) {
//       this.name = name;
//       this.sides = []; 
//     }
  
//     getName() {
//       return this.name;
//     }
  
//     addSide(length: number) {
//       this.sides.push(length);
//     }
  
//     getPerimeter() {
//       return this.sides.reduce((sum, side) => sum + side, 0);
//     }
  
//     getInfo() {
//       const sidesInfo = this.sides.map((side, index) => `Сторона ${index + 1}: ${side}`);
//       return `Фигура: ${this.name}\n${sidesInfo.join('\n')}`;
//     }
//   }
  
//   class Square extends Shape {
//     constructor(length: number) {
//       super('Квадрат');
//       this.addSide(length);
//     }

//     getPerimeter() {
//         return this.sides[0] * 4;
//       }
  
//     getArea() {
//       return this.sides[0] ** 2;
//     }
//   }
  
//   class Rectangle extends Shape {
//     constructor(length:number, width: number) {
//       super('Прямоугольник');
//       this.addSide(length);
//       this.addSide(width);
//     }

//     getPerimeter() {
//        return this.sides[0] + this.sides[1] + this.sides[0] + this.sides[1] ;
//       }
  
//     getArea() {
//       return this.sides[0] * this.sides[1];
//     }
//   }
  
//   const shapes = [
//     new Square(3),
//     new Rectangle(3, 5),
//   ];
  
//   shapes.forEach(shape => {
//     console.log(shape.getInfo());
//     console.log(`Периметр: ${shape.getPerimeter()}`);
//     console.log(`Площадь: ${shape.getArea()}`);
//   });



// 5 %
let progressBar = document.getElementById("progress-bar");
let increaseBtn = document.getElementById("btn-increase");
let boxBtn = document.getElementById("first")

increaseBtn.addEventListener("click", function() {
    let currentProgress = parseFloat(progressBar.style.width) || 0;
    let newProgress = currentProgress + 5;

    if (newProgress <= 89) {
      progressBar.style.width = newProgress + "%";
    }
  });


  // Like
  let realValueParagraph = 0
  const countParagraph = document.querySelector('.counter') as HTMLParagraphElement
  const buttonCount = document.querySelector('.like_count') as HTMLButtonElement
  function onClick(){
    buttonCount.addEventListener('click',() =>{
      realValueParagraph += 1
        countParagraph.innerHTML = `${realValueParagraph}`
    }
    )
  }
  onClick()
    countParagraph.innerHTML = `${realValueParagraph}`

   ///
   let listCharacter = document.getElementById("ul")

   listCharacter.onclick = function(event) {
    if (event.target.tagName != "LI") return;

    if (event.ctrlKey || event.metaKey) {
      toggleSelect(event.target);
    } else {
      singleSelect(event.target);
    }

    function toggleSelect(li) {
      li.classList.toggle('selected');
    }

    function singleSelect(li) {
      let selected = listCharacter.querySelectorAll('.selected');
      for(let elem of selected) {
        elem.classList.remove('selected');
      }
      li.classList.add('selected');
    }
  }

  ///
  let imageElement = document.getElementById("hu")
  let originalImage = imageElement.src;
  let newImage = "/public/hutao2.webp"

  imageElement.addEventListener("mouseover" , function(){
    imageElement.src = newImage;
  }
  )

  imageElement.addEventListener("mouseout", function() {
    imageElement.src = originalImage; 
  });

  ///

  let numberInput = document.getElementById("numberInput")
  let plusInput = document.getElementById("plus")
  let nimInput = document.getElementById("nim")

  plusInput?.addEventListener("click", function(){
    let currentValue = parseInt(numberInput.value);
        numberInput.value = currentValue + 1;
  })

  nimInput?.addEventListener("click", function(){
    let currentValue = parseInt(numberInput.value);
        numberInput.value = currentValue - 1;
  })

  numberInput.addEventListener("keydown", function(event) {
    event.preventDefault();
  });

  ///
  let addColorBlock = document.getElementById("block")

  addColorBlock.addEventListener("click", function(){
    let newBlock = document.createElement("div")
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    newBlock.style.backgroundColor = randomColor

    newBlock.className = "color-block"
    newBlock.addEventListener("click", function(){
      removeColorBlock(this)
    })

    document.getElementById("color").appendChild(newBlock)
  })

  function removeColorBlock(block) {
    document.getElementById("color").removeChild(block);
}

///
function changeTextColor(event) {
  var selectedColor = event.target.dataset.color;
  if (selectedColor) {
      document.getElementById("lldf").style.color = selectedColor;
  }
}
document.getElementById("color-pallette").addEventListener("click", changeTextColor)



  