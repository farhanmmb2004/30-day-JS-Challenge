class Person{
    constructor(name,age){
   this._name=name;
   this.age=age;
   }
   greet=()=>{
    console.log("hlw my name is "+this.name+" my age is "+this.age);
   }
   updateAge=(age)=>{
   this.age=age;
   console.log("age is updated : "+this.age);
   }
   get fullname(){
    return this._name+" "+"khan"
   }
   set name(newname){
   this._name=newname;
   }
}
let farhan=new Person("farhan",20);
// farhan.greet();
// farhan.updateAge(30);
class Student extends Person{
    static count=0;
    constructor(name,age,studentId){
        super(name,age);
        this.studentId=studentId;
        Student.count++;
    }
    student=()=>{ return this.studentId;}
    greet=()=>{
        console.log("hlw my name is "+this.name+" my age is "+this.age+" with my enrollment number is "+this.studentId);
    }
    static genericgreet=()=>{console.log("hello")}
}
let faiz=new Student("faiz",16,2200101);
faiz.name="fail"
console.log(faiz._name);
