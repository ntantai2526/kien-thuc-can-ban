// 27.1 JavaScript Hoisting So sánh sự khác nhau giữa var và let - const trong JavaScript
/*
Hoisting(nâng cao): là hành  vi của JS 
nhằm di chuyển tất cả các khai báo lên đầu scope hiện tại
*/
//1. Hoisting
//a. var
console.log(`Giá trị của c = ${c}`)
//khởi tạo c
// let c = 9 //Cannot access 'c' before initialization
var c = 9 //=> undefinded đã được khai báo nhưng không có giá trị
//Điều này có nghĩa là var đã đưa khai báo này lên trên clg nhưng không gán giá trị
//Đây là các JS hiểu
/*
var c;
console.log(`Giá trị của c = ${c}`)
//khởi tạo c
c = 9
*/
// nguyên nhân tạo ra let và const nhằm mục đích chạy code theo tuần tự
//tránh bị lỗi không mong muốn trong quá trình chạy code

//2. phạm vi
//a. var: có phạm vi là function-scope
//b.  let và const có phạm vi là block scope

//a. var: có phạm vi là function-scope
function exampleVar(){
    if(true){
        var y = 20
        console.log(`${y} trong block scope`)
    }
    console.log(`${y} trong function  scope`)
}
exampleVar()
//JS hiểu
function exampleVar(){
    var y //hoisting
    if(true){
        y=20
        console.log(`${y} trong block scope`)
    }
    console.log(`${y} trong function  scope`)
}
exampleVar()

//b.  let và const có phạm vi là block scope
function exampleLet(){
    if(true){
        let b = 40;
        console.log(`${b} trong block scope`)
    }
    // console.log(`${b} trong phạm vi function scope`)
}
// Gọi hàm
exampleLet()

/*
3. Re-declaration:
var: Có thể khai báo lại một biến sử dụng var trong phạm vi cùng cấp
let: không thể khai báo lại một biến sử dụng let trong cùng cấp
*/
//var
var diemToan = 4
// code chương trình
var diemToan = 8.5
//let
let diemVan
// let diemVan // báo lỗi do đã có 1 biến trong cùng phạm vi rồi








