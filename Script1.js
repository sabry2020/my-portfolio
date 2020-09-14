// image slider


const images = [
    'motivation1.jpg',
    'intelligence1.jpg',
    'motivation2.jpg',
    'study1.jpg',
    'study2.jpg',
    'study3.jpg'
]

let number = 0
function next() {
    let slider = document.getElementById("slider");

    number++;
    if (number > images.length - 1)
        number = 0;


    slider.src = images[number];

}


function prev() {
    let slider = document.getElementById("slider");
    number--;
    if (number < 0)
        number = images.length - 1;

    slider.src = images[number];

}