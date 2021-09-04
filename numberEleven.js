var a = -56;
if (a < 0)
    a = -(a);
console.log((a > 0 && (a % 11 == 0 || a % 11 == 1)) ? true : false);