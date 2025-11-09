// Bài tập js 33:
// 1. Viết chương trình tạo 1 mảng 1 chiều gồm các phần tử là số nguyên, có n phần tử ngẫu nhiên, n do người dùng nhập từ bàn phím 
// 2. Xuất các giá trị trong mảng
// 3. Đảo ngược mảng, và xuất mảng sau khi đảo ngược
// 4. Sắp xếp mảng tăng dần
// 5. Tính tổng các phần tử trong mảng

function createArr(){
    //bước 1: nhập số phần tử
    let n = Number(prompt(`Nhập số phần tử trong mảng: `))
    if(!isNaN(n) && n > 0){
        //bước 2 khởi tạo tạo mảng rỗng
        let arr = []
        //bước 3: dùng vòng lặp đểt nhập phần tử
        for(let i = 0; i < n ; i++){
            // let  value =  prompt(`Nhập phần tử thứ ${i+1}: `)
            let value = Math.floor(Math.random()*100)+1
            //floor làm tròn
            arr.push(value)
        }
        console.log(`Mảng bạn vừa nhập là: ${arr}`)
        console.log(`<------------------------------------>`)
        console.log(`Mảng sau khi được đảo chiều: ${arr.reverse()}`)
        console.log(`<------------------------------------>`)
        console.log(`Mảng sau khi được sắp xếp tăng dần: ${arr.sort((a,b)=>a-b)}`)
        console.log(`<------------------------------------>`)
        console.log(`Mảng sau khi được sắp xếp giảm dần: ${arr.sort((a,b)=>b-a)}`)
    //tình tổng giá trị trong mảng
    let sum = arr.reduce(
        (accumlator, currentValue) => accumlator+currentValue,0
    )
    console.log(`<------------------------------------>`)
    console.log(`Mảng sau khi được tính tổng: ${sum}`)


    //lặp lại nếu n không phải số nguyên 
    }else{
        createArr()
    }

}


createArr()



