// Write a JavaScript function which says whether a number is perfect
let num = 6;
let sum = 0;
for (let i = 1; i <= num / 2; i++) {
  if (num % i == 0) {
    sum = sum + i;
  }
}

if (sum == num) {
  console.log(num + " " + "is perfect number");
} else {
  console.log(num + " " + "is perfect number");
}
