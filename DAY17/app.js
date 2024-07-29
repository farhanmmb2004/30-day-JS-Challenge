{
    class Node{
        constructor(data){
        this.data=data;
        this.next=null;
        }
    }
    class LL{
        constructor(){
            this.head=null;
            this.tail=null;
        }
       add(data){
        let temp=new Node(data)
        if(this.head===null){
        this.head=temp;
        this.tail=temp;
        }
        else{
            this.tail.next=temp;
            this.tail=temp;
        }
        }
        remove(){
            if(this.head===this.tail){
             this.head=null;
             this.tail=null;
            return;
            }
            if(this.head===null){
           console.error("Its simply not possible");
            }
            else{
                let temp=this.head;
                while(temp.next!==this.tail){
                temp=temp.next;
                }
                this.tail=temp;
                this.tail.next=null;
            }
        }
        list(){
            let temp=this.head;
            while(temp!=null){
             console.log(temp.data);
             temp=temp.next;
            } 
        }
    }
    let l=new LL();
    // l.add(3);
    // l.add(2);
    // l.add(4);
    // l.remove();
    // l.add(8);
    // l.add(10);
    // l.remove();
    // l.list();
}
{
class stack{
    constructor(){
        this.top=-1;
        this.list=[];
    }
    isEmpty(){
        if(this.top===-1){
        return true;
        }
        return false;
    }
    peek(){
    if(this.isEmpty()){
    console.error("stack is empty");
return;    
}
    console.log(this.list[this.top]);
    }
    push(data){
        this.top++;
        this.list.push(data);
    }
    pop(){
        if(this.isEmpty()){
    console.error("stack is empty");
    }
        let temp=this.list[this.top];
        this.top--;
        this.list.pop();
        return temp;
    }
}
// let s=new stack();
// s.push(2);
// s.push(3);
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.isEmpty());
// s.peek();
function reverse(str){
let s=new stack();
for(let i=0;i<str.length;i++){
s.push(str[i]);
}
let ans="";
while(!s.isEmpty()){
ans=ans+s.pop();
}
return ans;
}
// console.log(reverse("farhan"));
}