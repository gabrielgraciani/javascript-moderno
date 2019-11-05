console.log('01)', '1' == 1);
console.log('02)', '1' === 1);
console.log('03)', '1' != 1);
console.log('04)', '1' !== 1);
console.log('05)', 1 < 2);
console.log('06)', 1 > 0);

const d1 = new Date(0);
const d2 = new Date(0);

console.log('07)', d1 === d2);
console.log('08)', d1 == d2);
console.log('09)', d1.getTime() === d2.getTime());