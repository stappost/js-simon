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
function list(num){

    let ul = document.getElementById("list_number");
    let li = document.createElement("li");
    li.innerText = num;
    ul.appendChild(li);
}

function num_to_memorize(){
    let level = document.getElementById("difficulty").value;
    let quantity
    switch(level){
        case "1":
            quantity = 5;
            break;
        case "2":
            quantity = 10;
            break;
        case "3":
            quantity = 15;
            break;
        default:
            return;    
    }
    let num = num_random(quantity)
    for(let i = 0; i< quantity; i++){
        list(num[i])
    }
    setTimeout(function(){
        document.getElementById("list_number").classList.add("d-none")
    }, 3000)
    // dopo 32 secondi richiedere all'utente, con 5 promp, i numeri visualizzati;
    setTimeout(function(){
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
        console.log(guessed);
        console.log(`hai indovinato i seguenti numeri: ${right}`);
    }, 3200)
    return quantity
}


const btn_play = document.getElementById("play")

btn_play.addEventListener("click", function(){
    let quantity = num_to_memorize();
    
    // dopo 30 secondi far scomparire i numeri;

 
})




  