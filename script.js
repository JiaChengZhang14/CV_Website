document.getElementById("knowledgeLink").addEventListener("click", function (event) {
    event.preventDefault();
    var targetElement = document.querySelector(this.getAttribute("href"));

    targetElement.scrollIntoView({ behavior: "smooth" });
});
