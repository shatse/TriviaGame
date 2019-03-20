var questions;
var results;
var submit;
var answers;
var correct = 0;
var incorrect = 0;



function startTrivia(questions, quizContainer, results, submit) {
    function startTrivia(questions, quizContainer) {
        var output = [];
        var answers;
        for (var i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {
                answers.push(
                    '<label' >
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
    }
}

function triviaQuestions(questions, quizContainer) {

}

function showResults(questions, quizContainer, results) {

}

submitButton.onclick = function () {
    showResults(questions, quizContainer, results);
}

var questions = [
    {
        question: "What power move is Naruto most known for?",
        answers: {
            a: 'Chidori',
            b: 'Rasengan',
            c: 'Mangyekou Sharingan',
            d: 'Amaterasu',
        },
        correctAnswer: 'b'
    },
    {
        question: "How many episodes does One Piece have?",
        answers: {
            a: '550',
            b: '800',
            c: 'Still Ongoing',
            d: '1000'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is Saitama's workout plan in One Punch Man?",
        answers: {
            a: '100 pushups, 100 sit ups, 100 squats, 10km run',
            b: 'Fighting 100 monsters per day',
            c: 'Maxing out his grocery store coupons',
            d: 'Fighting with Genos'
        },
        correctAnswer: 'a'
    },
    {
        question: "In Dragon Ball Z, who was the first character to go Super Saiyan 2?",
        answers: {
            a: 'Goku',
            b: 'Vegeta',
            c: 'Future Trunks',
            d: 'Gohan',
        },
        correctAnswer: 'd'
    },
]

// function startTrivia(questions, quizContainer) {
//     var output = [];
//     var answers;
//     for (var i = 0; i < questions.length; i++) {
//         answers = [];
//         for (letter in questions[i].answers) {
//             answers.push(
//                 '<label' >
//                 + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//                 + letter + ': '
//                 + questions[i].answers[letter]
//                 + '</label>'
//             );
//         }
//         output.push(
//             '<div class="question">' + questions[i].question + '</div>'
//             + '<div class="answers">' + answers.join('') + '</div>'
//         );
//     }

// }

quizContainer.innerHTML = output.join('');

startTrivia(questions, quizContainer);



