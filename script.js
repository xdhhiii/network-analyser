let random = document.getElementById('random')

if(navigator.onLine){
    random.textContent = '🟢 Online!';
    random.style.color = 'green';
}

window.addEventListener('offline',function(){
    random.textContent = '🔴 Offline!';
    random.style.color = 'red';
})
