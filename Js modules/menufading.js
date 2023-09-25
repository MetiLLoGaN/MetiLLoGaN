const navMiniLists = document.querySelectorAll(".NavMiniList")
const navMiniListsArr = Array.from(navMiniLists)

document.querySelectorAll('.NavMiniList-span').forEach(p=>{
    let navMiniListMaxHeight = 0;
    navMiniListsArr.forEach(j=>{
        if(j.getBoundingClientRect().height >= navMiniListMaxHeight){
            navMiniListMaxHeight = j;
        }else return ;
    })

    window.addEventListener("scroll",()=>{
        navMover()
    })
    window.addEventListener("resize",()=>{
         navMover()
    })
    function navMover(){
        if(navMiniListMaxHeight.getBoundingClientRect().y < 0){
            navMiniListsArr.forEach(i => {
                if(i.classList.contains("navmini-2")||i.classList.contains("navmini-3")){
                    i.style.top = "0"
                    i.style.right = "100%"
                    i.style.bottom = `unset`
                }else  if(i.classList.contains("navmini-2") == false && i.classList.contains("navmini-3") == false){
                    i.style.top = `100%`
                    i.style.bottom = `unset`
                    i.style.transform= "translateY(3rem)";
                }
            });
        }else if(window.innerHeight < navMiniListMaxHeight.getBoundingClientRect().y + navMiniListMaxHeight.getBoundingClientRect().height){
            navMiniListsArr.forEach(i => {
                if(i.classList.contains("navmini-2")||i.classList.contains("navmini-3")){
                    i.style.bottom = "0"
                    i.style.right = "100%"
                    i.style.top = `unset`
                }else  if(i.classList.contains("navmini-2") == false && i.classList.contains("navmini-3") == false){
                    i.style.top = `unset`
                    i.style.bottom = `100%`
                    i.style.transform= "translateY(-3rem)";
                }
            })
        }
    }
    window.addEventListener("mouseover",()=>{
        navMiniListsArr.forEach(i => {
            i.style.transform= "translateY(0)";
            i.style.transitionDelay= "all 0.3s ease 0s,visibility 0s linear 0.3s";

        })
    })

    // p.addEventListener("mouseleave",()=>{
    //     if(navMiniListMaxHeight.getBoundingClientRect().y < 0){
    //         navMiniListsArr.forEach(i => {
    //         });
    //     }else if(window.innerHeight < navMiniListMaxHeight.getBoundingClientRect().y + navMiniListMaxHeight.getBoundingClientRect().height)(
    //         navMiniListsArr.forEach(i => {
    //         })
    //     )
    // })
})


/*----------------- mobile mode ----------------- */

document.querySelector(".hat-menu").addEventListener("click",()=>{
    if(document.querySelector(".nav-list").style.visibility == "visible"){
        document.querySelector(".nav-list").style.visibility= "hidden"
        document.querySelector(".nav-list").style.display= "none";
    }else{
        document.querySelector(".nav-list").style.visibility= "visible"
        document.querySelector(".nav-list").style.display= "flex";
    }
})





