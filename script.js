let random = document.getElementById('random')

if(navigator.onLine){
    random.textContent = '🟢 Online!';
    random.style.color = '#009900';
}

window.addEventListener('offline',function(){
    random.textContent = '🔴 Offline!';
    random.style.color = '#ff0000';
})
