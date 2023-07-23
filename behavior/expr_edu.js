const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn10 = document.querySelector('#btn10');
const btn11 = document.querySelector('#btn11');
const btn12 = document.querySelector('#btn12');

const grid2 = document.querySelector('#grid');

const btn_arr2 = document.querySelector('.info2');
const arr2 = btn_arr2.querySelectorAll('button');

btn7.style.backgroundColor = '#dd2e3a'
arr2.forEach(element => {
    element.addEventListener('click', function () {
        arr2.forEach(element => {
            element.style.backgroundColor = 'transparent';
        });
        element.style.backgroundColor = '#dd2e3a';
    });
});



btn7.addEventListener('click', function () {
    grid2.scrollTo(0, 0);
});

btn8.addEventListener('click', function () {
    grid2.scrollTo(0, 348);
});

btn9.addEventListener('click', function () {
    grid2.scrollTo(0, 700);
});

btn10.addEventListener('click', function () {
    grid2.scrollTo(0, 1049);
});

btn11.addEventListener('click', function () {
    grid2.scrollTo(0, 1400);
});

btn12.addEventListener('click', function () {
    grid2.scrollTo(0, 1749);
});