ketQua.style.display = 'none';
btn.onclick = function() {
    var tenGoi =document.getElementById('tenGoi').value;

     
     switch(tenGoi){
         case 'B' :      
            ketQua.innerHTML = "xin chào bố già!"
            break;
         case 'M' :
            ketQua.innerHTML = "ok mẹ!"
            break;
         case 'A' :
            ketQua.innerHTML = "Chào anh!"
            break;
         case 'E' :
            ketQua.innerHTML = "chào e anh đứng đây từ chiều!"
            break;
         default:
             console.log('Nhập 1 trong các từ: "B", "M","A","E"');
             ketQua.innerHTML = 'Nhập 1 trong các từ: "B", "M","A","E"'
     }
     ketQua.style.display = 'block';
}