// Find the last element of the following arrays.

 let arr1 = [3,7,34,90,12]
 console.log(arr1.slice(-1).pop())
 
 let arr2 = [true, "green", "where",12,56]
console.log(arr2.slice(-1).pop())





// Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.toString())


// Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort())



// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
var personal =[];
arr.forEach(item => {

    if(!personal.includes(item)){

        personal.push(item)
    }

})
console.log(personal)

var y= arr.sort()
var x = y.reverse()
let [a,...b] =x
console.log(b)
// Write a JS script to search for the following word in the array.



// 4
// If the word is present, console it else console "the search word was not found"
 const arr5 = ["the", "way", "x", 4, 23];
const m= arr5.indexOf("4");
  if (m!== -1){
    const wordsAs=array5[m];
    console.log(wordsAs);
}else{
    console.log("the search is not found")
}






// Write a JS script to sort the following string
let word = "lufituaeb"
let n= word.split("").sort().join("")
console.log(n)
