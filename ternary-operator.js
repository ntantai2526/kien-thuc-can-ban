//Toán  tử 3 ngôi
// let number = 10;
// let message = number >= 0 ? "Số dương" : "Số âm";
// console.log(message);

// let number2 = 11;
// let message2 = number2%2===0 ? "Số chẳn" : "Số lẻ";
// console.log(message2)

// Viết chương trình nhập điểm trung bình  và xêp loại
let dtb = Number(prompt(`Nhập vào điểm trung bình: `));
let xepLoai = dtb>=8&&dtb<=10 ? "Loại giỏi" : (dtb >= 6.5 && dtb < 8 ? "Loại khá" : (dtb >= 5 && dtb < 6.5 ? "Loại trung bình" : "Loại yếu"))
console.log(`Xếp loại của học sinh là: ${xepLoai}`);

/*
có thể hiểu toán tử 3 ngôi là thuật toán if else dạng rút gọn
vd: kiểm tra chẳn lẻ
- Viết thông thường:
if(number%2===0){
    console.log(`Số chẳn`)
}else{
    console.log(`Số lẻ`)    
}
có tới 4 dòng và nếu rút gọn:
mesage = number%2 === 0 ? "Số chẳn" : "Số lẻ"
chỉ 1 dòng và rất gọn
*/



