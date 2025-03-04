let a = +prompt("Nhập a: ");
let b = +prompt("Nhập b: ");
let n = a;
if (!isNaN(a) && !isNaN(b)) {
    for (let i = 1; i < b; i++) {
        a = a * n;
    }
    alert(`Kết quả: ${a}`);
} else {
    alert("Giá trị mà bạn vào nhập không hợp lệ :((((((");
}
let str = prompt("Mời bạn nhập vào một chuỗi ký tự: ");
let Char = prompt("Mời bạn nhập vào ký tự bạn cần tìm: ");
if (Char.length !== 1) {
    alert("Chỉ được nhập 1 ký tự vào");
} else {
    let find = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === Char) {
            find = true;
            break;
        }
    }
    if (find) {
        alert("có tồn tại ký tự mà bạn cần tìm");
    } else {
        alert("Không tồn tại ký tự mà bạn cần tìm");
    }
}