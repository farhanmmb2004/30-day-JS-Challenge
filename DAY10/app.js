    let helper=document.querySelector("#img");
    let img=document.querySelector("img");
    img.style.height="500px";
    img.addEventListener('dblclick',()=>{
    img.style.opacity=img.style.opacity==="1"?"0":"1";
    });
    let div=document.querySelector("#hover");
    div.addEventListener("mouseover",()=>{
       div.style.backgroundColor="yellow";
    });
    div.addEventListener("mouseout",()=>{
        div.style.backgroundColor="green";
     });
     let input=document.querySelector("input");
     input.addEventListener('keydown',(event)=>{
console.log(event.key);
     })
     input.addEventListener('keyup',(event)=>{
        console.log(event.target.value);
    })
    {
        let form =document.querySelector("form");
        form.addEventListener("submit",(e)=>{
        e.preventDefault();
        console.log("done");
        const name=document.querySelector("#name");
        const number=document.querySelector("#number");
            console.log("name"+" : "+name.value); 
            console.log("number"+" : "+number.value);
        });
        let drop=document.querySelector("#drop");
        let p=document.querySelector("#dropselect");
        drop.addEventListener('change',(e)=>{
        p.textContent=e.target.value;
        });
    }{
        let list=document.querySelector("#list");
        let todo=document.querySelector("#todo");
        let add=document.querySelector("#add");
        add.addEventListener('click',(e)=>{
            let temp=document.createElement('li');
            temp.textContent=todo.value;
            list.append(temp);
        });
        list.addEventListener('click',(e)=>{
            if(e.target.tagName==='LI'){
            console.log(e.target.textContent);
            }
        });
    }