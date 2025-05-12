$(document).ready(function () {
  let imageSources = [
    "Ciri.png",
    "Geralt.png",
    "Iorveth.png",
    "Jaskier.png",
    "Triss.png",
    "Vesemir.png",
    "Yennefer.png",
    "Zoltan.png",
    "Ciri.png",
    "Geralt.png",
    "Iorveth.png",
    "Jaskier.png",
    "Triss.png",
    "Vesemir.png",
    "Yennefer.png",
    "Zoltan.png",
  ];

  let shuffledImageSources = shuffle(imageSources);

  loadImages(shuffledImageSources);
});

let previousCardId;
let oneFlipped = false;
let turnCount = 0;
let score = 0;

// NIGGER

$(".card").click(function (e) {
  currentCardId = $(this).attr('id');

  $('.card__face--back', this).toggleClass('flipped');


  if (oneFlipped) {
    turnCount++;
    oneFlipped = false;

    let previousCardImage = $('#' + previousCardId + ' .card__face--front').attr('src');
    let currentCardImage = $('#' + currentCardId + ' .card__face--front').attr('src')

    if (currentCardImage === previousCardImage) {

      flipPair(previousCardId, currentCardId);

    }
    else {

      hidePair(previousCardId, currentCardId);

    }
  }
  else {
    oneFlipped = true;
    previousCardId = $(this).attr('id');
  }

});

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
    $("#card" + i + " .card__face--front").attr(
      "src",
      "images/Humans/" + images[i - 1]
    );
  }
}

function flipPair(prevCardId, CurrCardId) {
  setTimeout(function() {
    $('#' + prevCardId).css({'opacity' : '0'});
    $('#' + CurrCardId).css({'opacity' : '0'});
    }, 1000);
}

function hidePair(prevCardId, CurrCardId) {
  setTimeout(function() {
    $('#' + prevCardId + ' .card__face--back').toggleClass('flipped');
    $('#' + CurrCardId + ' .card__face--back').toggleClass('flipped');
    }, 1000);
}
