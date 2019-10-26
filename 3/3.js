function divideAndSort(num) {
    if (!isNaN(num)) {
        let temp = [];
        let stringNum = num.toString().split('0')
        for (let i of stringNum) {
            let arr = [];
            for (let j of i) {
                arr.push(j)
                arr.sort()
            }
            temp.push(...arr)
        }
        let result = [...temp]
        return Number(result.join(''))
    }
}

console.log(divideAndSort(5956560159466056))