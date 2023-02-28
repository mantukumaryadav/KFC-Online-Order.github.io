function OrderClick() {
    document.getElementById("lblName").innerHTML = document.getElementById("txtName").value;
    document.getElementById("lblMobile").innerHTML = document.getElementById("txtMobile").value;

    var mealName = "";
    var mealCost = 0;

    var adOnName = "";
    var adOnCost = 0;

    var total = 0;

    var optTandoori = document.getElementById("optTandoori");
    var optBiryani = document.getElementById("optBiryani");

    if (optTandoori.checked) {
        mealName = optTandoori.value;
        mealCost = 313.33;
    }
    if (optBiryani.checked) {
        mealName = optBiryani.value;
        mealCost = 740.00;
    }

    var optBig = document.getElementById("optBig");
    var optChizza = document.getElementById("optChizza");

    if (optBig.checked) {
        adOnName += optBig.value + "<br>";
        adOnCost = 680.74;
        mealCost += adOnCost;
    }

    if (optChizza.checked) {
        adOnName += optChizza.value + "<br>";
        adOnCost = 299.05;
        mealCost += adOnCost;
    }
    total = mealCost;

    document.getElementById("lblMeal").innerHTML = mealName;
    document.getElementById("lblAdOn").innerHTML = adOnName;
    document.getElementById("lblTotal").innerHTML = `<b>&#8377; ${total}</b>`
}