//29.1 Xử lý Chuỗi trong JS p1 - index chuỗi trong js, và kiểm tra độ dài chuỗi js - length
//1.các cách tạo chuỗi
console.log("Xin chào,ABC, 123, !@#$ ")
console.log('Xin chào,ABC, 123, !@#$ ')
console.log(`Xin chào,ABC, 123, !@#$ `)

//2. khởi tạo chuỗi
let s1 = `Đầu lòng 2 ả tố nga
Thúy Kiều là chị, em là Thúy Vân`
console.log(s1)

//3.Index
let stringIndex = `Linh`
console.log(stringIndex[2]); 

//4.Lenght
let s2 = `abcdef`
//Kiểm tra chiều dài của s3
console.log(s2.length)

//4.2 ví dụ vận dụng
//Nhập vào 1 tin có giới hạn < 140
//nếu quá báo ký thự vượt quá
let message = prompt(`Mời nhập vào chuõi: `);
if(message <=140){
    alert(`Bạn đã nhập ${message.length} ký tự`)
}else{
    alert(`Bạn đã nhập quá ${message.length - 140} ký tự`)
}

//





