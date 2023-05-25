function recursiveFibo(n){
      if(n<2){
            return n
      }
      return recursiveFibo(n-1)+recursiveFibo(n-2)
}
console.log(recursiveFibo(7));
console.log(recursiveFibo(6));
console.log(recursiveFibo(3));
console.log(recursiveFibo(4));
//2^n TIME COMPLEXITY