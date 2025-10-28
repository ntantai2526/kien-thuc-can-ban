//32.1 JavaScript Array Tutorial -Mảng trong JavaScript p1 Tìm hiểu về mảng js Từ Cơ Bản đến Nâng Cao
//2. Mảng là 1 tập hợp các phần tử có cùng hoặc khác kiểu dữ liệu
//3. Khai báo mảng
//3.1 Sử dụng dấu ngoặc vuông []
//Khai báo mảng rỗng
let arr1 = []
console.log(arr1)
//Tạo mảng có sẳn các phần tử bên trong
let arr2 = [1,2,3,4,"năm", true, [2,3,5]]
console.log(arr2)
//Cách 2 sử dụng aray và Constructor
//Khai báo mảng rỗng và sử dụng Array constructor
let arr3 = new Array();
console.log(arr3)
//Tạo mảng có sẳn các phần tử bên trong
let  arr4 = new Array(1,2,3,4,"năm");
console.log(arr4)
//Tạp mảng với độ dài xác định, các phần tử là undefined
let arrayWithLength = new Array(5);
console.log(arrayWithLength)
// console.log(arrayWithLength[0])//undefined
// console.log(arrayWithLength[1])//undefined
// console.log(arrayWithLength[2])//undefined
// console.log(arrayWithLength[3])//undefined
// console.log(arrayWithLength[4])//undefined

//4. Truy xuất giá trị của mảng
let arr5 = [3,5,1,7,9]
console.log(arr5[0])//3
console.log(arr5[4])//9
console.log(arr5[3])//7
//5. thuộc tính length
console.log(`==========================`)
console.log(arr5.length)
//6. gán và thay đổi giá trị cho mảng qua index
let arr6 = [5,6,7]
arr6[1] = 10
console.log(arr6)

//7. Duyệt mảng bằng
//7.1 Sử dụng vòng lặp for
//(có thể xem và thay đổi giá trị mảng)
let arr7 = [1,2,3,4,5]
console.log(arr7)
for(let i = 0; i < arr7.length; i++){
    console.log(arr7[i])
    arr7[i] = arr7[i] * 2
    //sau khi thay đổi
}
console.log(arr7)

//7.2 for...of: chỉ có thể xem, không thể sửa được giá trị của mảng
count = 0
let arr8 = [1,2,3,4,5]
for(let element of arr8){
    //Kiểm tra điều kiện
    if(element%2===0){
        console.log(element)
        count++
    }
    console.log(element)
    // element = 5 không thể thay đổi được giá trị vì for...of chỉ show
}

console.log(`Số tử chia hết cho 2 của mảng là: ${count}`)





