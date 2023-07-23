const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');

const grid = document.querySelector('.grid');

const btn_arr = document.querySelector('.info');
const arr1 = btn_arr.querySelectorAll('button');

btn1.style.backgroundColor = '#dd2e3a'
arr1.forEach(element => {
    element.addEventListener('click', function () {
        arr1.forEach(element => {
            element.style.backgroundColor = 'transparent';
        });
        element.style.backgroundColor = '#dd2e3a';
    });
});



btn1.addEventListener('click', function () {
    grid.scrollTo(0, 0);
});

btn2.addEventListener('click', function () {
    grid.scrollTo(0, 348);
});

btn3.addEventListener('click', function () {
    grid.scrollTo(0, 698);
});

btn4.addEventListener('click', function () {
    grid.scrollTo(0, 1049);
});

btn5.addEventListener('click', function () {
    grid.scrollTo(0, 1400);
});

btn6.addEventListener('click', function () {
    grid.scrollTo(0, 1749);
});
