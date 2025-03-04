let number = prompt("Mời bạn nhập số: ");
if (isNaN(number) ){
    alert("Số bạn nhập vào không hợp lệ: ");
}else if(number[0]===number[number.length-1]){
    alert("Số bạn nhập là số đối xứng");
}else{
    alert("Số bạn đã nhập không phải số đối xứng");
}