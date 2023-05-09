const questions = [
    {
        'que': 'Which is following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'Which is a styling language?',
        'a': 'JavaScript',
        'b': 'PHP',
        'c': 'HTML',
        'd': 'CSS',
        'correct': 'd'
    },
    {
        'que': 'Who is prime minister of india?',
        'a': 'Ram nath kovind',
        'b': 'Rahul gandhi',
        'c': 'Narendra Modi',
        'd': 'dropdi murmu',
        'correct': 'c'
    },
    {
        'que': 'Which of the character is related to Ramayan?',
        'a': 'Arjun',
        'b': 'Krishn',
        'c': 'lakshman',
        'd': 'kashyap',
        'correct': 'c'
    }

]
let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;

            }
        }

    )
    return answer;
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )

}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
<h2> Thank You </h2>
<h1> ${right} / ${total} are correct</h1>
`

}


loadQuestion();