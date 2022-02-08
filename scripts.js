let menu =document.querySelector("#menu-bars")
let header =document.querySelector("header")

menu.onclick= ()=>{
    menu.classList.toggle("fa-times");
    header.classList.toggle("active");
}

window.onscroll= ()=>{
    menu.classList.remove("fa-times");
    header.classList.remove("active");
}

const cursor1= document.querySelector(".cursor-1");

const moveCursor= (e)=>{
    const mouseY=e.clientY;
    const mouseX=e.clientX;

cursor1.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
cursor1.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
 
}
window.addEventListener("mousemove", moveCursor)
 

