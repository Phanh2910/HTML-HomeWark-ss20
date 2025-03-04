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
let n = Number(prompt("Nhập một số nguyên dương: "));
let result = sums(n);
console.log(result !== false ? `Tổng các số từ 1 đến ${n} là: ${result}` : "");/* Kiểm tra đúng sai về giá trị mà dev nhập vào */
