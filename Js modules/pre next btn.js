const scrollableBtnList = Array.from(document.querySelectorAll(".scrollable-btn-list"))

/*--------------------auto scroll--------------------*/
const autoScrollCont = Array.from(document.querySelectorAll(".auto-scroll-cont"))
let scrollerContInterval= 5000;

function scrollRotation() {
    autoScrollCont.forEach(scrollerCont=>{
        if ((scrollerCont.scrollWidth - scrollerCont.clientWidth + scrollerCont.scrollLeft) <= 250)
            scrollerCont.scrollLeft = -40
        else   scrollerCont.scrollLeft += -1 *500   
        })
        
    }
var scrollRollInterval = setInterval(scrollRotation, scrollerContInterval);

/*--------------------scroll button--------------------*/
function goChangeItem(e){
    const scrollDivOfThisButton = e.parentElement.previousElementSibling
    if(e.classList.contains("btn-next-list")){
        if ((scrollDivOfThisButton.scrollWidth - scrollDivOfThisButton.clientWidth + scrollDivOfThisButton.scrollLeft) <= 250) {
            scrollDivOfThisButton.scrollLeft = -40
        }else{
        scrollDivOfThisButton.scrollLeft += -1 *500
        }
    }else{
        if (scrollDivOfThisButton.scrollLeft >= -250) {
            scrollDivOfThisButton.scrollLeft = -1 * scrollDivOfThisButton.clientWidth
        }else{
        scrollDivOfThisButton.scrollLeft += 1 *500
        }
    }   
    // console.log(
    //         scrollDivOfThisButton.clientWidth,
    //         scrollDivOfThisButton.scrollLeft,
    //         scrollDivOfThisButton.scrollWidth,
    //         scrollDivOfThisButton.scrollWidth - scrollDivOfThisButton.clientWidth,
    //         scrollDivOfThisButton.scrollWidth - scrollDivOfThisButton.clientWidth + scrollDivOfThisButton.scrollLeft,
    // )
    clearInterval(scrollRollInterval)
    scrollerContInterval = 10000;
    scrollRollInterval = setInterval(scrollRotation, scrollerContInterval);
    setTimeout(() => {
        clearInterval(scrollRollInterval)
        scrollerContInterval = 5000;
        scrollRollInterval = setInterval(scrollRotation, scrollerContInterval);
    }, 10050);
}







/*--------------------start percentage scroll--------------------*/
// function getVerticalScrollPercentage( elm ){
//     return Math.round((elm.scrollLeft) / (elm.scrollWidth - elm.clientWidth ) * 100)
// }
/*--------------------start next button--------------------*/
// const listNxtBtn = Array.from(document.querySelectorAll(".btn-next-list"))
// console.log(listNxtBtn)
// /*--------------------start pre button--------------------*/
// const listPreBtn = Array.from(document.querySelectorAll(".btn-pre-list"))

// console.log(listPreBtn)
