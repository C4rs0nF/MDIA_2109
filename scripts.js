var states = [
    "pictures/phil_emoji_3.png",
    "pictures/phil.png",
    "pictures/phlilliam.png",
    "pictures/philFour.png",
    "pictures/philFive.png",
    "pictures/philSix.png",
    "pictures/philSeven.png",
];

let counter = 0;

function changePhil() {
    var image = document.getElementById("philImage");

    if (counter < states.length) {
        image.src = states[counter];
        counter++;
        console.log(counter);
    } else {
        counter = 0;
    }
}
