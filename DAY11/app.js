{let promise=()=>new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve("resolved");
// },2000);
setTimeout(() => {
    reject("rejected");
},2000);
})
promise().then((messege)=>{
console.log(messege);
}).catch((error)=>{
console.error(error);
})}
{
let promise1=()=>new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve("promis1 resolved");
},2000);
})
let promise2=()=>new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promis2 resolved");
    },2000);
    })
    let promise3=()=>new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("promis3 reject");
        },2000);
        })
promise1().then((mesg)=>{
console.log(mesg);
return promise2()
}).then((mesg)=>{
console.log(mesg)
return promise3()
}).then((mesg)=>{
    console.log(mesg)
}).catch((error)=>{
console.error(error);
})
}{
    let promise=()=>new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("asynchronous resolved");
    },2000);
    });
    let temp=async()=>{
       try{
        let result=await promise();
        console.log(result);
       }catch(error){
        console.error(error);
       }

    }
    // temp();
}
  {  const fetchData=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            if(!response.ok){
            throw new Error(response.statusText);
            }
            return response.json();
        }).then((data)=>{
            console.log(data);
        }).catch((error)=>{
            console.error(error);
        })
    }
    // fetchData();
}
{
    const  fetchData=()=>{
       return fetch("https://jsonplaceholder.typicode.com/posts")
    }
    let temp=async()=>{
        try{
            let result=await fetchData();
        let data=await result.json();
        console.log(data);
        }catch(error){
        console.log(error);
        }
    }
    // temp();
}
{
    const fetchPost1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const fetchPost2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
const fetchPost3 = fetch("https://jsonplaceholder.typicode.com/posts/3");
let fetchall=async()=>{
    let responses=await Promise.all([fetchPost1,fetchPost2,fetchPost3]);
    let data=await Promise.all(responses.map(responses=>responses.json()));
    console.log(data);
}
// fetchall();
}
{
    const fetchPost1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
const fetchPost2 = fetch("https://jsonplaceholder.typicode.com/posts/2");
const fetchPost3 = fetch("https://jsonplaceholder.typicode.com/posts/3");
let fetchall=async()=>{
    let response=await Promise.race([fetchPost1,fetchPost2,fetchPost3]);
    let data=await response.json();
    console.log(data);
}
fetchall();
}