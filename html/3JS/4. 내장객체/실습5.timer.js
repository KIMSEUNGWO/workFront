window.onload = function(){
    bttn.addEventListener('click',function(){
        let box = document.querySelector('#noti-box');
        let not = document.createElement('div');
        let text = document.createTextNode('알림내용 표시');
        not.appendChild(text);
        not.classList.add('noti');
        box.appendChild(not);
        
    })
    setInterval(timer, 2000);
};

function timer(){
    let date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    let time = '현재시간 : ' + hours + '시 ' + minutes + '분 ' + seconds + '초';
    let box = document.querySelector('#noti-box');
    let not = document.createElement('div');
    let text = document.createTextNode(time);
    not.appendChild(text);
    not.classList.add('noti');
    box.appendChild(not);

    // 3초후 실행
    setTimeout(() => {
        not.remove();
    }, 3000);
};