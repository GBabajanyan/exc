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
function getPosibilites(params) {
    let finalArray = []
    let a = getCombs(params).map(el => finalArray.push(...getPerms(el)))
    return finalArray
}
console.log(getPosibilites(['a','b']));
