let nextButton = document.querySelector('.slider-next');
let prevButton = document.querySelector('.slider-prev');

nextButton.addEventListener('click', function() {
    let gameItems = document.querySelectorAll('.game-item');
    document.querySelector('.game-slide').appendChild(gameItems[0]);
});

prevButton.addEventListener('click', function() {
    let gameItems = document.querySelectorAll('.game-item');
    document.querySelector('.game-slide').prepend(gameItems[gameItems.length - 1]); // here the length of gameItems = 6
});
