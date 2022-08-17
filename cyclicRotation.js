function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length == 0){
        return []
    }
    var arr = A
    for (let i = 0; i < K; i++) {
        var element = arr.pop()
        arr.reverse()
        arr.push(element)
        arr.reverse()
    }
    return arr
}
console.log(solution([1,2,3,4],4))