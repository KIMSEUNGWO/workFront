function setColor(){
    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    setColor();
}

// 화면을 모두 출력 후 실행
window.onload = function(){
    setColor();
}
