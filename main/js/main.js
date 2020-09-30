
var showBtn = document.getElementById('basket');

showBtn.onclick = function() {
var showme = document.getElementById('iphone');
if (showme.style.display !== 'none') {
    showme.style.display = 'none';
} else {
    showme.style.display = 'block';
} };