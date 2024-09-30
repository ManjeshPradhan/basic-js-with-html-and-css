const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const inputEl = +document.getElementById("input").value;

const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

questionEl.innerText = 'What is ' +num1+ ' Multiplied by ' +num2+ '?' ;

const Ans = num1*num2 ;

    // var inputEl = +inputEl.value

    if(inputEl == Ans)
    {
        score++
        updateLocalStorage()
    }
    else
    {
        score--
        updateLocalStorage()
    }
    console.log(inputEl);

    function updateLocalStorage(){
        localStorage.setItem("score",JSON.stringify(score)) 
    }