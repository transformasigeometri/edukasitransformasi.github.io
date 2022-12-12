var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
let tombolcek1=document.getElementById("jp1")
let jwbnbenar1=document.getElementById("tanyat2")
let keterangan=document.getElementById("ket")
tombolcek1.addEventListener("click",function(){
    if (jwbnbenar1.checked == true){
       keterangan.innerHTML=`<img src="cek.png" >`
    }
    else {
        keterangan.innerHTML=`<img src="salah.png" >`
    }
})
let tombolcek2=document.getElementById("jp2")
let jwbnbenar2=document.getElementById("tanyat6")
let keterangan2=document.getElementById("ket2")
tombolcek2.addEventListener("click",function(){
    if (jwbnbenar2.checked == true){
       keterangan2.innerHTML=`<img src="cek.png" >`
    }
    else {
        keterangan2.innerHTML=`<img src="salah.png" >`
    }
})
let tombolcek3=document.getElementById("jp3")
let jwbnbenar3=document.getElementById("tanyat13")
let keterangan3=document.getElementById("ket3")
tombolcek3.addEventListener("click",function(){
    if (jwbnbenar3.checked == true){
       keterangan3.innerHTML=`<img src="cek.png" >`
    }
    else {
        keterangan3.innerHTML=`<img src="salah.png" >`
    }
})
let tombolcek4=document.getElementById("jp4")
let jwbnbenar4=document.getElementById("tanyat19")
let keterangan4=document.getElementById("ket4")
tombolcek4.addEventListener("click",function(){
    if (jwbnbenar4.checked == true){
       keterangan4.innerHTML=`<img src="cek.png" >`
    }
    else {
        keterangan4.innerHTML=`<img src="salah.png" >`
    }
})
let tombolcek5=document.getElementById("jp5")
let jwbnbenar5=document.getElementById("tanyat22")
let keterangan5=document.getElementById("ket5")
tombolcek5.addEventListener("click",function(){
    if (jwbnbenar5.checked == true){
       keterangan5.innerHTML=`<img src="cek.png" >`
    }
    else {
        keterangan5.innerHTML=`<img src="salah.png" >`
    }
})