
var ingred = document.getElementsByClassName('ingredients')[0];
var listButton = document.getElementById('listbutton');

listButton.addEventListener("click", function () {
    var checkboxes = document.querySelectorAll('input:checked')[0];
    console.log(checkboxes);
});

(function () {
    document.getElementById("overlay").className="fade";
})();
