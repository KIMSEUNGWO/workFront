window.onload = () =>{
    btn1.addEventListener('click', function(){
        // window.open('http://www.naver.com', 'naaaver'); // url.창이름
        window.open('7_BOM.html', 'BOM','width=500, height=500');
    });

    btn2.addEventListener('click', ()=>{
        let timerId = 0;
        let newWindow = window.open();
        newWindow.alert('3초 후에 이 페이지는 종료 됩니다.');

        timerId =  window.setTimeout(()=>{
            newWindow.close();
        }, 3000);

        // timeout 취소
        clearTimeout(timerId)
    });

    btnStart.addEventListener('click', ()=>{
        intervalId = 0;
        intervalId =  window.setInterval(()=>{
            let date = new Date();
            area1.innerHTML = `${date.getMinutes()} : ${date.getSeconds()}`
        }, 1000)
    });
    btnStop.addEventListener('click', ()=>{
        clearInterval(intervalId);
    });

    btn3.addEventListener('click',()=>{
        area3.innerHTML = '<h4> location 객체</h4>'

        for (key in location){
            console.log('key : ',key);
            console.log('value : ', location[key]);

            area3.innerHTML += `key : ${key}, value : ${location[key]} <br>`;
        }
    })
};