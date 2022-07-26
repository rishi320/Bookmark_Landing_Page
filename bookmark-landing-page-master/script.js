
const hamburger = document.querySelector(".menu");
const close_icon = document.querySelector(".close-icon");
const list_a_tags = document.querySelectorAll(".list-a");
const first_tab = document.querySelector(".first-tab");
const second_tab = document.querySelector(".second-tab");
const third_tab = document.querySelector(".third-tab");
// const sub_tab = document.querySelector(".tab-content");
second_tab.style.display='none';
third_tab.style.display='none';
const media = window.matchMedia("(min-width:500px)");

function hamburgerClick(){
    const nav_element = document.querySelector(".nav");
    let list = nav_element.classList;
    list.remove("inactive");
    list.add("active");
    console.log(nav_element.classList);
}

function closeClick(){
    const nav_element = document.querySelector(".nav");
    let list = nav_element.classList;
    list.remove("active");
    list.add("inactive");
}

function MediaQueryFunction(x, element){
   console.log("prashantam",x);
   if(x.matches){
    element.style.display = 'flex';
    element.style.width = "80%";
    element.style.justifyContent = "space-between"
    element.style.gap = "30px"
    // sub_tab.style.width = "400px"
   } else{
    element.style.display = 'block'
   }
}

function listClick(e){
  
   list_a_tags.forEach((list_a)=>{
    if(list_a === e.target){
        list_a.classList.add("highlighted");
        console.log("before the if loop", list_a.innerHTML == "Speedy Searching")
        if(list_a.innerHTML == "Simple Bookmarking"){
            // first_tab.style.display = 'block'
            MediaQueryFunction(media, first_tab);
            console.log("on the if loop",first_tab)
        } else if (list_a.innerHTML == "Speedy Searching"){
            //  second_tab.style.display = 'block'
            MediaQueryFunction(media, second_tab);
             console.log("on the if loop",second_tab)
        } else if(list_a.innerHTML == "Easy Sharing"){
            // third_tab.style.display = 'block'
            MediaQueryFunction(media, third_tab);
            console.log("on the if loop",third_tab)
        }
    } else{
        list_a.classList.remove("highlighted")
        if(list_a.innerHTML == "Simple Bookmarking"){
            first_tab.style.display = 'none'
        } else if (list_a.innerHTML == "Speedy Searching"){
             second_tab.style.display = 'none'
        } else if(list_a.innerHTML == "Easy Sharing"){
            third_tab.style.display = 'none'
        }
    }


  })
}

hamburger.addEventListener("click", hamburgerClick);
close_icon.addEventListener('click',closeClick);
list_a_tags.forEach((list_a)=>{
  list_a.addEventListener("click",listClick)
})