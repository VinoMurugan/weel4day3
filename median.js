const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

//array
let sortedNum = nums.slice().sort((a,b) => a - b);

//find the median
let middleIndex = Math.floor(sortedNum.length / 2);
let median;

if (sortedNum.length % 2 === 0) {
    median  = (sortedNum[middleIndex - 1]+ sortedNum[middleIndex]) / 2;

}else{
    median = sortedNum[middleIndex];
}
console.log(median);