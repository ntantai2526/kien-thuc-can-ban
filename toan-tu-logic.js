//11. toán từ logic
let i = 8;
// toán từ && true khi cả 2 đều đúng 
console.log(i>0&&i<10); // true 
console.log(i>0);
console.log(i<10);

// toán từ || 1 trong 2 true thì sẽ là true
console.log(i>0&&i<10); // true
console.log(i>0); 
console.log(i<10); 

//toán từ phủ định ! phủ định lại phép toán
console.log(i>0&&i<10);
console.log(i>0); 
console.log(!(i<10)); 

// tính diện tích, chu vi hình tròn
let PI = Math.PI;
let r = Number(prompt(`Nhập đường kính r: `));
chuVi = 2*PI*r;
dienTich = PI*r*r;

alert(chuVi)
alert(dienTich);

//tính chu vi, dien tich hinh chu nhat

let chieuDai = Number(prompt("Nhập chiều dài: "));
let chieuRong = Number(prompt("Nhập chiều rộng: "));
chuViHCN = (chieuDai*chieuRong)*2;
dienTichHCN = chieuDai*chieuRong;
1
alert(chuViHCN);
alert(dienTichHCN);

// nhập vào 3 điểm toán, văn, anh sau đó tình điểm trung bình
//và làm  tròn 2 chữ số sau dấu phẩy
let diemToan = Number(prompt("Nhập vào điểm Toán: "));
let diemVan = Number(prompt("Nhập vào điểm Văn: "));
let diemAnh = Number(prompt("Nhập vào điểm Anh: "));

dtb = ((diemToan+diemVan+diemAnh)/3).toFixed(2);
alert(dtb);




