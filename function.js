const numbers = [1, 2, 3, 4, 5, 6]

const result = numbers.reduce((acc, currentElement) => {
    return acc + currentElement
}, 0)

console.log(result)

/*
const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
*/

/*
let people = [
    { name: 'John', age: 30},
    { name: 'Anna', age: 24},
    { name: 'Mike', age: 28},
    { name: 'Laura', age: 32},
]

const sortedPeople = people.sort((a, b) => a.age - b.age)

document.getElementById("demo").innerHTML = sortedPeople;


/*
let numbers = [5, 12, 18, 22, 3] 

let filteredNumbers = numbers.filter((number) => {
    return number > 10
})
*/

/*
let numbers = [5, 12, 18, 22, 3]

let filteredNumbers = numbers.filter((number) => number > 10)
*/


const day = 'Monday'

switch(day){
    case 'Friday':
        console.log("Freeedag, ut och festa!")

    case 'Saturday':
        console.log("Pizza time!")

    case 'Sunday':
            console.log("Leg day bitches")
            
    default:
            console.log("Vanlig dag")
}


let isAccepted = false

if (isAccepted) {
console.log("Accepterad")
} else {
console.log("inte accepterad")
}


let grade = 60

if (grade > 50 && grade < 75) {
console.log("Betyg E")
} else if (grade >= 75 && grade < 90) {
console.log("Betyg C")
} else if (grade > 90) {
console.log("Betyg A")
} else {
console.log("Betyg F")
}


/*
addera(5, 10)

const addera = (a, b) => {
    return a + b;
}
*/




/*
function(a, b){

}
*/