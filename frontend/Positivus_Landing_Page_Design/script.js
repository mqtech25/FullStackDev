const menuBar = document.querySelector('.menu_toggle');
const navList = document.querySelector('.nav_list');


menuBar.addEventListener('click',function(e) {
    this.classList.toggle('open')
    navList.classList.toggle('show')
})

const questionCard = document.querySelectorAll('.question_card-head');
console.log(questionCard.length);

for(let i=0; i<questionCard.length; i++){
    questionCard[i].addEventListener('click',function(){
        // let id =this.parentElement.getAttribute('data-questionno');
        this.parentElement.classList.toggle('active')
    })
}