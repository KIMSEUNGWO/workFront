// 버튼 클릭 - json 형식 문자열 파싱해서 화면에 출력
window.onload = function(){

    btn.addEventListener('click', ()=>{
        let name = document.querySelector('#username').value;
        let major = document.querySelector('#major').value;
        let grade = document.querySelector('#grade').value;

        // JSON 배열안에 JSON
        // let Str = 
        //     `[
        //         {
        //             "name" : "도레미",
        //             "major" : "컴퓨터 공학",
        //             "grade" : 2
        //         } ,
        //         {
        //             "name" : "파솔라",
        //             "major" : "컴퓨터 공학",
        //             "grade" : 3
        //         } ,
        //         {
        //             "name" : "시도레",
        //             "major" : "컴퓨터 공학",
        //             "grade" : 1
        //         } ,

        //     ]`;
        let jsStr = `{
            "name" : "${name}",
            "major" : "${major}",
            "grade" : "${grade}"
        }`;

        let jsObj = JSON.parse(jsStr);  
        
        let attend = document.querySelector('#attendant');
        let tbody = document.querySelector('tbody');
        let ttr = document.createElement('tr');
        let ttd1 = document.createElement('td');
        let ttd2 = document.createElement('td');
        let ttd3 = document.createElement('td');
        
        
        let text1 = document.createTextNode(jsObj.name);
        let text2 = document.createTextNode(jsObj.major);
        let text3 = document.createTextNode(jsObj.grade);

        ttd1.appendChild(text1);
        ttd2.appendChild(text2);
        ttd3.appendChild(text3);
        ttr.appendChild(ttd1);
        ttr.appendChild(ttd2);
        ttr.appendChild(ttd3);
        attend.appendChild(ttr);
    })
}