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






