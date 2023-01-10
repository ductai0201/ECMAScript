

function total(...Amount){
    let result = 0;
    for(let i =0; i<Amount.length;i++){
        result += Amount[i];
    }
    return result;
}

console.log(total(1,2,3,4,5,6));

const info = {
    name : 'John',
    age :29,
    addr : 'hanoi'
}

console.log(info)
// clone một info new
// let info2 = structuredClone(info);

/////
let info2 = {...info,phone:'0368600129'};

console.log(info2)
