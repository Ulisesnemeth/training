function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort()
    var missingElement = A.find(element => A.indexOf(element) != (element-1))
    return (missingElement-1)
}

console.log(solution([1,2,3,6,4,8,7]))