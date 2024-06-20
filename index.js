let Btn = document.getElementById('shareBtn');
let popUp = document.getElementById('share-pop-up');
let tri = document.getElementById('reverse-triangle');
function  myFunction() {
    if (popUp.style.display == 'none') {
        popUp.style.display = 'flex'
        tri.style.display = 'flex'
    } else {
        popUp.style.display = 'none'
        tri.style.display = 'none'
    }
}