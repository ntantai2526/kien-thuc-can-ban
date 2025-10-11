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

function kiemTraPassword(){
    while(true){
        //Nhập vào giá trị
        let password = prompt(`Nhập vào để tạo password: `)
        //Kiểm tra điều kiện
        chuThuong = 0
        chuHoa = 0
        chuSo = 0
        khoangTrang = 0
        kyTuDacBiet = 0
        for(i = 0; i < password.length; i++){
            char = password[i]
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
        while(password.length<=6 && chuThuong <= 1 && chuHoa <= 1 && chuSo <= 1){
             password = prompt(`
                Quy tắc đặt password:
                1. Mật khẩu hợp lệ khi có ít nhất 6 ký tự
                2. Chứa ít nhất 1 chữ HOA
                3. Chứa ít nhất 1 chữ thường
                4. Chứa ít nhất 1 chữ số`)
        }
    }
}
//gọi hàm
kiemTraPassword()


