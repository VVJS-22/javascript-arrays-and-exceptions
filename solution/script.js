let array = [];

console.log(array);

array = [1,2,3,4,5];

console.log(array);

array = [12,"abi", 12.4, [1,2], {name:"jai", gender: 'male'}];

console.log(array);

console.log(array.length);

// array.length = 0;

// array = []

// console.log(array);

// array.length = 5;

// console.log(array);

array.pop();

console.log(array);

array.push({name:"jai", gender: 'male'});

console.log(array);

array.shift();

console.log(array);

array.unshift(12);

console.log(array);

array.splice(1,2);

console.log(array);


console.log(array[0]);

console.log(array[1]);

console.log(array[1][0]);

console.log(array[1][1]);

console.log(array[1][3]);

console.log(array[2]);

console.log(array[2].gender);

const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const n5 = 5;

array = [];

array.unshift(n1,n2,n3,n4,n5);

console.log(array);

let i;

for (i of array) {
    console.log(i);
}

for (i in array) {
    console.log(i);
}

let object = {
    name: "jai",
    age: "22",
    gender: "male"
}



try {
    for (i in object) {
        console.log (i);
    }
}catch (error) {
    console.log(error);
}finally {
    console.log("completed...");
}




for (i in object) {
    console.log(i)
}


try {
    for (i of object) {
        console.log(i)
    }
} catch (e) {
    console.log(`There is an Error`)
    console.log(`Error:${e}`)
}finally {
    console.log("Completed...")
}

let values = Object.values(object);
console.log(values);

for (i of values) {
    console.log(i);
}


const randonNumber = Math.floor(Math.random()*10);

console.log(randonNumber);

// try {
//     if (randonNumber < 5 ) {
//         console.log(randonNumber);
//     } else {
//         throw new Error('The number is high');
//     }
// }catch(e) {
//     console.log('An Error caught');
//     console.log(`Error Message:${e}`);
// }

try {
    if ("randon" < 5) {
        console.log("random");
    } else {
        throw new Error("This is high");
    }
}catch(e) {
    console.log(e);
}