let students = [{
        name: 'Max',
        age: 25,
        isMarried: false,
        scores: 120
    },
    {
        name: 'Rax',
        age: 20,
        isMarried: false,
        scores: 10
    },
    {
        name: 'Jack',
        age: 17,
        isMarried: false,
        scores: 70
    },
    {
        name: 'Girla',
        age: 18,
        isMarried: true,
        scores: 20
    },
]

// const test = () => 'test'

function test() {
    return 'rest'
}

function itMap(arr, func) {

    const result = [] //сюда складывается результат выполненяи функции
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result;
}

const getName = (student) => {
return student.name
}


console.log(itMap(students, st => st.name)); // литерал функции
console.log(itMap(students, getName)); // имя функции
console.log(students.map(st => st.name))

const itFilter = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(itFilter(students, st => st.scores >= 100))
// console.log(students.filter(st => st.scores >= 100))
// console.log(students.filter(st => st.isMarried))