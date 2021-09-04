function makeChocolate(a, b, c) {
    if ((a + b * 5) < c) {
        return -1;
    }
    else if (a + b * 5 == c) {
        return a;
    }
    else if ((c - (b * 5)) < a) {
        return c - (b * 5);
    }
}
console.log(makeChocolate(6, 1, 10));