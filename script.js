let currentQuestion = 0;


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
    let question = questions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("answer1").innerHTML = question.Answer1;
    document.getElementById("answer2").innerHTML = question.Answer2;
    document.getElementById("answer3").innerHTML = question.Answer3;
    document.getElementById("answer4").innerHTML = question.Answer4;
}