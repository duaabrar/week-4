var links = document.querySelectorAll(".nav-link");

window.onload = function () {

    var current = window.location.pathname;

    links.forEach(function(link){

        link.classList.remove("active");

        if(current.includes(link.getAttribute("href"))){
            link.classList.add("active");
        }

        if(current == "/" || current.includes("index.html")){
            document.getElementById("home").classList.add("active");
        }
    });
};


links.forEach(function(link){
    link.onclick = function(){

        links.forEach(l => l.classList.remove("active"));

        this.classList.add("active");
    };
});


