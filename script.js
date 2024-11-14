let currentQuestion = 0;
let correctQuestions = 0;
let audioFail = new Audio ('img/sounds/fail.mp3');
let audioSuccess = new Audio ('img/sounds/success.mp3')


let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "Answer1": "Robbie Williams",
        "Answer2": "Lady Gaga",
        "Answer3": "Tim Berners-Lee",
        "Answer4": "Justin Bieber",
        "rightAnswer": 3
    },
    {
        "question": "Wie viele Planeten hat unser Sonnensystem?",
        "Answer1": "7",
        "Answer2": "8",
        "Answer3": "9",
        "Answer4": "10",
        "rightAnswer": 2
    },
    {
        "question": "In welchem Jahr fiel die Berliner Mauer?",
        "Answer1": "1989",
        "Answer2": "1991",
        "Answer3": "1987",
        "Answer4": "1993",
        "rightAnswer": 1
    },
    {
        "question": "Welches Tier ist für seine langsame Bewegung bekannt?",
        "Answer1": "Tiger",
        "Answer2": "Schnecke",
        "Answer3": "Elefant",
        "Answer4": "Pferd",
        "rightAnswer": 2
    },
    {
        "question": "Welches Element hat das chemische Symbol 'O'?",
        "Answer1": "Gold",
        "Answer2": "Silber",
        "Answer3": "Sauerstoff",
        "Answer4": "Kalium",
        "rightAnswer": 3
    },
    {
        "question": "Welches Land ist bekannt für das Opernhaus in Sydney?",
        "Answer1": "Neuseeland",
        "Answer2": "Australien",
        "Answer3": "Kanada",
        "Answer4": "USA",
        "rightAnswer": 2
    }
];

function init() {
    document.getElementById("allQuestions").innerHTML = questions.length;
    showCurrentQuestion();
}

function showCurrentQuestion() {
    if (gameIsOver()) {
        displayEndScreen();
    } else {
        updateProgressBar();
        displayNextQuestion();
    }
    
}
function gameIsOver() {
    return currentQuestion >= questions.length;
}
function displayEndScreen() {
    document.getElementById("endScreen").style = '';
    document.getElementById("quizzScreen").style = 'display : none';
    document.getElementById("ammountOfQuestions").innerHTML = questions.length;
    document.getElementById("rightQuestions").innerHTML = correctQuestions;
}
function updateProgressBar() {
    let percent = Math.round((currentQuestion / questions.length)*100);
    document.getElementById("progressBar").innerHTML = `${percent}%`
    document.getElementById("progressBar").style.width = `${percent}%`
}
function displayNextQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("answer1").innerHTML = question.Answer1;
    document.getElementById("answer2").innerHTML = question.Answer2;
    document.getElementById("answer3").innerHTML = question.Answer3;
    document.getElementById("answer4").innerHTML = question.Answer4;
    document.getElementById("currentQuestionNumber").innerHTML = currentQuestion+1;   
}

function answer(answerNumber) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = answerNumber.slice(-1);
    let idOfRightAnswer = questions[currentQuestion].rightAnswer

    if (selectedQuestionNumber == question['rightAnswer']) {
        document.getElementById(answerNumber).parentNode.classList.add("bg-success");
        correctQuestions++;
        audioSuccess.play();
        
    } else {
        document.getElementById(answerNumber).parentNode.classList.add("bg-danger");
        document.getElementById("answer"+idOfRightAnswer).parentNode.classList.add("bg-success");
        audioFail.play();
        
    }
    document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    showCurrentQuestion();
    document.getElementById("nextButton").disabled = true;
    for (let indexAnswers = 1; indexAnswers < 5; indexAnswers++) {
        document.getElementById("answer"+indexAnswers).parentNode.classList.remove("bg-danger")
        document.getElementById("answer"+indexAnswers).parentNode.classList.remove("bg-success")
    }

}
function restartQuizz() {
currentQuestion = 0;
 correctQuestions = 0;
 document.getElementById("endScreen").style = 'display : none';
        document.getElementById("quizzScreen").style = '';
 init()
}