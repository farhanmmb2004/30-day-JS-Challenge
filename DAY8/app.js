{
    let age=50;
    let name="suleman";
    let string=`${name} ${age}`;
    console.log(string);
    let intro=`helw sir 
    i just wanted to inform u that due to my last year back i will not able to join your componey on time
    so hope u understood the matter!
    thankyou! 
    `
    console.log(intro);
}
{
    let num=[1,2,3,4,5,6];
    let [first,second]=num;
    console.log(first);
    console.log(second);
    let info={
        name:"farhan",
        clas:"cse3",
        enrollment:2200101285
    }
    const{name,clas}=info;
    console.log(name +" "+clas)
}
{
    let num=[2,4,3,23,56,32];
    let spr=[...num,5,1];
    console.log(spr);
    function sum(...args){
    return args.reduce((ac,ele)=>ac+ele);
    }
    console.log(sum(...spr));
}
{
    let multiplier=(a,b=1)=>a*b;
    console.log(multiplier(67,57));
    console.log(multiplier(5));
}
{
    let name="farhan"
    function greet(){
        console.log("helw sir");
    }
    let intro={
        name,greet
    }
    console.log(intro);
    let key="name";
    let value="farhan";
    let obj={
        [key]:value
    }
    console.log(obj);
}