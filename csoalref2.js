let csref2 = document.querySelectorAll('.csref2');
let ikon = document.querySelectorAll('.ikon');

console.log(csref2)

for (let i=0; i<csref2.length; i++){

    //function agar saat di enter tidak dijalankan
    csref2[i].addEventListener('keypress', function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    csref2[i].addEventListener('keyup', function() {
        
        if (csref2[i].value.length == 0){
        if(csref2[i].className.indexOf('boxhijau') == -1){
            csref2[i].className = csref2[i].className.replace('boxmerah',"");
        }
        if (csref2[i].className.indexOf('boxmerah') == -1){
            csref2[i].className = csref2[i].className.replace('boxhijau',"");
        }
        }

        if (i==0){
            if(csref2[0].value.length==4){
            
                if(csref2[0].value=="9,-4"){
                //box warna
                if (csref2[0].className.indexOf('boxhijau') == -1) {
                    if (csref2[i].className.indexOf('boxmerah') == -1) {
                        csref2[0].className += 'boxhijau';
                    } else {
                        csref2[0].className = csref2[0].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref2[0].className.indexOf('boxmerah') == -1){
                if (csref2[0].className.indexOf('boxhijau') == -1){
                    csref2[0].className += 'boxmerah';
                } else {
                    csref2[0].className = csref2[0].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        csref2[i].addEventListener("keyup",function(){
            csref2[i].value = csref2[i].value.split(' ').join('');
        })
        if (i==1){
            if(csref2[1].value.length==4){
            
                if(csref2[1].value=="-7,3"){
                //box warna
                if (csref2[1].className.indexOf('boxhijau') == -1) {
                    if (csref2[i].className.indexOf('boxmerah') == -1) {
                        csref2[1].className += 'boxhijau';
                    } else {
                        csref2[1].className = csref2[1].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref2[1].className.indexOf('boxmerah') == -1){
                if (csref2[1].className.indexOf('boxhijau') == -1){
                    csref2[1].className += 'boxmerah';
                } else {
                    csref2[1].className = csref2[1].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==2){
            if(csref2[2].value.length==4){
            
                if(csref2[2].value=="4,-3"){
                //box warna
                if (csref2[2].className.indexOf('boxhijau') == -1) {
                    if (csref2[i].className.indexOf('boxmerah') == -1) {
                        csref2[2].className += 'boxhijau';
                    } else {
                        csref2[2].className = csref2[2].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref2[2].className.indexOf('boxmerah') == -1){
                if (csref2[2].className.indexOf('boxhijau') == -1){
                    csref2[2].className += 'boxmerah';
                } else {
                    csref2[2].className = csref2[2].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==3){
            if(csref2[3].value.length==4){
            
                if(csref2[3].value=="-3,2"){
                //box warna
                if (csref2[3].className.indexOf('boxhijau') == -1) {
                    if (csref2[i].className.indexOf('boxmerah') == -1) {
                        csref2[3].className += 'boxhijau';
                    } else {
                        csref2[3].className = csref2[3].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref2[3].className.indexOf('boxmerah') == -1){
                if (csref2[3].className.indexOf('boxhijau') == -1){
                    csref2[3].className += 'boxmerah';
                } else {
                    csref2[3].className = csref2[3].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
    });

}