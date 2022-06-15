var numberSendValue = document.getElementById("send-value");
var result = document.getElementById("result");

numberSendValue.addEventListener("click", functionEvent);

function functionEvent() {

    var numberTransform = document.getElementById("numberTransform").value;

    result.innerHTML = `${numberTransform}`;
    console.log(`Esse é o valor em binário: ${numberTransform}`);
}
