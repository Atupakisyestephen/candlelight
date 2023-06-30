const riddleText = document.querySelector('.container .riddle p');
const answerText = document.querySelector('.container .answer p');
const showAnswerButton = document.querySelector('.container .show-answer-button');
const getRiddleButton = document.querySelector('.container .get-riddle-button');

document.addEventListener('DOMContentLoaded', getRiddle);
showAnswerButton.addEventListener('click', showAnswer);
getRiddleButton.addEventListener('click', getRiddle);

function getRiddle() {
    fetch('https://riddles-api.vercel.app/random', {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(data => data.json())
        .then(obj => {
            riddleText.innerHTML = obj.riddle;
            answerText.innerHTML = "Answer: " + obj.answer;
            answerText.classList.add('hidden');
        });
}

function showAnswer() {
    answerText.classList.toggle('hidden');
}