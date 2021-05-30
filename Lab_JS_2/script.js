function kratne(){

    let x = parseInt(prompt("Напишіть число кратне 5 :",''));

	for(let i = 0; i < x+1 ; i++){

	  if ( i % 5 === 0) {
        alert("Сумма чисел, кратных 5: " + i);
        }
	} 
    if (x === 0){
        alert("Sorry, no numbers")
      } 
}
kratne();