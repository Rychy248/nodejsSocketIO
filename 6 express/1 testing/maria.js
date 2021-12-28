/*
* Tengo 3 primas: Maria, maricela y marcela todas menores de 23 años y la suma de sus edades es igual a 30.
* Sabiendo que sus edades son numeros primos, ¿Cual es la edad de cada una de ellas?
*/
console.clear();

function isPrime(num){
 let isPrime = true, divisors = 0;
 for(let i=1;i<=num;i++){
  if(num%i === 0){ divisors += 1; };
  if(divisors > 2){ isPrime = false; break; };
 };
 return isPrime;
};

function findPrimes(limit){
 let primes = [];
 for(let i=1;i<=limit;i++){
  if(isPrime(i)){ primes.push(i) };
 };
 return primes;
};

console.log("Numeros primos entre 1 y 23: "+findPrimes(23))+"\n";

function find(listNums, numWhished){
 let numsUsed = [];

 break_loops:

 for(let i=0;i<listNums.length;i++){
  for(let j=1;j<listNums.length;j++){
   for(let ii=2;ii<listNums.length;ii++){
     if((listNums[i]+listNums[j]+listNums[ii]) === numWhished){
	if(!(listNums[i] === 23 || listNums[j] === 23 || listNums[ii] === 23)){
	  if(!(listNums[i]==listNums[ii] || listNums[i]==listNums[j] || listNums[ii] == listNums[j])){
	   numsUsed.push(listNums[i],listNums[j],listNums[ii]);
           break break_loops;
          };
        };
     };
   };
  };
 };
 if(numsUsed.length === 0){ return "No hay una combinación que de "+numWhished; };
 return numsUsed;
};
console.log("Los numeros que dan 30 son:")
console.log(find(findPrimes(23),30));
