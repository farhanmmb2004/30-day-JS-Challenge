var addTwoNumbers = function(l1, l2) {
    let carry=false;
    let temp1=l1;
    let temp2=l2;
    while(temp1!==null&&temp2!==null){
    let sum=temp1.val+temp2.val;
    if(carry){
    sum++;
    }
    if(sum>=10){
    carry=true;
    sum=sum-10;
    }
    else{
       carry=false;
    }
    temp1.val=sum;
    temp2.val=sum;
    temp1=temp1.next;
    temp2=temp2.next;
    }
    if(temp2===null){
    while(temp1!==null){
     let sum=carry?temp1.val+1:temp1.val;
     if(sum>9){
     carry=true;
     sum=0;
     }else{
       carry=false;
     }
     temp1.val=sum;
     temp1=temp1.next;
    }
    if(carry){
       let node=new ListNode(1);
   
       temp1=l1;
       while(temp1.next!==null){
       temp1=temp1.next;
       }
       temp1.next=node;
    }
   return l1
    }
    else{
    while(temp2!==null){
     let sum=carry?temp2.val+1:temp2.val;
     if(sum>9){
     carry=true;
     sum=0;
     }else{
       carry=false;
     }
     temp2.val=sum;
     temp2=temp2.next;
    }
    if(carry){
       let node=new ListNode(1);
   
       temp2=l2;
       while(temp2.next!==null){
       temp2=temp2.next;
       }
       temp2.next=node;
    }
    return l2;
    }
    return null;
   };