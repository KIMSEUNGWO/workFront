function typeTest(){
    // document.write('typeTest1');
    // alert('typeTest2');
    console.log('typeTest3');
    // 변수 선언시 사용되는 키워드
    // var, let, const(상수)
    let age = 20;
    let height = 184.5;

    let area1 = document.getElementById('area1');
    area1.innerHTML = '<h4>안녕하세요</h4>'
}

function typeTest2(){
    console.log('typeTest2');
    // 배열선언
    let hobbies = ['축구','농구','야구'];
    let area2 = document.getElementById('area2');
    area2.innerHTML = '객체테스트';
    area2.innerHTML += 'hobbies : ' + hobbies + ', type : ' + typeof(hobbies) + '<br>';

    // 함수선언
    // 초기값 지정 (num1=0, num2=0)
    let testFunc = function(num1=0, num2=0){
        return num1+num2;
    }
    console.log('testFunc',testFunc(10,20));
    area2.innerHTML += `testFunc : ${testFunc}, type : ${typeof(testFunc)}<br>`

    // 객체타입
    let user = {
        /*
        속성 : 값,
        속성 : 값,
        ...
        */
       name : '문인수',
       age : 20,
       height : 184.5,
       id  : 'test',
       hobbies : ['축구','농구','야구']
    }
    console.log(user);
    console.log(user.name);
}

function plusTest(){

let test1 = 7+7 // 14
let test2 = '7' + 7 // '77'
let test3 = 7 + '7' // '77'
let test4 = 7 + 7 + '7' // '147
let test5 = 7 + '7' + 7 // '777'
let test6 = '7' + (7 + 7); // '714';

let test7 = 7 * '7' // 49
let test8 = '7' - 3 // 4
let test9 =  '4' / 2 // 2
let test10 = 4 % '2' // 0
let test11 = '3' * '7' // 21
let test12 = '3' * 'a' // NaN
}

function castingTest(){
    area4.innerHTML = `${2+'3'} <br>`; // 23 
    area4.innerHTML += `${2 + Number('3')}<br>`;
    area4.innerHTML += `${String(2) + Number('3')}<br>`;
    area4.innerHTML += `${2 + parseInt('3')}<br>`;
    area4.innerHTML += `${2 + parseFloat('3')}<br>`;

    // 16진수를 10진수로 변환
    area4.innerHTML += parseInt('ff', 16);
}

function forTest(){
    let a = [1,2,3,4,5,6,7,8,9,10];
    
    // for (let i=0; i< 10; i++){
    //     console.log(a[i]);
    // }
    // 배열.forEach(function(변수){})
    // 배열의요소를 함수의 매개변수로 전달
    let student = {
        name : '고경의',
        age : '20',
        class : '1',
    }
    for (key in student){
        console.log(key, student[key]);
    }

    a.forEach(function(num){
        console.log(num);
    })

    while (true){
        i++;
        if (i%2 == 0){
            console.log(i);
        }
    }
    
    // ES6 부터 추가된 for문
    for (let iterator of array){
        console.log(iterator);
    }
}