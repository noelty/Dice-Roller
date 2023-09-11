// Generate a random number

// let randomNum = Math.floor(Math.random()*6) + 1;
// console.log(randomNum);
// die.src = `die ${randomNum}.svg`;
// console.log(di.src)
document.querySelector("button").addEventListener("click", function(){
    let randomNum = Math.floor(Math.random()*6) + 1;
    console.log(randomNum); 
    let die = document.querySelector("img");
    die.src = `img/die ${randomNum}.svg`;
    console.log(die.src)
});