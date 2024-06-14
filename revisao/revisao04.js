let v = [1,2,9,6]

v.push(3)

console.log(v.length)

v.sort()

for(let pos in v) {
    console.log(v[pos])
}

console.log(v.indexOf(6))