// function tinhCong() {
//     let input = parseFloat(document.getElementById('1').value);
//     let input2 = parseFloat(document.getElementById('2').value);
//     let ketqua = input + input2;
//     alert(ketqua);
// }
//
// function tinhTru() {
//     let input = parseInt(document.getElementById('1').value);
//     let input2 = parseInt(document.getElementById('2').value);
//     let ketqua = input - input2;
//     alert(ketqua);
// }
//
// function tinhNhan() {
//     let input = parseInt(document.getElementById('1').value);
//     let input2 = parseInt(document.getElementById('2').value);
//     let ketqua = input * input2;
//     alert(ketqua);
// }
//
// function tinhChia() {
//     let input = parseInt(document.getElementById('1').value);
//     let input2 = parseInt(document.getElementById('2').value);
//     let ketqua = input / input2;
//     alert(ketqua);
// }
function calculate(value) {
    // let phepTinh = prompt("mời nhập phép tính của bạn: ");
    switch (value) {
        case "+" :
            var input = parseInt(document.getElementById('1').value);
            var input2 = parseInt(document.getElementById('2').value);
            var ketqua = input + input2;
            alert(ketqua);
            break;
        case "-" :
            var input = parseInt(document.getElementById('1').value);
            var input2 = parseInt(document.getElementById('2').value);
            var ketqua = input - input2;
            alert(ketqua);
            break;
        case "*" :
            var input = parseInt(document.getElementById('1').value);
            var input2 = parseInt(document.getElementById('2').value);
            var ketqua = input * input2;
            alert(ketqua);
            break;
        case "/" :
            var input = parseInt(document.getElementById('1').value);
            var input2 = parseInt(document.getElementById('2').value);
            if( input2 == 0 )
                alert("Error. Mời bạn nhập lại giá trị khác 0!");
            else
                var ketqua = input / input2;
                alert(ketqua);
                break;
        default:
            alert("Bạn chưa thực hiện phép tính!");
    }
}