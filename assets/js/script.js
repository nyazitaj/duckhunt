function taj(elemImg) {

    setInterval(function() {
        /* console.log(document.querySelector( '#' + elemImg ).getAttribute('top-pos-start') ); */

        var elem = document.querySelector( '#' + elemImg );
        var currentTopPosStart = elem.getAttribute('top-pos-start');
        var currentLeftPosStart = elem.getAttribute('left-pos-start');
        var currentTopPosEnd = elem.getAttribute('top-pos-end');
        var currentLeftPosEnd = elem.getAttribute('left-pos-end');

        document.querySelector( '#' + elemImg ).style.left = (currentTopPosStart + 1) + 'px';
    }, 300);

}
function createDuck(totalDuck, minLimitTop, maxLimitTop, minLimitLeft, maxLimitLeft) {

    document.querySelector('#row-gamearea').innerHTML = '';

    for(var x=1; x<=totalDuck; x++) {

        var toptStart = Math.floor((Math.random() * maxLimitTop) + (minLimitTop));
        var leftRand = Math.floor((Math.random() * 2) + 1) == 1? minLimitLeft: maxLimitLeft;
        var leftStart = leftRand;
        var topEnd = Math.floor((Math.random() * maxLimitTop) + (minLimitTop));
        var lefEnd = Math.floor((Math.random() * 2) + 1) == 1? minLimitLeft: maxLimitLeft;

        var elemImg = document.createElement('img');
        elemImg.setAttribute('src', 'assets/images/duck3.gif');
        elemImg.setAttribute('alt', 'Duck');
        elemImg.setAttribute('draggable', 'false');
        elemImg.setAttribute('id', 'duck-' + x);
        elemImg.classList.add('duck');
        elemImg.setAttribute('top-pos-start', toptStart);
        elemImg.setAttribute('left-pos-start', leftStart);
        elemImg.setAttribute('top-pos-end', topEnd);
        elemImg.setAttribute('left-pos-end', lefEnd);
        elemImg.setAttribute('onload', 'taj(\'duck-' + x + '\')');

        leftStart == minLimitLeft ? elemImg.classList.add('inverse') : false;

        elemImg.addEventListener('click', function(event) {
            // document.querySelector('#row-gamearea').removeChild( document.querySelector("#" + event.target.id) );

            event.target.classList.add('duck-dead');
            event.target.src = 'assets/images/dead-duck2.png';

            // Increasing the hunter scores by 10
            var hunterS = document.querySelector('#scores-hunter span').innerHTML;
            document.querySelector('#scores-hunter span').innerHTML = +hunterS + 10;
        });

        // elemImg.load(function(event) {
        //    setInterval(function() {
        //        console.log(document.querySelector( '#duck-' + x ));

        //        /* var elemImg = document.querySelector( '#duck-' + x );
        //        var currentTopPosStart = elemImg.getAttribute('top-pos-start');
        //        var currentLeftPosStart = elemImg.getAttribute('left-pos-start');
        //        var currentTopPosEnd = elemImg.getAttribute('top-pos-end');
        //        var currentLeftPosEnd = elemImg.getAttribute('left-pos-end');

        //        document.querySelector( 'duck-' + x ).style.left = (currentTopPosStart + 5) + 'px'; */
        //    }, 300);
        // });

        /* elemImg.onload = (event) => {
            console.log(event);
        }; */

        elemImg.style.top = toptStart + "px"
        elemImg.style.left = leftStart + "px"
        document.querySelector('#row-gamearea').appendChild(elemImg);

    }
}

var countGame;
function startGame() {
    // createDuck(10, -40, 330, -60, 970);
    createDuck(10, -0, 330, -0, 900);

    var counter = 0;
    countGame = setInterval(function() {
        counter = document.querySelector('#timer span').innerHTML;
        document.querySelector('#timer span').innerHTML = +counter + 1;
    }, 1000);
}

(function() {
    var startOrFinish = document.querySelectorAll('#row-close, #start-game');

    for( var x=0; x<startOrFinish.length; x++ ) {
        startOrFinish[x].addEventListener('click', function(e) {
            document.getElementById('welcome-container').classList.toggle('d-none');
            document.getElementById('game-container').classList.toggle('d-none');

            if(e.target.id == 'start-game') {
                startGame();
            }
            /* else {
                clearInterval(countGame);
            } */
        });
    }
})();

/* document.querySelector('#row-gamearea').addEventListener('mousemove', function(e) {
    var elemTop = Math.round( e.target.getBoundingClientRect().top );
    document.querySelector('#timer span').innerText = elemTop;
}) */