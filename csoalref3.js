let csref3 = document.querySelectorAll('.csref3');
let ikon = document.querySelectorAll('.ikon');

console.log(csref3)

for (let i=0; i<csref3.length; i++){

    //function agar saat di enter tidak dijalankan
    csref3[i].addEventListener('keypress', function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    csref3[i].addEventListener('keyup', function() {
        
        if (csref3[i].value.length == 0){
        if(csref3[i].className.indexOf('boxhijau') == -1){
            csref3[i].className = csref3[i].className.replace('boxmerah',"");
        }
        if (csref3[i].className.indexOf('boxmerah') == -1){
            csref3[i].className = csref3[i].className.replace('boxhijau',"");
        }
        }

        if (i==0){
            if(csref3[0].value.length==2){
            
                if(csref3[0].value==-2){
                //box warna
                if (csref3[0].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[0].className += 'boxhijau';
                    } else {
                        csref3[0].className = csref3[0].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[0].className.indexOf('boxmerah') == -1){
                if (csref3[0].className.indexOf('boxhijau') == -1){
                    csref3[0].className += 'boxmerah';
                } else {
                    csref3[0].className = csref3[0].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        csref3[i].addEventListener("keyup",function(){
            csref3[i].value = csref3[i].value.split(' ').join('');
        })
        if (i==1){
            if(csref3[1].value.length==1){
            
                if(csref3[1].value==4){
                //box warna
                if (csref3[1].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[1].className += 'boxhijau';
                    } else {
                        csref3[1].className = csref3[1].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[1].className.indexOf('boxmerah') == -1){
                if (csref3[1].className.indexOf('boxhijau') == -1){
                    csref3[1].className += 'boxmerah';
                } else {
                    csref3[1].className = csref3[1].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==2){
            if(csref3[2].value.length==1){
            
                if(csref3[2].value==0){
                //box warna
                if (csref3[2].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[2].className += 'boxhijau';
                    } else {
                        csref3[2].className = csref3[2].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[2].className.indexOf('boxmerah') == -1){
                if (csref3[2].className.indexOf('boxhijau') == -1){
                    csref3[2].className += 'boxmerah';
                } else {
                    csref3[2].className = csref3[2].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==3){
            if(csref3[3].value.length==4){
            
                if(csref3[3].value=="-8,0"){
                //box warna
                if (csref3[3].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[3].className += 'boxhijau';
                    } else {
                        csref3[3].className = csref3[3].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[3].className.indexOf('boxmerah') == -1){
                if (csref3[3].className.indexOf('boxhijau') == -1){
                    csref3[3].className += 'boxmerah';
                } else {
                    csref3[3].className = csref3[3].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==4){
            if(csref3[4].value.length==2){
            
                if(csref3[4].value==-2){
                //box warna
                if (csref3[4].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[4].className += 'boxhijau';
                    } else {
                        csref3[4].className = csref3[4].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[4].className.indexOf('boxmerah') == -1){
                if (csref3[4].className.indexOf('boxhijau') == -1){
                    csref3[4].className += 'boxmerah';
                } else {
                    csref3[4].className = csref3[4].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==5){
            if(csref3[5].value.length==1){
            
                if(csref3[5].value==6){
                //box warna
                if (csref3[5].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[5].className += 'boxhijau';
                    } else {
                        csref3[5].className = csref3[5].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[5].className.indexOf('boxmerah') == -1){
                if (csref3[5].className.indexOf('boxhijau') == -1){
                    csref3[5].className += 'boxmerah';
                } else {
                    csref3[5].className = csref3[5].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==6){
            if(csref3[6].value.length==1){
            
                if(csref3[6].value==3){
                //box warna
                if (csref3[6].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[6].className += 'boxhijau';
                    } else {
                        csref3[6].className = csref3[6].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[6].className.indexOf('boxmerah') == -1){
                if (csref3[6].className.indexOf('boxhijau') == -1){
                    csref3[6].className += 'boxmerah';
                } else {
                    csref3[6].className = csref3[6].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==7){
            if(csref3[7].value.length==5){
            
                if(csref3[7].value=="-10,3"){
                //box warna
                if (csref3[7].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[7].className += 'boxhijau';
                    } else {
                        csref3[7].className = csref3[7].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[7].className.indexOf('boxmerah') == -1){
                if (csref3[7].className.indexOf('boxhijau') == -1){
                    csref3[7].className += 'boxmerah';
                } else {
                    csref3[7].className = csref3[7].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==8){
            if(csref3[8].value.length==2){
            
                if(csref3[8].value==-2){
                //box warna
                if (csref3[8].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[8].className += 'boxhijau';
                    } else {
                        csref3[8].className = csref3[8].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[8].className.indexOf('boxmerah') == -1){
                if (csref3[8].className.indexOf('boxhijau') == -1){
                    csref3[8].className += 'boxmerah';
                } else {
                    csref3[8].className = csref3[8].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==9){
            if(csref3[9].value.length==1){
            
                if(csref3[9].value==1){
                //box warna
                if (csref3[9].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[9].className += 'boxhijau';
                    } else {
                        csref3[9].className = csref3[9].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[9].className.indexOf('boxmerah') == -1){
                if (csref3[9].className.indexOf('boxhijau') == -1){
                    csref3[9].className += 'boxmerah';
                } else {
                    csref3[9].className = csref3[9].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==10){
            if(csref3[10].value.length==1){
            
                if(csref3[10].value==4){
                //box warna
                if (csref3[10].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[10].className += 'boxhijau';
                    } else {
                        csref3[10].className = csref3[10].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[10].className.indexOf('boxmerah') == -1){
                if (csref3[10].className.indexOf('boxhijau') == -1){
                    csref3[10].className += 'boxmerah';
                } else {
                    csref3[10].className = csref3[10].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==11){
            if(csref3[11].value.length==4){
            
                if(csref3[11].value=="-5,4"){
                //box warna
                if (csref3[11].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[11].className += 'boxhijau';
                    } else {
                        csref3[11].className = csref3[11].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[11].className.indexOf('boxmerah') == -1){
                if (csref3[11].className.indexOf('boxhijau') == -1){
                    csref3[11].className += 'boxmerah';
                } else {
                    csref3[11].className = csref3[11].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==12){
            if(csref3[12].value.length==2){
            
                if(csref3[12].value==-3){
                //box warna
                if (csref3[12].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[12].className += 'boxhijau';
                    } else {
                        csref3[12].className = csref3[12].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[12].className.indexOf('boxmerah') == -1){
                if (csref3[12].className.indexOf('boxhijau') == -1){
                    csref3[12].className += 'boxmerah';
                } else {
                    csref3[12].className = csref3[12].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==13){
            if(csref3[13].value.length==1){
            
                if(csref3[13].value==2){
                //box warna
                if (csref3[13].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[13].className += 'boxhijau';
                    } else {
                        csref3[13].className = csref3[13].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[13].className.indexOf('boxmerah') == -1){
                if (csref3[13].className.indexOf('boxhijau') == -1){
                    csref3[13].className += 'boxmerah';
                } else {
                    csref3[13].className = csref3[13].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==14){
            if(csref3[14].value.length==1){
            
                if(csref3[14].value==1){
                //box warna
                if (csref3[14].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[14].className += 'boxhijau';
                    } else {
                        csref3[14].className = csref3[14].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[14].className.indexOf('boxmerah') == -1){
                if (csref3[14].className.indexOf('boxhijau') == -1){
                    csref3[14].className += 'boxmerah';
                } else {
                    csref3[14].className = csref3[14].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==15){
            if(csref3[15].value.length==4){
            
                if(csref3[15].value=="-3,3"){
                //box warna
                if (csref3[15].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[15].className += 'boxhijau';
                    } else {
                        csref3[15].className = csref3[15].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[15].className.indexOf('boxmerah') == -1){
                if (csref3[15].className.indexOf('boxhijau') == -1){
                    csref3[15].className += 'boxmerah';
                } else {
                    csref3[15].className = csref3[15].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==16){
            if(csref3[16].value.length==1){
            
                if(csref3[16].value==0){
                //box warna
                if (csref3[16].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[16].className += 'boxhijau';
                    } else {
                        csref3[16].className = csref3[16].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[16].className.indexOf('boxmerah') == -1){
                if (csref3[16].className.indexOf('boxhijau') == -1){
                    csref3[16].className += 'boxmerah';
                } else {
                    csref3[16].className = csref3[16].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==17){
            if(csref3[17].value.length==1){
            
                if(csref3[17].value==2){
                //box warna
                if (csref3[17].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[17].className += 'boxhijau';
                    } else {
                        csref3[17].className = csref3[17].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[17].className.indexOf('boxmerah') == -1){
                if (csref3[17].className.indexOf('boxhijau') == -1){
                    csref3[17].className += 'boxmerah';
                } else {
                    csref3[17].className = csref3[17].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==18){
            if(csref3[18].value.length==1){
            
                if(csref3[18].value==1){
                //box warna
                if (csref3[18].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[18].className += 'boxhijau';
                    } else {
                        csref3[18].className = csref3[18].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[18].className.indexOf('boxmerah') == -1){
                if (csref3[18].className.indexOf('boxhijau') == -1){
                    csref3[18].className += 'boxmerah';
                } else {
                    csref3[18].className = csref3[18].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==19){
            if(csref3[19].value.length==3){
            
                if(csref3[19].value=="0,3"){
                //box warna
                if (csref3[19].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[19].className += 'boxhijau';
                    } else {
                        csref3[19].className = csref3[19].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[19].className.indexOf('boxmerah') == -1){
                if (csref3[19].className.indexOf('boxhijau') == -1){
                    csref3[19].className += 'boxmerah';
                } else {
                    csref3[19].className = csref3[19].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==20){
            if(csref3[20].value.length==2){
            
                if(csref3[20].value==-3){
                //box warna
                if (csref3[20].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[20].className += 'boxhijau';
                    } else {
                        csref3[20].className = csref3[20].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[20].className.indexOf('boxmerah') == -1){
                if (csref3[20].className.indexOf('boxhijau') == -1){
                    csref3[20].className += 'boxmerah';
                } else {
                    csref3[20].className = csref3[20].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==21){
            if(csref3[21].value.length==1){
            
                if(csref3[21].value==2){
                //box warna
                if (csref3[21].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[21].className += 'boxhijau';
                    } else {
                        csref3[21].className = csref3[21].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[21].className.indexOf('boxmerah') == -1){
                if (csref3[21].className.indexOf('boxhijau') == -1){
                    csref3[21].className += 'boxmerah';
                } else {
                    csref3[21].className = csref3[21].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==22){
            if(csref3[22].value.length==2){
            
                if(csref3[22].value==-2){
                //box warna
                if (csref3[22].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[22].className += 'boxhijau';
                    } else {
                        csref3[22].className = csref3[22].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[22].className.indexOf('boxmerah') == -1){
                if (csref3[22].className.indexOf('boxhijau') == -1){
                    csref3[22].className += 'boxmerah';
                } else {
                    csref3[22].className = csref3[22].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==23){
            if(csref3[23].value.length==4){
            
                if(csref3[23].value=="-3,6"){
                //box warna
                if (csref3[23].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[23].className += 'boxhijau';
                    } else {
                        csref3[23].className = csref3[23].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[23].className.indexOf('boxmerah') == -1){
                if (csref3[23].className.indexOf('boxhijau') == -1){
                    csref3[23].className += 'boxmerah';
                } else {
                    csref3[23].className = csref3[23].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==24){
            if(csref3[24].value.length==1){
            
                if(csref3[24].value==3){
                //box warna
                if (csref3[24].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[24].className += 'boxhijau';
                    } else {
                        csref3[24].className = csref3[24].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[24].className.indexOf('boxmerah') == -1){
                if (csref3[24].className.indexOf('boxhijau') == -1){
                    csref3[24].className += 'boxmerah';
                } else {
                    csref3[24].className = csref3[24].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==25){
            if(csref3[25].value.length==1){
            
                if(csref3[25].value==2){
                //box warna
                if (csref3[25].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[25].className += 'boxhijau';
                    } else {
                        csref3[25].className = csref3[24].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[25].className.indexOf('boxmerah') == -1){
                if (csref3[25].className.indexOf('boxhijau') == -1){
                    csref3[25].className += 'boxmerah';
                } else {
                    csref3[25].className = csref3[25].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==26){
            if(csref3[26].value.length==2){
            
                if(csref3[26].value==-2){
                //box warna
                if (csref3[26].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[26].className += 'boxhijau';
                    } else {
                        csref3[26].className = csref3[26].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[26].className.indexOf('boxmerah') == -1){
                if (csref3[26].className.indexOf('boxhijau') == -1){
                    csref3[26].className += 'boxmerah';
                } else {
                    csref3[26].className = csref3[26].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==27){
            if(csref3[27].value.length==3){
            
                if(csref3[27].value=="3,6"){
                //box warna
                if (csref3[27].className.indexOf('boxhijau') == -1) {
                    if (csref3[i].className.indexOf('boxmerah') == -1) {
                        csref3[27].className += 'boxhijau';
                    } else {
                        csref3[27].className = csref3[27].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csref3[27].className.indexOf('boxmerah') == -1){
                if (csref3[27].className.indexOf('boxhijau') == -1){
                    csref3[27].className += 'boxmerah';
                } else {
                    csref3[27].className = csref3[27].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
    });

}