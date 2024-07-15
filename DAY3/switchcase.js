let day=9;
switch(day){
case 1:
    console.log("monday");
    break;
case 2:
    console.log("tuesday");
    break;
case 3:
    console.log("wednessday");
    break;
case 4:
    console.log("thursday");
    break;
case 5:
    console.log("friday");
    break;
case 6:
    console.log("saturday");
    break;
case 7:
    console.log("sunday");
    break;
default: console.log("wrong number");
}
//--task 2--
let marks=80;
let grade;
switch(true){
case marks>=90:
    grade="O";
    break;
case marks>=80:
    grade="A";
    break;
case marks>=70:
    grade="B";
    break;
case marks>=33:
    grade="c";
    break
default :grade="d";
}
console.log(grade);
//activity 4
let num=8
num%2==0?console.log("even"):console.log("odd");
//leap year//
let year=1;
let bool
if(year%400==0){
bool=true;
}
else if(year%100==0){
bool=false;
}
else if(year%4==0){
bool=true;
}
else{
    bool=false;
}
bool?console.log("is leapYear"):console.log("not leapyear");