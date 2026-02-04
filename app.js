
var home = document.getElementById("home");
var about = document.getElementById("aboutLink");
var contact = document.getElementById("contactLink");


home.onclick = function () {
    home.classList.add("active");
    about.classList.remove("active");
    contact.classList.remove("active");
};

about.onclick = function () {
    about.classList.add("active");
    home.classList.remove("active");
    contact.classList.remove("active");
};


contact.onclick = function () {
    contact.classList.add("active");
    home.classList.remove("active");
    about.classList.remove("active");
};


