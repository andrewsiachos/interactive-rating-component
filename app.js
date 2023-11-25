let ratings = document.querySelectorAll('li');
let chosenRating =0;
for(let i=0;i<ratings.length;i++){
    ratings[i].addEventListener('click', handleClick);
}
function handleClick(e){
    for(let x=0;x<ratings.length;x++){
        ratings[x].className = 'ratingItem';
    }
    e.target.className = 'selected';
    chosenRating = parseInt(e.target.innerHTML);
    console.log(chosenRating);
}

let button = document.querySelector('#submitButton');

let ratingBox = document.querySelector('#rating');
let thankYouBox = document.querySelector('#thankYou');
let userChoice = document.querySelector('#userChoice');

button.addEventListener('click', ()=>{
    userChoice.innerText = chosenRating;
    ratingBox.className = 'invisible';
    thankYouBox.className = 'visible';
});
