//function
//Là một khối lệnh được thực hiện (module)
//Công dụng 
// 1. chia nhỏ dự án
// 2. Tái sử dụng lại khi  cần gọi lại chương trình
/*Bài toán:: toán tính tổng 2 số:
a. 7 ,5
b.9, 6
c. 10, 5
*/
//a.7, 5
// let a = 7
// let b = 5
// let tong = a+b
// console.log(tong)

//1. Khai báo function
//B1: Khai báo
function tenFunction(){
    //Mã lệnh thực hiện một nhiệm vụ nào đó
}
//B2: gọi hàm khi sử dụng
tenFunction()

//2. ví dụ đơn giản
//Khai báo
function xinChao(){
    console.log(`Xin chào, mình đang học code tại tuhoc.cc`)
}
//Bước 2: gọi hàm
xinChao()

//Function với tham sô(parameters)
// let inputName = prompt(`Mời nhập vào tên của bạn: `)
function xinChao1(name){
    console.log(`Chào mừng ${name} đến với tuhoc.cc`)
}

//gọi hàm
// xinChao1(inputName)
// xinChao1(`Trần Như Nhộng`)
// khi thân hàm của nó không có keyword return khi trả về sẽ là undefined
// console.log(xinChao1(`Trần Như Nhộng`))

// //Ví dụ 2
// function tinhTong(a, b){
//     // let ketQua = a+b
//     // return ketQua
//     return a + b
// }
// //goi hàm
// console.log(`tổng 2 số  a và b là: ${tinhTong(5,6)}`)
// //Gán biến cho hàm
// let diemToan = 9
// let diemVan = 9.5
// let tongDiem = tinhTong(diemToan, diemVan)
// console.log(`Tổng điểm là: ${tongDiem}`)
// console.log(`DTB = ${tongDiem/2}`)
// //5. tryền giá trị mặc định co parameters
// console.log(tinhTong(10))//NaN do thiếu đối số

// function tinhTong2(a = 0, b = 0){
//     // let ketQua = a+b
//     // return ketQua
//     return a + b
// }
// console.log(tinhTong2(10))

// Function Declaration & Function Expression

//function declaration (tường minh)
function tenFunction(parameters){
    //thân hàm
    //return something
}

//function expresstion
let tenBien = function(parameters){
    //thân hàm
    //return something
}
//vd
let tich = function(a,b){
    return a*b;
}
//gọi hàm
let kq2 = tich(4,6)
// console.log(kq2)

// Arrow function là một cú pháp viết ngắn của hàm trong JavaScript

//funciton expresstion
let multiply = function(a, b){
    return a*b
}
//goi hàm
console.log(multiply(5,4))

// Arrow functiton (hàm mũi tên)
let multiplyArrow = (a, b) => a*b
//gọi hàm
console.log(multiplyArrow(5,5))

//tuy nhiên với trường hợp hàm phức  tạp, cần thêm khóip {}
//function expresstion
let multiplyAndAdd = function(a,b){
    let product = a*b
    let sum = a+b
    return product + sum
}

let multiplyAndAddArrow = (a,b) =>{
    let product = a*b
    let sum = a+b
    return product + sum
}

//goi hà,
console.log(multiplyAndAdd(3,5))
console.log(multiplyAndAddArrow(3,5))

//Functions Calling other functions

//Hàm thục hiện phép cộng
function cong(a,b){
    return a+b
}
//Hàm thực hiện phép nhân
function nhan(x,y){
    return x*y
}
//Hàm gọi các hàm khác để thực hiện tổng và nhân
function congNhan(num1, num2, num3){
    //gọi hàm cộng để tính tổng num1+num2
    let sum = cong(num1, num2)
    //gọi hàm nhâm để nhân  sum với num3
    let product = nhan(sum,num3)
    //trả về kết quả
    return product
}
//Sử dụng hàm  congNhan
let result = congNhan(2,3,4)
console.log(result)

//Bài tập 
//Viết chương trình nhâp vào n và tính n!
//Sử dụng for loop
// let n = Number(prompt(`Nhập và số nguyên n để tính n!: `))
// let giaiThua = 1
// for(let i = 1;  i <= n; i++){
//     giaiThua *= i;
// }
// console.log(`Giai thừa của ${n} là ${giaiThua}`);
//Sử dụng while loop
// let giaiThuaWhile = function(){
//     let n = Number(prompt(`Nhập và số nguyên n để tính n!: `))
//     let  i = 1
//     let giaiThua = 1
//     while(i <= n){
//         giaiThua *= i
//         i++;
//     }
//     return `Giai thừa của ${n} là ${giaiThua}`
// }
// console.log(giaiThuaWhile())

//function truyền giá trị bên ngoài
let giaiThuaWhile1 = function(n){
    let  i = 1
    let giaiThua = 1
    while(i <= n){
        giaiThua *= i
        i++;
    }
    return `Giai thừa của ${n} là ${giaiThua}`
}
let n = Number(prompt(`Nhập giá trị n: `))
console.log(giaiThuaWhile1(n))

// Giải phương trình bậc 2
