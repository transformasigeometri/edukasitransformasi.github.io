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
let jwbnbenar1=document.getElementById("tanyat1")
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
let jwbnbenar2=document.getElementById("tanyat8")
let keterangan2=document.getElementById("ket2")
tombolcek2.addEventListener("click",function(){
    if (jwbnbenar2.checked == true){
       keterangan2.innerHTML=`<img src="cek.png" >`
    }
    else {
        keterangan2.innerHTML=`<img src="salah.png" >`
    }
})

let input3 = document.getElementById ("c3");
let input3a = document.getElementById ("c3a");
let btn3 = document.getElementById ("jp3");
let aksi3 = document.getElementById ("ket3");

btn3.addEventListener("click",function(){
    if(input3.value == "3" && input3a.value=="0"){
        aksi3.innerHTML = `<img src="cek.png" >`
    }
    else{
        aksi3.innerHTML  = `<img src="salah.png" >`
    }
    MathJax.typeset();
  })
  input3.addEventListener("keyup",function(){
    input3.value = input3.value.split(' ').join('');
  })
  input3a.addEventListener("keyup",function(){
    input3a.value = input3a.value.split(' ').join('');
  })

let input4 = document.getElementById ("c4");
let input4a = document.getElementById ("c4a");
let btn4 = document.getElementById("jp4");
let aksi4 = document.getElementById("ket4");

btn4.addEventListener("click",function(){
    if(input4.value == "9" && input4a.value=="-2"){
        aksi4.innerHTML = `<img src="cek.png" >`
    }
    else{
        aksi4.innerHTML = `<img src="salah.png" >`
    }
    MathJax.typeset();
  })
  input4.addEventListener("keyup",function(){
    input4.value = input4.value.split(' ').join('');
  })
  input4a.addEventListener("keyup",function(){
    input4a.value = input4a.value.split(' ').join('');
  })

  let tombolcek5=document.getElementById("jp5")
  let jwbnbenar5=document.getElementById("tanyat12")
  let keterangan5=document.getElementById("ket5")
  tombolcek5.addEventListener("click",function(){
      if (jwbnbenar5.checked == true){
         keterangan5.innerHTML=`<img src="cek.png" >`
      }
      else {
          keterangan5.innerHTML=`<img src="salah.png" >`
      }
  })