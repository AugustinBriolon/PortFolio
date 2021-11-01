window.onload = () => {
    window.addEventListener('scroll', () => {
        let hauteur = document.documentElement.scrollHeight - window.innerHeight;
        let position = window.scrollY;
        let largeur = document.documentElement.clientWidth;

        let barre = (position / hauteur) * largeur;

        document.getElementById('barre').style.width = barre + "px";
    });
};


var maintenant=new Date();
var an = maintenant.getFullYear();
an.toString();

let copyright = document.querySelector('.copyright')
copyright.textContent = ("©   - TOUS DROITS RÉSERVÉS");


