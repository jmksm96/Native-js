class Animal {
    constructor(options) {
        this.name = options.name
        this.color = options.color
    }

    voice() {
        console.log('Base voice from', this.name)
    }
}


const dog = new Animal({
    name: 'Rex', color: 'pink'
})

console.log(dog)


class Cat extends Animal {
    constructor(options) {
        super(options)
    }

    voice() {
        super.voice()
        console.log(this.name + 'meow')
    }
}

const cat = new Cat({
    name: 'cat', color: 'red'
})


//examples
Object.prototype.print = function () {
    console.log('log', this)
}

cat.print()


Object.prototype.toTag = function (tagName) {
    return `<${tagName}>${this}</${tagName}>`
}

console.log('name'.toTag('strong'))


Array.prototype.cMap = function () {
    return this.map(a => a + 1)
}

console.log([1, 2, 3, 4, 5].cMap())