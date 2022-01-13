/*Function
Easy
1.Given a and b, your function should return the value of ab
Example:
Input: power(2,3) ––> Output: 8*/

const power=(a,b) =>math.pow(a,b);
power(2,3)

/*
2.Given length of a regular hexagon, your function should return area of the hexagon.
Example:
Input: areaOfHexagon(10) ––> Output: 259.80
*/

const areaOfHexagon =a =>((3*a*a*Math.sqrt(3))/2).toFixed(3);
areaOfHexagon(10)
/*
3.Given a sentence, your functions should return the number of words in the sentence.
Example:
Input: noOfWords(We are neoGrammers) ––> Output: 3
*/
const noOfWords=n=>n.split(" ").length;
noOfWords("We are neoGrammers")
/*
4.Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
(Hint: Lookup rest parameters in JavaScript) */
const findMin=(...theArgs)=>Math.min(...theArgs);
findMin(3,5);
findMin(3,5,9,1);
/*
5.Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMax(3,5) ––> Output: 5
Input: findMax(3,5,9,1) ––> Output: 9
(Hint: Lookup rest parameters in JavaScript) */
const findMax=(...theArgs)=>Math.max(...theArgs);
findMax(3,5);
findMax(3,5,9,1);
/*
6.Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle */