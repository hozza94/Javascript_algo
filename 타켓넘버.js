function solution(numbers, target) {
    var answer = [];
    var templist = [];


    for (let i of numbers){
        templist = [];
        if (answer.length === 0){
            answer.push(i);
            answer.push(-i);
        }
        else {
            for (let j of answer){
                templist.push(j+i);
                templist.push(j-i);
            }
            answer = [...templist];
        }
    }
    
    // filter 사용법 익히기
    return answer.filter(e => target === e).length;
}

numbers = [1, 1, 1, 1, 1];
target = 3

console.log(solution(numbers, target));
console.log(solution([1,2,3,4], 2));
