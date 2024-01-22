// let grade = prompt ("enter your grade")

// let result = grade == "A" || grade == "B" || grade == "C" ? "PASS" : "FAIL";
// console.log(result)

let grade = prompt ("enter your grade")

let per = prompt ("enter your percentage")

let result = grade == "A" && per == "90" || grade == "B" && per == "80" || grade == "C" && per == "70" ? "pass" : "fail";
console.log(result)

function hello (){
    console.log("Hello World");
}

hello()
hello()

// function with parametera

// function person (name , age , grade){
//     return name + "" + age + "" + grade;
// }

// let myValues = person("ali" , 58 , "D")
// console.log(myValues);

function sum (a,b){
    console.log(`the sum of a + b is ${a+b}`)
}

sum(50,25)

function person (name , age , grade , c1 , c2 , c3 , c4 , c5){
    return name + " " + age + " " + grade + " " + c1 + " " + c2 + " " + c3 + " " + c4 + " " + c5;
}

let myValues = person ("shahbaz" , 16 , "D" , "html" , "js" , "bootstrap" , "ui-ux" , "pjs")
console.log(myValues);

//game
let gameNum = 85;
let userNum = prompt ("enter your number");
while(userNum != gameNum){
    userNum = prompt("you guess the wrong number : Guess Again")
}
