

const stairCase = (n) => {
  
  for(let i = 1; i <= n; i++) {
    console.log("\x20".repeat(n - i) + "#".repeat(i))
  }
}

function staircase(n) {
  // Write your code here
  if (n == 1) {
    return console.log("#");
  }

  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }

}


stairCase(3);
// console.log('starte')
// console.log('#')
stairCase(4)
//stairCase(6)