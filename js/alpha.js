/*
function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');
}
*/
function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    //stop the game if pressed Esc
    if(playerPressed === 'Escape') {
        gameOver();
    }

    // Key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    // check right or wrong key pressed
    if (playerPressed === expectedAlphabet) {
        console.log('You have got a point!');

        const currentScore = getTextElementValueById('current-score');
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore);

        // ---------------------------------
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        
         // // 2 .increase the score by 1
        //  const newScore = currentScore + 1;

         // // 3. show the updated score
        //  currentScoreElement.innerText = newScore;
 
         // start a new round
         removeButtonBg(expectedAlphabet);
         continueGame();
    } else {
        console.log('dhurrr vaiya va apu...right key press koro');
        
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if (updatedLife ===0) {
            gameOVer();
        }
        // ----------------------------
        // step-1: get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step -2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)
  
function continueGame() {
    //1. Generate a rendom alphabet
    const alphabet = randomAlphabet();
    // console.log('your random alphabet', alphabet);

    // Set generated alphabet on  display
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set button background
    setButtonBg(alphabet);
    

}
function play() {
    hideElement('home-screen');
    hideElement('final-score');
    showElement('play-ground');
    continueGame();

    // Reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

}

function gameOVer() {
  hideElement('play-ground');
  showElement('final-score');

  //Update final Score
  //1. Get Grand score
  const grandScore = getTextElementValueById('current-score');
  console.log(grandScore);
  setTextElementValueById('grand-score', grandScore);

  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
};