const questions =[{
    'que' : 'Which of the following is a markup language',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que' : 'What year was JavaScript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'None',
    'correct': 'b'
},
{
    'que' : 'What does CSS stands for?',
    'a': 'Hypertext Markup Language',
    'b': 'Cascading Style Sheet',
    'c': 'Jason Object Notation',
    'd': 'Helicopters Terminals Motoboats Lamborgini',
    'correct': 'a'
},
]
let index = 0;
let total = questions.length;
let  right = 0, 
     wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionsInputs = document.querySelectorAll('.option')
const loadQuestion =() => {
    if(index === total){
       return endQuiz()
    }else
    reset();
    const data = questions[index]
    quesBox.innerText = `${index=1}) ${data.que}`;
    optionsInputs[0].nextElementSibling.innerText = data.a;
    optionsInputs[1].nextElementSibling.innerText = data.b;
    optionsInputs[2].nextElementSibling.innerText = data.c;
    optionsInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
        return;
}
const getAnswer = () => {
    optionsInputs.forEach(
        (input) => {
            if(input.checked){
                return input.value;
            }
        }
    )
}

const reset = () =>{
    optionsInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3> Thank You for playing the Quiz</h3>
    `
}

loadQuestion();