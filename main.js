// 1) Given an array of numbers. Find the index of the second maximum element.

function getSecMaxIndex(arr){
   let max = 0
   let secMax = 0
   let result = 0
   for(let i of arr){
    if(i > max){
        max = i
    }
   }
   for(let j of arr){
    if(j > secMax && j < max){
        secMax = j
        result = arr.indexOf(secMax)
    }
   }
   return result
}

// console.log(getSecMaxIndex([-60, 2, 43, -18, 5, -19, 36, 7, 56 ]));



// 2) Given an array of numbers, padding amount and repeat count. Pad the array in the following way: the padding amount specifies how many elements should be taken from the array edges, the repeat amount specifies how many times the pad should be repeated. Also, you should check that  padding amount <= length of array.

function myFunc(arr,padAmount,repeat){
    let arr2 = []
    for(let i = 0 ; i < arr.length ; i++){
        arr2.push(arr[i])
    }
    for(let i = 0;i<repeat;i++){
        for(let j = padAmount - 1;j>= 0;j--){
            arr2.unshift(arr[j])
            arr2.push(arr[arr.length-j-1])
        }
    }
    if(padAmount > arr.length){
        return "Invalid padding amount"
    }
    return arr2
}
// console.log(myFunc([1,2,3,4],2,3));



// 3) Write a program to check the validity of password input by users Validation:

function checkPassword(pass = ""){
    let lowerCase = "qwertyuiopasdfghjklzxcvbnm".split("")
    let upperCase = lowerCase.join("").toUpperCase().split("")
    let num = "0123456789".split("")
    let sym = ["$","#","@"]
    let valid = 0
    let password = pass.split("")

    if(pass.length >= 6 && password.length <= 16){
        for(let i = 0; i < password.length;i++){
            if(lowerCase.includes(password[i]) && valid === 0){
                valid++
                i = 0
            }
            if(upperCase.includes(password[i]) && valid === 1){
                valid++
                i = 0
            }
            if(num.includes(password[i]) && valid === 2){
                valid++
                i = 0
            }
            if(sym.includes(password[i]) && valid === 3){
                valid++
                i = 0
            }
        }
        if(valid === 4){
            return "Valid"
        }
        else{
            return "Invalid"
        }
    }
    return "Invalid"
}

// console.log(checkPassword("12asdfF$"))



// 4) Write a program to print X star pattern series using loop.

function star(n){
    let str = ""
    for(let i = 0; i < (n * 2) - 1 ; i++){
        for(let j = 0; j < (n * 2) - 1; j++){
           if(j === i || i + j === (n * 2) - 2){
            str += "*"
           }else{
            str+= " "
           }
        }
        str+= "\n"
    }
    return str
}

// console.log(star(5));



// 5) Given a string. Split it into words around the spaces and print them in an array. Word can be anything which is string․ If there is a sequence of spaces, the result will be empty strings.

function stringToArray(str){
    return str.split(" ")
}

// console.log(stringToArray("  46778 + !"));



// 6) Given an array of numbers. Print frequency of each unique number. (Frequency is the count of particular element divided by the count of all elements)

function myFunc(arr){
    let obj = arr.reduce((acc,elem) => {
        if(!acc.hasOwnProperty(elem)){
            acc[elem] = 0
        }
        acc[elem]++
        return acc
    },{})
    const result = {}
    for(let key in obj){
        result[key] = obj[key] / arr.length
    }
    return result
}

console.log(myFunc([1, 2, 3]));



// 7) Print the following number pattern:

function followingFunc(n){
    let str = ""
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            str+=j
        }
        str+= "\n"
    }
    for(let x = 1; x <= n; x++){
        for(let y = 1; y <= n - x + 1;y++){
            str+=y
        }
        str+= "\n"
    }
    return str
}

// console.log(followingFunc(5));



// 8) Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

function checkType(arr){
    let num = 0
    let str = 0
    for(let i = 0; i < arr.length; i++){
        typeof(arr[i]) === "string" ? str++ : num++
    }
    let result = `Numbers: ${num}, Strings: ${str}`
    return result
}
console.log(checkType([1, "10", "hi", 2, 3]));
