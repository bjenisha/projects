//Select 7 colors
let color = ['azure', 'lightcyan', 'mistyrose', 'powderblue', 'HotPink', 'PeachPuff', 'Lavender', 'MediumSpringGreen', 'RosyBrown', 'MediumVioletRed'];



//change the background of canvas when button is clicked
let buttons = document.getElementById('buttons');

buttons.addEventListener('click', function() {
    //select a random number between 0 - 6
    let index = parseInt((Math.random() * color.length) + 1);
    //grab the pointme
    let pointme = document.getElementById('pointme');

    pointme.style.background = `${color[index]}`
})