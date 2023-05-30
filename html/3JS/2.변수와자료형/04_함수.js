// 헤드영역에서 js를 불러오기때문에 btn1에 null값이 존재해 오류발생
// onload를 사용해서 모두 불러들여온 후에 함수 실행해야함.
window.onload = function(){
    let btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', function(){
        console.log('addEvent');
        test();
    })

    // 익명의 함수 : 변수에 대입하거나 함수 실행 시 인수로 사용할 수 있다.
    btn2.addEventListener('click', function(){
        alert('익명의 함수 실행(이벤트 핸들러를 통해 실행!');
    })

    let btn3 = document.getElementById('btn3');
    btn3.addEventListener('click',()=>{

    })
};

function argTest(value){
    alert(value);
}

function test(){
    console.log('test호출');
}

// 익명의 함수를 변수에 대입
// 익명의 함수 : 함수 이름이 없는 함수
let sum = function(a,b){
    return a + b;
}

console.log('함수실행결과 : ', sum(10,20));

// 즉시실행 함수
(
    function(a, b){
        console.log(`a: ${a} b: ${b}`)
    }(10,20)
);

const hi = function(){
    return alert('안녕하세요(일반함수)');
}

const hi1 = () => {return alert('안녕하세요(화살표함수)')};
// 명령문이 한줄일 때 {}와 return문 생략 가능
const hi2 = () => alert('안녕하세요');