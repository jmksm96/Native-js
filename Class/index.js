// const Animal = function (options) {
//     this.name = options.name
//     this.color = options.color
//     // this.voice = function() {
//     //     console.log('Base voice from', this.name)
//     // }
// }
//
// // Animal.prototype.voice = function () {
// //     console.log('Base voice from', this.name)
// // }
//
// // const dog = new Animal({
// //     name: 'Rex', color: 'white'
// // })
// //
// // console.log(dog.voice)
//
// const Cat = function (options) {
//     Animal.apply(this, arguments)
// }
//
// Cat.prototype = Object.create(Animal.prototype)
//
// const cat = new Cat({
//     name: 'Barsik', color: 'black'
// })
// console.log(cat);