function recursivefactorial(n){
      if(n==0){
            return  1
      }
      return n * recursivefactorial (n-1)
}
console.log(recursivefactorial(0));
console.log(recursivefactorial(1));
console.log(recursivefactorial(2));
console.log(recursivefactorial(3));