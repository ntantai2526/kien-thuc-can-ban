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
let s4 = `234567897`
let s5 = s4.slice(2, 5) // cắt từ vị trí thứ 2(4) đế vị trí sát(5-1) 5(7)
let s5 = s4.slice(2, 9) // cắt từ vị trí thứ 2(4) đế vị trí 9-1 = 8(7)
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

//29.3 Tối ưu hóa Chuỗi JavaScript - trim(), trimEnd(), và trimStart() trong JavaScript
//.trim() xóa khoảng trắng ở hai đầu chuỗi
//.trimStrat() xóa khoảng trắng ở đầu chuỗi
//.trimEnd() xóa khoảng trắng ở cuối chuỗi

//29.4 JavaScript String Methods concat(), toUpperCase(), toLowerCase(), charAt()
//str1.concat(str2, str3, ..., strN) nối các chuỗi str2, str3... strN vào str1
//toUpperCase() chuyển toàn bộ chuỗi sang in HOA
//toLowerCase() chuyển toàn bộ chuỗi sang in thường
//charAt(index) trả về chuỗi nằm ở vị trí index được truyền vào

let s19 = "Hello"
console.log(s19.charAt(2))//=> l

//29.5 JavaScript String Methods replace (oldValue, newValue) repeat (count) in JS
//string.replace(oldValue, newValue)
let s12 = "học học nữa học mãi"
console.log(s12.replace("học", "ngủ"))//ngủ học nữa học mãi
console.log(s12.replace(/học/g, "ngủ"))//ngủ ngủ nữa ngủ mãi
// ký tự / bắt đầu biểu diễn chính quy
// học: là chuỗi cần tìm kiếm và thay thế
// ký tự / cuối đánh dấu cho phần cuối tìm kiếm
// g: Cờ global. khi sử dụng -> JS sẽ tìm kiếm toàn bộ chuỗi

//repeat(count) lặp đi lặp lại cho đủ count
let s13 = "Hello, "
console.log(s13.repeat(3))

//29.6 JavaScript String Methods indexOf , lastIndexOf, includes - Xử lý chuỗi trong JavaScript
// string.indexOf(searchValue, fromIndex)
let s14 = "abcdef abcdef"
let s15 = s14.indexOf("d")
console.log(s15)
//Tìm chữ "c" bắt đầu từ vị trí 3
console.log(s14.indexOf("c", 3))
// string.lastIndexOf(searchValue, fromIndex) tìm kiếm giá trị trong khoản index
// string.includes(searchValue, fromIndex) kiếm tra xem giá trị có tồn tại trong chuỗi không
// trả về giá trị true/false
console.log(s14.includes("a"))

//29.7 String Methods JavaScript startsWith() endsWith trong JS, xử lý chuỗi trong JavaScript
//startsWith(searchValue, [startIndex]) kiểm tra chuỗi có bắt đầu bằng searchValue không
console.log(s14.startsWith("a"))//true
console.log(s14.startsWith("b"))//false
console.log(s14.startsWith("bc", 1))//true bắt  đầu từ vị trí 1
//endWith(searchValue, [endIndex])kiểm tra chuỗi có kết thúc bằng searchValue không
let s16 ="01234567890"
console.log(s16.endsWith("9"))// false do nó end bằng 0
console.log(s16.endsWith("9", 10))//true do kết thúc tại vị trí thứ 10 là 9
console.log(s16.endsWith("9", 9))//false do kết thúc tại vị trí thứ 9 là 8
console.log(s16.endsWith("78", 9))//true do kết thúc tại vị trí thứ 9 là 78

//Ví  dụ kiểm tra xem tên tệp cho kết thúc bằng .mp3 hay không
let tenTepTin = "nhac.mp3"
if(tenTepTin.endsWith(".mp3")){
    console.log(`Tệp tin này là file âm nhạc .mp3`)
}else{
    console.log(`Đây không phải là file âm nhạc .mp3`)
}

//29.8 split() trong JavaScript Hướng dẫn JavaScript chi tiết cho người mới học - tuhoc.cc
//split(separator, [limit]) dùng để tách chuỗi thành mảng
let students = "Hoa, Lan, Trung, Huệ"
let arrStudents = students.split(",")
console.log(arrStudents)
//giới hạn phần tử của mảng
let arrStudents1 = students.split(",",  3)
console.log(arrStudents1)

//tách chuỗi rỗng "" thì sẽ tách từng ký tự -> mảng
let str = "abcdefgh"
console.log(str.split(""))
let fullName = "Nguyễn Tấn Tài"
console.log(fullName.split(""))
 











