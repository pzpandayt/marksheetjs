let exam = prompt("enter your name")
console.log(exam)

let math = parseInt( prompt("enter your number (sub1)"))
let isl = parseInt( prompt("enter your number (sub2)"))
let urdu = parseInt( prompt("enter your number (sub3)"))
let pst = parseInt( prompt("enter your number (sub4)"))
let eng = parseInt( prompt("enter your number (sub5)"))

let obtainedmarks = math + isl + urdu + pst + eng;

let per = obtainedmarks/500*100;
console.log(per);

if(per >=90 && per <=100){
    console.log("your grade is A+1")
}

else if(per >=80 && per <=90){
    console.log("your grade is A+1")
}

else if(per >=70 && per <=80){
    console.log("your grade is A+1")
}

else if(per >=60 && per <=70){
    console.log("your grade is A+1")
}

else if(per >=50 && per <=60){
    console.log("your grade is A+1")
}

else if(per >=40 && per <=50){
    console.log("your grade is A+1")
}

else{
    console.log("FAIL")
}