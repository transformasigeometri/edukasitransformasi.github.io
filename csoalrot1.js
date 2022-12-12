let csrot1 = document.querySelectorAll('.csrot1');
let ikon = document.querySelectorAll('.ikon');

console.log(csrot1)

for (let i=0; i<csrot1.length; i++){

    //function agar saat di enter tidak dijalankan
    csrot1[i].addEventListener('keypress', function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    csrot1[i].addEventListener('keyup', function() {
        
        if (csrot1[i].value.length == 0){
        if(csrot1[i].className.indexOf('boxhijau') == -1){
            csrot1[i].className = csrot1[i].className.replace('boxmerah',"");
        }
        if (csrot1[i].className.indexOf('boxmerah') == -1){
            csrot1[i].className = csrot1[i].className.replace('boxhijau',"");
        }
        }

        if (i==0){
            if(csrot1[0].value.length==3){
            
                if(csrot1[0].value=="1,3"){
                //box warna
                if (csrot1[0].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[0].className += 'boxhijau';
                    } else {
                        csrot1[0].className = csrot1[0].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[0].className.indexOf('boxmerah') == -1){
                if (csrot1[0].className.indexOf('boxhijau') == -1){
                    csrot1[0].className += 'boxmerah';
                } else {
                    csrot1[0].className = csrot1[0].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        csrot1[i].addEventListener("keyup",function(){
            csrot1[i].value = csrot1[i].value.split(' ').join('');
        })
        if (i==1){
            if(csrot1[1].value.length==4){
            
                if(csrot1[1].value=="-1,5"){
                //box warna
                if (csrot1[1].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[1].className += 'boxhijau';
                    } else {
                        csrot1[1].className = csrot1[1].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[1].className.indexOf('boxmerah') == -1){
                if (csrot1[1].className.indexOf('boxhijau') == -1){
                    csrot1[1].className += 'boxmerah';
                } else {
                    csrot1[1].className = csrot1[1].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==2){
            if(csrot1[2].value.length==4){
            
                if(csrot1[2].value=="2,-3"){
                //box warna
                if (csrot1[2].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[2].className += 'boxhijau';
                    } else {
                        csrot1[2].className = csrot1[2].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[2].className.indexOf('boxmerah') == -1){
                if (csrot1[2].className.indexOf('boxhijau') == -1){
                    csrot1[2].className += 'boxmerah';
                } else {
                    csrot1[2].className = csrot1[2].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==3){
            if(csrot1[3].value.length==5){
            
                if(csrot1[3].value=="-4,-2"){
                //box warna
                if (csrot1[3].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[3].className += 'boxhijau';
                    } else {
                        csrot1[3].className = csrot1[3].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[3].className.indexOf('boxmerah') == -1){
                if (csrot1[3].className.indexOf('boxhijau') == -1){
                    csrot1[3].className += 'boxmerah';
                } else {
                    csrot1[3].className = csrot1[3].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==4){
            if(csrot1[4].value.length==5){
            
                if(csrot1[4].value=="-1,-3"){
                //box warna
                if (csrot1[4].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[4].className += 'boxhijau';
                    } else {
                        csrot1[4].className = csrot1[4].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[4].className.indexOf('boxmerah') == -1){
                if (csrot1[4].className.indexOf('boxhijau') == -1){
                    csrot1[4].className += 'boxmerah';
                } else {
                    csrot1[4].className = csrot1[4].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==5){
            if(csrot1[5].value.length==4){
            
                if(csrot1[5].value=="1,-5"){
                //box warna
                if (csrot1[5].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[5].className += 'boxhijau';
                    } else {
                        csrot1[5].className = csrot1[5].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[5].className.indexOf('boxmerah') == -1){
                if (csrot1[5].className.indexOf('boxhijau') == -1){
                    csrot1[5].className += 'boxmerah';
                } else {
                    csrot1[5].className = csrot1[5].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==6){
            if(csrot1[6].value.length==4){
            
                if(csrot1[6].value=="-2,3"){
                //box warna
                if (csrot1[6].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[6].className += 'boxhijau';
                    } else {
                        csrot1[6].className = csrot1[6].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[6].className.indexOf('boxmerah') == -1){
                if (csrot1[6].className.indexOf('boxhijau') == -1){
                    csrot1[6].className += 'boxmerah';
                } else {
                    csrot1[6].className = csrot1[6].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==7){
            if(csrot1[7].value.length==3){
            
                if(csrot1[7].value=="4,2"){
                //box warna
                if (csrot1[7].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[7].className += 'boxhijau';
                    } else {
                        csrot1[7].className = csrot1[7].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[7].className.indexOf('boxmerah') == -1){
                if (csrot1[7].className.indexOf('boxhijau') == -1){
                    csrot1[7].className += 'boxmerah';
                } else {
                    csrot1[7].className = csrot1[7].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==8){
            if(csrot1[8].value.length==4){
            
                if(csrot1[8].value=="-3,1"){
                //box warna
                if (csrot1[8].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[8].className += 'boxhijau';
                    } else {
                        csrot1[8].className = csrot1[8].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[8].className.indexOf('boxmerah') == -1){
                if (csrot1[8].className.indexOf('boxhijau') == -1){
                    csrot1[8].className += 'boxmerah';
                } else {
                    csrot1[8].className = csrot1[8].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==9){
            if(csrot1[9].value.length==5){
            
                if(csrot1[9].value=="-5,-1"){
                //box warna
                if (csrot1[9].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[9].className += 'boxhijau';
                    } else {
                        csrot1[9].className = csrot1[9].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[9].className.indexOf('boxmerah') == -1){
                if (csrot1[9].className.indexOf('boxhijau') == -1){
                    csrot1[9].className += 'boxmerah';
                } else {
                    csrot1[9].className = csrot1[9].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==10){
            if(csrot1[10].value.length==3){
            
                if(csrot1[10].value=="3,2"){
                //box warna
                if (csrot1[10].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[10].className += 'boxhijau';
                    } else {
                        csrot1[10].className = csrot1[10].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[10].className.indexOf('boxmerah') == -1){
                if (csrot1[10].className.indexOf('boxhijau') == -1){
                    csrot1[10].className += 'boxmerah';
                } else {
                    csrot1[10].className = csrot1[10].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==11){
            if(csrot1[11].value.length==4){
            
                if(csrot1[11].value=="2,-4"){
                //box warna
                if (csrot1[11].className.indexOf('boxhijau') == -1) {
                    if (csrot1[i].className.indexOf('boxmerah') == -1) {
                        csrot1[11].className += 'boxhijau';
                    } else {
                        csrot1[11].className = csrot1[11].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot1[11].className.indexOf('boxmerah') == -1){
                if (csrot1[11].className.indexOf('boxhijau') == -1){
                    csrot1[11].className += 'boxmerah';
                } else {
                    csrot1[11].className = csrot1[11].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
    });

}