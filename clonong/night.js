console.log(document)
document.getElementById('toogle').addEventListener('click', function() {
   
    let  currentColor = document.body.style.backgroundColor;

   
    if (currentColor === 'black') {
       
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    } else {
        
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
});


document.body.style.backgroundColor = 'white';
document.body.style.color = 'black';
