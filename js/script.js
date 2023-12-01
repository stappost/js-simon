// creare funzione che genera 5 numeri casuali;
//  inserire 5 numeri unici in un array;
function num_random(){
    let num_array = [];
    while(num_array.length<5){
        let num = Math.floor(Math.random() *100 +1);
        if(!num_array.includes(num)){
            num_array.push(num)
        }
    }
    return num_array
}



// permettere di visualizzare i numeri a schermo;
function list(num){

    let ul = document.getElementById("list_number");
    let li = document.createElement("li");
    li.innerText = num
    ul.appendChild(li)
}

let num = num_random();

for(let i = 0; i<5; i++){
    list(num[i])
}
// dopo 30 secondi far scomparire i numeri;

setTimeout(function(){
    document.getElementById("list_number").classList.add("d-none")
}, 3000)
// dopo 32 secondi richiedere all'utente, con 5 promp, i numeri visualizzati;
setTimeout(function(){
    // inizializzare variabile dei numeri indovinati;
    let guessed = 0;
    // inizializzare array right;
    let right = [];
    let number;
    for(let i = 0 ; i < 5 ; i++){
        number = parseInt(prompt("inserire un numero tra i visualizzati"));
        // ? il numero inserito è presente nell'array
        //  incrementare variabile indovinati;
        //  aggiungere il numero all'interno dell'array right;
        if(num.includes(number)){
            right.push(number);
            guessed++;
        }
    } 
    // stampare variabile numeri indovinate;
    //  stampare array right;
    console.log(guessed);
    console.log(`hai indovinato i seguenti numeri: ${right}`);
}, 3200)




  