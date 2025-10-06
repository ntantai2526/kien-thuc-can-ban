//26. Phạm vi Sử dụng (Scope) trong JavaScript - Phân biệt Global, Function và Block Scope trong JS
// 1. global scope: phạm vi toàn cục, truy xuất được ở mọi nơi
// 2. function-scope: Phạm vi hàm
// 3. block-scope: Phạm vi của một khối(block)

// phạm vị toàn cục(global scope)
let a = 1;
//truy xuất thử đế a
console.log(a)

function viDu_1(){
    console.log(a)
    if(a%2 === 0){
        console.log(`${a} là số chẳn`)
    }else{
        console.log(`${a} là số lẻ`)

    }
}
viDu_1();

// 2. function-scope: Phạm vi hàm
function viDu_2(){
    let b = 2;
    //1. biến b chỉ có thể truy xuất được từ bên trong hàm
    console.log(b);
    //2. truy xuất đươc từ các cấp  sâu hơn bên trong
    if(b%2===0){
        console.log(`${b} là số chẳn`)
    }else{
        console.log(`${b} là số lẻ`)

    }
}
//Ngoài hàm
// console.log(b); //không hiểu b này là gì
viDu_2();
// 3. block-scope {}
let n = 3;
let m = 10;
if(n === 3){
    let m = 1;
    console.log(m)
    if(m%2===0){
        console.log(`${m} la số chẳn`);
    }else{
        console.log(`${m} la số lẻ`);
    }
}
console.log(m)






