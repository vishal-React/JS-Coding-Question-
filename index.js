// -----------------------------STRING------------------------------

//                    reverse string

// const str = "vishal gupta";
// 1 way
// const strArr = str.split("").reverse().join("");
// console.log(strArr);
// // 2 way
// let revStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   revStr += str[i];
// }
// console.log(revStr);

//                    combine two word alternative

// const str1 = "vishal"
// const str2 = "gupta"
// let altStr = ''
// for(let i = 0 ;i < Math.max(str1.length ,str2.length) ; i++){
//     altStr += (str1[i] ?? '') + (str2[i] ?? '')
// }
// console.log(altStr)

//                              capitalize first leter of a word

// const str = 'vishal gupta'
// const strArr = str.split(" ")
// let capStr = ''
// for(word of strArr){
//     capStr += word[0].toUpperCase() + word.slice(1) + " "
// }
// console.log(capStr)

//                              frequency of alphabet

// const str = "vishal guptaG@";
// const obj = {};
// for (let i = 0; i < str.length; i++) {
//     if(char.charCodeAt(str[i]) === Number){
//         obj[str[i]] = (obj[str[i]] || 0) + 1;
//     }
// }
// console.log(obj);
// console.log('ab'.charCodeAt(1))

//                              vowels frequency

// const vol = ["a","e","i","o","u"]
// const str = "vishal gupta A"
// let obj = {}

// for(let i = 0; i < str.length ; i++){
//     const cha = str[i].toLowerCase()
//     if(vol.includes(cha)){
//         obj[cha] = (obj[cha] || 0) + 1
//     }
// }
// console.log(obj)

//                              palindrome

// 1 way
// const str = "momfvbhfsd";
// const revStr = str.split("").reverse().join("");

// if (str === revStr) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 2 way
// const str = "madam";
// const palindromeFunction = () => {
//   let reverseStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i];
//   }
//   return str === reverseStr;
// };
// console.log("palindromeFunction", palindromeFunction());

// 3 way      two poniters
// const str = "madam";

// const isPlaindrome = () => {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// };

// console.log("isPlaindrome", isPlaindrome());

///////////////////////////////////////////////////
// const str = "aBaAbBcCC";

// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str.length - 1 === i) continue;
//   if (str[i] === str[i + 1].toLowerCase()) {
//     count += 1;
//   }
// }
// console.log(count);

// const str = "AAAaaBbCcCCC";

// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === str[i].toUpperCase()) {
//     for (let j = i - 1; j >= 0; j--) {
//       if (str[j] === str[i].toLowerCase()) {
//         count += 1;
//         break;
//       }
//     }
//   }
// }
// console.log(count);
// ------------------------------------Array----------------------

//                      fibonacci

// 1 way

// const fib = (n)=>{
//     const arr = [0, 1];
//     for(let i = 2 ; i < n ; i++){
//         arr.push(arr[arr.length - 1] + arr[arr.length - 2])
//     }
//     return arr
// }
// console.log(fib(10))

// 2 way

// let arr = [0,1]
// const fib = (n)=>{
//     if(n===2) return arr
//     arr.push(arr[arr.length - 2] + arr[arr.length - 1])
//     return fib(n-1)
// }
// console.log(fib(5))

//                         factorial

// 1 way

// const fact = (n) => {
//   let res = 1;
//   for (let i = 1; i <= n - 1; i++) {
//     res = res * i;
//   }
//   return res;
// };
// console.log(fact(10));

// 2 way

// const fact = (n) => {
//   if (n === 1) return n;
//   return fact(n - 1) * n;
// };
// console.log(fact(5));

//                          remove duplicates number

// 1 way

// const arr = [1, 2, 3, 4, 5, 1, 2, 3];
// const newArr = [...new Set(arr)]
// console.log(newArr)

// 2 way

// const newArr = arr.filter((elm, i, arr) => i === arr.indexOf(elm));
// console.log(newArr);

// 3 way
// const arr = [1, 2, 3, 4, 5, 1, 2, 3];

// const obj = {};
// for (let i = 0; arr.length > i; i++) {
//   obj[arr[i]] = arr[i];
// }
// const val = Object?.values(obj);
// console.log(obj);
// console.log("val", val);

// 4 way
// const arr = [1, 2, 3, 4, 5, 1, 2, 3];
// const newArr = [];
// for (let i = 0; arr.length > i; i++) {
//   if (newArr?.includes(arr[i])) continue;
//   newArr?.push(arr[i]);
// }
// console.log(newArr)

// 5 way Remove Duplicates from Sorted Array two pointer
// Input:  [0,0,1,1,1,2,2,3,3,4]
// Expected:
// 5
// [0,1,2,3,4]

// left → points to the position of the current/last unique value
// right → moves through the array to find the next unique value

// const arr = [0, 1, 3, 4, 4, 5];
// let left = 0;

// for (let right = 1; right < arr.length; right++) {
//   if (arr[left] !== arr[right]) {
//     arr[left + 1] = arr[right];
//     left++;
//   }
// }

// arr.length = left + 1;
// console.log("left", left);
// console.log("arr", arr.length);
// console.log("arr", arr);

//                              find duplicate number

// const arr = [1, 2, 3, 4, 1, 2];
// const obj = {};
// const duplicateArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (obj[arr[i]] !== undefined) {
//     duplicateArr.push(arr[i]);
//   } else {
//     obj[arr[i]] = arr[i];
//   }
// }
// console.log("obj", obj);
// console.log("duplicateArr", duplicateArr);

//                              swap the number

// let a = 10;
// let b = 20;

// 1 way

// [a, b] = [b, a];

// 2 way

// let temp = a;
// a = b;
// b = temp;

// console.log("a", a);
// console.log("b", b);

//                              swap the array element

// let arr = [1, 2, 3, 4, 5];
// 1 way
// [arr[0], arr[4]] = [arr[4], arr[0]];
// 2 way
// let temp = arr[0]
// arr[0] = arr[4]
// arr[4] = temp

// console.log(arr);

//                              sort number

// 1 way

// const arr = [1, 2, 3, 4, 5, 6, 2, 3, 4];

// const sortedArray = arr.sort((a,b)=>a-b)
// console.log(sortedArray)

// 2 way

// const arr = [1, 10, 5, 4, 3, 1];

// for (let i = 0; i < arr.length; i++) {
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
// }
// console.log(arr);

//                         largest number from array

// 1 way

// const arr = [1,2,3,6,4,5,6,2]
// console.log(Math.max(...arr))

// 2 way

// const arr = [1, 2, 3, 6, 4, 5, 6, 2];
// const sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr[arr.length - 1]);

// 3 way
// const arr = [1, 2, 3, 6, 4, 5, 6, 2];

// for (let i = 0; arr.length > i; i++) {
//   for (let j = i + 1; arr.length > j; j++) {
//     if (arr[i] > arr[j]) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
// }
// console.log(arr[arr.length - 1]);

//                          second largest number from array

// 1 way

// const arr = [1, 2, 3, 6, 4, 5, 6, 2];
// const unqiueArr = [...new Set(arr)]?.sort((a, b) => a - b);
// console.log(unqiueArr[unqiueArr.length - 2]);

// 2 way

// const arr = [7, 2, 3, 6, 4, 5, 6, 2, 1];
// const uniqueArr = arr.filter((elm, i) => arr.indexOf(elm) === i);
// for (let i = 0; uniqueArr?.length > i; i++) {
//   for (let j = i + 1; uniqueArr?.length > j; j++) {
//     if (uniqueArr[i] > uniqueArr[j]) {
//       [uniqueArr[i], uniqueArr[j]] = [uniqueArr[j], uniqueArr[i]];
//     }
//   }
// }
// console.log(uniqueArr[uniqueArr.length - 2]);

// 3 way

// const arr = [0, 7, 3, 7];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     secondLargest = largest;
//     largest = arr[i];
//   } else if (arr[i] > secondLargest && arr[i] !== largest) {
//     secondLargest = arr[i];
//   }
// }

// console.log("largest:", largest);
// console.log("secondLargest:", secondLargest);

//                          make the array unique and the length will be same

// 1 way

// const arr = [2, 2, 1, 3, 2, 2, 3, 9, 4, 5, 5];
// const output = [arr[0]];

// const recurFuction = (n) => {
//   const exist = output.includes(n);
//   if (exist) {
//     recurFuction(++n);
//   } else {
//     output.push(n);
//   }
// };

// for (let i = 1; i < arr.length; i++) {
//   recurFuction(arr[i]);
// }
// console.log(output);
// console.log("arr?.length", arr?.length);
// console.log("output.length", output.length);

// 12345671

// 2 way
// const arr = [2, 2, 100, 1, 3, 2, 2, 3, 9, 4, 5, 5, 2, 101];
// const output = [arr[0]];

// for (let i = 1; i < arr.length; i++) {
//   const exist = output.includes(arr[i]) && Math.max(...output) + 1;
//   output.push(exist || arr[i]);
// }
// console.log(output);
// console.log("arr?.length", arr?.length);
// console.log("output.length", output.length);

// let gap = 10;
// let requestIds = ["r1", "r2", "r2", "r1", "r3", "r2"];
// let timestamps = [101, 104, 110, 132, 144, 150];

// const retryCountfunction = (requestIds, timestamps, gap) => {
//   let obj = {};
//   let retryCount = 0;

//   for (let i = 0; i < requestIds?.length; i++) {
//     if (!obj[requestIds[i]]) {
//       obj[requestIds[i]] = [];
//     }
//     obj[requestIds[i]]?.push(timestamps[i]);
//   }
//   console.log("obj", obj);

//   for (requestId in obj) {
//     const timestampArr = obj[requestId];
//     if (timestampArr?.length >= 2) {
//       console.log(timestampArr);
//       for (let j = 0; j < timestampArr?.length; j++) {
//         if (j === timestampArr?.length - 1) break;
//         if (timestampArr[j + 1] - timestampArr[j] <= gap) {
//           retryCount++;
//         }
//       }
//     }
//   }
//   return retryCount;
// };

// console.log(
//   "retryCountfunction",
//   retryCountfunction(requestIds, timestamps, gap),
// );

//                          find smallest degree of clock based on hour and minute

// 1hr = 30 degree
// 1min = 6 degree

// const timeBasedDegree = (hr, min) => {
//   const hrDegree = hr * 30 + min * 0.5;
//   const minDegree = min * 6;
//   const degree = Math.abs(hrDegree - minDegree);
//   const alterDegree = 360 - degree;
//   if (alterDegree > degree) {
//     return degree;
//   } else {
//     return alterDegree;
//   }
// };

// console.log("timeBasedDegree", timeBasedDegree(12, 0));

//                        valid parentheses
//   Valid:
//   ()
//   []
//   {}
//   ()[]{}
//   {[]}
//   [{()}]
//   {}[]

//   Invalid:
//   {[}
//   ([)]
//   {]
//   [(])
//   {}[
//   }{}

// so the only true is when the opening and closing are exist and in order if other parentheses exist in between and that are not in correct order so that also false

// approach we have to ittrate on parentheses and if opening bracket than push it in array else if closing bracket than check the arr last index element that match the exact opening bracket with closing bracket if not match than it is not valid cause we dont have to push closing bracket in arr if match than pop it and in end if arr length is empty means it is valid for this case {}[

// const str = "[{()}]";

// const validParentheses = (str) => {
//   const arr = [];

//   const obj = {
//     "{": "}",
//     "[": "]",
//     "(": ")",
//   };

//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       arr.push(str[i]);
//     } else if (obj[arr.pop()] !== str[i]) {
//       return false;
//     }
//   }
//   return arr.length === 0;
// };

// console.log("validParanthese", validParentheses(str));

//                             two sum
// const nums = [1, 2, 3, 4, 2];
// const target = 6;
//// output return index of array that sum of target
//    1 way
// const twoSum = () => {
//   for (let i = 0; i < nums.length - 1; i++) {
//     const curVal = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (curVal + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };
// console.log("twoSum", twoSum());

//    2 way  hashmap
// const twoSum = () => {
//   const map = {};

//   for (let i = 0; i < nums.length; i++) {
//     const need = target - nums[i];

//     if (map[need] !== undefined) {
//       return [map[need], i];
//     }

//     map[nums[i]] = i;
//   }

//   return [];
// };

// console.log("twoSum", twoSum());
// 3 way  two pointer if array is sorted
// const numbers = [2, 7, 11, 11, 15];
// const target = 22;

// function twoSum() {
//   let left = 0;
//   let right = numbers.length - 1;

//   while (right > left) {
//     const sum = numbers[left] + numbers[right];
//     if (sum === target) return [++left, ++right];
//     if (sum > target) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return [];
// }
// console.log("twoSum", twoSum());

//                   sum of array
// const arr = [1, 2, 3];
// 1 way
// const res = arr.reduce((acc, elm) => acc + elm, 0);
// console.log(res);

// 2 way

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log("sum", sum);

//                    Maximum Subarray Sum

// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let maxSubArraySum = arr[0];
// let maxSubArraySum = Math.max(...arr);
// 1 way
// for (let i = 0; i < arr.length; i++) {
//   let curr = arr[i];
//   if (curr > maxSubArraySum) {
//     maxSubArraySum = curr;
//   }
//   if (i === arr.length - 1) break;

//   for (let j = i + 1; j < arr.length; j++) {
//     curr += arr[j];
//     if (curr > maxSubArraySum) {
//       maxSubArraySum = curr;
//     }
//   }
// }

// console.log(maxSubArraySum);

//  2 way kadane algo
// const arr = [-2, -2, -3, -1];
// let currSum = arr[0];
// let maxSum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   currSum = Math.max(
//     arr[i], // start new subarray
//     currSum + arr[i], // continue old subarray
//   );
//   // currsum will update every time but max sum update if cuurSum is greater than maxsum
//   maxSum = Math.max(maxSum, currSum);
// }

//                        Merge Two Sorted Arrays
// arr1 = [1, 3, 5];
// arr2 = [2, 4, 6];

// Output: [1, 2, 3, 4, 5, 6];
// const arr1 = [1, 3, 5, 8, 9];
// const arr2 = [2, 4, 6];

// const mergeSortArray = () => {
//   const mergeArray = [];
//   let i = 0;
//   let j = 0;
//   // compare both array value with 0 index which ever value small push it mergeArray and increase the pointer of that array in which we get small value
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       mergeArray.push(arr1[i]);
//       i++;
//     } else {
//       mergeArray.push(arr2[j]);
//       j++;
//     }
//   }
//   // push remaining array value if contain
//   while (i < arr1.length) {
//     mergeArray.push(arr1[i]);
//     i++;
//   }
//   // push remaining array value if contain
//   while (j < arr2.length) {
//     mergeArray.push(arr2[j]);
//     j++;
//   }

//   return mergeArray;
// };

// console.log("mergeSortArray", mergeSortArray());

//                            First Non-Repeating Character

// Input: "aabbcde"
// Output: "c"

// const str = "aabbcde";
// const obj = {};

// const getNonRepeatChar = () => {
//   for (char of str) {
//     obj[char] = (obj[char] || 0) + 1;
//   }
//   console.log("obj", obj);
//   for (char of str) {
//     if (obj[char] === 1) {
//       return char;
//     }
//   }
// };
// console.log("getNonRepeatChar", getNonRepeatChar());

// Output: true

//                              Find Missing Number
// Input: [1,2,3,5]
// Output: 4

// 1 way
// const arr = [1, 2, 3, 5, 10];
// const maxNum = Math.max(...arr);
// const minNum = Math.min(...arr);
// let index = 0;
// const missingNumber = [];
// for (let i = minNum; i < maxNum; i++) {
//   const findNumber = arr.find((elm) => elm === i);
//   if (!findNumber) {
//     missingNumber.push(i);
//   }
//   index++;
// }

// console.log("missingNumber", missingNumber);

// 2 way
// const arr = [-4];
// const missingNumberFunction = () => {
//   let right = 1;
//   let lVal = arr[0];
//   const missingArray = [];

//   while (lVal < arr[right]) {
//     if (arr[right] - lVal === 1) {
//       right++;
//       lVal++;
//     } else {
//       missingArray.push(lVal + 1);
//       lVal++;
//     }
//   }
//   return missingArray;
// };
// console.log("missingNumberFunction", missingNumberFunction());

///////////////////////////      deeep copy
// before moving to deep copy first understand how many way we can copy object this three way reference, shallow, and deep
// const obj = {
//   name: "vishal",
//   age: undefined,
//   address: {
//     city: "mumbai",
//     country: "india",
//   },
//   skills: [{ name: "js" }],
//   grade: ["A", "B"],
// };

// reference copy
// const obj2 = obj;
// shallow copy (top level copy)
// const obj2 = { ...obj };
// const obj2 = Object.assign({}, obj);
// deep copy
// const obj2 = structuredClone(obj);
// const obj2 = JSON.parse(JSON.stringify(obj));
// obj2.name = "gupta";
// obj2.address.city = "pune";
// obj2.skills[0].name = "node";
// obj2.grade[0] = "C";

// console.log("obj", obj);
// console.log("obj2", obj2);

// Implement a deep copy without using built-in methods.
// 1. If the value is not an object (or is null), return it directly (base case).
// 2. Create a new object or array based on the original value.
// 3. Loop through all own properties.
// 4. Recursively copy each property.
// 5. Return the newly created deep-copied object/array.

// const deepCopy = (obj) => {
//   // Base case: primitives and null can be returned as-is.
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }

//   // Object.keys() returns only the object's own properties
//   // (ignores inherited properties from the prototype).
//   let copiedVal = Array.isArray(obj) ? [] : {};
//   for (const key of Object.keys(obj)) {
//     copiedVal[key] = deepCopy(obj[key]);
//   }

//   return copiedVal;
// };
// const obj2 = deepCopy(obj);

// obj2.name = "gupta";
// obj2.address.city = "pune";
// obj2.skills[0].name = "node";
// obj2.grade[0] = "C";

// console.log("obj", obj);
// console.log("obj2", obj2);

//                           Flatten an array
// const arr = [
//   "vishal",
//   ["gupta", [69, [{ question: "Flatten" }, { ages: [1, 2, 3] }]]],
//   [10, 20],
// ];

// 1 way
// const flattenArray = arr.flat(Infinity);
// console.log("flattenArray 1", flattenArray);

// 2way    recursion
// const flattenArrayFunction = (arr, res = []) => {
//   for (const val of arr) {
//     if (Array.isArray(val)) {
//       console.log("val", val);
//       flattenArrayFunction(val, res);
//     } else {
//       res.push(val);
//     }
//   }
//   return res;
// };
// console.log("flattenArrayFunction", flattenArrayFunction(arr));

///////////////////////////////////// Group array objects by key
// input
// const users = [
//   { name: "Alice", department: "HR" },
//   { name: "Bob", department: "IT" },
//   { name: "Charlie", department: "HR" },
//   { name: "David", department: "IT" },
//   { name: "Eva", department: "Finance" },
//   { name: "Vihal" },
//   { name: "Gupta" },
// ];

// output
// {
//   HR: [
//     { name: "Alice", department: "HR" },
//     { name: "Charlie", department: "HR" }
//   ],
//   IT: [
//     { name: "Bob", department: "IT" },
//     { name: "David", department: "IT" }
//   ],
//   Finance: [
//     { name: "Eva", department: "Finance" }
//   ]
// }
// 1 way
// const res = Object.groupBy(users, (item) => item.department);
// console.log("res", res);

// 2 way  (... spread operator create every time new array )
// const groupBykey = (arr, key) => {
//   const obj = {};
//   for (const val of arr) {
//     const keyValue = obj[val[key] || "Unknow"];
//     obj[val[key] || "Unknow"] = keyValue ? [...keyValue, val] : [val];
//   }
//   return obj;
// };

// console.log("groupBykey", groupBykey(users, "department"));

// 3 way use push method
// const groupBykey = (arr, key) => {
//   const obj = {};
//   for (const val of arr) {
//     const groupBy = val[key] || "Unknow";
//     if (!obj[groupBy]) {
//       obj[groupBy] = [];
//     }
//     obj[groupBy].push(val);
//   }
//   return obj;
// };

// console.log("groupBykey", groupBykey(users, "department"));

// 4 way reduce method
// const groupBykey = (arr, key) => {
//   return arr.reduce((acc, elm) => {
//     const group = elm[key] || "Unknow";
//     (acc[group] ??= []).push(elm);
//     return acc;
//   }, {});
// };

// console.log("groupBykey", groupBykey(users, "department"));

///////////////////////////////   Closures

// const closuresTest = () => {
//   let a = 10;
//   return () => {
//     const b = 10;
//     console.log(a + b);
//   };
// };
// const callback = closuresTest();
// callback();

//                   Closures (Counter)

// function closuresCount() {
//   let a = 1;
//   return function callback() {
//     console.log(++a);
//   };
// }
// const callback = closuresCount();
// callback();
// callback();
// callback();
// callback();

/////////////////////////  currying
// const currying = (a) => (b) => (c) => a + b + c;
// console.log("currying", currying(1)(2)(3));

// infinte currying
// const infinteCurrying = (a) => {
//   console.log("a", a);
//   return (b) => {
//     console.log("b", b);
//     if (b === undefined) return a;
//     return infinteCurrying(a + b);
//   };
// };

// console.log("infinteCurrying", infinteCurrying(1)(5)(10)());
// 1 infinteCurrying(1) return function like this ReturnedFunction(5)(10)()
// 2 ReturnedFunction(5) and its remember a value means 1 because of closures and it call recursive function like this infinteCurrying(1+5) with value 6 via addition. now after that new function create and now a become 6 and return function ReturnedFunction(10)()
// 3 ReturnedFunction(10) and again it remember a value of 6 and call recursive call like this infinteCurrying(6+10). again new function create with a value 16 and return function ReturnedFunction()
// 4 ReturnedFunction() after this call b is not there and it return a value

///////////////////////// Memoization

// function square() {
//   const memoObj = {};
//   return (n) => {
//     if (memoObj[n]) {
//       console.log("memo value");
//       return memoObj[n];
//     }
//     console.log("Calculating...");
//     memoObj[n] = n * n;
//     return memoObj[n];
//   };
// }
// const memofunction = square();
// console.log(memofunction(5)); // Calculating... 25
// console.log(memofunction(5)); // Calculating... 25 (calculates again)

// Generic memoize function (commonly asked in JavaScript interviews)
// function memoize(fn) {
//   const cache = {};
//   return (...args) => {
//     const key = JSON.stringify(args);
//     console.log("key", key);

//     if (key in cache) {
//       console.log("memo value");
//       return cache[key];
//     }

//     console.log("Calculating...");
//     cache[key] = fn(...args);
//     return cache[key];
//   };
// }
// const add = (a, b) => a + b;
// const addMemo = memoize(add);

// console.log("addMemo", addMemo(2, 2));
// console.log("addMemo", addMemo(2, 2));

///////////////////////////  Debounce

// const debounceFunc = (fn, delay = 400) => {
//   let timer;

//   return (...args) => {
//     clearTimeout(timer);
//     console.log("timer", timer);
//     timer = setTimeout(() => {
//       return fn(...args);
//     }, delay);
//   };
// };

// const nameFuntion = (val) => {
//   console.log(val);
// };

// const debounceNmae = debounceFunc(nameFuntion, 400);

// debounceNmae("vishal");

// setTimeout(() => {
//   debounceNmae("gupta");
// }, 600);

// setTimeout(() => {
//   debounceNmae("vishal Gupta");
// }, 1050);

//////////////////////////   throttle
// const throttle = (fn, delay = 1000) => {
//   let prevTime;

//   return (...ms) => {
//     // console.log(Date.now() - prevTime);
//     if (prevTime === undefined || Date.now() - prevTime >= delay) {
//       fn(...ms);
//       prevTime = Date.now();
//     }
//   };
// };

// const print = (ms) => {
//   console.log("Executed at ", ms);
// };

// const throttledPrint = throttle(print, 1000);

// throttledPrint("0");
// setTimeout(() => {
//   throttledPrint("100");
// }, 100);
// setTimeout(() => {
//   throttledPrint("500");
// }, 500);
// setTimeout(() => {
//   throttledPrint("1000");
// }, 1000);
// setTimeout(() => {
//   throttledPrint("1500");
// }, 1500);
// setTimeout(() => {
//   throttledPrint("2200");
// }, 2000);
// setTimeout(() => {
//   throttledPrint("2500");
// }, 2200);

/////////////////////       Promise.all().

// const p1 = Promise.resolve(10);

// const p2 = new Promise((resolve) => {
//   setTimeout(() => resolve(20), 2000);
// });

// const p3 = Promise.resolve(30);

// const p4 = Promise.reject("Failed");

// Promise.all([false, null, undefined, ""])
//   .then((res) => console.log(" bulit in res", res))
//   .catch((err) => console.log(" bulit in err", err))
//   .finally(() => console.log("bulit in Finally"));

// const promiseAll = (arr) => {
//   // this function have to contain one promise that eithere resolve or reject to return it that is new promise
//   return new Promise((resolve, reject) => {
//     if (arr.length === 0) return resolve([]);
//     let result = [];
//     let completed = 0;
//     for (let i = 0; i < arr.length; i++) {
//       Promise.resolve(arr[i])
//         .then((res) => {
//           result[i] = res;
//           completed++;

//           if (completed === arr.length) {
//             resolve(result);
//           }
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });
// };

// promiseAll([false, null, undefined, "", p1, p2, p3])
//   .then((res) => console.log("own fun res", res))
//   .catch((err) => console.log("own fun err", err))
//   .finally(() => console.log("own fun Finally"));

////////////  polyfills

// map polyfills

// Array.prototype.myMap = function (callback) {
//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr[i] = callback(this[i], i, this);
//   }
//   return newArr;
// };

// const numbers = [1, 2, 3, 4];
// const result = numbers.myMap((num, i, arr) => {
//   return num * i;
// });
// console.log("res", result, numbers);

////// filter polyfills

// Array.prototype.myFilter = function (callback) {
//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     const truthyVal = callback(this[i], i, this);
//     if (truthyVal) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };

// const numbers = [1, 2, 3, 4, 6];
// const result = numbers.myFilter((num, i, arr) => {
//   return num % 2 === 0;
// });
// console.log("res", result, numbers);

//////// reduce polyfills
// Array.prototype.myReduce = function (callback, initialVal) {
//   // if initialVal is not there than take zero index val
//   const hasNoInitialValue = arguments.length <= 1;
//   if (hasNoInitialValue) {
//     initialVal = this[0];
//   }

//   for (let i = hasNoInitialValue ? 1 : 0; i < this.length; i++) {
//     initialVal = callback(initialVal, this[i], i, this);
//   }
//   return initialVal;
// };

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.myReduce((acc, elm, i, arr) => {
//   return acc + elm;
// }, 0);

// console.log("result", result);

/////////////////////   Move all zeros to the end
// Input:  [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

// const arr = [0, 1, 0, 3, 12];
// 010312
// 100312
// 130012
// 131200
// 1 way
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   if (element === 0) {
//     console.log(element);
//     newArr.push(element);
//   } else {
//     newArr.unshift(element);
//   }
// }

// console.log("newArr", newArr);

// 2 way
// const arr = [];

// let i = 0;
// let j = 1;
// while (j <= arr.length - 1) {
//   if (arr[i] !== 0) {
//     i++;
//     j++;
//   } else if (arr[j] === 0) {
//     j++;
//   } else {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j++;
//   }
// }
// console.log("arr", arr);

// 3 way
// const arr = [1, 2, 0, 0, 1, 12];
// let i = 0;

// for (let j = 0; j < arr.length; j++) {
//   if (arr[j] !== 0) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//   }
// }

// console.log(arr);

///////// common prefix.

// const words = ["flower", "vi", "flow", "floght"];
// let firstWord = words[0];

// function checkPrefix() {
//   let res = "";
//   for (let j = 0; j < firstWord.length; j++) {
//     const firstWordFirstLetter = firstWord[j];
//     for (let i = 0; i < words.length; i++) {
//       const currentWordFirstLetter = words[i][j];
//       if (currentWordFirstLetter !== firstWordFirstLetter) {
//         return res;
//       }
//     }
//     res += firstWordFirstLetter;
//   }
//   return res;
// }
// console.log("checkPrefix", checkPrefix());
