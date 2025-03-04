function sums(N) {
    let sum = 0;
    if (N < 1) {
        console.log("Nhập vào không hợp lệ. N phải lớn hơn 1.");
        return false;
    } else if (isNaN(N)) {
        console.log("Nhập vào không hợp lệ. N phải là số.");
        return false;
    }
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}
let n = +prompt("Nhập một số vào trong chương trình: ");
let result = sums(n);
if (result !== false) {
    console.log(result);
} else if (result === false) {
    console.log(result);
}