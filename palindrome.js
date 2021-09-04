function ispalindrome(text) {
    text = text.toUpperCase();

    if (text.length <= 1) {
        return true;
    }
    else if (text.charAt(0) != text.charAt(text.length - 1)) {
        return false;
    }
    else if (text.charAt(0) == text.charAt(text.length - 1)) {
        return ispalindrome(text.substr(1, text.length - 2));
    }
}
console.log(ispalindrome("papaPs"));