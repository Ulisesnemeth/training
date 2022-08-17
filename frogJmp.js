function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    var jumpcounter=0
    while(X<Y){
        X=X+D
        jumpcounter++
    }
    return jumpcounter
}
console.log(solution(10, 99999, 1))