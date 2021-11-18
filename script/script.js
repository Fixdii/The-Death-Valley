let modal = document.getElementById('myModal');

let img = document.querySelector('.works__cards');
let modalImg = document.getElementById("img01");

img.addEventListener("click", (event) => {
    console.log(event.target.src);
    modal.style.display = "block";
    modalImg.src = event.target.src;
})

let span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}