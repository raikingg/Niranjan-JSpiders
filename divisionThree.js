var num = 56791;

var sum = 0;
if (typeof (num) == "number" && (num % 10 == 1 || num % 10 == 0 || num % 10 == 2 || num % 10 == 3 || num % 10 == 4 || num % 10 == 5 || num % 10 == 6 || num % 10 == 7 || num % 10 == 8 || num % 10 == 9)) {
    while (num > 0) {
        sum = sum + (num % 10);
        num = parseInt(num / 10);


    }

    if (sum % 3 === 0) {
        console.log("Divisible");
    }
    else {
        console.log("not Divisible");
    }
}

else {
    console.log("Integers only");
}