










//  let endNumber=(document.getElementById('end-num').Value);

//  let addNumber=(document.getElementById('add-num').Value);



function writeTable() {
    let startNumber=document.getElementById("start-num").value
    document.getElementById('khan').innerHTML='';
         for(let index=1;index<11;index++){
            document.getElementById('khan').innerHTML+=startNumber +"x"+ index+"=" + index*startNumber +"<br>";
      }
}

function clickhere() {
   let startNumber=document.getElementById("click").value
   document.getElementById('jan').innerHTML='';
        for(let index=1;index<11;index++){
           document.getElementById('jan').innerHTML+=startNumber +"x"+ index+"=" + index*startNumber +"<br>";
     }
}