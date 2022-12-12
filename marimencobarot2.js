let input1 = document.getElementById ("c1");
let btn1 = document.getElementById ("jc1");
let aksi1 = document.getElementById ("jbc1");
let cb1 = 0;

btn1.addEventListener("click",function(){
cb1++;
    if(input1.value == "0,2"){
        aksi1.innerHTML = "Jawaban benar \\[A(2,2)\\xrightarrow{R[M,90^{\\circ}]}{A}'(0,2)\\]"
     }
    else{
      if (cb1 == 2){
        aksi1.innerHTML = "\\[A(x,y)\\xrightarrow{R[M,90^{\\circ}]}{A}'(a-(y-b),b+(x-a))\\]"
        aksi1.innerHTML +="<p>\\[A(2,2)\\xrightarrow{R[M,90^{\\circ}]}{A}'(...,...)\\]</p>"
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
    if(input2.value == "-1,-7"){
        aksi2.innerHTML = "Jawaban benar \\[B(-7,3)\\xrightarrow{R[M,90^{\\circ}]}{B}'(-1,-7)\\]"
     }
    else{
      if (cb2 == 2){
        aksi2.innerHTML = "\\[B(x,y)\\xrightarrow{R[M,90^{\\circ}]}{B}'(a-(y-b),b+(x-a))\\]"
        aksi2.innerHTML +="<p>\\[B(2,2)\\xrightarrow{R[M,90^{\\circ}]}{B}'(...,...)\\]</p>"
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
      if(input3.value == "7,4"){
          aksi3.innerHTML = "Jawaban benar \\[C(4,-5)\\xrightarrow{R[M,90^{\\circ}]}{C}'(7,4)\\]"
       }
      else{
        if (cb3 == 2){
          aksi3.innerHTML = "\\[C(x,y)\\xrightarrow{R[M,90^{\\circ}]}{C}'(a-(y-b),b+(x-a))\\]"
          aksi3.innerHTML +="<p>\\[C(4,-5)\\xrightarrow{R[M,90^{\\circ}]}{C}'(...,...)\\]</p>"
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
        if(input4.value == "7,-2"){
            aksi4.innerHTML = "Jawaban benar \\[D(-2,-5)\\xrightarrow{R[M,90^{\\circ}]}{D}'(7,-2)\\]"
          }
        else{
          if (cb4 == 2){
            aksi4.innerHTML = "\\[D(x,y)\\xrightarrow{R[M,90^{\\circ}]}{D}'(a-(y-b),b+(x-a))\\]"
            aksi4.innerHTML +="<p>\\[D(-2,-5)\\xrightarrow{R[M,90^{\\circ}]}{D}'(...,...)\\]</p>"
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
