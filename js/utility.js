function hideElement(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
}

function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function randomAlphabet(){
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    // console.log(alphabet);

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
} 

function setButtonBg(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}