let numberA = prompt("Mời bạn nhập vào numberA: ");
//check kiểu dữ liệu typeof
console.log(typeof numberA);
//thực hiện ép kiểu data
let numberB = 5;
console.log(typeof numberB);

// A + B
let kq = numberA+numberB;
console.log(`kết quả A + B = ${kq}`);
console.log(typeof kq);

//Các phép tính khác
console.log(`A-B = %s`, numberA-numberB);
console.log(`A*B = %s`, numberA*numberB);
console.log(`A/B = %s`, numberA/numberB);
console.log(`A%B = %s`, numberA%numberB);

// ép kiểu dữ liệu người dùng
let numberC = parseInt(prompt("Mời bạn nhập vào numberC: "));
console.log(numberC);
console.log(numberD+numberC);
console.log(typeof numberC);

//Hoăc đơn giản hơn là dùng hàm Number() để ép --> Kiểu dữ liệu number
let numberD = parseInt(prompt("Mời bạn nhập vào numberD: "));
console.log(numberD);
console.log(typeof numberD);
console.log(numberD+numberB);
