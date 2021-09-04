var num = 514.97787;

var sum = 0;
if (typeof (num) == "number") {
    while (num > 0) {
        sum = sum + (num % 10);
        num = parseInt(num / 10);


    }
    console.log(sum);
}

else {
    console.log("Integers only");
}