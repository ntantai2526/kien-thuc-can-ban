//30.1 Bài Tập Chuỗi JavaScript , bài tập js 24 -28 Bài Tập JavaScript Vận Dụng Kiến Thức Chuỗi
//Bài tập vận dụng
//Nhập vào chuỗi sau đó kiểm tra
//1. Có bao nhiêu ký tự thường
//2. Có bao nhiêu ký tự HOA
//3. Có bao nhiêu ký tự số
//4. Có bao nhiêu khoảng trắng " "

function kiemTraKyTu(){
    //Nhập ký tự
    let str = prompt(`Nhập vào chuỗi bất kỳ: `)
    // let arrStr = str.split("");
    chuThuong = 0
    chuHoa = 0
    chuSo = 0
    khoangTrang = 0
    kyTuDacBiet = 0
    for(i = 0; i < str.length; i++){
        char = str[i]
        if (char >= "a" && char <= "z") {
            chuThuong++;
        } else if (char >= "A" && char <= "Z") {
            chuHoa++;
        } else if (char >= "0" && char <= "9") {
            chuSo++;
        } else if (char === " ") {
            khoangTrang++;
        } 
        // Chữ có dấu tiếng Việt
        else if (/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/.test(char)) {
            chuThuong++; // hoặc tạo riêng biến demKyTuCoDau nếu muốn đếm riêng
        } 
        // Ký tự đặc biệt
        else {
            kyTuDacBiet++;
        }

    }
    console.log(`Chuỗi đã nhập ${str}`)
    console.log(`Có ${chuThuong} chữ viết thường (kể cả có dấu)`);
    console.log(`Có ${chuHoa} chữ viết HOA trong chuỗi`)
    console.log(`Có ${chuSo} chữ số trong chuỗi`)
    console.log(`Có ${khoangTrang} khoảng trống trong chuỗi`)
    console.log(`Có ${kyTuDacBiet} ký tự đặc biệt`);
}

// kiemTraKyTu()

//a. Viết chương trình kiểm tra tính hợp lệ của mật khẩu
// 1. Mật khẩu hợp lệ khi có ít nhất 6 ký tự
// 2. Chứa ít nhất 1 chữ HOA
// 3. Chứa ít nhất 1 chữ thường
// 4. Chứa ít nhất 1 chữ số
//b. Cho người dùng nhập vào mật khẩu để login / so sánh, nếu  đúng mở
//cửa, sai quá 5 lần khóa đăng nhập, thoát chương trình
// vd: mật khẩu hợp lệ Abc123

function isPasswordValid(password){
    if(password.length < 6){
        return false
    }
    let hasUpperCase = false
    let hasLowerCase = false
    let hasDigit = false

    for(let i = 0; i <= password.length; i++){
        let char = password[i]
        if(char>="a"&&char<="z"){
            hasLowerCase = true
        }else if (char>="A"&&char<="Z") {
            hasUpperCase = true
        }else if(char>="0"&&char<="9"){
            hasDigit = true
        }
    }

    return hasDigit && hasLowerCase && hasUpperCase
}
//Set mật khẩu

function setPassword(){
    let password = prompt(`Mời thiết lập mật khẩu: `)

    if(isPasswordValid(password)){
        alert(`Đặt mật khẩu thành công! Mật khẩu: ${password}`)
        return password
    }else{
        alert(`
            Mật khẩu không hợp lệ: 
            1. Có ít nhất 6 ký tự
            2. Có ít nhất 1 số
            3. Có ít nhất 1 ký tự hoa
            2. Có ít nhất 1 ký tự viết thuòng
            `)
            //Gọi lại hàm set mật khẩu (đề quy)
            setPassword()
    }
}

//gọi hàm set pass, và gán pass vào biến
// let passwordOK = setPassword()

//Viết chương trình đăng nhập
let countLogin = 0

// while (true) {
//     let passwordLogin = prompt(`Mời nhập mật khẩu đăng nhập: `)
//     if (passwordLogin === passwordOK) {
//         alert(`Đăng nhập thành công, cửa đã mở`)
//         break
//     }
//     else{
//         countLogin++
//         if(countLogin<5){
//             alert(`Bạn đã nhập sai password, số lần còn lại ${countLogin}/5`)
//         }else{
//             alert(`Bạn đã nhập sai 5 lần, tài khoản của bạn sẽ bị block, liên hệ admin`)
//             break
//         }
//     }
// }


//30.4 Giải bài tập JavaScript 26 _ Chuyển tin nhắn sang mật mã
//Viết chuongw trình chuyển tin nhắn sang mật mã theo bảng: 
//const a = "abcdefghijklmnopqrstuvwxyz"
//const b = "zxcvbnmasdfghjklqwertyuiop"

function encryptMessage(message){
    const a = "abcdefghijklmnopqrstuvwxyz"
    const b = "zyxvbnmasdfghjklqwertyuiop"
    let result = ""

    for(let i = 0;i < message.length ; i++){
        let char = message[i].toLowerCase() // chuyển thành chữ thường để phù hợp vói bảng mã

        //Kiêm tra xem ký tự nhập vào có trong bảng mã này không
        if(a.includes(char)){
            //Thực hiện chuyển đổi
            //Kiểm tra vị trí index của a trong a
            let index = a.indexOf(char)
            //lấy  giá trị index, đóng sang chuỗi b lấy ký tự tương ứng từ b
            result += b[index]
        }
        //nếu không có trong bảng mã thì giữ nguyên và cộng dồn vào result
        else{
            result+=char
        }


    }

    return result
}

//cho người dùng nhập dữ liệu
// let messageInput = prompt(`Nhập tin nhắn để mã hóa: `)
// let kq = encryptMessage(messageInput)
// alert(`Tin nhắn được mã hóa ${kq}`)

//30.5 Giải bài tập JavaScript 27 _ Đếm từ tôi trong chuỗi - Bài tập JavaScript có giải chi tiết
// const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
// Đếm từ tôi trong string a trên ? 

const a = "tôi chăm học tôi chịu khó tôi đẹp zai"
const targetWord = "tôi"
let count = 0

for(let i = 0; i < a.length; i++){
   if(a.slice(i, i + targetWord.length) === targetWord){
    count++
   } 
}
alert(`Số lần của từ ${targetWord} xuất hiện trong chuỗi là ${count}`)








// Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi :  
// ví dụ nhập vào : abc123 sẽ tách và in ra thành 2 chuỗi abc và 123




