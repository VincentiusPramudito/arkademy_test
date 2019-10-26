function findHighestScore(price) {
    let temp = []; arr = [];
    for(let i in price) {
        temp = []
        for(let j in price) {
            if(j > i) {
                let profit = price[j] - price[i]
                temp.push(profit)
            }
        }
        arr.push(...temp)
    }
    arr.sort((a,b) => { return a > b })
    if(arr[arr.length-1] <= 0) return 'Tidak bisa mendapatkan profit pada hari-hari ini'
    else return arr[arr.length-1]
}

console.log(findHighestScore([10, 2, 11, 20, 3, 5]))
console.log(findHighestScore([33, 29, 11, 3]))