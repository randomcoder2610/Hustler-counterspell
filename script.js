document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        const hustler = document.querySelector('.hustler');
        hustler.classList.add('animatehustler');
        setTimeout(() => {
            hustler.classList.remove('animatehustler');
        }, 700);
    }
}

setInterval(() => {
    hustler = document.querySelector('.hustler');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    hx = parseInt(window.getComputedStyle(hustler, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(hustler, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(hx-ox);
    offsetY = Math.abs(hy-oy);
    console.log(offsetX,offsetY)
    if(offsetX< 93 && offsetY<52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
    }

}, 100);

