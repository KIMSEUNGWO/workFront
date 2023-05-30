window.onload = function(){
    let area = document.getElementById('area1');
    let area2 = document.getElementById('area2');
    let area3 = document.getElementById('area3');
    let area4 = document.getElementById('area4');
    let area5 = document.getElementById('area5');
    let area6 = document.getElementById('area6');
    let area7 = document.getElementById('area7');
    let area8 = document.getElementById('area8');
    let area9 = document.getElementById('area9');
    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btn4 = document.getElementById('btn4');
    let btn5 = document.getElementById('btn5');
    let btn6 = document.getElementById('btn6');
    let btn7 = document.getElementById('btn7');
    let btn8 = document.getElementById('btn8');
    let btn9 = document.getElementById('btn9');

    // btn1요소에 click이벤트가 발생하면 함수를 실행
    btn1.addEventListener('click',function(){
        // area.innerHTML ='실행!';
        let array1 = new Array(); // []
        let array2 = new Array(3); // [0,0,0]
        let array3 = new Array('빨강','파랑','노랑');
        let array4 = ['a','b','c','d'];
        console.log(array1);

        let array5 = [
            '고경희',       //문자
            20,             //숫자
            true,           //논리값
            [1,2,3,4],      //배열
            function(){     //함수
                return 1;
            },
            {}              //객체
        ];
        console.log(array5);

        // 배열에 값을 추가하기
        array1[0] = '귤';
        array1[1] = '사과';
        array1.push('배');

        console.log(array1);

        area.innerHTML = `array1(빈배열)에 값 대입 : [${array1}] <br>`
                        + `array1.length : ${array1.length} <br>`
    })

    btn2.addEventListener('click',function(){
        let array4 = ['a','b','c','d'];
        area2.innerHTML = array4.indexOf('d');
    })

    btn3.addEventListener('click',function(){
        let array4 = ['a','b','c','d'];
        let array5 = ['a','b','c','d'];
        area3.innerHTML = array4.concat(array5);
    })

    btn4.addEventListener('click',function(){
        let array4 = ['a','b','c','d'];
        area4.innerHTML = array4.join('|');
    })

    btn5.addEventListener('click',function(){
        let array4 = ['a','b','c','d'];
        area5.innerHTML = array4.reverse();
    })

    btn6.addEventListener('click',function(){
        let array4 = ['d','s','c','a'];
        area6.innerHTML = array4.sort();

        array4.sort(function(a, b){ // 오름차순
            return a - b;
        });
        array4.sort(function(a, b){ // 내림차순
            return b - a; 
        });
    });

    btn7.addEventListener('click',function(){
        let array = ['a','b','c','d','q'];
        area7.innerHTML = array.push('d');
    })

    btn8.addEventListener('click',function(){
        let array = ['a','b','c','d','q'];
        area8.innerHTML = array.push('d');
    })
    btn9.addEventListener('click',function(){
        let array = ['a','b','c','d','q'];
        area9.innerHTML = array.push('d');
    })

}

