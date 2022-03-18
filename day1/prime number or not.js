let a=43;
let flag=true;
if(a==1)
console.log('1 is neother prime nor composite')
else if(a>1)
{
    for(i=2;i<a;i++)
{
    if(a%i==0){
        flag=false;
        break;
}
}
if(flag)
{
    console.log('%d is a prime number',a)
}
else
{
    console.log('%d is not a prime number',a)
}
}
else
{
console.log('the number is not prime')
}