{
    let book={
    title:"ramcharitmanas",
    author:"tulsidas",
    year:"200BC",
    details:function(){
    return this.author+" "+this.title;
    },
    changeYear:function(year){
        this.year=year;
    console.log(this.year);
    }
}
console.log(book);
let title=book.title;
let author=book.author;
console.log(title);
console.log(author);
console.log(book.details());
book.changeYear(2000);
// for(i in book){
// console.log(`${i}:${book[i]}`);
// }
Object.keys(book).forEach(key=>{
    console.log(book[key]);
});
Object.values(book).forEach(value=>{
    console.log(value);
});
}
{
    let library={
        name:"williom",
        books:["abc","xyz","ijk"],
        horn:{
        good:true
        }
    }
    console.log(library);
    let name=library.name;
    let book=library.books;
    console.log(name+" "+book);

}
