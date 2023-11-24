
const yesButton = document.querySelector('#yesButton');
const noButton = document.querySelector('#noButton');
const message = document.querySelector('#message');
const message1 = document.querySelector('#message1');
const message2 = document.querySelector('#message2');
const body = document.querySelector('body');

const musicPlay = () => {
    var audio = new Audio('rommusic.mp3');
audio.play();
}

yesButton.addEventListener('click', () => {
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
    message.innerHTML = `I always knew it! \n\n I love you too! \n <3`;
    message.style.color = '#000';
    body.style.backgroundColor = 'pink';
    musicPlay();
});

noButton.addEventListener('mouseover', () => {
    const button = document.querySelector('#noButton');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const randomX = Math.floor(Math.random() * (screenWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - button.offsetHeight));
    
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});

