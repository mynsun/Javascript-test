const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums1 = nums.filter((num) => {
  return num % 3 === 0;
});
console.log(nums1);
const nums2 = nums1.map((num) => {
  return num * 2;
});
console.log(nums2);

const result = nums2.reduce((acc, cur) => {
  return acc + cur;
}, 0);
console.log(result);

const total = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter((num) => num % 3 === 0)
  .map((num) => num * 2)
  .reduce((acc, cur) => acc + cur, 0);
console.log(total);
