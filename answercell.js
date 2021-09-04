var caller = "dad";
var day = "morning";

if (day == "morning" || day == "afternoon" || day == "evening" || day == "night") {
    if (day == "morning" && (caller == "mom" || caller == "MOM" || caller == "Mom")) {

        console.log("answer");
    }

    else if (day === "morning") {
        console.log("do not answer");

    }
    else {
        console.log("answer");
    }
}
else {
    console.log("Please tell the valid hour!!");
}
