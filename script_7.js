/*Exercise 1*/

// class Author {
//     constructor(name, email, gender) {
//         this._name = name;
//         this._email = email;
//         this._gender = gender;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(value) {
//         this._name = value;
//     }
//
//     get email() {
//         return this._email;
//     }
//
//     set email(value) {
//         this._email = value;
//     }
//
//     get gender() {
//         return this._gender;
//     }
//
//     set gender(value) {
//         this._gender = value;
//     }
//
//     myToString() {
//         let keys = Object.keys(this);
//         let result = '';
//         keys.forEach((key) => {
//             result += ` ${this[key]}`;
//         });
//         return result;
//     }
// }
//
// class Book{
//     constructor(title, price, quantity){
//         this._title = title;
//         this._price = price;
//         this._quantity = quantity;
//         this._author = new Author('Michael', 'miqomovsisyan805@gmail.com', 'Male');
//     }
//
//     get title() {
//         return this._title;
//     }
//
//     set title(value) {
//         this._title = value;
//     }
//
//     get author() {
//         return this._author;
//     }
//
//     get price() {
//         return this._price;
//     }
//
//     set price(value) {
//         this._price = value;
//     }
//
//     get quantity() {
//         return this._quantity;
//     }
//
//     set quantity(value) {
//         this._quantity = value;
//     }
//
//     getProfit(){
//         return this._price * this._quantity;
//     }
//
//     myToString() {
//         let keys = Object.keys(this);
//         let result = '';
//         keys.forEach((key) => {
//             result += ` ${this[key]}`;
//         });
//         return result;
//     }
// }

/*Exercise 2*/

// class Account{
//     constructor(id, name, balance){
//         this._id = id;
//         this._name = name;
//         this._balance = balance;
//     }
//
//     get name(){
//         return this._name;
//     }
//
//     set name(value){
//         this._name = value;
//     }
//
//     get balance(){
//         return this._balance;
//     }
//
//     set balance(value){
//         this._balance = value;
//     }
//
//     get id(){
//         return this._id;
//     }
//
//     credit(amount){
//         this._balance += amount;
//         return this._balance;
//     }
//
//     debit(amount){
//         if(this._balance >= amount){
//             this._balance -= amount;
//         } else {
//             console.log('Amount exceeded balance');
//         }
//     }
//
//     transferTo(anotherAccount, amount){
//         if(this._balance >= amount){
//             this._balance -= amount;
//             anotherAccount.balance = amount;
//             return this._balance;
//         } else {
//             console.log('Amount exceeded balance');
//         }
//     }
//
//
//     myToString() {
//         let keys = Object.keys(this);
//         let result = '';
//         keys.forEach((key) => {
//             result += ` ${this[key]}`;
//         });
//         return result;
//     }
//
//     static identifyAccounts (accountFirst, accountSecond){
//         console.log(JSON.stringify(accountFirst) === JSON.stringify(accountSecond));
//     }
// }

/*Exercise 3*/

// class Person{
//     constructor(firstName, lastName, gender, age){
//         this._firstName = firstName;
//         this._lastName = lastName;
//         this._gender = gender;
//         this._age = age;
//     }
//
//     get firstName(){
//         return this._firstName;
//     }
//
//     set firstName(firstName){
//         this._firstName = firstName;
//     }
//
//     get lastName(){
//         return this._lastName;
//     }
//
//     set lastName(lastName){
//         this._lastName = lastName;
//     }
//
//     get gender(){
//         return this._gender;
//     }
//
//     set gender(gender){
//         this._gender = gender;
//     }
//
//     get age(){
//         return this._age;
//     }
//
//     set age(age){
//         this._age = age;
//     }
//
//     myToString() {
//         let keys = Object.keys(this);
//         let result = '';
//         keys.forEach((key) => {
//             result += ` ${this[key]}`;
//         });
//         return result;
//     }
// }
//
// class Student extends Person{
//     constructor(firstName, lastName, gender, age, program, year, fee){
//         super(firstName, lastName, gender, age);
//         this._program = program;
//         this._year = year;
//         this._fee = fee;
//         this._exam = {};
//     }
//
//     get program(){
//         return this._program;
//     }
//
//     set program(program){
//         this._program = program;
//     }
//
//     get year(){
//         return this._year;
//     }
//
//     set year(year){
//         this._year = year;
//     }
//
//     get fee(){
//         return this._fee;
//     }
//
//     set fee(fee){
//         this._fee = fee;
//     }
//
//     passExam(program, grade){
//         this._exam[program] = grade;
//         let allPassed = Object.values(this._exam).every(grade => grade >= 50);
//
//         if(allPassed){
//             this._year++;
//         }
//     }
//
//     myToString() {
//         return super.myToString();
//     }
// }
//
// class Teacher extends Person{
//     constructor(firstName, lastName, gender, age, program, pay){
//         super(firstName, lastName, gender, age);
//         this._program = program;
//         this._pay = pay;
//     }
//
//     get program(){
//         return this._program;
//     }
//
//     set program(program){
//         this._program = program;
//     }
//
//     get pay(){
//         return this._pay;
//     }
//
//     set pay(pay){
//         this._pay = pay;
//     }
//
//     myToString(){
//         return super.myToString();
//     }
// }