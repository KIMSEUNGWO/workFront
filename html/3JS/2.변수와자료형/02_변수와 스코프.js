// 전역변수
var date = new Date();
var year = date.getFullYear();

// 블럭레벨
// var는 함수인지 아닌지만 구분, 지역,전역변수는 구분하지못함
// let 키워드는 블록레벨, var 키워드는 함수레벨

if (true){
    var birth_year = prompt('출생년도를 입력해주세요.');
    var age = year = year - birth_year;
    console.log(`당신의 나이는 ${age}세 입니다.`);
}
console.log(`당신의 나이는 ${age}세 입니다.`);

// 스코프 : 예약어에 따라 스코프가 달라짐
//     함수레벨(var) 
//         함수 외부에서 참조 불가
//     블럭레벨 스코프(let,const)
//         블럭 외부에서 참조 불가

//     * 주의
//         예약어를 붙히지 않은경우
//         오류가 발생하지 않으며 전역 변수로 생성됨

// 전역변수(global variable) : 함수 외부에서 변수를 선언
g_str1 = '전역변수';
var g_str2 = 'var 전역변수';
let g_str3 = 'let 전역변수';

console.log('전역변수출력=======');
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);

// window 객체:
//     브라우저에서 제공하는 브라우저창(window)에 대한 정보를 담고 있는 객체
//     전역변수 사용 시 'window.변수명' 혹은 'this.변수명' 으로 표현해서 사용할 수 있다.
//     var로 선언하며 window객체에 연결
console.log('window.변수명======');
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);
console.log('this.변수명======');
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);

// 전역 변수와 동일한 이름의 지역 변수 선언 시 지역 변수가 우선
// 상단 출력이 undefined로 나오며 전역변수는 영향을 받지 않음

// 호이스팅
// 자바스크립트 파서가 프로그램 실행전에
// 변수와 함수의 메모리 공간을 미리 할당 하는것
// 변수선언문과 함수선언문 유효범위 최상단에 선언(변수는 undefined로 초기화)
console.log(g_str2);
var g_str2 = '전역변수 == 지역변수';
console.log('g_str2',g_str2);

window.onload =function(){
    console.log("onload 실행 - 페이지 로딩완료");

    // var 중복선언가능
    var num = 0;
    console.log(num);
    var num = 10;
    console.log(num);

    // let, sonst 중복선언 불가
    let num1 = 0;
    num1 = 0; // 에러

    const num2 = 0;
    num2 = 10; // 에러
    
    // Temporal Dead Zone(TDZ) 에 위치
    // TDZ : 선언 전에 변수를 사용하는 것을 비 허용하는 개념상의 공간
}