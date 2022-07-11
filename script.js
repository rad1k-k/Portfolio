//preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});


//javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});



//javascript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});


//javascript for scroll to top button on click to button
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});



//javascript for reveal elemnts on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active")
        }
    }
}


//Javascript for Work section
// let previewContainer = document.querySelector(".project-preview");
// let previewBox = previewContainer.querySelectorAll(".preview");

// document.querySelectorAll(".myprojects .project").forEach(product => {
//     product.onclick = () => {
//         previewContainer.style.display = "flex";
//         let name = product.getAttribute("data-name");
//         previewBox.forEach(preview => {
//             let target = preview.getAttribute("data-target");
//             if(name == target) {
//                 preview.classList.add("active");
//             }
//         });
//     };
// });

// previewBox.forEach(close => {
//     close.querySelector(".fa-times").onclick = () => {
//         close.classList.remove("active");
//         previewContainer.style.display = "none";
//     };
// });



// WORK GALLERY
const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
   	 // deactivate existing active 'filter-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'filter-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });
