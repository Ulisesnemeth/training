function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort()
    for (let i = 0; i < A.length; i = i+2) {
        if(A[i]==A[i+1]){
            
        }else{
            var uniqueelement = A[i]
            break
        }
    }
    return uniqueelement
}
console.log(solution([1,1,2,4,2,3,4]))