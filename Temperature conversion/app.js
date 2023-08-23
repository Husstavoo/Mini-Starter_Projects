document.getElementById("submitBtn").addEventListener("click", function () {
  if (document.getElementById("celBtn").checked) {
    let actualTemp = document.getElementById("temp").value;
    actualTemp = (actualTemp - 32) * (5 / 9);
    document.getElementById("result").innerHTML = actualTemp.toLocaleString(
      undefined,
      { style: "unit", unit: "celsius" }
    );
  }

  if (document.getElementById("fBtn").checked) {
    let actualTemp = document.getElementById("temp").value;
    actualTemp = actualTemp * (9 / 5) + 32;
    document.getElementById("result").innerHTML = actualTemp.toLocaleString(
      undefined,
      { style: "unit", unit: "fahrenheit" }
    );
  }
});
