document.getElementById('toogle').addEventListener('click', function(){
    let currentColor = document.body.style.backgroundColor;
    if (currentColor === 'orange') {
        document.body.style.backgroundColor = 'pink';
        document.body.style.color = 'orange';
    }
    else {
        document.body.style.backgroundColor = 'orange';
        document.body.style.color = 'pink';
    }

});
document.body.style.backgroundColor = 'orange';
document.body.style.color = 'pink';