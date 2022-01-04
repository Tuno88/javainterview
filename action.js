const questionContainer = document.getElementById("container");
const questionText = document.getElementById("question");
const answerButton = document.getElementById("answer_button");
const newQuestionButton = document.getElementById("next_button");
const answerText = document.getElementById('answerText');
const answerContainer = document.getElementById('answerContainer');
const exitAnswer = document.getElementById('exit-icon');
const loader = document.getElementById("loader");
function getNewQuestion(){
    const question = questions[Math.floor(Math.random()*questions.length)];
    questionText.textContent = question.questionText;
    answerText.textContent = question.answer;
}
function getAnswer(){
    answerContainer.style.display = "block";
}
function exitAnswerContainer(){
    answerContainer.style.display = "none";
}
getNewQuestion();
newQuestionButton.addEventListener('click',getNewQuestion);
answerButton.addEventListener('click',getAnswer);
exitAnswer.addEventListener('click',exitAnswerContainer);