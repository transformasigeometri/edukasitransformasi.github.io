let csrot2 = document.querySelectorAll('.csrot2');
let ikon = document.querySelectorAll('.ikon');

console.log(csrot2)

for (let i=0; i<csrot2.length; i++){

    //function agar saat di enter tidak dijalankan
    csrot2[i].addEventListener('keypress', function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    csrot2[i].addEventListener('keyup', function() {
        
        if (csrot2[i].value.length == 0){
        if(csrot2[i].className.indexOf('boxhijau') == -1){
            csrot2[i].className = csrot2[i].className.replace('boxmerah',"");
        }
        if (csrot2[i].className.indexOf('boxmerah') == -1){
            csrot2[i].className = csrot2[i].className.replace('boxhijau',"");
        }
        }

        if (i==0){
            if(csrot2[0].value.length==2){
            
                if(csrot2[0].value==-3){
                //box warna
                if (csrot2[0].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[0].className += 'boxhijau';
                    } else {
                        csrot2[0].className = csrot2[0].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[0].className.indexOf('boxmerah') == -1){
                if (csrot2[0].className.indexOf('boxhijau') == -1){
                    csrot2[0].className += 'boxmerah';
                } else {
                    csrot2[0].className = csrot2[0].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        csrot2[i].addEventListener("keyup",function(){
            csrot2[i].value = csrot2[i].value.split(' ').join('');
        })
        if (i==1){
            if(csrot2[1].value.length==1){
            
                if(csrot2[1].value==2){
                //box warna
                if (csrot2[1].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[1].className += 'boxhijau';
                    } else {
                        csrot2[1].className = csrot2[1].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[1].className.indexOf('boxmerah') == -1){
                if (csrot2[1].className.indexOf('boxhijau') == -1){
                    csrot2[1].className += 'boxmerah';
                } else {
                    csrot2[1].className = csrot2[1].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==2){
            if(csrot2[2].value.length==1){
            
                if(csrot2[2].value==2){
                //box warna
                if (csrot2[2].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[2].className += 'boxhijau';
                    } else {
                        csrot2[2].className = csrot2[2].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[2].className.indexOf('boxmerah') == -1){
                if (csrot2[2].className.indexOf('boxhijau') == -1){
                    csrot2[2].className += 'boxmerah';
                } else {
                    csrot2[2].className = csrot2[2].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==3){
            if(csrot2[3].value.length==1){
            
                if(csrot2[3].value==1){
                //box warna
                if (csrot2[3].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[3].className += 'boxhijau';
                    } else {
                        csrot2[3].className = csrot2[3].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[3].className.indexOf('boxmerah') == -1){
                if (csrot2[3].className.indexOf('boxhijau') == -1){
                    csrot2[3].className += 'boxmerah';
                } else {
                    csrot2[3].className = csrot2[3].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==4){
            if(csrot2[4].value.length==1){
            
                if(csrot2[4].value==2){
                //box warna
                if (csrot2[4].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[4].className += 'boxhijau';
                    } else {
                        csrot2[4].className = csrot2[4].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[4].className.indexOf('boxmerah') == -1){
                if (csrot2[4].className.indexOf('boxhijau') == -1){
                    csrot2[4].className += 'boxmerah';
                } else {
                    csrot2[4].className = csrot2[4].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==5){
            if(csrot2[5].value.length==1){
            
                if(csrot2[5].value==2){
                //box warna
                if (csrot2[5].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[5].className += 'boxhijau';
                    } else {
                        csrot2[5].className = csrot2[5].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[5].className.indexOf('boxmerah') == -1){
                if (csrot2[5].className.indexOf('boxhijau') == -1){
                    csrot2[5].className += 'boxmerah';
                } else {
                    csrot2[5].className = csrot2[5].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==6){
            if(csrot2[6].value.length==1){
            
                if(csrot2[6].value==1){
                //box warna
                if (csrot2[6].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[6].className += 'boxhijau';
                    } else {
                        csrot2[6].className = csrot2[6].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[6].className.indexOf('boxmerah') == -1){
                if (csrot2[6].className.indexOf('boxhijau') == -1){
                    csrot2[6].className += 'boxmerah';
                } else {
                    csrot2[6].className = csrot2[6].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==7){
            if(csrot2[7].value.length==1){
            
                if(csrot2[7].value==1){
                //box warna
                if (csrot2[7].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[7].className += 'boxhijau';
                    } else {
                        csrot2[7].className = csrot2[7].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[7].className.indexOf('boxmerah') == -1){
                if (csrot2[7].className.indexOf('boxhijau') == -1){
                    csrot2[7].className += 'boxmerah';
                } else {
                    csrot2[7].className = csrot2[7].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==8){
            if(csrot2[8].value.length==2){
            
                if(csrot2[8].value==-3){
                //box warna
                if (csrot2[8].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[8].className += 'boxhijau';
                    } else {
                        csrot2[8].className = csrot2[8].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[8].className.indexOf('boxmerah') == -1){
                if (csrot2[8].className.indexOf('boxhijau') == -1){
                    csrot2[8].className += 'boxmerah';
                } else {
                    csrot2[8].className = csrot2[8].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==9){
            if(csrot2[9].value.length==1){
            
                if(csrot2[9].value==2){
                //box warna
                if (csrot2[9].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[9].className += 'boxhijau';
                    } else {
                        csrot2[9].className = csrot2[9].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[9].className.indexOf('boxmerah') == -1){
                if (csrot2[9].className.indexOf('boxhijau') == -1){
                    csrot2[9].className += 'boxmerah';
                } else {
                    csrot2[9].className = csrot2[9].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==10){
            if(csrot2[10].value.length==4){
            
                if(csrot2[10].value=="1,-4"){
                //box warna
                if (csrot2[10].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[10].className += 'boxhijau';
                    } else {
                        csrot2[10].className = csrot2[10].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[10].className.indexOf('boxmerah') == -1){
                if (csrot2[10].className.indexOf('boxhijau') == -1){
                    csrot2[10].className += 'boxmerah';
                } else {
                    csrot2[10].className = csrot2[10].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==11){
            if(csrot2[11].value.length==2){
            
                if(csrot2[11].value==-3){
                //box warna
                if (csrot2[11].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[11].className += 'boxhijau';
                    } else {
                        csrot2[11].className = csrot2[11].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[11].className.indexOf('boxmerah') == -1){
                if (csrot2[11].className.indexOf('boxhijau') == -1){
                    csrot2[11].className += 'boxmerah';
                } else {
                    csrot2[11].className = csrot2[11].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==12){
            if(csrot2[12].value.length==1){
            
                if(csrot2[12].value==2){
                //box warna
                if (csrot2[12].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[12].className += 'boxhijau';
                    } else {
                        csrot2[12].className = csrot2[12].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[12].className.indexOf('boxmerah') == -1){
                if (csrot2[12].className.indexOf('boxhijau') == -1){
                    csrot2[12].className += 'boxmerah';
                } else {
                    csrot2[12].className = csrot2[12].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==13){
            if(csrot2[13].value.length==1){
            
                if(csrot2[13].value==2){
                //box warna
                if (csrot2[13].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[13].className += 'boxhijau';
                    } else {
                        csrot2[13].className = csrot2[13].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[13].className.indexOf('boxmerah') == -1){
                if (csrot2[13].className.indexOf('boxhijau') == -1){
                    csrot2[13].className += 'boxmerah';
                } else {
                    csrot2[13].className = csrot2[13].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==14){
            if(csrot2[14].value.length==1){
            
                if(csrot2[14].value==1){
                //box warna
                if (csrot2[14].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[14].className += 'boxhijau';
                    } else {
                        csrot2[14].className = csrot2[14].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[14].className.indexOf('boxmerah') == -1){
                if (csrot2[14].className.indexOf('boxhijau') == -1){
                    csrot2[14].className += 'boxmerah';
                } else {
                    csrot2[14].className = csrot2[14].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==15){
            if(csrot2[15].value.length==1){
            
                if(csrot2[15].value==2){
                //box warna
                if (csrot2[15].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[15].className += 'boxhijau';
                    } else {
                        csrot2[15].className = csrot2[15].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[15].className.indexOf('boxmerah') == -1){
                if (csrot2[15].className.indexOf('boxhijau') == -1){
                    csrot2[15].className += 'boxmerah';
                } else {
                    csrot2[15].className = csrot2[15].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==16){
            if(csrot2[16].value.length==1){
            
                if(csrot2[16].value==2){
                //box warna
                if (csrot2[16].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[16].className += 'boxhijau';
                    } else {
                        csrot2[16].className = csrot2[16].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[16].className.indexOf('boxmerah') == -1){
                if (csrot2[16].className.indexOf('boxhijau') == -1){
                    csrot2[16].className += 'boxmerah';
                } else {
                    csrot2[16].className = csrot2[16].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==17){
            if(csrot2[17].value.length==1){
            
                if(csrot2[17].value==1){
                //box warna
                if (csrot2[17].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[17].className += 'boxhijau';
                    } else {
                        csrot2[17].className = csrot2[17].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[17].className.indexOf('boxmerah') == -1){
                if (csrot2[17].className.indexOf('boxhijau') == -1){
                    csrot2[17].className += 'boxmerah';
                } else {
                    csrot2[17].className = csrot2[17].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==18){
            if(csrot2[18].value.length==1){
            
                if(csrot2[18].value==1){
                //box warna
                if (csrot2[18].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[18].className += 'boxhijau';
                    } else {
                        csrot2[18].className = csrot2[18].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[18].className.indexOf('boxmerah') == -1){
                if (csrot2[18].className.indexOf('boxhijau') == -1){
                    csrot2[18].className += 'boxmerah';
                } else {
                    csrot2[18].className = csrot2[18].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==19){
            if(csrot2[19].value.length==2){
            
                if(csrot2[19].value==-3){
                //box warna
                if (csrot2[19].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[19].className += 'boxhijau';
                    } else {
                        csrot2[19].className = csrot2[19].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[19].className.indexOf('boxmerah') == -1){
                if (csrot2[19].className.indexOf('boxhijau') == -1){
                    csrot2[19].className += 'boxmerah';
                } else {
                    csrot2[19].className = csrot2[19].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==20){
            if(csrot2[20].value.length==1){
            
                if(csrot2[20].value==2){
                //box warna
                if (csrot2[20].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[20].className += 'boxhijau';
                    } else {
                        csrot2[20].className = csrot2[20].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[20].className.indexOf('boxmerah') == -1){
                if (csrot2[20].className.indexOf('boxhijau') == -1){
                    csrot2[20].className += 'boxmerah';
                } else {
                    csrot2[20].className = csrot2[20].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==21){
            if(csrot2[21].value.length==3){
            
                if(csrot2[21].value=="3,6"){
                //box warna
                if (csrot2[21].className.indexOf('boxhijau') == -1) {
                    if (csrot2[i].className.indexOf('boxmerah') == -1) {
                        csrot2[21].className += 'boxhijau';
                    } else {
                        csrot2[21].className = csrot2[21].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (csrot2[21].className.indexOf('boxmerah') == -1){
                if (csrot2[21].className.indexOf('boxhijau') == -1){
                    csrot2[21].className += 'boxmerah';
                } else {
                    csrot2[21].className = csrot2[21].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
    });

}