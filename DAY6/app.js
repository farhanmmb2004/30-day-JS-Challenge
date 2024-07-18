//activity1
let arr=[1,2,3,4,5];
console.log(arr);
let first=arr[0];
let last=arr[4];
console.log(first+" "+last);
//activity2
arr.push(6)
console.log(arr);
arr.pop()
console.log(arr);
arr.shift(0);
console.log(arr);
arr.unshift(1);
console.log(arr);
//activity 3
let temp=arr.map((num)=>2*num);
console.log(temp);
let temp2=arr.filter(num=>num%2==0);
console.log(temp2);
let result=arr.reduce((num,ac)=>ac+num);
console.log(result);
//activity 4
for(let i=0;i<arr.length;i++){
console.log(arr[i]);
}
arr.forEach(element => {
    console.log(element);
});
//activity 5
let matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);
console.log(matrix[2][0]);
//---ended----//