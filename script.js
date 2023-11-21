function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Inicializar com a primeira categoria aberta
document.getElementById("lanches").style.display = "block";
document.querySelector(".tablinks").classList.add("active");