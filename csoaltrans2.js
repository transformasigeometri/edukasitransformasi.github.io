let cst2 = document.querySelectorAll('.cst2');
let ikon = document.querySelectorAll('.ikon');

console.log(cst2)

for (let i=0; i<cst2.length; i++){

    //function agar saat di enter tidak dijalankan
    cst2[i].addEventListener('keypress', function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    cst2[i].addEventListener('keyup', function() {
        
        if (cst2[i].value.length == 0){
        if(cst2[i].className.indexOf('boxhijau') == -1){
            cst2[i].className = cst2[i].className.replace('boxmerah',"");
        }
        if (cst2[i].className.indexOf('boxmerah') == -1){
            cst2[i].className = cst2[i].className.replace('boxhijau',"");
        }
        }

        if (i==0){
            if(cst2[0].value.length==4){
            
                if(cst2[0].value=="-7,8"){
                //box warna
                if (cst2[0].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[0].className += 'boxhijau';
                    } else {
                        cst2[0].className = cst2[0].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[0].className.indexOf('boxmerah') == -1){
                if (cst2[0].className.indexOf('boxhijau') == -1){
                    cst2[0].className += 'boxmerah';
                } else {
                    cst2[0].className = cst2[0].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        cst2[i].addEventListener("keyup",function(){
            cst2[i].value = cst2[i].value.split(' ').join('');
        })
        if (i==1){
            if(cst2[1].value.length==4){
            
                if(cst2[1].value=="-7,2"){
                //box warna
                if (cst2[1].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[1].className += 'boxhijau';
                    } else {
                        cst2[1].className = cst2[1].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[1].className.indexOf('boxmerah') == -1){
                if (cst2[1].className.indexOf('boxhijau') == -1){
                    cst2[1].className += 'boxmerah';
                } else {
                    cst2[1].className = cst2[1].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==2){
            if(cst2[2].value.length==4){
            
                if(cst2[2].value=="-4,2"){
                //box warna
                if (cst2[2].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[2].className += 'boxhijau';
                    } else {
                        cst2[2].className = cst2[2].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[2].className.indexOf('boxmerah') == -1){
                if (cst2[2].className.indexOf('boxhijau') == -1){
                    cst2[2].className += 'boxmerah';
                } else {
                    cst2[2].className = cst2[2].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==3){
            if(cst2[3].value.length==4){
            
                if(cst2[3].value=="-7,8"){
                //box warna
                if (cst2[3].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[3].className += 'boxhijau';
                    } else {
                        cst2[3].className = cst2[3].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[3].className.indexOf('boxmerah') == -1){
                if (cst2[3].className.indexOf('boxhijau') == -1){
                    cst2[3].className += 'boxmerah';
                } else {
                    cst2[3].className = cst2[3].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==4){
            if(cst2[4].value.length==4){
            
                if(cst2[4].value=="-7,2"){
                //box warna
                if (cst2[4].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[4].className += 'boxhijau';
                    } else {
                        cst2[4].className = cst2[4].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[4].className.indexOf('boxmerah') == -1){
                if (cst2[4].className.indexOf('boxhijau') == -1){
                    cst2[4].className += 'boxmerah';
                } else {
                    cst2[4].className = cst2[4].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==5){
            if(cst2[5].value.length==4){
            
                if(cst2[5].value=="-4,2"){
                //box warna
                if (cst2[5].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[5].className += 'boxhijau';
                    } else {
                        cst2[5].className = cst2[5].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[5].className.indexOf('boxmerah') == -1){
                if (cst2[5].className.indexOf('boxhijau') == -1){
                    cst2[5].className += 'boxmerah';
                } else {
                    cst2[5].className = cst2[5].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==6){
            if(cst2[6].value.length==4){
            
                if(cst2[6].value=="3,19"){
                //box warna
                if (cst2[6].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[6].className += 'boxhijau';
                    } else {
                        cst2[6].className = cst2[6].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[6].className.indexOf('boxmerah') == -1){
                if (cst2[6].className.indexOf('boxhijau') == -1){
                    cst2[6].className += 'boxmerah';
                } else {
                    cst2[6].className = cst2[6].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==7){
            if(cst2[7].value.length==4){
            
                if(cst2[7].value=="3,13"){
                //box warna
                if (cst2[7].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[7].className += 'boxhijau';
                    } else {
                        cst2[7].className = cst2[7].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[7].className.indexOf('boxmerah') == -1){
                if (cst2[7].className.indexOf('boxhijau') == -1){
                    cst2[7].className += 'boxmerah';
                } else {
                    cst2[7].className = cst2[7].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==8){
            if(cst2[8].value.length==4){
            
                if(cst2[8].value=="6,13"){
                //box warna
                if (cst2[8].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[8].className += 'boxhijau';
                    } else {
                        cst2[8].className = cst2[8].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[8].className.indexOf('boxmerah') == -1){
                if (cst2[8].className.indexOf('boxhijau') == -1){
                    cst2[8].className += 'boxmerah';
                } else {
                    cst2[8].className = cst2[8].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==9){
            if(cst2[9].value.length==4){
            
                if(cst2[9].value=="3,19"){
                //box warna
                if (cst2[9].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[9].className += 'boxhijau';
                    } else {
                        cst2[9].className = cst2[9].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[9].className.indexOf('boxmerah') == -1){
                if (cst2[9].className.indexOf('boxhijau') == -1){
                    cst2[9].className += 'boxmerah';
                } else {
                    cst2[9].className = cst2[9].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==10){
            if(cst2[10].value.length==4){
            
                if(cst2[10].value=="3,13"){
                //box warna
                if (cst2[10].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[10].className += 'boxhijau';
                    } else {
                        cst2[10].className = cst2[10].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[10].className.indexOf('boxmerah') == -1){
                if (cst2[10].className.indexOf('boxhijau') == -1){
                    cst2[10].className += 'boxmerah';
                } else {
                    cst2[10].className = cst2[10].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==11){
            if(cst2[11].value.length==4){
            
                if(cst2[11].value=="6,13"){
                //box warna
                if (cst2[11].className.indexOf('boxhijau') == -1) {
                    if (cst2[i].className.indexOf('boxmerah') == -1) {
                        cst2[11].className += 'boxhijau';
                    } else {
                        cst2[11].className = cst2[11].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst2[11].className.indexOf('boxmerah') == -1){
                if (cst2[11].className.indexOf('boxhijau') == -1){
                    cst2[11].className += 'boxmerah';
                } else {
                    cst2[11].className = cst2[11].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
    });

}