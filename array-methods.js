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

//13.5 chuyển đổi chuỗi thànhg mảng
let myName = "jacky"
let char = [...myName]//có thể hiểu ... là for loop để lấy từng phần tử
console.log(char)

//32.6 Phương Thức sort() trong JavaScript - ES6 - Sắp Xếp Mảng trong JavaScript một Cách Hiệu Quả
//14. Phương thức sort()
// 14.1: khi không truyền conparefunction: so sánh lân lượt ký tự đầu, đến
// các ký tự phía sau (nếu các ký tự sẽ dừng so sánh -> Sắp xếp theo thứ tự
// tăng dần dựa theo thứ tự trong bảng mã UNICODE)

let M1=["c", "a", "b"]
console.log("b".charCodeAt())
//duyêt mảng bằng for...of
for(let element of M1){
    console.log(element)
    console.log(`${element} có mã UNICODE là : ${element.charCodeAt()}`)
}

let sortedM1 = M1.sort()
console.log(sortedM1)

//TH2: Phần tử có nhiều ký tự: só sánh như TH1
//Nếu có ký tự giống nhau sẽ so sánh các ký tự sau
let M2 = ["baa", "a", "c"]
let sortedM2 = M2.sort()
console.log(sortedM2)

//Ví dụ với ký tự số(vì xếp theo UNICODE nên sẽ có kq không mong muốn)
let M3 = [10000, 1, 9, 3]
let sortedM3 = M3.sort()
console.log(sortedM3)

//14.2 só sánh(compare function)
/*
Hàm so sánh (Compare Function)
Nếu compareFunction(a,b) trả về một giá trị < 0, a sẽ được đặt trước b.
nếu compareFunction(a,b) trả về 0, thứ tự a và b không đổi
nếu compareFunction(a,b) trả về giá trị > 0, b sẽ được đặt trước a
*/
let M4 = [9,3,4,6,2]
//trước khi sắp xếp
console.log(M4)
//sx tăng dần
let sortedM4 = M4.sort((a,b) => a - b)
console.log(sortedM4)

//32.7 Phương Thức reduce() trong JavaScript - Hướng Dẫn Chi Tiết với Ví Dụ Thực Tế
//Dựa trên một hàm xủ lý -> tính toán và trả về một giá trị duy nhất
/*
Syntax: reduce(function, [initialValue])
1. function: một hàm để thực thi cho từng phần tử trong mảng
2. initialValue: giá trị khởi tạo
*/

//Bài toán khi không dùng reduce()
let M5 = [6,2,3]
//thực hiện tính tổng các phần tử trong mảng
// 1.giá  trị khởi toạn ban đầu
let sum = 0
for(let element of M5){
    sum+=element
}
console.log(`Tổng các phần tử trông mảng là: ${sum}`)

//Khi dung reduce()
/*
accumlator: giá trị tích lũy, được cập nhẩ sau mỗi lần gọi hàm
currentValue: giá trị hiện tại đang xử lý trong mảng
currentIndex: (tùy chọn) chỉ số của phần tử đang xử lý
array:(tùy chọn) mảng đang được reduce
*/

let sum2 = M5.reduce(
    //tham số function
    (accumlator, currentValue, currentIndex, array)=>{
        return accumlator + currentValue
    }, 0 //giá trị inittialValue có thể hiểu là sum = 0 ở trên
)
console.log(`tổng giá trị trong mảng (reduce): ${sum2}`)

//rút gọn lại
let sum3 = M5.reduce(
    (accumlator, currentValue) => accumlator+currentValue,
    0
)
console.log(sum3)













