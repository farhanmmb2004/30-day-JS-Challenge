{let name=document.getElementById("name");
name.textContent=`taha  sa`;
name.style.backgroundColor="yellow"
console.log(name.innerHTML);
let group=document.getElementsByClassName("group");
group[0].style.backgroundColor="pink";
console.dir(group);
document.querySelector("body").removeChild(name);
document.querySelector("body").lastChild.removeChild(name);
}
let div=document.createElement('div');
div.textContent="this div is created by JS";
document.querySelector("body").appendChild(div);
let li=document.createElement("li");
li.textContent="list item";
document.querySelector("ul").append(li);
//activity 3,4 due
