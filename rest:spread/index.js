const rating = {
    Avengers: 5,
    JusticeLeague: 5,
    CaptainAmerica: 3,
}

const watchers = {
    male: 20,
    female: 10
}

const films = ['Avengers', 'JusticeLeague', 'CaptainAmerica']

//spread
// console.log(...films)
console.log({...rating, ...watchers})

//Practice
// const numbers = [5,37,42,17]
// // console.log(Math.max(...numbers))
//
// const divs = document.querySelectorAll('div')
// const nodes =[...divs]
// console.log(nodes)


//rest
const numbers = [1, 2, 3, 4, 5]
const sum = (a, b, ...rest) => {
    return a + b + rest.reduce((a, i) => a + i, 0 )
}
console.log(sum(...numbers))