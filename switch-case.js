// JavaScript Switch Case
//Viết chương trình khung tìm kiếm: cho người dùng lựa chọn

// let choose = prompt(alert(`
//    Chọn cách tìm kiếm: 
//     1. Tìm theo tên
//     2. Tìm theo tác giả
//     3. Tìm theo nhà xuất bản
//     4. Tìm theo tiêu đề
//     `
// ))

let choose = Number(prompt(`
   Chọn cách tìm kiếm: 
    1. Tìm theo tên
    2. Tìm theo tác giả
    3. Tìm theo nhà xuất bản
    4. Tìm theo tiêu đề
    `
))

switch (choose) {
    case 1:
        alert(`Tìm theo tên`)
        break;
    case 2:
        alert(`Tìm theo tác giả`)
        break;
    case 3:
        alert(`Tìm theo nhà xuất bản`)
        break;
    case 4:
        alert(`Tìm theo tiêu đề`)
        break;
    default:
        alert(`Lựa chọn không hợp lệ!`)
        break;
}



