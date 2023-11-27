function prime(num)
{
  for( i=2;i<num;i++)
    {
        if(num%i==0)
        {
         return false;
         break;
        }
    }
    if(i==num)
    {
return true;
}
}
let result= prime(23);
console.log(result)