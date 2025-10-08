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
// let message = prompt(`Mời nhập vào chuõi: `);
// if(message <=140){
//     alert(`Bạn đã nhập ${message.length} ký tự`)
// }else{
//     alert(`Bạn đã nhập quá ${message.length - 140} ký tự`)
// }

//29.2 String JS part2 - cắt chuỗi string.slice() và string.substring() trong JS - hướng dẫn chi tiết
//5.1. slice(beginIndex, endIndex) cắt chuỗi
//beginIndex: vị trí đầu cắt chuỗi
//endIndex: (tùy chọn) vi trí sát Index, khôn bao gồm Index
//endIndex: nếu không nhập sẽ mặc định ngầm là cắt đế cuối chuỗi
let s4 = `23456789`
let s5 = s4.slice(2, 5) // cắt từ vị trí thứ 2(4) đế vị trí 5(7)
console.log(s5)

// let s6 = prompt(`Mời nhập vào chuỗi: `)
// console.log(`Bạn đã nhập ${s6.length} ký tự`)
// if(s6.length>20){
//     console.log(`Bạn đã nhập quá ${s6.length-20} ký tự`)
//     let s7 = s6.slice(0,20)
//     console.log(`Chuỗi sau xử lý ${s7}`)
// }

// //code online
// console.log("Chuỗi sau xử lý: " + prompt("Mời nhập vào chuối 2").slice(0,20))

//5.2 substring(startIndex, endIndex)
//startrIndex: vị trí đầu cắt chuỗi
//endIndex: (tùy chọn) vi trí sát Index, khôn bao gồm Index
//endIndex: nếu không nhập sẽ mặc định ngầm là cắt đế cuối chuỗi

let s8 = `23456789`
let s9 = s4.substring(2, 5) // cắt từ vị trí thứ 2(4) đế vị trí 5(7)
console.log(s9)
/*
Đối só truyền vào:
substring(startIndex, endIndex): nhận vào 2 tham số và vị trí bắt đầu và kết thúc có thể hoán đổi cho nhau và ngầm định số nhỏ hơn là startIndex
slice(beginIndex, endIndex): nhận vào 2 tham số và vị trí bắt đầu và kết thúc không thể hoán đổi cho nhau
*/
let s10 = "0123456789"
console.log("Sử dụng substring")
console.log(s10.substring(1,4)) //123
console.log(s10.substring(4,1)) //123
console.log("Sử dụng slice")
console.log(s10.slice(1,4)) // 123
console.log(s10.slice(4,1)) // ""
//"" Chuỗi rỗng không  thể đảo ngược vị trí start và end


//Khác nhau khi xử lý số âm:
/*
substring(start, end):
substring sẽ chuyển số âm thành số 0 và nếu end < start sau khi chuyẻn số âm
thì nó sẽ đảo ngược chúng lại
*/
let s11 = "0123456789"
console.log("Sử dụng substring với tham số âm")
console.log(s11.substring(-3,-1))// "" =>substring(0, 0)
//TH2: 1 số âm 1 số dương
console.log(s11.substring(4,-1))// 0123 => substring(0, 4)

console.log("Sử dụng slice với tham số âm")
console.log(s11.slice(-3,-1))// 78 cắt từ vị trí 3- đến -2






