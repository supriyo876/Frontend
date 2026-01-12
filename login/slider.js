const slider = document.querySelector('.slider');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let starting_index = 0;

left.addEventListener('click', ()=>{
    starting_index = (starting_index > 0 ) ? starting_index -1 : 5;
    slider.style.transform = `translateX(${starting_index* -16.67 }%)`;
})

right.addEventListener('click', ()=>{
    starting_index = (starting_index < 5 ) ? starting_index +1 : 0;
    slider.style.transform = `translateX(${starting_index* -16.67}%)`;
})