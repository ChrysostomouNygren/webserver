// Uppgift:
// https://github.com/cme-osuka/webbserverdatabaser/blob/main/week1/lecture2/exercises/calculator.md

const number = process.argv.splice(2);
// Med splice så skiter vi i allt innan det 3e argumentet i arrayen. De 2 första är ju sökvägen till node och sökvägen till det här dokumentet.

let matteTecken = number[1];
// 1 är det andra argumentet i vår array, och det är vad vårt mattetecken (vad fan heter det ens?) kommer att vara i ledet.

if (matteTecken === "+") {
  console.log(parseInt(number[0]) + parseInt(number[2]));
} else if (matteTecken === "-") {
  console.log(parseInt(number[0]) - parseInt(number[2]));
} else if (matteTecken === "x") {
  console.log(parseInt(number[0]) * parseInt(number[2]));
} else if (matteTecken === "÷") {
  console.log(parseInt(number[0]) / parseInt(number[2]));
} else {
  console.log("Something went wrong! Valid characters are: +, -, x & ÷");
  console.log("Please try again! :)");
}
