var menu = document.getElementById('menu');
var posNav = menu.offsetTop;

//action
function affiche() {
    if (posNav - this.pageYOffset != 0) {
        menu.style.position = "fixed";
        menu.classList.add("couleur");
    } else {
        //alert(2);
        menu.style.position = "relative";
        menu.classList.remove("couleur");
    }
}

window.addEventListener('scroll', affiche);