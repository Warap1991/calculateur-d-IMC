document.getElementById("calculate").addEventListener("click", calculateIMC);

function calculateIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result").innerHTML = "Veuillez entrer des valeurs valides.";
        return;
    }

    const imc = weight / (height * height);
    let message = "";

    if (imc < 18.5) {
        message = "Vous êtes en sous-poids.";
    } else if (imc < 25) {
        message = "Votre poids est normal.";
    } else if (imc < 30) {
        message = "Vous êtes en surpoids.";
    } else {
        message = "Vous êtes obèse.";
    }

    document.getElementById("result").innerHTML = `Votre IMC est ${imc.toFixed(2)}. ${message}`;
}
