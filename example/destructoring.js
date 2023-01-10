const person = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY",
    },
};
// const name = person.name;
// const age = person.age;
// const address = person.address;

// const {
//     name,
//     age,
//     address: { city },
// } = person;

function showInfo({ name, age, address: { city } }) {
    console.log(`${name} is ${age} years old and lives in ${city}.`);
}

showInfo(person);

// Destructoring array


function useState(initial){
    let value = initial;
    function getValue(){
        return value;
    }
    function newValue(changeValue) {  
        value = changeValue;
    }
    return [getValue,newValue];
}

const [count,setCount] = useState(20);

console.log('Gia tri goc la ' + count());
setCount(40);
console.log('Gia tri new la ' + count());