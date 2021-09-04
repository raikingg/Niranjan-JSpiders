function codeFar(a, b, c) {
    var max = Math.max(a, b, c);
    var min = Math.min(a, b, c);
    var third = (a + b + c) - (max + min);
    var arr = [max, third, min];


    if (arr[0] > (arr[1] + 2) && arr[0] > (arr[2] + 2)) {
        if (arr[1] - arr[2] <= 1) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (max == min) {
        if (min - third <= 1) {
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
console.log(codeFar(1, 2, 10));