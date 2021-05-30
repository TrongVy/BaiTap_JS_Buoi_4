ketQua.style.display = 'none';
btn.onclick = function() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    if( a-b > 0) {
        if( b >c) {
            console.log(c,b,a);
            ketQua.innerHTML = "dãy số sắp xếp: " + c + " " + b + " " + a;
        }
        else if(a-c > 0) {
            console.log(b,c,a); 
            ketQua.innerHTML ="dãy số sắp xếp: " +   b + " " + c + " " + a;           
        }
        else {
            console.log(b,a,c);
            ketQua.innerHTML ="dãy số sắp xếp: " +   b + " " + a + " " + c;
        }
    }
    else {
        if(a-c >0) {
            console.log(c,a,b);
            ketQua.innerHTML ="dãy số sắp xếp: " +   c + " " + a + " " + b;
        }
        else if(b-c >0){
            console.log(a,c,b);
            ketQua.innerHTML ="dãy số sắp xếp: " +   a + " " + c + " " + b;
        }
        else{
            console.log(a,b,c);
            ketQua.innerHTML ="dãy số sắp xếp: " +   a + " " + b + " " + c;
        }
    }
    ketQua.style.display = 'block';
    
}