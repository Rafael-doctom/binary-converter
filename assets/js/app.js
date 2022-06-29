var numberSendValue = document.getElementById("send-value");
var result = document.getElementById("result");

numberSendValue.addEventListener("click", ValueGenerator);

function ValueGenerator(numberTransform) {

    var numberTransform = document.getElementById("numberTransform").value;

    const bit = (numberTransform >>> 0).toString(2);
    console.log(bit);

    const data = numberTransform !== '' ? (numberTransform >>> 0).toString(2) : `<p>Nenhum valor adicionado.</p>`;

    result.innerHTML = `${data}`;

};

