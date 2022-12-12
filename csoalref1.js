let csref1 = document.querySelectorAll('.csref1');
let ikon = document.querySelectorAll('.ikon');

console.log(csref1)

for (let i=0; i<csref1.length; i++){

    //function agar saat di enter tidak dijalankan
    csref1[i].addEventListener('keypress', function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    csref1[i].addEventListener('keyup', function() {
        
        if (csref1[i].value.length == 0){
        if(csref1[i].className.indexOf('boxhijau') == -1){
            csref1[i].className = csref1[i].className.replace('boxmerah',"");
        }
        if (csref1[i].className.indexOf('boxmerah') == -1){
            csref1[i].className = csref1[i].className.replace('boxhijau',"");
        }
        }

        if (i==0){
            if(csref1[0].value.length==5){
            
                if(csref1[0].value=="-4,-9"){
                //box warna
                if (csref1[0].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[0].className += 'boxhijau';
                    } else {
                        csref1[0].className = csref1[0].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[0].className.indexOf('boxmerah') == -1){
                if (csref1[0].className.indexOf('boxhijau') == -1){
                    csref1[0].className += 'boxmerah';
                } else {
                    csref1[0].className = csref1[0].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        csref1[i].addEventListener("keyup",function(){
            csref1[i].value = csref1[i].value.split(' ').join('');
        })
        if (i==1){
            if(csref1[1].value.length==3){
            
                if(csref1[1].value=="3,7"){
                //box warna
                if (csref1[1].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[1].className += 'boxhijau';
                    } else {
                        csref1[1].className = csref1[1].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[1].className.indexOf('boxmerah') == -1){
                if (csref1[1].className.indexOf('boxhijau') == -1){
                    csref1[1].className += 'boxmerah';
                } else {
                    csref1[1].className = csref1[1].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==2){
            if(csref1[2].value.length==5){
            
                if(csref1[2].value=="-3,-4"){
                //box warna
                if (csref1[2].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[2].className += 'boxhijau';
                    } else {
                        csref1[2].className = csref1[2].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[2].className.indexOf('boxmerah') == -1){
                if (csref1[2].className.indexOf('boxhijau') == -1){
                    csref1[2].className += 'boxmerah';
                } else {
                    csref1[2].className = csref1[2].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==3){
            if(csref1[3].value.length==3){
            
                if(csref1[3].value=="2,3"){
                //box warna
                if (csref1[3].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[3].className += 'boxhijau';
                    } else {
                        csref1[3].className = csref1[3].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[3].className.indexOf('boxmerah') == -1){
                if (csref1[3].className.indexOf('boxhijau') == -1){
                    csref1[3].className += 'boxmerah';
                } else {
                    csref1[3].className = csref1[3].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==4){
            if(csref1[4].value.length==2){
            
                if(csref1[4].value=="-x"){
                //box warna
                if (csref1[4].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[4].className += 'boxhijau';
                    } else {
                        csref1[4].className = csref1[4].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[4].className.indexOf('boxmerah') == -1){
                if (csref1[4].className.indexOf('boxhijau') == -1){
                    csref1[4].className += 'boxmerah';
                } else {
                    csref1[4].className = csref1[4].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==5){
            if(csref1[5].value.length==3){
            
                if(csref1[5].value=="-x'"){
                //box warna
                if (csref1[5].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[5].className += 'boxhijau';
                    } else {
                        csref1[5].className = csref1[5].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[5].className.indexOf('boxmerah') == -1){
                if (csref1[5].className.indexOf('boxhijau') == -1){
                    csref1[5].className += 'boxmerah';
                } else {
                    csref1[5].className = csref1[5].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==6){
            if(csref1[6].value.length==1){
            
                if(csref1[6].value=="y"){
                //box warna
                if (csref1[6].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[6].className += 'boxhijau';
                    } else {
                        csref1[6].className = csref1[6].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[6].className.indexOf('boxmerah') == -1){
                if (csref1[6].className.indexOf('boxhijau') == -1){
                    csref1[6].className += 'boxmerah';
                } else {
                    csref1[6].className = csref1[6].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==7){
            if(csref1[7].value.length==2){
            
                if(csref1[7].value=="y'"){
                //box warna
                if (csref1[7].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[7].className += 'boxhijau';
                    } else {
                        csref1[7].className = csref1[7].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[7].className.indexOf('boxmerah') == -1){
                if (csref1[7].className.indexOf('boxhijau') == -1){
                    csref1[7].className += 'boxmerah';
                } else {
                    csref1[7].className = csref1[7].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==8){
            if(csref1[8].value.length==4){
            
                if(csref1[8].value=="-2x'"){
                //box warna
                if (csref1[8].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[8].className += 'boxhijau';
                    } else {
                        csref1[8].className = csref1[8].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[8].className.indexOf('boxmerah') == -1){
                if (csref1[8].className.indexOf('boxhijau') == -1){
                    csref1[8].className += 'boxmerah';
                } else {
                    csref1[8].className = csref1[8].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==9){
            if(csref1[9].value.length==1){
            
                if(csref1[9].value==5){
                //box warna
                if (csref1[9].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[9].className += 'boxhijau';
                    } else {
                        csref1[9].className = csref1[9].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[9].className.indexOf('boxmerah') == -1){
                if (csref1[9].className.indexOf('boxhijau') == -1){
                    csref1[9].className += 'boxmerah';
                } else {
                    csref1[9].className = csref1[9].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==10){
            if(csref1[10].value.length==5){
            
                if(csref1[10].value=="-2x+5"){
                //box warna
                if (csref1[10].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[10].className += 'boxhijau';
                    } else {
                        csref1[10].className = csref1[10].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[10].className.indexOf('boxmerah') == -1){
                if (csref1[10].className.indexOf('boxhijau') == -1){
                    csref1[10].className += 'boxmerah';
                } else {
                    csref1[10].className = csref1[10].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==11){
            if(csref1[11].value.length==4){
            
                if(csref1[11].value=="-7,9"){
                //box warna
                if (csref1[11].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[11].className += 'boxhijau';
                    } else {
                        csref1[11].className = csref1[11].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[11].className.indexOf('boxmerah') == -1){
                if (csref1[11].className.indexOf('boxhijau') == -1){
                    csref1[11].className += 'boxmerah';
                } else {
                    csref1[11].className = csref1[11].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==12){
            if(csref1[12].value.length==4){
            
                if(csref1[12].value=="2,-5"){
                //box warna
                if (csref1[12].className.indexOf('boxhijau') == -1) {
                    if (csref1[i].className.indexOf('boxmerah') == -1) {
                        csref1[12].className += 'boxhijau';
                    } else {
                        csref1[12].className = csref1[12].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref1[12].className.indexOf('boxmerah') == -1){
                if (csref1[12].className.indexOf('boxhijau') == -1){
                    csref1[12].className += 'boxmerah';
                } else {
                    csref1[12].className = csref1[12].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
    });

}