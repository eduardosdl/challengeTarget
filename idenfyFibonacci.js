const numberToCheck = 10;

function checkFibonacci(number) {
  let n1 = 0,
    n2 = 1,
    n3 = 0;

  if (number == 0) {
    console.log("O numero 0 faz parte da sequencia fibonacci");
  }

  while (number > n3) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
  }

  if (number == n3) {
    console.log(`O Numero ${number} faz parte da sequencia fibonacci`);
  } else {
    console.log(`O numero ${number} nao faz parte da sequencia fibonacci`);
  }
}

checkFibonacci(numberToCheck);
