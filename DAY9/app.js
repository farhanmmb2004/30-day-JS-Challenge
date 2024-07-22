{let name=document.getElementById("name");
name.textContent=`taha  sa`;
name.style.backgroundColor="yellow"
console.log(name.innerHTML);
let group=document.getElementsByClassName("group");
group[0].style.backgroundColor="pink";
document.querySelector("body").removeChild(name);
group[0].classList.add("clas");
console.dir(group[0].classList);
group[0].classList.remove("group");
console.dir(document.getElementsByClassName("clas")[0].classList);

}
let div=document.createElement('div');
div.textContent="this div is created by JS";
document.querySelector("body").appendChild(div);
let li=document.createElement("li");
li.textContent="list item";
document.querySelector("ul").prepend(li);
let list=document.querySelector("ul").children;
document.querySelector("ul").removeChild(list[list.length-1])
document.querySelector("img").src="https://images.pexels.com/photos/18749534/pexels-photo-18749534/free-photo-of-man-in-tank-top-throwing-basketball-ball.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
console.dir();
{
    let btn=document.querySelector("button");
    let p=document.querySelector("#discription");
    let change=()=>{
        p.textContent="the dicription is changed";
    }
    btn.addEventListener("click",change)
    p.style.display="flex";
    p.addEventListener("mouseenter",()=>{
        p.style.border="2px solid black";
    })
    p.addEventListener("mouseleave",()=>{
        p.style.border="";
    })
}