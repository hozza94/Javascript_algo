// 지불해야하는 값이 4720원일 때, 1원, 50원, 100원, 500원 동전을 이용하여 지불하되, 가장 적은 수의 동전을 사용하시오.

const coins = [1, 50, 100, 500];

const calCoin = (cost, coins) => {
    let totalCoins = [];
    let sumCoins = 0;

    coins.sort((a,b) => b-a);

    for (let coin of coins) {
        
        if (cost >= 0) {
            const maxcoin = Math.floor(cost / coin);
            totalCoins.push([coin, maxcoin]);
            sumCoins += maxcoin;
            cost -= maxcoin * coin;
        }
        else {
            break;
        }
    }

    totalCoins.sort((a,b) => a[0]-b[0]);
    


    return [totalCoins, sumCoins];
}


target = 9852;
console.log(calCoin(target, coins));