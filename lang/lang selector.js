let language = {
    en:{
        x :"",
        y :"",
        z :""
    },
    fa:{
        x :"",
        y :"",
        z :""
    }
}

if(window.location.hash ==="#fa"){
    if(window.location.hash ==="#fa"){
        x.textContent = language.fa.x
        y.textContent = language.fa.y
        z.textContent = language.fa.z
    }
}

var reload = document.querySelectorAll(".reload");
reload.forEach(e=>{
        reload.onclick =function(){
            window.location.hash = this.getAttribute('href');
            window.location.reload();
        }

    }
)
