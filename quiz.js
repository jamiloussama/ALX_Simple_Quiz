
function checkAnswer() {
    var correctAnswer = "4";
    var selectedOption = document.querySelector('input[name="quiz"]:checked');
    var userAnswer = selectedOption.value;
    var feedbackText = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackText.textContent="Correct! Well done.";
    }
    else{
        feedbackText.textContent="That's incorrect. Try again!";
    }
}

var submitbtn = document.getElementById('submit-answer');
submitbtn.addEventListener("click",checkAnswer);
