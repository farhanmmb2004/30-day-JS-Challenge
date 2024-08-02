{
    var reverse = function(x) {
        let temp=x
        if(x<0){
        temp=0-temp;
        }
        let str=temp.toString();
        let ans="";
        for(let i=str.length-1;i>=0;i--){
            ans+=str[i];
        }
        ans=parseInt(ans);
        if(x<0){
        return 0-ans;
        }
        return ans;
    };
}
{
    
}