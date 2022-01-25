// let box;
// box = "hello";
// box = 20;
// console.log(typeof (box))
// console.log(box);


// function getProduct(id) {
//     return {
//         id: id,
//         name: `kamal ${id}`,
//         price: 10
//     }
// }
// const product = getProduct(1);
// console.log(`this is ${product.name} price ${product.price}`)



// (function (b){
//     for (var i = 0; i < b; i++){
//         console.log(i);
//     }
// })(20)
// console.log("after",i)

interface Product{
    id: number,
    name: string,
    age: number
}

function getProduct(id:number) :Product {
    return {
        id: id,
        name: "Md.Raysul kobir",
        age: 10
    }
}

console.log(getProduct(1));