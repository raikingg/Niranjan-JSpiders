var a = 11;
var b = 1;
var c = 7;
if (a == b + 10 || a == c + 10) {
    console.log(true);
}
else if (b == a + 10 || a == c + 10) {
    console.log(true);
}
else if (c == a + 10 || c == b + 10) {
    console.log(true);
}
else {
    console.log(false);
}