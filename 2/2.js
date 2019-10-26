function isNameValid(name) {
    let re = /^[A-Z]{3,}$/
    return (re.test(name))
}

function isAgeValid(age) {
    let stringChar = age.toString()
    if (stringChar == 1) stringChar = '0' + age
    if (stringChar.length < 3) return true
    else return false
}

function isUserNameValid(username) {
    let re = /^([a-z_]|[a-z.]{5})+([0-9]{3})$/
    return re.test(username)
}

console.log(isNameValid('WrONG')) // false
console.log(isNameValid('RIGHT')) // true
console.log(isAgeValid(123)) // false
console.log(isAgeValid(30)) // true
console.log(isUserNameValid('apbd.123')) // true
console.log(isUserNameValid('apbd_123')) // true
console.log(isUserNameValid('apbd.1c3')) // false