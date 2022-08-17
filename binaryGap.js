function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    var Nbinary = N.toString(2)
    var arr = Nbinary.split('1')
    if (Nbinary.substring(Nbinary.length - 1) == "1"){
    }else{
        arr.pop()
    }
    var binarygap = 0
    arr.forEach(element => {
        if (binarygap < element.length){
            binarygap = element.length
        }
    });
    return binarygap
}
solution(1041)
