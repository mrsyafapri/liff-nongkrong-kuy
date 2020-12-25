var no1 = 0;
function tambah1(){
    document.getElementById("hasil1").innerHTML = ++no1;
}
function kurang1(){
    if(no1 < 1) {
        document.getElementById("hasil1").innerHTML = no1;
    } else {
        document.getElementById("hasil1").innerHTML = --no1;
    }
}

var no2 = 0;
function tambah2(){
    document.getElementById("hasil2").innerHTML = ++no2;
}
function kurang2(){
    if(no2 < 1) {
        document.getElementById("hasil2").innerHTML = no2;
    } else {
        document.getElementById("hasil2").innerHTML = --no2;
    }
}

var no3 = 0;
function tambah3(){
    document.getElementById("hasil3").innerHTML = ++no3;
}
function kurang3(){
    if(no3 < 1) {
        document.getElementById("hasil3").innerHTML = no3;
    } else {
        document.getElementById("hasil3").innerHTML = --no3;
    }
}

var no4 = 0;
function tambah4(){
    document.getElementById("hasil4").innerHTML = ++no4;
}
function kurang4(){
    if(no4 < 1) {
        document.getElementById("hasil4").innerHTML = no4;
    } else {
        document.getElementById("hasil4").innerHTML = --no4;
    }
}

var no5 = 0;
function tambah5(){
    document.getElementById("hasil5").innerHTML = ++no5;
}
function kurang5(){
    if(no5 < 1) {
        document.getElementById("hasil5").innerHTML = no5;
    } else {
        document.getElementById("hasil5").innerHTML = --no5;
    }
}

var no6 = 0;
function tambah6(){
    document.getElementById("hasil6").innerHTML = ++no6;
}
function kurang6(){
    if(no6 < 1) {
        document.getElementById("hasil6").innerHTML = no6;
    } else {
        document.getElementById("hasil6").innerHTML = --no6;
    }
}

document.getElementById("totalPesan").innerHTML = no1 + no2;
