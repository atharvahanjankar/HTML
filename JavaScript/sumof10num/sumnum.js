function AddNumber(){
    var i = 11;
    let x = 20;
    var sum = 0; 
    do{
        // let y = i;
        sum = sum + i;
        document.getElementById('ans').value= "ans is" + sum;
        i++;  
    }
    while(i <= x)
}