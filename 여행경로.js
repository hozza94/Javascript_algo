function solution(tickets) {
    var answer = [];
    var dict = {};

    for (var key of tickets) {
        if (!dict[key[0]]){
            dict[key[0]] = [key[1]];
        } else{
            // dict[key[0]] = dict[key[0]].concat(key[1]);
            dict[key[0]].push(key[1]);
        }
    }

    for (var key in dict) {
        dict[key].sort().reverse();
        // dict[key].sort((a, b) => {
        //     if (a > b) return -1;
        //     else if (b > a) return 1;
        //     else return 0;
        // });
    }
  
    let stack = ["ICN"];
    
    while(stack.length !== 0 ) {
        let top = stack[stack.length-1];

        if ((!(top in dict)) || (dict[top].length === 0)) {
            answer.push(stack.pop());
        }
        else{
            stack.push(dict[top].pop());
        }
        
    }
    
    return answer.reverse();
}

tickets = [
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"]
];
result = ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"];

console.log(solution(tickets));
