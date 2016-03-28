console.log('loaded');

var ingred = document.getElementsByClassName('ingredients')[0];
var listButton = document.getElementById('listbutton');

listButton.addEventListener("click", function () {
    console.log('clicked');
    var checkboxes = document.querySelectorAll('input:checked');
    console.log(checkboxes);
});
