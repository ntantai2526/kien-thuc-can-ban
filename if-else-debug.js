//16. if else debug
// let dtb = Number(prompt(`Mời nhập vào điểm: `))
// //Kiểm tra điều kiện
// if (dtb>=5.0) {
//     console.log(`Bạn đã đỗ`);
// }else{
//     console.log(`Bạn đã rớt`)
// }


//16.2
/*
Nhập vào để TB in ra xếp loại của học sinh
Giỏi 8-10
khá 7-8
trung bình 6-7
Yếu 0-5
*/

//nhập điểm
// let dtb = Number(prompt(`Nhập vào điểm trung bình: `));
// //Kiểm tra kết quả
// if(dtb <= 10 && dtb >= 8){
//     alert(`Học lực giỏi với ${dtb}`);
// }else if(dtb < 8 && dtb >= 7){
//     alert(`Học lực khá với ${dtb}`);
// }else if(dtb < 7 && dtb >= 5){
//     alert(`Học lực trung bình với ${dtb}`);
// }else if(dtb < 5 && dtb >= 0){
//     alert(`Học lực yếu với ${dtb}`);
// }else{
//     alert(`Bạn nhập không đúng giá trị`);
// }

//Tìm x,y dựa trên thông tin tổng hiệu
// let tong = Number(prompt(`Nhập vào tổng 2 số: `));
// let hieu = Number(prompt(`Nhập vào hiệu 2 số: `));

// //Kiểm tra điều kiện
// if (isNaN(tong)==false&&isNaN(hieu)==false) {
//     x = (tong+hieu)/2;
//     y = x - hieu;
//     console.log(`Giá trị x cần tìm là: ${x}`);
//     console.log(`Giá trị y cần tìm là: ${y}`);
// }else{
//     console.log(`Bạn nhập giá trị không hợp lệ!`)
// }

// tình BMI
// let chieuCao = Number(prompt(`Nhập vào chiều cao: `));
// let canNang = Number(prompt(`Nhập vào cân nặng: `));
// //Kiểm tra điều kiện
// chieuCao /= 100;
// let BMI = canNang/(Math.pow(chieuCao, 2));
// console.log(BMI);
// if(BMI<15){
//     console.log(`Thân hình quá gầy`);
// }else if(BMI>=15&&BMI<16){
//     console.log(`Thân hình gầy`);
// }else if(BMI>=16&&BMI<18.5){
//     console.log(`Thân hình hơi gầy`);
// }else if(BMI>=18.5&&BMI<25){
//     console.log(`Thân hình bình thường`);
// }else if(BMI>=25&&BMI<  30){
//     console.log(`Thân hình hơi béo`);
// }else if(BMI>= 30&&BMI<35){
//     console.log(`Thân hình béo`);
// }else if(BMI>35){
//     console.log(`Thân hình quá béo`);
// }else{
//     console.log(`Bạn nhập thông tin không đúng!`)
// }

//tính năm nhuận và năm không nhuận
// let nam = Number(prompt(`Nhập vào số năm để tính xem đó là năm nhuận hay năm không nhuận: `))
// //kiểm tra điều kiện
// if(nam%4==0&&nam%100!==0||nam%400==0){
//     console.log(`Đây là năm nhuận`)
// }else{
//     console.log(`Đây năm không nhuận`)
// }

/*
Tính ngày trong tháng
tháng 1, 3, 5, 7, 8, 10, 12 có 31 ngày
tháng 4, 6, 9, 11 có 30 ngày
nếu tháng 2 thì yêu cầu nhập thêm năm:
+nếu năm nhuận thì tháng đó 29 ngày
+nếu namw không nhuận thì có 28 ngày
*/
//Sử dụng if else
// let thang = parseInt(prompt(`Nhập vào tháng(1-12): `)) 
// if (!isNaN(thang) && thang>0 && thang< 13) {
//     if (thang == 2) {
//         let nam = parseInt(prompt(`Nhập vào năm để kiểm tra năm nhuận: `))
//         kiemTraNamNhuan = (nam%4===0&&nam%100!==0||nam%400===0)
//         console.log(`Kiểm tra năm nhuận: ${kiemTraNamNhuan}`)
//         if (kiemTraNamNhuan) {
//             console.log(`Tháng này có 29 ngày do là năm nhuận`)
//         } else {
//             console.log(`Tháng này có 28 ngày do không phải là năm nhuận`)
            
//         }
//     }else if(thang == 1 ||thang== 3 ||thang== 5 ||thang== 7 ||thang== 8 ||thang== 10 ||thang== 12){
//         console.log(`Tháng này có 31 ngày`)
//     }else{
//         console.log(`Tháng này có 30 ngày`)
//     }
// }else{
//     console.log(`Năm không hợp lệ! Vui lòng nhập từ 1-12.`)
// }

//Sử dụng switch case
// let month = parseInt(prompt(`Nhập vào giá tháng (1-12) để kiểm tra: `));
// if (!isNaN(month)&& month>0&&month<13) {
//    switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(`Tháng này có 31 ngày`);
//             break;

//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(`Tháng này có 30 ngày`);
//             break;
//     case 2:
//         let year = parseInt(prompt(`Nhập vào năm: `));
//         let checkNamNhuan = (year%4===0&&year%100!==0||year%400===0)
//         console.log(`Check năm nhuận là: ${checkNamNhuan}`)
//         if(checkNamNhuan){
//             console.log(`Tháng này có 29 ngày do năm nhuận`)
//         }else{
//             console.log(`Tháng này có 28 ngày do năm không nhuận`)
//         }
//    }
// }else{
//     console.log(`Tháng không hợp lệ vui lòng nhập từ 1-12`)
// }

/*
giải phương trình bậc 2
công thức delta = b^2-4ac
nếu delta > 0 pt có 2 nghiệm
+ x1 = (-b+sprt(delta))/2a
+ x2 = (-b-sprt(delta))/2a
nếu delta = 0 pt có nghiệm kép
+ x = -b/2a
nếu delta < 0 pt vô nghiệm
*/
let a = Number(prompt(`Nhập vào giá trị a: `));
let b = Number(prompt(`Nhập vào giá trị b: `));
let c = Number(prompt(`Nhập vào giá trị c: `));
//tính delta
let delta = b ** 2 - (4 * a * c);
console.log(delta)

if (!isNaN(delta)) {
    if (delta < 0) {
        console.log(`Phương trình vô nghiệm`)
    } else if(delta === 0){
        x1 = x2 = -b/(2*a)
        console.log(`Phương trình có 1 nghiệm x1 = x2 = ${x1}`)
    }else{
        x1 = (-b+Math.sqrt(delta))/(2*a);
        x2 = (-b-Math.sqrt(delta))/(2*a);
        console.log(`Phương trình có 2 nghiệm: `)
        console.log(`   + x1 = ${x1}`)
        console.log(`   + x2 = ${x2}`)
        
    }
    
}else{
    console.log(`Nhập dữ liệu không hợp lệ vui lòng kiểm tra lại.`)
}





