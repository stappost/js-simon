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
console.log(num_random())


// permettere di visualizzare i numeri a schermo;

// dopo 30 secondi far scomparire i numeri;

// dopo 32 secondi richiedere all'utente, con 5 promp, i numeri visualizzati;

// inizializzare variabile dei numeri indovinati;

// inizializzare array right;

// ? il numero inserito è presente nell'array
//  incrementare variabile indovinati;
//  aggiungere il numero all'interno dell'array right;

// stampare variabile numeri indovinate;

//  stampare array right;
  