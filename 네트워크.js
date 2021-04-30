function solution(n, computers) {
    var answer = 0;
    let visited = Array.from({length : n}, () => 0);

    var i;
    for (i = 0; i < n; i++) {
        if (visited[i] === 0) {
            dfs(i, visited, computers);
            answer++;
        }

    }    


    return answer;
}

function dfs(start, visited, computers){
    let stack = [start];

    while (stack.length !== 0){
        let top = stack.pop();

        if (visited[top] === 0) {
            visited[top] = 1;

            for (let c = 0; c < computers[top].length; c++){
                console.log(computers[top][c]);
                if (computers[top][c] === 1) {
                    stack.push(c);
                }
            }
            
        }
    }

}

n = 3;
computers = [
    [1,1,0],
    [1,1,0],
    [0,0,1]
];

result = 1;

console.log(solution(n,computers));