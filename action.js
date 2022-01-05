const questionContainer = document.getElementById("container");
const questionText = document.getElementById("question");
const answerButton = document.getElementById("answer_button");
const newQuestionButton = document.getElementById("next_button");
const answerText = document.getElementById('answerText');
const answerContainer = document.getElementById('answerContainer');
const exitAnswer = document.getElementById('exit-icon');
const exitAnswer2 = document.getElementById('exit-icon2');
const loader = document.getElementById("loader");
//Show Loading
function loading(){
    loader.hidden = false;
    questionContainer.hidden = true;
}
//Hide Loading
function complete(){
    questionContainer.hidden = false;
    loader.hidden = true;
}
function getNewQuestion(){
    loading();
    const question = questions[Math.floor(Math.random()*questions.length)];
    if(question.questionText.length > 200){
        questionText.classList.add('long-long-quote');
        questionText.classList.add('question-long');
    }else if(question.questionText.length > 100){

        questionText.classList.add('long-quote');
    }
    else{
        questionText.classList.remove('long-quote');
        questionText.classList.remove('long-long-quote');
        questionText.classList.remove('question-long');
    }
    questionText.innerHTML = question.questionText;
    answerText.innerHTML = question.answer;
    complete();
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
exitAnswer2.addEventListener('click',exitAnswerContainer);

