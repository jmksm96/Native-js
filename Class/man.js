class Man {
    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.job = options.job
    }
}


class Employee extends Man {
    constructor(options) {
        super(options);
        this.gender = options.gender
    }


}

const man = new Man({
    age: '25', name: 'Max', job: true
})

console.log(man)

const nikita = new Employee({
    age: '27', name: 'Nikita', job: true, gender: 'male'
})