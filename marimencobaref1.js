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

let input1 = document.getElementById ("c1");
let btn1 = document.getElementById ("jc1");
let aksi1 = document.getElementById ("jbc1");
let cb1 = 0;

btn1.addEventListener("click",function(){
cb1++;
    if(input1.value == "3,-2"){
        aksi1.innerHTML = "Jawaban benar \\[A(3,2)\\xrightarrow{sumbu-X}{A}'(3,-2)\\]"
     }
    else{
      if (cb1 == 2){
        aksi1.innerHTML = "\\[A(x,y)\\xrightarrow{sumbu-X}{A}'(x,-y)\\]"
        aksi1.innerHTML +="<p>\\[A(3,2)\\xrightarrow{sumbu-X}{A}'(...,...)\\]</p>"
      }
      else {
        aksi1.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
      }
    }
    MathJax.typeset();
  })
  input1.addEventListener("keyup",function(){
  input1.value = input1.value.split(' ').join('');
  })

let input2 = document.getElementById ("c2");
let btn2 = document.getElementById ("jc2");
let aksi2 = document.getElementById ("jbc2");
let cb2 = 0;

btn2.addEventListener("click",function(){
cb2++;
    if(input2.value == "5,-4"){
        aksi2.innerHTML = "Jawaban benar \\[B(5,4)\\xrightarrow{sumbu-X}{B}'(5,-4)\\]"
     }
    else{
      if (cb2 == 2){
        aksi2.innerHTML = "\\[B(x,y)\\xrightarrow{sumbu-X}{B}'(x,-y)\\]"
        aksi2.innerHTML +="<p>\\[B(5,4)\\xrightarrow{sumbu-X}{B}'(...,...)\\]</p>"
      }
      else {
        aksi2.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
      }
    }
      MathJax.typeset();
    })
    input2.addEventListener("keyup",function(){
    input2.value = input2.value.split(' ').join('');
    })

let input3 = document.getElementById ("c3");
let btn3 = document.getElementById ("jc3");
let aksi3 = document.getElementById ("jbc3");
let cb3 = 0;

  btn3.addEventListener("click",function(){
  cb3++;
      if(input3.value == "7,-2"){
          aksi3.innerHTML = "Jawaban benar \\[C(7,2)\\xrightarrow{sumbu-X}{C}'(7,-2)\\]"
       }
      else{
        if (cb3 == 2){
          aksi3.innerHTML = "\\[C(x,y)\\xrightarrow{sumbu-X}{C}'(x,-y)\\]"
          aksi3.innerHTML +="<p>\\[C(7,2)\\xrightarrow{sumbu-X}{C}'(...,...)\\]</p>"
        }
        else {
          aksi3.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
        }
      }
        MathJax.typeset();
       })
      input3.addEventListener("keyup",function(){
      input3.value = input3.value.split(' ').join('');
      })

let input4 = document.getElementById ("c4");
let btn4 = document.getElementById ("jc4");
let aksi4 = document.getElementById ("jbc4");
let cb4 = 0;

    btn4.addEventListener("click",function(){
    cb4++;
      if(input4.value == "-3,2"){
            aksi4.innerHTML = "Jawaban benar \\[A(3,2)\\xrightarrow{sumbu-Y}{A}'(-3,2)\\]"
          }
        else{
          if (cb4 == 2){
            aksi4.innerHTML = "\\[A(x,y)\\xrightarrow{sumbu-Y}{A}'(-x,y)\\]"
            aksi4.innerHTML +="<p>\\[A(3,2)\\xrightarrow{sumbu-Y}{A}'(...,...)\\]</p>"
          }
          else {
            aksi4.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
          }
        }
          MathJax.typeset();
          })
        input4.addEventListener("keyup",function(){
        input4.value = input4.value.split(' ').join('');
        })

let input5 = document.getElementById ("c5");
let btn5 = document.getElementById ("jc5");
let aksi5 = document.getElementById ("jbc5");
let cb5 = 0;
        
    btn5.addEventListener("click",function(){
    cb5++;
       if(input5.value == "-5,4"){
            aksi5.innerHTML = "Jawaban benar \\[B(5,4)\\xrightarrow{sumbu-Y}{B}'(-5,4)\\]"
            }
       else{
        if (cb5 == 2){
          aksi5.innerHTML = "\\[B(x,y)\\xrightarrow{sumbu-Y}{B}'(-x,y)\\]"
          aksi5.innerHTML +="<p>\\[B(5,4)\\xrightarrow{sumbu-Y}{B}'(...,...)\\]</p>"
        }
        else {
          aksi5.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
        }
      }
            MathJax.typeset();
          })
          input5.addEventListener("keyup",function(){
          input5.value = input5.value.split(' ').join('');
          })
        
let input6 = document.getElementById ("c6");
let btn6 = document.getElementById ("jc6");
let aksi6 = document.getElementById ("jbc6");
let cb6 = 0;
          
    btn6.addEventListener("click",function(){
    cb6++;
        if(input6.value == "-7,2"){
              aksi6.innerHTML = "Jawaban benar \\[C(7,2)\\xrightarrow{sumbu-Y}{C}'(-7,2)\\]"
              }
        else{
          if (cb6 == 2){
            aksi6.innerHTML = "\\[C(x,y)\\xrightarrow{sumbu-Y}{C}'(-x,y)\\]"
            aksi6.innerHTML +="<p>\\[C(7,2)\\xrightarrow{sumbu-Y}{C}'(...,...)\\]</p>"
          }
          else {
            aksi6.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
          }
        }
              MathJax.typeset();
            })
           input6.addEventListener("keyup",function(){
           input6.value = input6.value.split(' ').join('');
            })
        
let input7 = document.getElementById ("c7");
let btn7 = document.getElementById ("jc7");
let aksi7 = document.getElementById ("jbc7");
let cb7 = 0;
            
    btn7.addEventListener("click",function(){
    cb7++;
        if(input7.value == "-3,-2"){
             aksi7.innerHTML = "Jawaban benar \\[A(3,2)\\xrightarrow{titik asal O}{A}'(-3,-2)\\]"
              }
        else{
          if (cb7 == 2){
            aksi7.innerHTML = "\\[A(x,y)\\xrightarrow{titik asal O}{A}'(-x,-y)\\]"
            aksi7.innerHTML +="<p>\\[A(3,2)\\xrightarrow{titik asal O}{A}'(...,...)\\]</p>"
          }
          else {
            aksi7.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
          }
        }
                MathJax.typeset();
              })
         input7.addEventListener("keyup",function(){
         input7.value = input7.value.split(' ').join('');
              })

let input8 = document.getElementById ("c8");
let btn8 = document.getElementById ("jc8");
let aksi8 = document.getElementById ("jbc8");
let cb8 = 0;

    btn8.addEventListener("click",function(){
    cb8++;
        if(input8.value == "-5,-4"){
              aksi8.innerHTML = "Jawaban benar \\[B(5,4)\\xrightarrow{titik asal O}{B}'(-5,-4)\\]"
           }
        else{
          if (cb8 == 2){
            aksi8.innerHTML = "\\[B(x,y)\\xrightarrow{titik asal O}{B}'(-x,-y)\\]"
            aksi8.innerHTML +="<p>\\[B(5,4)\\xrightarrow{titik asal O}{B}'(...,...)\\]</p>"
          }
          else {
            aksi8.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
          }
        }
             MathJax.typeset();
            })
            input8.addEventListener("keyup",function(){
            input8.value = input8.value.split(' ').join('');
              })
              
let input9 = document.getElementById ("c9");
let btn9 = document.getElementById ("jc9");
let aksi9 = document.getElementById ("jbc9");
let cb9 = 0;
                
    btn9.addEventListener("click",function(){
    cb9++;
        if(input9.value == "-7,-2"){
              aksi9.innerHTML = "Jawaban benar \\[C(7,2)\\xrightarrow{titik asal O}{C}'(-7,-2)\\]"
             }
        else{
          if (cb9 == 2){
            aksi9.innerHTML = "\\[C(x,y)\\xrightarrow{titik asal O}{C}'(-x,-y)\\]"
            aksi9.innerHTML +="<p>\\[C(7,2)\\xrightarrow{titik asal O}{C}'(...,...)\\]</p>"
          }
          else {
            aksi9.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
          }
        }
            MathJax.typeset();
            })
            input9.addEventListener("keyup",function(){
            input9.value = input9.value.split(' ').join('');
                  })