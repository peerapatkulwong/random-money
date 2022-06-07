var button = document.getElementById('random');
var clear = document.getElementById('clear');

button.addEventListener('click',function(event){
    var num = parseInt(document.getElementById('number').value);
    if (num >= 0) {
        random_num = Math.floor(Math.random() * num);
        process = random_num.toLocaleString('en-US');
        document.querySelector('.output').textContent = process;
    }
    else{
        alert("error");
    }
});

clear.addEventListener('click',function(event){
    document.getElementById('number').value = '';
    document.querySelector('.output').textContent = '';
});