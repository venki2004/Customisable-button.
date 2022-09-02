alert('sdsd');

const main = document.querySelector('.main');

document.querySelector('.submit').addEventListener('click',function(){
    console.log('sd');
    var s = document.querySelector('#width').value;
    var s1 = document.querySelector('#padding').value;
    var s2 = document.querySelector('#radius').value;
    var s3 = document.querySelector('#bg').value;
    var s4 = document.querySelector('#fg').value;
    var s5 = document.querySelector('#height').value;
    var s6 = document.querySelector('#texti').value;


    main.style.width = s + 'px';
    main.style.height = s5 + 'px';
    main.style.padding = s1 + 'px';
    main.style.borderRadius = s2 + 'px';
    main.style.backgroundColor = s3;
    main.style.color = s4;
    main.innerText = s6;
})