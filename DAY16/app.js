{
    function fac(num){
    if(num==1){
    return 1;
    }
    return num*fac(num-1);
    }
    // console.log(fac(5));
    function fib(n){
    if(n===0||n===1){
    return n;
    }
    return fib(n-1)+fib(n-2);
    }
    // console.log(fib());
}{
    function arraySum(nums,i=0){
    if(nums.length<=i){
    return 0;
    }
    return nums[i]+arraySum(nums,++i);
    }
    let nums=[-1];
    // console.log(arraySum(nums));
    // console.log(nums.reduce((ac,ele)=>ac+ele));
    function findMax(nums,i=0){
        if(nums.length<=i){
            return -6666666666666666;
            }
            return Math.max(nums[i],findMax(nums,++i));
    }
    console.log(findMax(nums));
}
{
    function reverse(s,i=0){
    if(i>=s.length){
    return "";
    }
    return reverse(s,i+1)+s[i];
    }
    // console.log(reverse("zyx nahraf"));
    function palindrom(s,i=0){
    if(i>=s.length/2){
    return true;
    }
    if(s[i]!==s[s.length-i-1]){
    return false;
    }
    return palindrom(s,i+1);
    }
    // console.log(palindrom("farhan"));
}{
    function binarySearch(nums,target,i=0,j=nums.length-1){
        if(i>j){
        return -1;
        }
    let mid=(j+i)/2;
    if(nums[mid]>target){
    return binarySearch(nums,target,i,mid-1);
    }
    else if(nums[mid]<target){
       return binarySearch(nums,target,mid+1,j);
    }
    else{
        return mid;
    }
    }
    // console.log(binarySearch([1,2,3,4,5,6,7],2));
    function countTarget(nums,target,i=0,count=0){
    if(nums.length===i){
    return count;
    }
    if(nums[i]===target){
    count++;
    }
    return countTarget(nums,target,i+1,count);
    }
    console.log(countTarget([1,2,4,3,2,2,2,2],1));
}
