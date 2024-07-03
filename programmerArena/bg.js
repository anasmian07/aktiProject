document.getElementById('toogle').addEventListener('click', function(){
    let currentColor = document.body.style.backgroundColor;
    if (currentColor === 'black') {
        document.body.style.backgroundColor = 'gray';
        document.body.style.color = 'black';
    }
    else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'gray';
    }

});
document.body.style.backgroundColor = 'black';
document.body.style.color = 'gray';
