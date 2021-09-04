function checkthree(a, b, c) {
    if (a === b && b === c) {
        return 0;
    }
    else {
        if (a == b) {
            return c;
        }
        else if (b == c) {
            return a;
        }
        else if (a == c) {
            return b;
        }
        else {
            return a + b + c;
        }

    }
}
console.log(checkthree(-3, -3, -3));