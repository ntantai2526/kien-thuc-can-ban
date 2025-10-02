let a = 99;
let b = 10;
let c = 77;
let d = 88;
a++;//sẽ được thực hiện sua cùng
b--;//sẽ được thực hiện trước
++c;
--d;

//Xuát kết quả
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// trường hợp phức tap

let x = 1;
let y = 2;
let z = x++ - ++y + 1;
console.log(z);


