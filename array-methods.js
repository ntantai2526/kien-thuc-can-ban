//32.2 JavaScript Array Methods p1 _ Tìm hiểu về các phương thức làm việc với Array JS cơ bản phần 1
/*
STT phương thức
1. concat()
2. push()
3. unshift
4. pop()
5. shift()
6.slice()
7.includes()

*/

//1. concat(): nối mảng hiện tại với mảng khác về mảng mới
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [7, 8, 9]
let newArr = arr1.concat(arr2, arr3)
console.log(newArr)
console.log(arr1)
console.log(arr2)

//2. push(): thêm một hoặc nhiều phần tử vào cuối mảng gốc
let arr4 = [1, 2, 3]
arr4.push(4,5,6)
console.log(arr4)

//3. unshift() thêm một hoặc nhiều phần tử vào đầu mảng gốc
let arr5 = [1, 2]
arr5.unshift(3,4,5)
console.log(arr5)

//4. pop(): Loại bỏ phần tử cuối cùng của mảng làm thay đổi mảng gốc
//và trả về phân tử đã loại bỏ
let arr6 = [1,2,3,"năm"]
let removeElement = arr6.pop()
console.log(arr6)
console.log(removeElement)

//5. shift(): Giống pop() nhừn loại bỏ phần tử đầu
let arr7 = [1, 2, 3, 4]
let removeElement2 = arr7.shift()
console.log(arr7)
console.log(removeElement2)

//6. silce(startIndex, endIndex): tạo ra 1 bản sao của mảng => sao lưu 1 vùng mới
//Cắt chuõi gốc. lấy từ startIndex đến sát endIndex(endIndex-1)
//Bỏ trống sẽ hiểu sao chép lấy toàn bộ mảng gốc sang mảng mới
let arr8 = [1,2,3,4,5,6,7,8,9]
let sliceArr = arr8.slice(1,4)
console.log(arr8)   
console.log(sliceArr)

//7. includes(): Kiểm tra một mảng có chứa một giá trị cụ thể hay không.
// Trả về giá trị boolean
let arr9 = [1,2,3,4,5,"năm"]
let isPresent = arr9.includes(10)
console.log(isPresent)

//32.4 Hiểu Rõ Sức Mạnh của splice() - Chinh Phục Mảng JavaScript
//12.1 splice công cụ mạnh mẽ cho việc thay đổi cấu trúc mảng
/*
array.splice(start, deleteCount, Item1, Item2,...)
start: chỉ định vị trí bắt đầu thay đổi mảng
deleteCount: số phần từ cần xóa từ vị trí bắt đầu
Item1, Item2: các phần tử mới muốn thêm vào mảng từ vị trí start
*/
let arr11 = [1,2,3,4,5]
// arr11.splice(2,2) //Xóa từ vị trí 2. xóa đi 2 phần tử
arr11.splice(-2,2) // xóa từ vị trí -2, xóa đi 2 phần tử
console.log(arr11)

//12.2 thay thế các phẩn tử trong mảng
arr12 = [1,2,3,4,5]
arr12.splice(2,1,6) // xóa từ vị trí 2 đi 1 phần tử và thêm vào 6 từ vị trí 2
console.log(arr12)
//12.3 Thêm phần từ vào mảng
arr13 = [1,2,3,4,5]
arr13.splice(2,0,6,7,8,9)
console.log(arr13)










