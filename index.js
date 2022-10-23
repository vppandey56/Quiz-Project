var quizdata = [{
        question: 'Which framework is related JS',
        a: '.Net',
        b: 'flask',
        c: 'react',
        d: 'django',
        correct: 'c'

    },
    {
        question: 'Who is the father of Computers?',
        a: 'James Gosling',
        b: 'Charles Babbage',
        c: 'Dennis Ritchie',
        d: 'Bjarne Stroustrup',
        correct: 'b'

    },
    {
        question: 'What is the full form of CPU?',
        a: 'Computer Processing Unit',
        b: 'Computer Principle Unit',
        c: 'Central Processing Unit',
        d: 'Control Processing Unit',
        correct: 'c'

    },
    {
        question: 'Which of the following is the brain of the computer?',
        a: 'Central Processing Unit',
        b: 'Memory',
        c: 'Arithmetic and Logic unit',
        d: 'Control unit',
        correct: 'a'

    },
    {
        question: 'Which is not programming language',
        a: 'html',
        b: 'python',
        c: 'Java',
        d: 'JS',
        correct: 'a'
    }
]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')
var currentQuestion = 0
var quizScore = 0

loadQuiz()

function loadQuiz() {
    deselect()
    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerText = quizdata[currentQuestion].a
    option_b.innerText = quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d

}

function deselect() {
    answer.forEach(answer => answer.checked = false)
}
submitbtn.addEventListener('click', () => {
    var selectedoption;
    answer.forEach(answer => {
        if (answer.checked) {
            selectedoption = answer.id
        }
    })

    if (selectedoption == quizdata[currentQuestion].correct) {
        quizScore = quizScore + 1
    }
    currentQuestion = currentQuestion + 1

    if (currentQuestion == quizdata.length) {
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizScore} correctly out of ${quizdata.length}</h1>`

    } else {
        loadQuiz()
    }

})