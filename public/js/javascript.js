function fileAdded() {
    document.getElementById('output').innerHTML = 'Файл выбран';
}

fonts = [
    'Arial, Helvetica, sans-serif',
    '"Times New Roman", Times, serif',
    '"Courier New", Courier, monospace',
    'monospace',
];

var i = 0;
document.getElementById('fontCh').addEventListener('click', () => {
    document.getElementById('textplacee').style.fontFamily = fonts[i];
    document.getElementById('fontWord').style.fontFamily = fonts[i];
    
    i++;
    if (i == fonts.length)
        i = 0;
});

if (window.location.href === 'http://localhost:3000/read') {
    document.getElementById('text').style.fontFamily = fonts[i];
}

document.getElementById('white').addEventListener('click', () => {
    var element = document.getElementById('textplacee').style;
    element.backgroundColor = 'white';
    element.color = 'black';
});

document.getElementById('wheat').addEventListener('click', () => {
    var element = document.getElementById('textplacee').style;
    element.backgroundColor = 'wheat';
    element.color = 'brown';
});

document.getElementById('black').addEventListener('click', () => {
    var element = document.getElementById('textplacee').style;
    element.backgroundColor = 'black';
    element.color = 'steelblue';
});

document.getElementById('grey').addEventListener('click', () => {
    var element = document.getElementById('textplacee').style;
    element.backgroundColor = 'grey';
    element.color = 'yellow';
});
