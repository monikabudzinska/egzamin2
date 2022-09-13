const x = 1;
let y = 1;
const personName = "John"
const person = {
    name: "John",
    age: 38,
    outfit: {
        hat: "Chanel",
        shirt: "Supreme",
        boots: "Nike"

    }
}
//console.log (parson.name)
//console.log (person.outfit)
// TABLICA
const people = ['John','Joanna','Josh']
//console.log{people[0]}

//Funkcja
//definicja funkcji (co ma się dziać)
function przyklad( argument){
    console.log ("siemka")
    console.log("wykonuje sie z:", argument)
    console.log("nara")
    return 'zwracam wartosc z' + argument
}
//wywołanie funcji
//przyklad("argumentem")
//przyklad()
//const zwrot = przykład('arg')
//console.log(zwrot)
const dog = {
    voice: () => {
      console.log(' hał hał ')
    }
  }
  
  // dog.voice()
  
  
  // console.log( document )
  
  
  
  const h1 = document.querySelector('h1')
  // console.log(h1)
  h1.innerHTML = "TEST"
  
  
  let count = 0;
  function counter(){
    count++;
    console.log(count)
  }
  
  // przypisanie wydarzenia do kliknięcia na h1
  h1.onclick = function(){
    counter()
  }
  
  
  // WARUNEK
  let a = 500;
  
  if(a < 2){
    console.log("a jest mniejsze od 2")
  }else{
    console.log("a nie jest mniejsze od 2")
  }
