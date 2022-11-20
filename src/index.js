const menuspan =  document.querySelector(".menu")
function addListener(){
    menuspan.addEventListener("click",()=>
    addActiveClasses() )
}

function addActiveClasses(){
    menuspan.forEach((menu)=>{
    menu.classList.add("active")
    })
    } 