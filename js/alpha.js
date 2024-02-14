/*
function play() {
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');
}
*/
  
function continueGame() {
    //1. Generate a rendom alphabet
    const alphabet = randomAlphabet();
    // console.log('your random alphabet', alphabet);

    // Set generated alphabet on  display
    const typeAlphabet = document.getElementById('type-alphabet');
    typeAlphabet.innerText = alphabet;

    // set button background
    setButtonBg(alphabet);
    

}
function play() {
    hideElement('home-screen');
    showElement('play-ground');
    continueGame();
}