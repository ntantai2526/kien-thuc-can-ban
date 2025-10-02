// Kiểu number
let soNguyen = 10;
let sothuc = 3.14;

//Kiểu boolean
let check = true;

//Kiểu dữ  liệu undefined
let diemToan;

//Kiểu null

let connect = null;



//Xuất giá trị biến
console.log(soNguyen);
console.log(sothuc);
console.log(typeof soNguyen);
console.log(typeof sothuc);

console.log(typeof check);
console.log(diemToan);
console.log(typeof connect);// không check ra null mà là object đó là lỗi hiển thị của JS

//Số nguyen an toàn tối đa/ tối thiểu
console.log("Số nguyên an toàn tối đa: "+Number.MAX_SAFE_INTEGER);
console.log("Số nguyên an toàn tối đa: "+Number.MIN_SAFE_INTEGER);
