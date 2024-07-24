{
    function error(){
        throw new Error("error");
    }
    try{}//error()
    catch(error){
        console.log(error+" something went wrong");
    }
    function divider(num1,num){
    if(num===0){throw new Error("denominator cant be zero")}
    return num1/num;    
}
// console.log(divider(4,0));
}
{
    function divider(num1,num){
        if(num===0){throw new Error("denominator cant be zero")}
        return num1/num;    
    }
    try{
        console.log(divider(4,4));
    }
    catch(error){
    console.log(error);
    }
    finally{
        console.log("finally");
    }
}{
    class customError extends Error{
        constructor(messege){
            super(messege);
            this.name="customError";
        }
    }
    function throwError(){
    throw new customError("error occured");
    }
    // throwError();
    function checkInput(name){
    if(name.length===0){
    throw new customError("name cannot empty");
    }
    }
    try{
    // checkInput("");
    }
    catch(error){
   console.log(error);
    }
}
{
    let promise=()=>new Promise((resolve,rejected)=>{
    let random=Math.floor(Math.random()*10);
    if(random<=5){
    rejected("sorry promise got rejected");
    }
    resolve("promise resolved");
    })
    // promise.then((mesg)=>{
    //     console.log(mesg);}
    // )
    // .catch((error)=>{
    // console.log(error);
    // })
    let temp=async()=>{
        try{
            await promise();
        }
        catch(error){
       console.log(error);
        }
    }
    // temp();
}
{
    // fetch("https://invalidurl.com")
    // .then((response)=>response.json())
    // .then((data)=>{console.log(data)})
    // .catch((error)=>{
    //     console.log(error)
    // })
    let fetchdata=async()=>{
       try{
        let response=await fetch("https://invalidurl.com");
       let data=await response.json();
       console.log(data);
       }
       catch(error){
       console.log(error);
       }
    }
    fetchdata();
}