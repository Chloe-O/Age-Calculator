let getDate = new Date();
let currentYear = getDate.getFullYear();
let currentMonth = getDate.getMonth();
let currentDay = getDate.getDay();

let yearResult = $("#year-result p span");
let monthResult = $("#month-result p span");
let dayResult = $("#day-result p span");

let counter = 0;

$(".submit").on("click", (e) => {
  let yearsAlive = currentYear - parseInt($("#year").val());

  // for (let counter = 0; counter <= yearsAlive; counter++ ) {
  //   yearResult.text(counter);
  // };

  e.preventDefault();
});

// function calculate() {

// }
