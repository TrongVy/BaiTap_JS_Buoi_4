btn.onclick = function() {
    var a = document.getElementById('a').value;    
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;  
    if((a==b && a!=c) || (a==c && a!=b)||(b==c && b!=a)){
        console.log('tam giác cân');
        ketQua.innerHTML = 'tam giác cân';
    } else if (a==b && a==c){
        console.log('tam giác đều');
        ketQua.innerHTML = 'tam giác đều';
    }  else if(
         Math.sqrt(a*a+b*b) == Math.sqrt(c*c)
        || Math.sqrt(a*a+c*c) == Math.sqrt(b*b)
        || Math.sqrt(b*b+c*c) == Math.sqrt(a*a) ) {
        console.log('tam giác vuông');
        ketQua.innerHTML = 'tam giác vuông';
    }
     else{
        console.log('tam giác thường');
        ketQua.innerHTML = 'tam giác thường';
    }    

}
