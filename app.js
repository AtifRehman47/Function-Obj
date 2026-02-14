// object using new keyword 

// function Person(name,from,age){
//         this.name = name
//         this.from = from
//         this.age = age
// }

// let show = new Person('Atif','karachi',20)
// console.log(show.name,show.from,show.age);


// function std1 (name,age,qualification){
//     this.name = name
//     this.age = age
//     this.qualification = qualification
// }

// let show = new std1('Atif',20,'BBIT');
// console.log(show.name,show.age,show.qualification);


// function stdOneData (name,marks){
//         this.name = name
//         this.marks = marks
// }

// let show = new stdOneData('AtifRehman',90)
// let show2 = new stdOneData('Asim',80)
// console.log(show.name,show.marks);
// console.log(show2.name,show2.marks);


// object create method 

// let person = {
//     Name:'Atif',
//     LstName:'Rehman'
// }

// let men = Object.create(person)
// console.log(men.Name,men.LstName);


// let person = {
//     Name:'Atif',
//     From:'Karachi',
//     Age:20
// }

// let men = Object.create(person)
// console.log(men.Age);

// let person1 = {
//     Name:'Atif',
//     from:'karachi',
// }

// let person2 = {
//     Name:'Asim',
//     from:'lahore'
// }

// let show = Object.create(person2)
// console.log(show.Name);

// let person = {
//     Name:'Atif',
//     LName:'Rehman',
//     From:'Karachi',
// }

//  let men = Object.create(person)
// let change = men.LName = 'khan'
// console.log(change);


// object .formentires

// let arr = [
//     ['Apple',900],
//     ['Mango',500],
//     ['Banana',400]
// ];

// let convert = Object.fromEntries(arr)
// console.log(convert);


// let Arr1 = [
//     ['mr1','mr2','mr3'],
//     ['mr4','mr5','mr6'],
//     ['mr7','mr8','mr9'],
// ];

// let convert = Arr1.map(itm => Object.assign({},itm))
// console.log(convert);

