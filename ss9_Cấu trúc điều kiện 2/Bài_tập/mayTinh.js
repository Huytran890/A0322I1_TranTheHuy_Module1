let x='';
function a(id) {
    return document.getElementById(id);
}
function set_number(num) {
    x+= num;
    a('input').value = x;
}
function clear() {
    x='';
    a('input').value = x;
}
function result() {
    a('input').value = eval(a('input').value);
    x = a('input').value;
}
