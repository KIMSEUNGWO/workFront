window.onload = function(){

    let open = document.querySelector('#open');
    let close = document.querySelector('#close');
    // let box = document.querySelector('#modal-box');
    let box = document.getElementById('modal-box');
    open.addEventListener('click',function(){
        box.classList.add('active');
    });

    close.addEventListener('click',function(){
        box.classList.remove('active');
    });
    
}

function popup(){
    let url = '6. 모달창.html';
    let name = 'popup test';
    let option = 'width=500, height=500, top=100, left=200';
    window.open(url, name, option);
};