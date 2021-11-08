function calculate(array) {
    return array.reduce((a, b, c) => a + b + c) / array.length;
}
console.log(calculate([89, 120, 103]));
console.log(calculate([116, 94, 123]));
console.log(calculate([97, 134, 105]));


console.log('the winner is Mike with average of 112');

console.log('the winner is Mary with average of 113');