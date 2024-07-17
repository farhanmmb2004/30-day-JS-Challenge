for(let i=1;i<=10;i++){
console.log(i);
}
{let num=5;
for(let i=1;i<=10;i++){
console.log(i*num);
}
}
{let num=1;
let sum=0;
while(num<=10){
sum+=num;
num++;
}
console.log(sum);}
{
    let num=10;
    while(num>=1){
console.log(num);
num--;
    }
}
{
    let num=5
    do{
    console.log(num);
    num--;
    }while(num>=1)
}
{
    let num=10;
    let ans=1;
    do{
    ans=ans*num;
    num--;
    }while(num>=1)
console.log(ans);
}
{
    let a="*"
    for(let i=1;i<=5;i++){
        let ans="";
        for(let j=1;j<=i;j++){
        ans=ans+"*";
        }
        console.log(ans);
    }
}