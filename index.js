$( document ).ready(function() {
    let imageSources = ['Ciri.png', 'Geralt.png', 'Iorveth.png', 'Jaskier.png', 'Triss.png', 'Vesemir.png', 'Yennefer.png', 'Zoltan.png',
                        'Ciri.png', 'Geralt.png', 'Iorveth.png', 'Jaskier.png', 'Triss.png', 'Vesemir.png', 'Yennefer.png', 'Zoltan.png'];

    let shuffledImageSources = shuffle(imageSources);
    
    loadImages(shuffledImageSources);

});

let oneFlipped = false;
let turnCount = 0;

$('.card__face--back').click(function(e){
    // e.preventDefault();
    $(this).toggleClass('flipped');
})



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

function loadImages(images) {
    for (let i = 1; i <= images.length; i++) {
        $('#card' + i + ' .card__face--front').attr('src', 'images/Humans/' + images[i-1]);
    }
}