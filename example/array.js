const productList = [
    { id: 1, name: "Product A", price: 200 }, // item
    { id: 2, name: "Product B", price: 300 }, // ${data[1]}
    { id: 3, name: "Product C", price: 400 }, // ${data[2]}
];
const app = document.querySelector("#app");
console.log(productList);
// const showPr = (data) =>{
//     let result = "";
//     for (let i = 0; i < data.length; i++) {
//        result += `<div>${data[i].name} </div>`
//     }
//     return result;
// }


// for... in
// const showPr = (data) =>{
//     let result = "";
//     for (let i in data) {
//        result += `<div>${data[i].name} </div>`
//     }
//     return result;
// }


// for.. of
// const showPr = (data) =>{
//     let result = "";
//     for (let i of data) {
//        result += `<div>${i.name} </div>`
//     }
//     return result;
// }


// for each
// const showPr = (data) =>{
//     if(!Array.isArray(data)) return "";
//     let result = "";
//     data.forEach((i,index) => (result += `<div>${i.name} ${index} </div>`));
//     return result;
// }

// if(app) app.innerHTML = showPr(productList);

/* map */
// const showProduct = (data) => {
//     if (!Array.isArray(data)) return '';
//     return data.map((index) => {
//         return `<span>${index.name} </span>`;
//     }).join("");
// }

/*filter */
const showProduct = (data) => {
    if (!Array.isArray(data)) return "";
    return (
        data
            // lọc và trả về mảng không chứa item có id là 2
            .filter((item) => item.id !== 2)
            // tạo 1 mảng chuyển đổi sang chuỗi
            .map((item) => `<div>${item.name}</div>`)
            .join("")
    );
};
if(app){
    app.innerHTML = showProduct(productList) ;
}



