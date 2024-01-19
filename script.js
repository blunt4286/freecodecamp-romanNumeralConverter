// elements

let input = document.getElementById("number");
let convertBtn = document.getElementById("convert-btn");
let output = document.getElementById("output");

// logic

function checkNumber() {
  if (input.value === "") {
    output.textContent = "Please enter a valid number";
    input.value = "";
  } else if (input.value <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
    input.value = "";
  } else if (input.value >= 4000) {
    output.textContent = "Please enter a number less than or equal to 3999";
    input.value = "";
  } else {
    output.textContent = convertNumber(input.value);
    input.value = "";
  }
}

function convertNumber(num) {
  if (isNaN(num)) {
    return NaN;
  } else {
    let romanStr = "";
    let romanArray = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ];
    let arabicArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let i = 0; i < arabicArray.length; i++) {
      while (arabicArray[i] <= num) {
        romanStr += romanArray[i];
        num -= arabicArray[i];
      }
    }
    return romanStr;
  }
}

// event listeners

convertBtn.addEventListener("click", checkNumber);
