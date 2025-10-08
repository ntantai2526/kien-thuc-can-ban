//28. Đệ quy với JavaScript - Hướng Dẫn Đệ Quy Chi Tiết dễ hiểu nhất qua ví dụ
//Đệ quy là cách dùng hàm để tự gọi chính nó
/*
Để giải bằng đề quy cần 2 điều kiện:
1. Điêm dừng của bài toán
2. Quy luật của bài toán
*/

//Tính N!=N*(N-1)!..1
function giaiThua(n){
    if(n===0||n===1){
        return 1
    }else{
        return n * giaiThua(n-1)
    }
}
//Gọi hàm giai thừa
let kq = giaiThua(5)
console.log(kq)

//tính dãy Fibonaci
//F1=1, f2=1, f(n)=f(n-1)+f(n-2)
function f(n){
    if(n<=2){
        return 1
    }else{
        return f(n-1) + f(n-2)
    }
}

let kq1 = f(18)
console.log(kq1)




