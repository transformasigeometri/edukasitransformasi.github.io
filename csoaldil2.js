let csdil2 = document.querySelectorAll('.csdil2');
let ikon = document.querySelectorAll('.ikon');

console.log(csdil2)

for (let i=0; i<csdil2.length; i++){

    //function agar saat di enter tidak dijalankan
    csdil2[i].addEventListener('keypress', function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    csdil2[i].addEventListener('keyup', function() {
        
        if (csdil2[i].value.length == 0){
        if(csdil2[i].className.indexOf('boxhijau') == -1){
            csdil2[i].className = csdil2[i].className.replace('boxmerah',"");
        }
        if (csdil2[i].className.indexOf('boxmerah') == -1){
            csdil2[i].className = csdil2[i].className.replace('boxhijau',"");
        }
        }

        if (i==0){
            if(csdil2[0].value.length==1){
            
                if(csdil2[0].value==1){
                //box warna
                if (csdil2[0].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[0].className += 'boxhijau';
                    } else {
                        csdil2[0].className = csdil2[0].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[0].className.indexOf('boxmerah') == -1){
                if (csdil2[0].className.indexOf('boxhijau') == -1){
                    csdil2[0].className += 'boxmerah';
                } else {
                    csdil2[0].className = csdil2[0].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        csdil2[i].addEventListener("keyup",function(){
            csdil2[i].value = csdil2[i].value.split(' ').join('');
        })
        if (i==1){
            if(csdil2[1].value.length==1){
            
                if(csdil2[1].value==1){
                //box warna
                if (csdil2[1].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[1].className += 'boxhijau';
                    } else {
                        csdil2[1].className = csdil2[1].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[1].className.indexOf('boxmerah') == -1){
                if (csdil2[1].className.indexOf('boxhijau') == -1){
                    csdil2[1].className += 'boxmerah';
                } else {
                    csdil2[1].className = csdil2[1].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==2){
            if(csdil2[2].value.length==1){
            
                if(csdil2[2].value==2){
                //box warna
                if (csdil2[2].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[2].className += 'boxhijau';
                    } else {
                        csdil2[2].className = csdil2[2].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[2].className.indexOf('boxmerah') == -1){
                if (csdil2[2].className.indexOf('boxhijau') == -1){
                    csdil2[2].className += 'boxmerah';
                } else {
                    csdil2[2].className = csdil2[2].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==3){
            if(csdil2[3].value.length==1){
            
                if(csdil2[3].value==1){
                //box warna
                if (csdil2[3].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[3].className += 'boxhijau';
                    } else {
                        csdil2[3].className = csdil2[3].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[3].className.indexOf('boxmerah') == -1){
                if (csdil2[3].className.indexOf('boxhijau') == -1){
                    csdil2[3].className += 'boxmerah';
                } else {
                    csdil2[3].className = csdil2[3].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==4){
            if(csdil2[4].value.length==1){
            
                if(csdil2[4].value==2){
                //box warna
                if (csdil2[4].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[4].className += 'boxhijau';
                    } else {
                        csdil2[4].className = csdil2[4].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[4].className.indexOf('boxmerah') == -1){
                if (csdil2[4].className.indexOf('boxhijau') == -1){
                    csdil2[4].className += 'boxmerah';
                } else {
                    csdil2[4].className = csdil2[4].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==5){
            if(csdil2[5].value.length==2){
            
                if(csdil2[5].value==-3){
                //box warna
                if (csdil2[5].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[5].className += 'boxhijau';
                    } else {
                        csdil2[5].className = csdil2[5].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[5].className.indexOf('boxmerah') == -1){
                if (csdil2[5].className.indexOf('boxhijau') == -1){
                    csdil2[5].className += 'boxmerah';
                } else {
                    csdil2[5].className = csdil2[5].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==6){
            if(csdil2[6].value.length==1){
            
                if(csdil2[6].value==1){
                //box warna
                if (csdil2[6].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[6].className += 'boxhijau';
                    } else {
                        csdil2[6].className = csdil2[6].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[6].className.indexOf('boxmerah') == -1){
                if (csdil2[6].className.indexOf('boxhijau') == -1){
                    csdil2[6].className += 'boxmerah';
                } else {
                    csdil2[6].className = csdil2[6].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==7){
            if(csdil2[7].value.length==1){
            
                if(csdil2[7].value==1){
                //box warna
                if (csdil2[7].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[7].className += 'boxhijau';
                    } else {
                        csdil2[7].className = csdil2[7].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[7].className.indexOf('boxmerah') == -1){
                if (csdil2[7].className.indexOf('boxhijau') == -1){
                    csdil2[7].className += 'boxmerah';
                } else {
                    csdil2[7].className = csdil2[7].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==8){
            if(csdil2[8].value.length==1){
            
                if(csdil2[8].value==2){
                //box warna
                if (csdil2[8].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[8].className += 'boxhijau';
                    } else {
                        csdil2[8].className = csdil2[8].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[8].className.indexOf('boxmerah') == -1){
                if (csdil2[8].className.indexOf('boxhijau') == -1){
                    csdil2[8].className += 'boxmerah';
                } else {
                    csdil2[8].className = csdil2[8].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==9){
            if(csdil2[9].value.length==1){
            
                if(csdil2[9].value==2){
                //box warna
                if (csdil2[9].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[9].className += 'boxhijau';
                    } else {
                        csdil2[9].className = csdil2[9].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[9].className.indexOf('boxmerah') == -1){
                if (csdil2[9].className.indexOf('boxhijau') == -1){
                    csdil2[9].className += 'boxmerah';
                } else {
                    csdil2[9].className = csdil2[9].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==10){
            if(csdil2[10].value.length==1){
            
                if(csdil2[10].value==1){
                //box warna
                if (csdil2[10].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[10].className += 'boxhijau';
                    } else {
                        csdil2[10].className = csdil2[10].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[10].className.indexOf('boxmerah') == -1){
                if (csdil2[10].className.indexOf('boxhijau') == -1){
                    csdil2[10].className += 'boxmerah';
                } else {
                    csdil2[10].className = csdil2[10].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==11){
            if(csdil2[11].value.length==4){
            
                if(csdil2[11].value=="-7,3"){
                //box warna
                if (csdil2[11].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[11].className += 'boxhijau';
                    } else {
                        csdil2[11].className = csdil2[11].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[11].className.indexOf('boxmerah') == -1){
                if (csdil2[11].className.indexOf('boxhijau') == -1){
                    csdil2[11].className += 'boxmerah';
                } else {
                    csdil2[11].className = csdil2[11].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==12){
            if(csdil2[12].value.length==1){
            
                if(csdil2[12].value==1){
                //box warna
                if (csdil2[12].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[12].className += 'boxhijau';
                    } else {
                        csdil2[12].className = csdil2[12].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[12].className.indexOf('boxmerah') == -1){
                if (csdil2[12].className.indexOf('boxhijau') == -1){
                    csdil2[12].className += 'boxmerah';
                } else {
                    csdil2[12].className = csdil2[12].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==13){
            if(csdil2[13].value.length==1){
            
                if(csdil2[13].value==2){
                //box warna
                if (csdil2[13].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[13].className += 'boxhijau';
                    } else {
                        csdil2[13].className = csdil2[13].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[13].className.indexOf('boxmerah') == -1){
                if (csdil2[13].className.indexOf('boxhijau') == -1){
                    csdil2[13].className += 'boxmerah';
                } else {
                    csdil2[13].className = csdil2[13].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==14){
            if(csdil2[14].value.length==1){
            
                if(csdil2[14].value==1){
                //box warna
                if (csdil2[14].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[14].className += 'boxhijau';
                    } else {
                        csdil2[14].className = csdil2[14].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[14].className.indexOf('boxmerah') == -1){
                if (csdil2[14].className.indexOf('boxhijau') == -1){
                    csdil2[14].className += 'boxmerah';
                } else {
                    csdil2[14].className = csdil2[14].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==15){
            if(csdil2[15].value.length==1){
            
                if(csdil2[15].value==1){
                //box warna
                if (csdil2[15].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[15].className += 'boxhijau';
                    } else {
                        csdil2[15].className = csdil2[15].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[15].className.indexOf('boxmerah') == -1){
                if (csdil2[15].className.indexOf('boxhijau') == -1){
                    csdil2[15].className += 'boxmerah';
                } else {
                    csdil2[15].className = csdil2[15].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==16){
            if(csdil2[16].value.length==1){
            
                if(csdil2[16].value==1){
                //box warna
                if (csdil2[16].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[16].className += 'boxhijau';
                    } else {
                        csdil2[16].className = csdil2[16].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[16].className.indexOf('boxmerah') == -1){
                if (csdil2[16].className.indexOf('boxhijau') == -1){
                    csdil2[16].className += 'boxmerah';
                } else {
                    csdil2[16].className = csdil2[16].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==17){
            if(csdil2[17].value.length==1){
            
                if(csdil2[17].value==2){
                //box warna
                if (csdil2[17].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[17].className += 'boxhijau';
                    } else {
                        csdil2[17].className = csdil2[17].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[17].className.indexOf('boxmerah') == -1){
                if (csdil2[17].className.indexOf('boxhijau') == -1){
                    csdil2[17].className += 'boxmerah';
                } else {
                    csdil2[17].className = csdil2[17].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==18){
            if(csdil2[18].value.length==2){
            
                if(csdil2[18].value==-4){
                //box warna
                if (csdil2[18].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[18].className += 'boxhijau';
                    } else {
                        csdil2[18].className = csdil2[18].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[18].className.indexOf('boxmerah') == -1){
                if (csdil2[18].className.indexOf('boxhijau') == -1){
                    csdil2[18].className += 'boxmerah';
                } else {
                    csdil2[18].className = csdil2[18].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==19){
            if(csdil2[19].value.length==1){
            
                if(csdil2[19].value==1){
                //box warna
                if (csdil2[19].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[19].className += 'boxhijau';
                    } else {
                        csdil2[19].className = csdil2[19].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[19].className.indexOf('boxmerah') == -1){
                if (csdil2[19].className.indexOf('boxhijau') == -1){
                    csdil2[19].className += 'boxmerah';
                } else {
                    csdil2[19].className = csdil2[19].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==20){
            if(csdil2[20].value.length==4){
            
                if(csdil2[20].value=="1,-9"){
                //box warna
                if (csdil2[20].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[20].className += 'boxhijau';
                    } else {
                        csdil2[20].className = csdil2[20].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[20].className.indexOf('boxmerah') == -1){
                if (csdil2[20].className.indexOf('boxhijau') == -1){
                    csdil2[20].className += 'boxmerah';
                } else {
                    csdil2[20].className = csdil2[20].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==21){
            if(csdil2[21].value.length==1){
            
                if(csdil2[21].value==1){
                //box warna
                if (csdil2[21].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[21].className += 'boxhijau';
                    } else {
                        csdil2[21].className = csdil2[21].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[21].className.indexOf('boxmerah') == -1){
                if (csdil2[21].className.indexOf('boxhijau') == -1){
                    csdil2[21].className += 'boxmerah';
                } else {
                    csdil2[21].className = csdil2[21].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==22){
            if(csdil2[22].value.length==1){
            
                if(csdil2[22].value==2){
                //box warna
                if (csdil2[22].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[22].className += 'boxhijau';
                    } else {
                        csdil2[22].className = csdil2[22].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[22].className.indexOf('boxmerah') == -1){
                if (csdil2[22].className.indexOf('boxhijau') == -1){
                    csdil2[22].className += 'boxmerah';
                } else {
                    csdil2[22].className = csdil2[22].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==23){
            if(csdil2[23].value.length==1){
            
                if(csdil2[23].value==2){
                //box warna
                if (csdil2[23].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[23].className += 'boxhijau';
                    } else {
                        csdil2[23].className = csdil2[23].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[23].className.indexOf('boxmerah') == -1){
                if (csdil2[23].className.indexOf('boxhijau') == -1){
                    csdil2[23].className += 'boxmerah';
                } else {
                    csdil2[23].className = csdil2[23].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==24){
            if(csdil2[24].value.length==1){
            
                if(csdil2[24].value==1){
                //box warna
                if (csdil2[24].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[24].className += 'boxhijau';
                    } else {
                        csdil2[24].className = csdil2[24].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[24].className.indexOf('boxmerah') == -1){
                if (csdil2[24].className.indexOf('boxhijau') == -1){
                    csdil2[24].className += 'boxmerah';
                } else {
                    csdil2[24].className = csdil2[24].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==25){
            if(csdil2[25].value.length==1){
            
                if(csdil2[25].value==1){
                //box warna
                if (csdil2[25].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[25].className += 'boxhijau';
                    } else {
                        csdil2[25].className = csdil2[25].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[25].className.indexOf('boxmerah') == -1){
                if (csdil2[25].className.indexOf('boxhijau') == -1){
                    csdil2[25].className += 'boxmerah';
                } else {
                    csdil2[25].className = csdil2[25].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==26){
            if(csdil2[26].value.length==1){
            
                if(csdil2[26].value==2){
                //box warna
                if (csdil2[26].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[26].className += 'boxhijau';
                    } else {
                        csdil2[26].className = csdil2[26].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[26].className.indexOf('boxmerah') == -1){
                if (csdil2[26].className.indexOf('boxhijau') == -1){
                    csdil2[26].className += 'boxmerah';
                } else {
                    csdil2[26].className = csdil2[26].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==27){
            if(csdil2[27].value.length==1){
            
                if(csdil2[27].value==1){
                //box warna
                if (csdil2[27].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[27].className += 'boxhijau';
                    } else {
                        csdil2[27].className = csdil2[27].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[27].className.indexOf('boxmerah') == -1){
                if (csdil2[27].className.indexOf('boxhijau') == -1){
                    csdil2[27].className += 'boxmerah';
                } else {
                    csdil2[27].className = csdil2[27].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==28){
            if(csdil2[28].value.length==1){
            
                if(csdil2[28].value==1){
                //box warna
                if (csdil2[28].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[28].className += 'boxhijau';
                    } else {
                        csdil2[28].className = csdil2[28].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[28].className.indexOf('boxmerah') == -1){
                if (csdil2[28].className.indexOf('boxhijau') == -1){
                    csdil2[28].className += 'boxmerah';
                } else {
                    csdil2[28].className = csdil2[28].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==29){
            if(csdil2[29].value.length==3){
            
                if(csdil2[29].value=="3,1"){
                //box warna
                if (csdil2[29].className.indexOf('boxhijau') == -1) {
                    if (csdil2[i].className.indexOf('boxmerah') == -1) {
                        csdil2[29].className += 'boxhijau';
                    } else {
                        csdil2[29].className = csdil2[29].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csdil2[29].className.indexOf('boxmerah') == -1){
                if (csdil2[29].className.indexOf('boxhijau') == -1){
                    csdil2[29].className += 'boxmerah';
                } else {
                    csdil2[29].className = csdil2[29].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
    });

}