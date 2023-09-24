let navigationcont = document.querySelector("nav")
let navigation = document.querySelector(".nav-bar")
let navoffset = navigationcont.offsetTop
addEventListener("resize",e=>{
    navoffset = navigationcont.offsetTop
    console.log("resize")
})
window.onscroll = ()=>{
    if(window.pageYOffset >= navoffset ){
        navigationcont.classList.add("scroll-fixer")
        navigation.classList.add("scroll-nav-bg-fix")
    }else if(navoffset >= window.pageYOffset){
        navigationcont.classList.remove("scroll-fixer")
        navigation.classList.remove("scroll-nav-bg-fix")
    }
}
onresize = ()=>{
    if(window.pageYOffset >= navoffset ){
        navigationcont.classList.add("scroll-fixer")
        navigation.classList.add("scroll-nav-bg-fix")
    }else if(navoffset >= window.pageYOffset){
        navigationcont.classList.remove("scroll-fixer")
        navigation.classList.remove("scroll-nav-bg-fix")
    }
}
// addEventListener("scroll",()=>{
//     if(window.pageYOffset >= navigationcont.offsetTop ){
//         navigationcont.classList.add("scroll-fixer")
//         navigation.classList.add("scroll-nav-bg-fix")
//     }else{
//         navigationcont.classList.remove("scroll-fixer")
//         navigation.classList.remove("scroll-nav-bg-fix")
//     }

// })