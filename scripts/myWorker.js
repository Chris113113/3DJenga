var numBlocksRemoved = 0;
var activePlayer = 1;
var score = ['', 0, 0];
var gameover = false;

console.log('Worker initialized');

onmessage = function(e) {
    if(e.data[0] === 'score') {
        score[activePlayer] += 1;
        if(activePlayer == 1) {
            activePlayer = 2;
        }
        else {
            activePlayer = 1;
        }
        numBlocksRemoved += 1;
    }
    if(e.data[0] === 'gameover') {
        if(!gameover) {
            //  if(activePlayer == 1) {
            //     activePlayer = 2;
            // }
            // else {
            //     activePlayer = 1;
            // }
            gameover = true;
            postMessage([activePlayer, score, numBlocksRemoved %3 == 0, gameover]);
        }
    }
    if(e.data[0] === 'continue') {
        gameover = false;
    }
    if(e.data[0] === 'reset') {
        gameover = false;
        activePlayer = 1;
        score = ['', 0, 0];
    }
    if(!gameover) postMessage([activePlayer, score, numBlocksRemoved % 3 == 0, gameover]);
}

