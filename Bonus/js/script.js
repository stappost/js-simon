// creare funzione che genera 5 numeri casuali;
//  inserire 5 numeri unici in un array;
function num_random(quantity){
    let num_array = [];
    while(num_array.length<quantity){
        let num = Math.floor(Math.random() *100 +1);
        if(!num_array.includes(num)){
            num_array.push(num)
        }
    }
    return num_array
}



// permettere di visualizzare i numeri a schermo;
function list(num, ul_id){

    let ul = document.getElementById(ul_id);
    let li = document.createElement("li");
    li.innerText = num;
    ul.appendChild(li);
}

// FUNZIONE PRIMCIPALE CHE IMMETTE LA LISTA, CONTROLLA E DA FEEDBACK FINALE 
function num_to_memorize(timer, quantity){
   
    let num = num_random(quantity)

    for(let i = 0; i< quantity; i++){
        list(num[i], "list_number")
    }
    // dopo 30 secondi far scomparire i numeri;
    setTimeout(function(){
        document.getElementById("list_number").classList.add("d-none")
    }, timer)
    // dopo 32 secondi richiedere all'utente, con 5 promp, i numeri visualizzati;
    setTimeout(function(){
        if(timer == 600){
            alert("io lo avevo detto che era impossibile");
        }
        // inizializzare variabile dei numeri indovinati;
        let guessed = 0;
        // inizializzare array right;
        let user_number = [];
        let right = [];
        let number;
       while(user_number.length < quantity){
            number = parseInt(prompt("inserire un numero tra i visualizzati"));
            if(number<=0||number>0){
                user_number.push(number);
            }
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
        console.log (num_random(quantity));
        document.getElementById("text_reset").classList.remove("d-none")
        let congrat = document.getElementById("congrat");
        congrat.innerText = `COMPLIMENTI hai indovinato ${guessed} numeri. 
        Hai indovinato i seguenti numeri:`;
        console.log(`hai indovinato i seguenti numeri: ${right}`);
        for(let i = 0 ; i<right.length ; i++){
            list(right[i], "number_guessed")
        }

    }, timer+1000)
    return quantity
}

// FUNZIONE CHE CAMBIA IL TEMPO IN BASE AL LIVELLO 
function select_level(){
    let level = document.getElementById("difficulty").value;
    let time;
    switch(level){
        case "1":
            quantity = 5;
            time = 30000;
            break;
        case "2":
            quantity = 10;
            time = 20000;
            break;
        case "3":
            quantity = 15;
            time = 10000;
            break;
        case "4":
            quantity = 10;
            time = 600;
            break;
        default:
            prompt = " selezionare il livello di difficoltà"
            return;    
    }
    console.log(time)
    num_to_memorize(time, quantity)
}


const btn_play = document.getElementById("play")

btn_play.addEventListener("click", function(){

    document.getElementById("list_number").innerHTML = " "
    document.querySelector("#text_reset > ul").innerHTML = " "
    document.getElementById("list_number").classList.remove("d-none")
    document.getElementById("text_reset").classList.add("d-none")

    
    select_level();
})




  