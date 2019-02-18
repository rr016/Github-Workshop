var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');

convertBtn.addEventListener('click', function() {
    sendUrl(URLinput.value);
});

function sendURL(URL) {
    window.location.href = 'https://localhost:4000/download?URL=${URL}';
}