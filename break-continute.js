//24.1 continute, break
// let n = 0;
// while (n<100) {
//     n++;
//     if (n === 5) {
//         break;
//     }
//     console.log(n)
// }

// for (let i = 0; i <= 10; i++) {
//   if (i%2!==0) {
//     continue;
//   }else{
//       console.log(i);
//   }
// }

//Bài tập 15 tình lũy thừa !n
// let n = Number(prompt(`Nhập vào số nguyên n để tính lũy thừa: `))
// let luyThua = 1;
// for(let i = 1; i <= n; i++){
//     luyThua *= i;
// }
// console.log(`Lũy thừa của ${n}!: ${luyThua}`)

//Bài 16 nhập số a
//Nếu a là số chẳn thì tổng nó
//Nếu là số lẻ thì in ra `Tôi không tính số lẻ, bye bye.`
// let a = Number(prompt(`Nhập vào giá trị a để tính tổng số chẳn xuất phát từ 0 đến a: `))
// let tong = 0;
// if(a%2==0){
// for(let i = 1; i <= a; i++){
//     if(i%2!==0){
//         continue;
//     }else{
//         tong+=i;
//     }
// }
// console.log(`Tổng các số chẳn từ 0 đến ${a} là: ${tong}`)
// }else{
// console.log(`Tôi không tính số lẻ, bye bye.`)
// }

// Viết chương trình tính tổng số lẻ từ 1 đến n và bỏ qua số 3
// let n = Number(prompt(`Mời nhập vào số nguyên n: `));
// let tong = 0;
// for(let i = 1; i <= n; i++){
//     if(i%2!==0){
//         if(i==3){
//             continue;
//         }
//         tong+=i
//     }
// }
// console.log(`Tổng các số lẻ từ 1 - ${n} ngoại trừ 3 là: ${tong}`)

//Viết chương trình tìm những số chia hết cho 3 từ 1-50
//cách 1
// let result = [];
// for(i = 10; i <= 50; i++){
//     if(i%3==0){
//         result.push(i);
//     }
// }
// console.log("Những số chia hết cho 3 từ 10-50: "+ result.join(", "));

//cách 2
// let text = "Những số chia hết cho 3 từ 1 đến 50: "
// for(i = 10; i <=50; i++){
//     if(i%3==0){
//         text += i + ", ";
//     }
// }
// //xóa dấy phẩy cuối cùng
// text = text.slice(0, -2);
// console.log(text);

//Bài 19 tính tổng lũy thừa từ 1-10
// s = 1! + 2! + 3! + ... + 10!
// let s = 0;
// let luyThua = 1;

// for(i = 1; i <= 10; i++){
//     for(j = 1; j <= i; j++){
//         luyThua *= j;

//     }
//     s += luyThua;
//     luyThua = 1;
// }
// console.log(`Tổng cần tính là: ${s}`);

//Bài 20 tìm số hoàn thiện phạm vi từ 1-1000
let result = []
for(let num = 1; num <= 1000; num++){
    sum = 0;
    for(let i = 1; i <= num/2; i ++){
        if(num % i === 0){
            sum+=i
        }
    }
    if(sum === num && num !== 0){
        result.push(num);
    }
}
console.log("Số hoàn hảo từ 1 - 1000 là: "+ result.join(", "))









