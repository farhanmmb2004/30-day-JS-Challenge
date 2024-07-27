{function outer(){
    let count=0;
    return {
        increment:function(){
            count++;
        },
        get:function(){
        return count;
        }
    };
}
let inner=outer();
inner.increment();
console.log(inner.get());
}
{
function generator(){
    let id=null;
    function generatId(){
        return id=Math.floor(Math.random()*10000);
    }
    function newId(){
    if(id===null){
    return generatId();
    }
    else{
        return ++id;
    }
    }
return newId;
}
// let newId=generator();
// console.log(newId());
// console.log(newId());
// console.log(newId());
// console.log(newId());
function greet(){
   function greetname(name){
    console.log(`hey ${name}`);
   }
   return greetname;
}
let greetname=greet();
greetname("farhan");
}{
    function temp() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(
                (function(i) {
                    return function() {
                        console.log(i);
                    }
                })(i) // Immediately Invoked Function Expression (IIFE) to capture the current value of i
            );
        }
        return arr;
    }
    
    let arr = temp();
    arr[0]();
    arr[3]();
}
{
    let itemmanager=()=>{
        let items=[];
        function addItems(item){
        items.push(item);
        }
        function removeItems(item){
        let i=items.indexOf(item);
        if(i!==-1){
            items.splice(i,1);
            console.log("removed:" + item);
        }
        else{
            console.error("item not found");
        }
        }
        function listitem(){
            console.log(items);
        }
        return {
            list:listitem,
            add:addItems,
            remove:removeItems
        }
    }
//     let item=itemmanager();
//     item.add("banana");
//     item.list();
//     item.remove("banana");
//     item.list();
//     item.remove("apple");
// }
}
{
    function factorial(num){
let cach={};
 const helper=(num)=>{
    if(num in cach){
     return cach[num];
    }
 if(num===0||num===1){
 cach[num]=num;
 return num;
 }
 let temp=num*helper(num-1);
 cach[num]=temp;
 return temp;
 }
 return helper(num);
    }
console.log( factorial(7));
}