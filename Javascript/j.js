const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')
if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}
if (close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

var mainImg=document.getElementById("mainimg")
var smallimg =document.getElementsByClassName("smallimg")
console.log("aman")
smallimg[0].onclick =function(){
    mainImg.scr = smallimg[0].scr;
}
smallimg[1].onclick =function(){
    mainImg.scr = smallimg[1].scr;
}
smallimg[2].onclick =function(){
    mainImg.scr = smallimg[2].scr;
}
smallimg[3].onclick =function(){
    mainImg.scr = smallimg[3].scr;
}