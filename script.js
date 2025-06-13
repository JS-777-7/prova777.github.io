function toggleleftmenu(){
    const button = document.getElementById("toggle-left-menu");
    const lista = document.querySelector(".left-menu ul");
    const fullWidth = lista.scrollWidth + "px";  
    if(lista.classList.contains("show")){
        lista.style.width = 0 + "px";
        setTimeout(() => {
      lista.classList.remove("show");
    }, 300); 
        

    }else{
        lista.style.width = fullWidth;
        lista.classList.add("show");
    }
}

document.getElementById("toggle-left-menu").addEventListener("click", function(e) {
  e.stopPropagation(); // <--- fondamentale
  toggleleftmenu();
});

  document.addEventListener('click', (e) => {
    if (!document.querySelector(".left-menu ul").contains(e.target)) {
        document.querySelector(".left-menu ul").style.width = 0 + "px";
        setTimeout(() => {
      document.querySelector(".left-menu ul").classList.remove("show");
    }, 300); 
    }
  });