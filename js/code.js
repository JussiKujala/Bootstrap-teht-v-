//ensimmäinen kuva
document.getElementById("images").src = "../pictures/1.jpg"

//muuttujat
let image = document.getElementById("images");
let current = 1;

//next image napin funktio joka vaihtaa kuvaa
function nextimage() {
    current++;
    if (current == 2) {
        image.src = "../pictures/2.jpg";
    }
    if (current == 3) {
        image.src = "../pictures/3.jpg";
    }
    if (current == 4) {
        image.src = "../pictures/4.jpg";
    }
    if (current == 5) {
        image.src = "../pictures/5.jpg";
    }
    if (current == 6) {
        image.src = "../pictures/6.jpg";
    }
    if (current == 7) {
        image.src = "../pictures/7.jpg";
    }
    if (current == 8) {
        image.src = "../pictures/8.jpg";
    }
    if (current == 9) {
        image.src = "../pictures/9.jpg";
    }
    if (current == 10) {
        current = 1;
        image.src = "../pictures/1.jpg";
    }
}
