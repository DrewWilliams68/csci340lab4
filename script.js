
function greenLight(){
            $(".go").css("opacity", "100%")

            $(".yield").css("opacity", "20%")

            $(".stop").css("opacity", "20%")

}
function yellowLight() {
            $(".go").css("opacity", "20%")

            $(".yield").css("opacity", "100%")

            $(".stop").css("opacity", "20%")
}
function redLight() {
            $(".go").css("opacity", "20%")

            $(".yield").css("opacity", "20%")

            $(".stop").css("opacity", "100%")
}
var next = greenLight;

var stopLight = function() {
    if (next == greenLight) {
        next = redLight;
    } else if(next == redLight){
        next = yellowLight;
    } else {
        next = greenLight;
    }
    next();
}

var clickButton = $("#clicker");
clickButton.click(stopLight);
console.log("loaded");
console.log(clickButton);

