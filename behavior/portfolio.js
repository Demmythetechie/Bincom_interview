const clck1 = document.querySelector('#clck1');
const clck2 = document.querySelector('#clck2');
const clck3 = document.querySelector('#clck3');

const slide = document.querySelector('.field');

const clck_arr = document.querySelector('.sld');
const arr3 = clck_arr.querySelectorAll('button');

clck1.style.backgroundColor = '#dd2e3a'
arr3.forEach(element => {
    element.addEventListener('click', function () {
        arr3.forEach(element => {
            element.style.backgroundColor = 'transparent';
        });
        element.style.backgroundColor = '#dd2e3a';
    });
});

clck1.addEventListener('click', function () {
    slide.scrollTo(0, 0);
});

clck2.addEventListener('click', function () {
    slide.scrollTo(0, 348);
});

clck3.addEventListener('click', function () {
    slide.scrollTo(0, 698);
});