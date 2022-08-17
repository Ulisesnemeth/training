function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    var value = false
    while(value == false){
        var element = A.pop()
        if(A.includes(element)){
            A.splice(A.indexOf(element),1)
        }else{
            var uniqueelement = element
            value = true
        }
    }
    return uniqueelement
}
console.log(solution([1,1,2,4,2,3,4]))