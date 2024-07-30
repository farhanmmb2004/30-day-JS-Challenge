{
    function selection (nums,n=nums.length){
    for(let i=0;i<n;i++){
        let min=i;
    for(let j=i+1;j<n;j++){
    if(nums[min]>nums[j]){
    min=j;
    }
    }
    let temp=nums[min]
    nums[min]=nums[i];
    nums[i]=temp
    }
    return nums;
    }
//   console.log(selection([4,3,2,6]));
}
{
    function merge(nums1,nums2,n1=nums1.length,n2=nums2.length){
    let ans=new Array(n1+n2);
    let i=0;
    let j=0;
    let k=0;
    while(i<n1&&j<n2){
    if(nums1[i]>nums2[j]){
    ans[k++]=nums2[j++];
    }
    else{
        ans[k++]=nums1[i++];  
    }
    }
    while(i<n1){
        ans[k++]=nums1[i++];
    }
    while(j<n2){
        ans[k++]=nums2[j++];
    }
    return ans;
    }
    console.log(merge([2,4,6,8],[1,4,5,7]));
}
{
    function count(s){
    let count={};
    for(let i=0;i<s.length;i++){
    if(count[s[i]]){
    count[s[i]]++;
    }
    else{
        count[s[i]]=1;
    }
    }
    return count;
    }
    console.log(count("tera mera rishta purana"));
}
{
    function substr(s,n=s.length){
        let l=0;
        let r=0;
        for(let i=0;i<n;i++){
     let count={};
     for(let j=i;j<n;j++){
     if(count[s[j]]){
     break;
     }
     else{
        count[s[j]]=1;
        if(j-i>r-l){
        r=j;
        l=i;
        }
     }
     }
     }
     return s.slice(l,r+1);
    }
    console.log(substr("king kohli"));
}
{
    function fib(n,dp={}){
    if(n==1){
    return 0;
    }
    else if(n==2){
    return 1;
    }
        if(dp[n]){
    return dp[n];
    }
     dp[n]=fib(n-1,dp)+fib(n-2,dp);
     return dp[n];
    }
    // console.log(fib(1));
    // console.log(fib(2));
    // console.log(fib(3));
    // console.log(fib(4));
    // console.log(fib(5));
    // console.log(fib(6));
    // console.log(fib(7));
}
{
    function solve(w,value,ans,wt,limdp={}){
    
    }
}