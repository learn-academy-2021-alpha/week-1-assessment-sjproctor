// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

var temp1 = 85
var temp2 = 350
var temp3 = 212

const temperatureOutcome = (number) => {
  if(number < 212){
    return `${number} is below boiling point`
  } else if(number === 212){
    return `${number} is at boiling point`
  } else if(number > 212){
    return `${number} is above boiling point`
  } else {
    return "error"
  }
}
// console.log(temperatureOutcome(temp1))
// console.log(temperatureOutcome(temp2))
// console.log(temperatureOutcome(temp3))

// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

var myForNumbers1 = [3, 7, 0, 6, -9]
var myForNumbers2 = [2, 5, -8, 20, 32]

const multiplies = (array) => {
  var arrayOne = []
  for(let i=0; i<array.length; i++){
    arrayOne.push(array[i] * 5)
  }
  return arrayOne
}
// console.log(multiplies(myForNumbers1))
// console.log(multiplies(myForNumbers2))


// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

var myMapNumbers1 = [87, 6, 28, 16, 2]
var myMapNumbers2 = [8, -7, 0, 6, 12]

const multFive = (array) => {
  return array.map(value => {
    return value * 5
  })
}
// console.log(multFive(myMapNumbers1))
// console.log(multFive(myMapNumbers2))


// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const noVowel2 = (str) => {
  let strArray = str.split("")
  return strArray.filter(value => {
    return value.toLowerCase() !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u" && value !== "E" && value !== "I" && value !== "O" && value !== "U"
  }).join("")
}
// console.log(noVowel2(stringWithVowels1))
// console.log(noVowel2(stringWithVowels2))


// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

const noVowelsRefactor = (data) => {
  if(typeof data !== "string"){
    return `${data} is not a string`
  } else {
    let strArr = data.split("")
    return strArr.filter(value => {
      let lower = value.toLowerCase()
      return lower !== "a" && lower !== "e" && lower !== "i" && lower !== "o" && lower !== "u"
    }).join("")
  }
}
// console.log(noVowelsRefactor(refactorTester1))
// console.log(noVowelsRefactor(refactorTester2))
// console.log(noVowelsRefactor(refactorTester3))


// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"

var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]

const mostChar = (array) => {
  let charFilter = array.sort(function(a, b) {
    return b.length - a.length
  })
  return charFilter.shift()
}
// console.log(mostChar(utensils))
// console.log(mostChar(vessels))


// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]

const letterRemover = (array) => {
  return array.map(value => {
    return value.slice(0, -1)
  })
}
console.log(letterRemover(mario))
console.log(letterRemover(pacman))
