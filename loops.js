// loops

const array = [0, 4, 10, 20,];

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// array = [0, 4, 10, 20,];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(sum)