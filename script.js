function moveButton() {
    var x = Math.random() * (window.innerWidth - document.getElementById("nobutton").offsetWidth);
    var y = Math.random() * (window.innerHeight - document.getElementById("nobutton").offsetHeight);
    
    // Déplacement avec un léger délai pour créer un mouvement plus fluide
    setTimeout(function() {
        document.getElementById("nobutton").style.left = `${x}px`;
        document.getElementById("nobutton").style.top = `${y}px`;
    }, 100);
}
function nextPage() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
