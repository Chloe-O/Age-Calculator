let yearResult = $('#year-result p span');
let currentYear = new Date().getFullYear();

console.log( currentYear );

$('.submit').on('click', () => {
    let yearsAlive = currentYear - $('#year').val();
    console.log(yearsAlive);
});

console.log(currentYear - $('#year').val())

// $('#year-result p span').text(29)

