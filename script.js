const game = () => {
    let pScore = 0;
    let cScore = 0;
    

    //start the game

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
//play match
const playMatch = () => {

}
    //call the function

    startGame();
    updateScore();
};



//start the game function
game();