// addEventListener("mouseover",(e)=>{
//     console.log(e)
// })

let navlist = document.querySelectorAll(".bounceclick")

navlist.forEach(function(e){
    e.addEventListener("click",()=>{
        e.classList.add("animate__bounceIn")
        setTimeout(() => {
            e.classList.remove("animate__bounceIn")
        },1000);
    })
})
//-------------------------Discription----------------------//

let dcbApp = document.querySelector(".describ-app")
let dcbApptxt = document.querySelector(".describ-app a")
dcbApp.addEventListener("mouseover",()=>{
    dcbApp.classList.add("bgcR")
    dcbApptxt.classList.add("cW")
})
dcbApp.addEventListener("mouseleave",()=>{
    dcbApp.classList.remove("bgcR")
    dcbApptxt.classList.remove("cW")
})

//----------------------------Hints-------------------------//

let hintimg = document.querySelectorAll(".hint-img img")
hintimg.forEach(function(e){
    e.addEventListener("mouseover",()=>{
        e.classList.add("animate__animated","animate__jello")
        setTimeout(() => {
            e.classList.remove("animate__animated","animate__jello")
        }, 500);
    })
})

