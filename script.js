'use strict';
let para1 = document.querySelector('#check1');
let para2 = document.querySelector('#check2');
let para3 = document.querySelector('#check3');

window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY>0);
})

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

document.querySelector('#fin1').addEventListener('click',function(){
    if (para1.value=='' && para2.value=='' && para3.textContent=='') {
        alert('Please fill the fields.')
    }else {
        alert('Thanks for your message...')
        para1.value = '';
        para2.value = '';
        para3.value = '';
    }
})