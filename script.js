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