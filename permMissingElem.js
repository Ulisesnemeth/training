function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort(function(a,b) {
        return a - b        
    })
    
    if(A.length <= 1){
        return 1
    }
    var missingElement = A.find(element => A.indexOf(element) != (element-1))
    return (missingElement-1)
}

console.log(solution([]))
console.log(solution([2,3,1,5]))
console.log(solution([2,3,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))