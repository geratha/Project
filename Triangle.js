function myTriangle() {

    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    var number3 = parseInt(document.getElementById("number3").value);
    var triangle = [number1, number2,number3];
    console.log(triangle);


    if (number1 + number2 > number3 && number1 + number3 > number2 && number2 + number3 > number1) {

        if (number1 == number2 && number1 == number3 && number2 == number3) {
            console.log(alert("Equilateral"));
        }

        else if (number1 === number2 || number1 === number3 || number2 === number3) {
            console.log(alert("esoceles"));
        }
        else if (number1 + number2 > number3 || number2 + number3 > number1 || number1 + number3 > number2) {

            console.log(alert("scalen"));
        }
    }
    else {
        cansole.log("non triangle");
    }
}