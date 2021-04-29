const binarySerch = (arr, target) => {
    let count = 0;
    
    arr.sort((a,b) => a - b);
    
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left+right) / 2);
        count += 1

        if (arr[mid] < target) {
            left = mid + 1;
        }
        else if (arr[mid] > target) {
            right = mid - 1;
        }
        else {
            return [mid, count];
        }
    }

    return -1;
}



numlist = [1, 5, 3, 7, 50, 23, 456, 678, 789, 1256, 4567, 111];
find = 789;

var c = binarySerch(numlist, find);

console.log("index :", c[0], " count :", c[1]);
// ctrl + alt + M = 실행 종료 커맨드