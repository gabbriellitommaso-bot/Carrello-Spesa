let somma = 0;


function AggiungiProdotto(){
    let num;
    let IntNum;
    do{
        num = prompt("inserire prezzo");
    }while(num == "" || num < 0);

    IntNum = parseFloat(num);
    if(IntNum != null && isNaN(IntNum) == false){
        somma = somma + IntNum;
        console.log("Spesa totale: " + somma)
    }

}

function Mostra(){
    let paragrafo;
    
    paragrafo=document.getElementById("qui"); 
    paragrafo.innerHTML="totale: "+somma;
    
}