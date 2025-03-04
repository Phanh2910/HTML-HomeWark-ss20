let a= +prompt("Nhập vào số a: ");
let b= +prompt("Nhập vào số b: ");
let answer= 1;
if (isNaN(a) || isNaN(b)) {
    console.log("Giá trị nhập vào không hợp lệ, chỉ được phép nhập số");
}else if (b < 1) {
    console.log("Giá trị nhập vào không hợp lệ, giá trị nhập vào phải lớn hơn 1"); 
}else {
    for (let i = 1; i <= b; i++) {
        answer *= a;
    }
        alert(answer);
}
