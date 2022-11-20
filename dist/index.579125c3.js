const menuspan = document.querySelector(".menu");
function addListener() {
    menuspan.addEventListener("click", ()=>addActiveClasses());
}
function addActiveClasses() {
    menuspan.forEach((menu)=>{
        menu.classList.add("active");
    });
}

//# sourceMappingURL=index.579125c3.js.map
