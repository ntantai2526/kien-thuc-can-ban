// 31.1 Date and Time trong JavaScript - Working with Javascript Dates for Beginners - tuhoc.cc
//1. tạo đối tượng date: sử dụng new DDate() để tạo một đối tượng Date
let currentDate = new Date()
console.log(typeof currentDate)
console.log(currentDate)

//2. các phương thưc lấy thông tin thời gian
// lấy năm, tháng, ngày, giờ, phút, giây

let year = currentDate.getFullYear()
let month = currentDate.getMonth()+1
let day = currentDate.getDate()
let hours = currentDate.getHours()
let minute = currentDate.getMinutes()
let second = currentDate.getSeconds()

console.log(`Năm hiện tại: ${year}`)
console.log(`Tháng hiện tại: ${month}`)
console.log(`Ngày hiện tại: ${day}`)
console.log(`Giờ hiện tại: ${hours}`)
console.log(`Phút hiện tại: ${minute}`)
console.log(`Giây hiện tại: ${second}`)

//3. Timestamp là gì
/*
Timestamp là một đại diện cho một điểm cụ thể trong thời gian tình bằng
Mốc thời gian 0:
00:00:00 ngày 1 tháng 1 năm 1970
*/
// Xuất thời gian tại mốc 0
let timestamp1 = new Date(0)
console.log(timestamp1)
//Sử dụng  getTime(); để lấy timestamp hiện tại
let currentTimeStamp = currentDate.getTime()
console.log(currentTimeStamp)


//31.2 Xử lý ngày tháng trong JavaScript, Date Set Methods , định dạng và hiển thị ngày tháng trong JS
// Đặt ngày tháng theo ý muốn
//Cach 1: new Date(year, monthIndex, day, hours, minutes, seconds, millisecond)
let myDate = new Date(2025, 9, 16)
console.log(myDate)
console.log(myDate.toLocaleDateString())
//Cách 2: new Date(dateString)
let myDate1 = new Date("2025-10-16T06:00:00")
console.log(myDate1)
console.log(myDate1.toLocaleDateString())

//Cách 3 sử dụng setFullYear; setMonth, setDate
let myDate2 = new Date() 
console.log(myDate2)
myDate2.setFullYear(2023)
myDate2.setMonth(9)
myDate2.setDate(9)
console.log(myDate2)

//4.Xuất ngày tháng năm: 
//Xuất dùng phương thức toLocaleDateString()
console.log(myDate2.toLocaleDateString())

//Xuất ngày tháng năm theo định dạng mong muốn(tự code)
console.log(`
    Ngày ${myDate2.getDate()}/ Tháng ${myDate2.getMonth()+1}/ $Năm {myDate2.getFullYear()}
    `)

//Thêm số 0 để xuất ra ngày tháng dạng 01, 02 ...

let prefixDate = myDate2.getDate() < 10 ? "0" : ""
let prefixMonth = myDate2.getDate() < 9 ? "0" : ""
console.log(`
    Ngày ${prefixDate}${myDate2.getDate()}/ Tháng ${prefixMonth}${myDate2.getMonth()+1}/ $Năm {myDate2.getFullYear()}
    `)

//31.3 setTimeout trong JavaScript _ Video hướng dẫn đầy đủ và chi tiết tại khoá học JavaScript pro
// setTimeOut được sử dụng để thực hiện hàm sau một khoản time

//setTimeout(functon, milliseconds, param1, param2,...)
//function: Hàm mà chúng ta muốn thực hiện sau 1 khoảng time
//delay: thời gian chờ trước khi được gọi, được đo bằng milli giây

//1. ôn lại cách khai báo hàm
///a. arrow function

let helloArrow = () =>{
    console.log("Hello")
} 

setTimeout(helloArrow, 3000)

// b. function declaration
function xinChao(){
    console.log(`Hello in function declaration`)
}
setTimeout(xinChao, 4000)

//c. function Expr
let helloExpress = function(){
    console.log(`Hello in function expresstion`)
}

setTimeout(helloExpress, 5000)

//
let helloArrow1 = (yourName) =>{
    console.log(`Hello, ${yourName}`)
}

let timeOut = setTimeout(helloArrow1, 3000, "Giang")
clearTimeout(timeOut)





