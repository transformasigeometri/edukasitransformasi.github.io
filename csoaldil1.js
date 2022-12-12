let csdil1 = document.querySelectorAll('.csdil1');
let ikon = document.querySelectorAll('.ikon');

console.log(csdil1)

for (let i=0; i<csdil1.length; i++){

    //function agar saat di enter tidak dijalankan
    csdil1[i].addEventListener('keypress', function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    csdil1[i].addEventListener('keyup', function() {
        
        if (csdil1[i].value.length == 0){
        if(csdil1[i].className.indexOf('boxhijau') == -1){
            csdil1[i].className = csdil1[i].className.replace('boxmerah',"");
        }
        if (csdil1[i].className.indexOf('boxmerah') == -1){
            csdil1[i].className = csdil1[i].className.replace('boxhijau',"");
        }
        }

        if (i==0){
            if(csdil1[0].value.length==1){
            
                if(csdil1[0].value==2){
                //box warna
                if (csdil1[0].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[0].className += 'boxhijau';
                    } else {
                        csdil1[0].className = csdil1[0].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[0].className.indexOf('boxmerah') == -1){
                if (csdil1[0].className.indexOf('boxhijau') == -1){
                    csdil1[0].className += 'boxmerah';
                } else {
                    csdil1[0].className = csdil1[0].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        csdil1[i].addEventListener("keyup",function(){
            csdil1[i].value = csdil1[i].value.split(' ').join('');
        })
        if (i==1){
            if(csdil1[1].value.length==2){
            
                if(csdil1[1].value==-3){
                //box warna
                if (csdil1[1].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[1].className += 'boxhijau';
                    } else {
                        csdil1[1].className = csdil1[1].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[1].className.indexOf('boxmerah') == -1){
                if (csdil1[1].className.indexOf('boxhijau') == -1){
                    csdil1[1].className += 'boxmerah';
                } else {
                    csdil1[1].className = csdil1[1].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==2){
            if(csdil1[2].value.length==1){
            
                if(csdil1[2].value==2){
                //box warna
                if (csdil1[2].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[2].className += 'boxhijau';
                    } else {
                        csdil1[2].className = csdil1[2].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[2].className.indexOf('boxmerah') == -1){
                if (csdil1[2].className.indexOf('boxhijau') == -1){
                    csdil1[2].className += 'boxmerah';
                } else {
                    csdil1[2].className = csdil1[2].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==3){
            if(csdil1[3].value.length==1){
            
                if(csdil1[3].value==2){
                //box warna
                if (csdil1[3].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[3].className += 'boxhijau';
                    } else {
                        csdil1[3].className = csdil1[3].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[3].className.indexOf('boxmerah') == -1){
                if (csdil1[3].className.indexOf('boxhijau') == -1){
                    csdil1[3].className += 'boxmerah';
                } else {
                    csdil1[3].className = csdil1[3].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==4){
            if(csdil1[4].value.length==4){
            
                if(csdil1[4].value=="-6,4"){
                //box warna
                if (csdil1[4].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[4].className += 'boxhijau';
                    } else {
                        csdil1[4].className = csdil1[4].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[4].className.indexOf('boxmerah') == -1){
                if (csdil1[4].className.indexOf('boxhijau') == -1){
                    csdil1[4].className += 'boxmerah';
                } else {
                    csdil1[4].className = csdil1[4].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==5){
            if(csdil1[5].value.length==1){
            
                if(csdil1[5].value==2){
                //box warna
                if (csdil1[5].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[5].className += 'boxhijau';
                    } else {
                        csdil1[5].className = csdil1[5].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[5].className.indexOf('boxmerah') == -1){
                if (csdil1[5].className.indexOf('boxhijau') == -1){
                    csdil1[5].className += 'boxmerah';
                } else {
                    csdil1[5].className = csdil1[5].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==6){
            if(csdil1[6].value.length==1){
            
                if(csdil1[6].value==1){
                //box warna
                if (csdil1[6].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[6].className += 'boxhijau';
                    } else {
                        csdil1[6].className = csdil1[6].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[6].className.indexOf('boxmerah') == -1){
                if (csdil1[6].className.indexOf('boxhijau') == -1){
                    csdil1[6].className += 'boxmerah';
                } else {
                    csdil1[6].className = csdil1[6].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==7){
            if(csdil1[7].value.length==1){
            
                if(csdil1[7].value==2){
                //box warna
                if (csdil1[7].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[7].className += 'boxhijau';
                    } else {
                        csdil1[7].className = csdil1[7].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[7].className.indexOf('boxmerah') == -1){
                if (csdil1[7].className.indexOf('boxhijau') == -1){
                    csdil1[7].className += 'boxmerah';
                } else {
                    csdil1[7].className = csdil1[7].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==8){
            if(csdil1[8].value.length==2){
            
                if(csdil1[8].value==-4){
                //box warna
                if (csdil1[8].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[8].className += 'boxhijau';
                    } else {
                        csdil1[8].className = csdil1[8].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[8].className.indexOf('boxmerah') == -1){
                if (csdil1[8].className.indexOf('boxhijau') == -1){
                    csdil1[8].className += 'boxmerah';
                } else {
                    csdil1[8].className = csdil1[8].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==9){
            if(csdil1[9].value.length==4){
            
                if(csdil1[9].value=="2,-8"){
                //box warna
                if (csdil1[9].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[9].className += 'boxhijau';
                    } else {
                        csdil1[9].className = csdil1[9].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[9].className.indexOf('boxmerah') == -1){
                if (csdil1[9].className.indexOf('boxhijau') == -1){
                    csdil1[9].className += 'boxmerah';
                } else {
                    csdil1[9].className = csdil1[9].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==10){
            if(csdil1[10].value.length==1){
            
                if(csdil1[10].value==2){
                //box warna
                if (csdil1[10].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[10].className += 'boxhijau';
                    } else {
                        csdil1[10].className = csdil1[10].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[10].className.indexOf('boxmerah') == -1){
                if (csdil1[10].className.indexOf('boxhijau') == -1){
                    csdil1[10].className += 'boxmerah';
                } else {
                    csdil1[10].className = csdil1[10].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==11){
            if(csdil1[11].value.length==1){
            
                if(csdil1[11].value==2){
                //box warna
                if (csdil1[11].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[11].className += 'boxhijau';
                    } else {
                        csdil1[11].className = csdil1[11].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[11].className.indexOf('boxmerah') == -1){
                if (csdil1[11].className.indexOf('boxhijau') == -1){
                    csdil1[11].className += 'boxmerah';
                } else {
                    csdil1[11].className = csdil1[11].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==12){
            if(csdil1[12].value.length==1){
            
                if(csdil1[12].value==2){
                //box warna
                if (csdil1[12].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[12].className += 'boxhijau';
                    } else {
                        csdil1[12].className = csdil1[12].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[12].className.indexOf('boxmerah') == -1){
                if (csdil1[12].className.indexOf('boxhijau') == -1){
                    csdil1[12].className += 'boxmerah';
                } else {
                    csdil1[12].className = csdil1[12].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==13){
            if(csdil1[13].value.length==1){
            
                if(csdil1[13].value==1){
                //box warna
                if (csdil1[13].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[13].className += 'boxhijau';
                    } else {
                        csdil1[13].className = csdil1[13].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[13].className.indexOf('boxmerah') == -1){
                if (csdil1[13].className.indexOf('boxhijau') == -1){
                    csdil1[13].className += 'boxmerah';
                } else {
                    csdil1[13].className = csdil1[13].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==14){
            if(csdil1[14].value.length==3){
            
                if(csdil1[14].value=="4,2"){
                //box warna
                if (csdil1[14].className.indexOf('boxhijau') == -1) {
                    if (csdil1[i].className.indexOf('boxmerah') == -1) {
                        csdil1[14].className += 'boxhijau';
                    } else {
                        csdil1[14].className = csdil1[14].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil1[14].className.indexOf('boxmerah') == -1){
                if (csdil1[14].className.indexOf('boxhijau') == -1){
                    csdil1[14].className += 'boxmerah';
                } else {
                    csdil1[14].className = csdil1[14].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
    });

}