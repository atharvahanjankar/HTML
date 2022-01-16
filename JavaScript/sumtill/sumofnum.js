function add(){
    var x = document.getElementById('inpval').valueAsNumber;
    var i = 1;
    var sum = 0;
    for(i = 1; i <= x; i++){
        sum = sum + i;
       
    }
    document.getElementById('ans').value="Result is " + sum;
   
}