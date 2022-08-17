function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(D>(Y-X)){
        if (X>=Y){
            return 0
        }else{
            return 1
        }
    }
    jumpcounter = (Y-X)/D
    if(parseInt(jumpcounter)<jumpcounter){
        return (parseInt(jumpcounter)+1)
    }else{
        return jumpcounter
    }
}
console.log(solution(10, 85, 30))