function getCombs(arr) {
    if (arr.length === 0) return [[]];
    const a = arr[0]
    const rest = arr.slice(1)

    const withoutFirst = getCombs(rest)
    const withFirst = []
    for (let i = 0; i < withoutFirst.length; i++) {
        const combination = [...withoutFirst[i], a]
        withFirst.push(combination)
    }
    return [...withoutFirst, ...withFirst]
}

function getPerms(arr) {
    if (arr.length === 0) return [[]];
    const a = arr[0]
    const rest = arr.slice(1)

    const withoutFirst = getPerms(rest)
    const allPerms = []
    withoutFirst.forEach(el => {
        for (let j = 0; j <= el.length; j++) {
            const perm = [...el.slice(0, j), a, ...el.slice(j)]
            allPerms.push(perm)
        }
    });
    return allPerms
}

function getAllPosibilites(params) {
    let finalArray = []
    let a = getCombs(params).map(el => finalArray.push(...getPerms(el)))
    let biggestSubArrLength=0
    finalArray.forEach(subArray=>{
        biggestSubArrLength=subArray.length>biggestSubArrLength?subArray.length:biggestSubArrLength
    })
        for (let i = 2; i <= biggestSubArrLength; i++) {
            params.forEach(el=>{
                finalArray.push([...Array(i)].map(item=>el))
            })
        }
    return finalArray
}

function getDesiredLengthPoss(array, num){
    const allPos=getAllPosibilites(array)
    const modArr=[]
    allPos.forEach(item=>{
        if(item.length<=num) modArr.push(item)
    })
    return modArr
}
console.log(getDesiredLengthPoss(['a','b','v'],2));
