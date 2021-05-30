btn.onclick =function() {
    var a = document.getElementById('a').value;
    console.log(a)
    var b = document.getElementById('b').value;
    console.log(b)
    var c = document.getElementById('c').value;
    console.log(c);
    var d = document.getElementsByTagName('input');
    console.log(d);
    var soChan = 0, soLe=0 ;
    for(var i=0; i< d.length;i++){
        console.log(d[i]);
        if(d[i].value%2 == 0){            
            soChan = soChan +1;            
        }else{
            soLe = soLe +1;           
        }
    }
    console.log("co " + soChan+"so chan");
    console.log("co " + soLe +"so le");
    ketQua_le.innerHTML = "có " + soChan+" số chẳn"
    ketQua_chan.innerHTML = "có " + soLe+ " số lẻ"
    
}