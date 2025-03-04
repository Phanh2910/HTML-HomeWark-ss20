let number = +prompt("Mời bạn nhập số vào: ")
if (isNaN(number) || number < 0){
    alert("Dữ liệu nhập vào không hợp lệ");
} else {
    let i;
    for (i = 1; i <= number; i++){
        if (i % 5 == 0) {
            alert('Số bạn nhập chia hết cho 5 trong khoảng từ 1 đến ${num}');
            break;
        }
    }
}