function niranjan(a, b, c) {
    var sum = a + b + c;
    var rem = sum % 10;
    if (sum > 10) {
        if (rem == 0) {
            return "divisible by 10";
        }
        else if (rem >= 5) {
            if (rem == 5) {
                return sum + 5;
            }
            else if (rem == 6) {
                return sum + 4;
            }
            else if (rem == 7) {
                return sum + 3;
            }
            else if (rem == 8) {
                return sum + 2;

            }
            else if (rem == 9) {
                return sum + 1;
            }

        }
        else {
            if (rem == 4) {
                return (sum - 4);
            }
            else if (rem == 3) {
                return (sum - 3);
            }
            else if (rem == 2) {
                return (sum - 2);
            }
            else if (rem == 1) {
                return (sum - 1);
            }
        }
    }
    else if (sum < 10 && sum >= 5) {
        return 10;
    }
    else {
        return 0;
    }
}
console.log(niranjan(1, 2, 0));