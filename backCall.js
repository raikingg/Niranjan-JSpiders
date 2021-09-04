function closeFar(a, b, c) {
    if (Math.abs(b - a) <= 1) {
        if (Math.abs(c - b) >= 2 && Math.abs(c - a) >= 2) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (Math.abs(c - a) <= 1) {
        if (Math.abs(b - a) > 2 || Math.abs(b - c) > 2) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}
console.log(closeFar(10, 10, 8));