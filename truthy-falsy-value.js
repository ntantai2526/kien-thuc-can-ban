//Truthy and Falsy Values - Chuyển đổi kiểu dữ liệu với Truthy và Falsy
let a = 123;
console.log(typeof a);
let b = String(a);
console.log(typeof b);
console.log(`Kết quả của b là: ${b}`);



/*
LƯU Ý: có 8 giá trị khi chuyển đổi về giá trị Boolean sẽ được xem là falsy
1. false
2. 0 số không được xem là falsy
3. -0
4. 0n số BigInt không(0n)
5. "" chuỗi rỗng
6. null
7. underfined
8. NaN
*/

let salary; // chưa được định nghĩa: undefined
console.log(salary);
if (salary) {
    console.log(`Salary is defined`);
}else{
    console.log(`Salary is undefined`);
}
// Do salary chưa được định nghĩa nên khi được đưa vào if
// nó sẽ ép kiểu về boolean và khi unbefined được ép về boolean
// => falsy điều kiện false nên chạy dòng else



