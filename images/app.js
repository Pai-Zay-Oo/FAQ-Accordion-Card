let questions = document.getElementsByClassName("question");
let answer = document.querySelector(".answer");


question.addEventListener('click',function(){
    answer.classList.toggle("answer");
})