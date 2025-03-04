let n = +prompt("Nhập số nguyên ngẫu nhiên vào: ");
if (n < 2) {
    alert("Số bạn nhập không phải là một số nguyên tố");
} else {
    let a=0;
    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            a++;
        }
    }
    if (a===2) {
        alert("Số bạn nhập vào là số nguyên tố");
    } else {
        alert("Số bạn nhập vào không phải là số nguyên tố");
    }
}
