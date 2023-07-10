const socailBtn = document.getElementById('socail-btn');
let socailMenu  = document.querySelector('.social-menu')
if(socailBtn){
    socailBtn.addEventListener("click" , (e)=>{
        if(socailMenu){
            socailMenu.classList.toggle('ac')
        }
        e.target.classList.toggle('ac')
        
    })
}