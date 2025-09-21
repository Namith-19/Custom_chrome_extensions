var crd1,crd2,crd3=0;
var c=document.getElementById("c");
var s1=document.getElementById("s1");
var ls=document.getElementById("status");
var lc=document.getElementById("credits");
var crd=[];
var sum;
var cre=0;
var user={};
function draw(){
    crd1,crd2,crd3=0
    crd=[];
    ls.textContent="";
    if(cre>0){
        cre=cre;
    }else{cre=0;}
    lc.textContent="CREDITS: $"+cre;
    crd1=parseInt(Math.floor(Math.random()*13)+1,10)
    crd2=parseInt(Math.floor(Math.random()*13)+1,10);
    if (crd1>10 && crd1<14){
        crd1=10;
    }
    if (crd2>10 && crd2<14){
        crd2=10;
    }
    if (crd1==1){
        crd1=11;
    }
    if (crd2==1){
        crd2=11;
    }
    crd.push(crd1,crd2);
    sum=crd1+crd2;
    c.textContent="Cards are: "+crd;
    s1.textContent="Sum is:  "+sum; 
}
function check(){
    ls.textContent=""
    if(crd.length==3 ||crd.length==0 ){ 
        ls.textContent="TAKE A NEW DRAW";
        ingame=false;
    }else if(crd1+crd2>21){
        ls.textContent="YOU ARE OUT OF THE GAME";
        ingame=false;
        cre=cre;
        lc.textContent="CREDIT: $"+cre;
    }else if(crd1+crd2<21){
        crd3=parseInt( Math.floor(Math.random()*13)+1,10);
        if(crd3==1){
            crd3=11;
        }
        if (crd3>10 && crd3<14){
            crd3=10;    
        }
        crd.push(crd3);
        sum=crd1+crd2+crd3;
        c.textContent="Cards are: "+crd;
        s1.textContent="Sum is: " + sum;
        if (crd1+crd2+crd3==21){
            ls.textContent="JACK POT";
            cre+=10;
            lc.textContent="CREDITS: $"+cre;
        }else {ls.textContent="YOU ARE OUT OF THE GAME";cre=cre; lc.textContent="CREDITS: $"+cre; ingame=false;}
    }else if (crd1+crd2==21){ls.textContent="JACK POT";cre+=10; lc.textContent="CREDITS: $"+cre;}
}
function cls(){
    user[1]=["user",cre]
}

