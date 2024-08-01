{
    sessionStorage.setItem('key','farhan');
    // console.log(sessionStorage.getItem('key'));
    // console.log(sessionStorage);
    // sessionStorage.removeItem('key');
    // console.log(sessionStorage);
    let obj={
        name:"farhan",
        rollNo:2200101285
    }
    sessionStorage.setItem('obj',JSON.stringify(obj));
    let temp=JSON.parse(sessionStorage.getItem('obj'));
    // console.log(temp);
}{
    let form=document.querySelector('form');
    let handleSubmit=(e)=>{
        e.preventDefault();
        sessionStorage.setItem('name',document.querySelector('#name').value);
        sessionStorage.setItem('gmail',document.querySelector('#gmail').value);
    }
    let handleClick=()=>{
        console.log(sessionStorage.getItem('name'));
        console.log(sessionStorage.getItem('gmail')); 
    }
    // form.addEventListener('submit',handleSubmit);
    let click=document.querySelector('#click');
    // click.addEventListener('click',handleClick);
    // document.addEventListener('DOMContentLoaded',handleClick)
}
{
    function temp(key,value){
        localStorage.setItem(key,value);
        sessionStorage.setItem(key,value);
    }
    function retriev(key){
        console.log("local storage "+localStorage.getItem(key));
        console.log("session storage "+sessionStorage.getItem(key));
    }
    temp('name','farhan');
    retriev('name');
    function del(){
    localStorage.clear();
    sessionStorage.clear();
    console.log(localStorage);
    console.log(sessionStorage);
    }
    del();
}