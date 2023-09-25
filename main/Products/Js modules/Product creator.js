import {allProducts,gpsAssortment,CCTV,IPCCTV,AHDCCTV,ahdCamera,ahdRecorder,ipCamera,ipRecorder,ipCctvSwitches,carGps,mobolityGps,gpsAccessories} from "./Product Lists.js"

window.assorter = function (e){
    
    if (e.getAttributeNode){
        let data;
        switch(e.getAttributeNode("assortment").value){
            default:
                data ={title:"محصولات ردیابی اشخاص وخودرو", assortment:allProducts}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;
            case "gps":
                data = {stateTag:"gps",title:"محصولات مکانیابی", assortment:gpsAssortment}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;
        
            case "car-gps":
                data ={stateTag:"car-gps",title:"مکانیاب‌های ماشین", assortment:carGps}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;
        
            case "mobolity-gps":
                data ={stateTag:"mobolity-gps",title:"مکانیاب‌های شخصی", assortment:mobolityGps}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;
        
            case "gps-accessories":
                data ={stateTag:"gps-accessories",title:"لوازم جانبی مکانیاب", assortment:gpsAccessories}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;
            case "CCTV":
                data ={stateTag:"CCTV",title:"محصولات نظارتی", assortment:CCTV}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;
            case "IP-CCTV":
                data ={stateTag:"IP-CCTV",title:"محصولات نظارتی تحت شبکه", assortment:IPCCTV}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;

            case "IP-camera":
                data ={stateTag:"IP-camera",title:"دوربین‌های تحت شبکه", assortment:ipCamera}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;

            case "IP-recorder":
                data ={stateTag:"IP-recorder",title:"دستگاه‌های ضبط تحت شبکه", assortment:ipRecorder}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;
                
            case "IP-CCTV-switches":
                data ={stateTag:"IP-CCTV-switches",title:"سوییچ های PoE", assortment:ipCctvSwitches}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;


            case "AHD-CCTV":
                data ={stateTag:"AHD-CCTV",title:"محصولات نظارتی مدار بسته", assortment:AHDCCTV}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;

            case "AHD-camera":
                data ={stateTag:"AHD-camera",title:"دوربین‌های تحت شبکه", assortment:ahdCamera}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;

            case "AHD-recorder":
                data ={stateTag:"AHD-recorder",title:"دستگاه‌های ضبط تحت شبکه", assortment:ahdRecorder}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                history.pushState(data, `${e.getAttributeNode("assortment").value}` ,`${e.getAttributeNode("assortment").value}`)
                break;
        }
        }else return;
}


addEventListener("popstate",()=> {
    console.log("popstate")
    if(history.state == null){
        productElementMaker(allProducts)
        document.querySelector(".product-container-h2 h2").innerText = "محصولات ردیابی اشخاص وخودرو"

    }else{
        let data;
        switch(history.state.stateTag){
            default:
                data ={title:"محصولات ردیابی اشخاص وخودرو", assortment:allProducts}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;
            case "gps":
                data = {title:"محصولات مکانیابی", assortment:gpsAssortment}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;
        
            case "car-gps":
                data ={title:"مکانیاب‌های ماشین", assortment:carGps}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;
        
            case "mobolity-gps":
                data ={title:"مکانیاب‌های شخصی", assortment:mobolityGps}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;
        
            case "gps-accessories":
                data ={title:"لوازم جانبی مکانیاب", assortment:gpsAccessories}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;
            case "CCTV":
                data ={title:"محصولات نظارتی", assortment:CCTV}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;
            case "IP-CCTV":
                data ={title:"محصولات نظارتی تحت شبکه", assortment:IPCCTV}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;

            case "IP-camera":
                data ={title:"دوربین‌های تحت شبکه", assortment:ipCamera}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;

            case "IP-recorder":
                data ={title:"دستگاه‌های ضبط تحت شبکه", assortment:ipRecorder}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;
                
            case "IP-CCTV-switches":
                data ={title:"سوییچ های PoE", assortment:ipCctvSwitches}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;


            case "AHD-CCTV":
                data ={title:"محصولات نظارتی مدار بسته", assortment:AHDCCTV}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;

            case "AHD-camera":
                data ={title:"دوربین‌های تحت شبکه", assortment:ahdCamera}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;

            case "AHD-recorder":
                data ={title:"دستگاه‌های ضبط تحت شبکه", assortment:ahdRecorder}
                document.querySelector(".product-container-h2 h2").innerText = data.title
                productElementMaker(data.assortment)
                break;
        }
    }
})
window.productElementMaker = function (e){
    document.querySelector(".products").innerHTML = "";
    e.map(product=>{
        let prodFigure = document.querySelector(".products").appendChild(document.createElement("figure"))
        prodFigure.id = `${product.productName+"_"+product.id}`
        
        let prodFigureImg = document.createElement("img")
        prodFigureImg.classList.add("product-photo")
        prodFigure.appendChild(prodFigureImg)
        prodFigureImg.src = product.productImg

        let prodFigcaption = document.createElement("figcaption")
        prodFigure.appendChild(prodFigcaption)

        let prodFigcapH3 = document.createElement("h3")
        prodFigcaption.appendChild(prodFigcapH3)
        prodFigcapH3.classList.add("product-h3")
        prodFigcapH3.innerText = product.productName
        
        prodFigcaption.classList.add("product-text-container")
        prodFigcaption.innerHTML += `<p>${product.protofilo}</p>
                                    <div class="product-more" onClick="productMoreFunc(this)">
                                        مشاهده جزئیات
                                    </div>
                                    `
        // console.log(product.productType)
        prodFigure.setAttribute("productType",`${product.productType}`)

    })
}
productElementMaker(allProducts)

/* -------------------------------- more bottun codes Start -------------------------------- */

let productMoreDescription;
window.productMoreFunc = function (e){

    let figure  = e.parentElement.parentElement
    let imgDiv =  e.parentElement.previousSibling
    let figcaption =  e.parentElement
    productMoreDescription = figcaption.querySelector("p").innerText
    figure.focus()

    imgDiv.classList.add("product-photo-opened")
    imgDiv.classList.remove("product-photo")

    figcaption.classList.remove("product-text-container")
    figcaption.classList.add("product-text-container-opened")
    figcaption.innerHTML=  `
                            <h3 class="product-h3">${figcaption.querySelector("h3").innerText}</h3>
                            <div class="product-specifics">

                            </div>
                            <div class="product-close" onClick="productCloseFunc(this)">بستن جزئیات</div>
                            `
    figure.style.width = "calc(80% - 2rem)"
    figure.style.flexDirection= "row";
    switch (figure.getAttribute("productType")) {
        case "carGps":
            carGps.map(p=>{
                if(figure.id === `${p.productName+"_"+p.id}`){
                    figcaption.querySelector(".product-specifics").innerHTML = `
                    <div class="product-specific " id="${figure.id}">
                    <img class="fa fa-home" src="" alt=""></img>
                    <p>${p.status1}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status2}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status3}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status4}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status5}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status6}</p>
                    </div>
    
                    `
                }else return;
            })
            figcaption.querySelector(".product-specifics").innerHTML
            break;
        case "mobolityGps":
            mobolityGps.map(p=>{
                if(figure.id === `${p.productName+"_"+p.id}`){
                    figcaption.querySelector(".product-specifics").innerHTML = `
                    <div class="product-specific " id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status1}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status2}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status3}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status4}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status5}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status6}</p>
                    </div>
    
                    `
                }else return;
            })
            figcaption.querySelector(".product-specifics").innerHTML
            break;    
        case "gpsAccessories":
            gpsAccessories.map(p=>{
                if(figure.id === `${p.productName+"_"+p.id}`){
                    figcaption.querySelector(".product-specifics").innerHTML = `
                    <div class="product-specific " id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status1}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status2}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status3}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status4}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status5}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status6}</p>
                    </div>
    
                    `
                }else return;
            })
            figcaption.querySelector(".product-specifics").innerHTML
            break;
        case "ipCamera":
            ipCamera.map(p=>{
                if(figure.id === `${p.productName+"_"+p.id}`){
                    figcaption.querySelector(".product-specifics").innerHTML = `
                    <div class="product-specific " id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status1}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status2}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status3}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status4}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status5}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status6}</p>
                    </div>
                    `
                }else return;
            })
            figcaption.querySelector(".product-specifics").innerHTML
            break;
        case "ipRecorder":
            ipRecorder.map(p=>{
                if(figure.id === `${p.productName+"_"+p.id}`){
                    figcaption.querySelector(".product-specifics").innerHTML = `
                    <div class="product-specific " id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status1}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status2}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status3}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status4}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status5}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status6}</p>
                    </div>
    
                    `
                }else return;
            })
            figcaption.querySelector(".product-specifics").innerHTML
            break;
        
        case "ipCctvSwitches":
            ipCctvSwitches.map(p=>{
                if(figure.id === `${p.productName+"_"+p.id}`){
                    figcaption.querySelector(".product-specifics").innerHTML = `
                    <div class="product-specific " id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status1}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status2}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status3}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status4}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status5}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status6}</p>
                    </div>
    
                    `
                }else return;
            })
            figcaption.querySelector(".product-specifics").innerHTML
            break;
        case "ahdCamera":
            ahdCamera.map(p=>{
                if(figure.id === `${p.productName+"_"+p.id}`){
                    figcaption.querySelector(".product-specifics").innerHTML = `
                    <div class="product-specific " id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status1}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status2}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status3}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status4}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status5}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status6}</p>
                    </div>
    
                    `
                }else return;
            })
            figcaption.querySelector(".product-specifics").innerHTML
            break;
        case "ahdRecorder":
            ahdRecorder.map(p=>{
                if(figure.id === `${p.productName+"_"+p.id}`){
                    figcaption.querySelector(".product-specifics").innerHTML = `
                    <div class="product-specific " id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status1}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status2}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status3}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status4}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status5}</p>
                    </div>
                    <div class="product-specific" id="${figure.id}">
                        <img class="fa fa-home" src="" alt=""></img>
                        <p>${p.status6}</p>
                    </div>
    
                    `
                }else return;
            })
            figcaption.querySelector(".product-specifics").innerHTML
            break;
    }

}
window.productCloseFunc = function (e){
    let figure  = e.parentElement.parentElement
    let imgDiv =  e.parentElement.previousSibling
    let figcaption =  e.parentElement
    figure.focus()
    figure.style.width = "calc(20% - 2rem)"
    figure.style.flexDirection= "column";

    imgDiv.classList.remove("product-photo-opened")
    imgDiv.classList.add("product-photo")

    
    figcaption.classList.add("product-text-container")
    figcaption.classList.remove("product-text-container-opened")

    figcaption.innerHTML = `<h3 class="product-h3">${figcaption.querySelector("h3").innerText}</h3>
                                <p>${productMoreDescription}</p>
                                <div class="product-more" onclick="productMoreFunc(this)">
                                مشاهده جزئیات
                                </div>`

}
/* -------------------------------- more bottun codes End -------------------------------- */
