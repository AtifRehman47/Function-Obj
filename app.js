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


// Object with assign 

// let Person1 = {
//     FName:'Atif',
//     LName:'Rehman',
//     Age:20
// };

// let Person2 = {FName:'Misbah',LName:'Atif'}

// console.log(Object.assign(Person1,Person2))


// Object using this 

// let user = {
//     Name:'Atif',
//     Id:46,
//     Login:'Yes',

//     find : function(){
//         return this.Id
//     }
    
// }

// console.log(user.Login);


// let std = {
//     Name:'Atif',
//     From:'Karachi',
//     Login:true,
//     pass:46,

//     find : function(){
//         if (this.pass === 46) {
//             return this.Login 
//         } else {
//             return 'Not Login'
//         }
//     }
// }

// console.log(std.find());


// Object binding method 

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// function sayHello() {
//   return "Hello " + this.firstName;
// }

// const boundFunc = sayHello.bind(person);

// console.log(boundFunc()); // Hello John


// let Person = {
//     Name:'MisbahAtif',
//     From:'Karachi',
// }

// function say(){
//     return 'Hello' + this.Name;
// }

// let boundfunc = say.bind(Person)
// console.log(boundfunc());


// let person1 = {
//     Name:'Atif',
//     from:'Karachi',
// }
// let person2 = {
//     Name:'Misbah',
//     from:'Karachi',
// }

// function say(){
//     return 'hello' + this.Name + this.from
// }

// let boncfunc = say.bind(person1)
// let boncfunc2 = say.bind(person2)
// console.log(boncfunc());
// console.log(boncfunc2());


// let personOne = {
//     Name:'Atif',
//     From:'Karachi',
// }

// let personTwo = {
//     Name:'Asim',
//     From:'Lahore',
// }

// let personThree = {
//     Name:'Misbah',
//     From:'Karachi',
// }

// function find() {
//     return `Hey ${this.Name} ${this.From}`
// }

// let buncfunc = find.bind(personOne)
// let buncfunc2 = find.bind(personThree)
// let buncfunc3 = find.bind(personTwo)
// console.log(buncfunc());
// console.log(buncfunc2());
// console.log(buncfunc3());


// Object Destructring 

// let personOne = {
//     Name:'Atif',
//     From:'Karachi',
// }

// let find = {Name,From} = personOne
// console.log(find);


// let personOne = {
//     Name:'Atif',
//     From:'Karachi',
// }

// let find = { ...personOne , country :"Turkey"}
// console.log(find);

// let personOne = {
//     Name:'Atif',
//     From:'Karachi',
// }
// let find = {...personOne,age:20}
// console.log(find);



