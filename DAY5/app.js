//activity 1
function numbercheck(num){
num%2==0?console.log("even"):console.log("odd");
}
numbercheck(5);
function square(num){
return num*num;
}
console.log(square(5));
//activity 2
let greater=function check(a,b){
return a>b?a:b;
}
console.log(greater(5,3));
let join =function temp(a,b){
return a+b;
}
console.log(join("hello"));
//activity 3
let adder=(a,b)=>a+b;
console.log(adder(5,4));
let checker=(a,b)=>{
    for(let i=0;i<a.length;i++){
    if(a.charAt(i)===b){
    return true;
    }
    }
    return false;
}
console.log(checker("farhan khan",'k'));
//activity 4
let multiplier=(a,b=6)=>a*b;
console.log(multiplier(5,7));
let greet=(name,age=19)=>console.log(`helw young age ${age} Mr ${name} `);
greet("farhan");
//activity 5
let func=()=>console.log("func called");
let HOF1=(a,func)=>{
for(let i=1;i<=a;i++){
func();
}
}
HOF1(5,func);
let random=(bund)=>Math.floor(bund*Math.random());
let HOF2=(a,random,HOF1)=>{
HOF1(random(a),func);
}
HOF2(10,random,HOF1);