// grabs start button
let start = document.querySelector('.start');
//sets counter to 0
let jcounter = 0;
let counter = document.querySelector('#counter');
let message = document.querySelector('#message');
//array of all holes
let arrayOfHoles = ['#hole1', '#hole2', '#hole3', '#hole4', '#hole5', '#hole6', '#hole7', '#hole8', '#hole9'];
//randomHole is set to a random index from array
let randomHole = getRandomHole(arrayOfHoles);
//grabs a random hole from the HTML and set it to the hole var
let hole = document.querySelector(randomHole);
let wincondis = 9;
// audio to play when mole is hit
let smack = new Audio('Smack sound effect  (1).mp3');


  // get array item at random index

function getRandomHole(arr) {

    // get random index value
    let randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    let item = arr[randomIndex];

    return item;
}


// starts the game and places a mole in a random location and disables start button

start.addEventListener('click', function(){
    hole.src = 'mole.png';
    start.disabled =true;
})



 // event when you click on mole
hole.addEventListener('click',function whack(){
    // compares counter to win condis if score is 10 ends game and displays message that you won and removes final mole
    if(jcounter > wincondis){
        message.innerHTML = "You Won please press reset and play again ";
        hole.src = 'hole.png';
        
        // if win condis is not met moves the mole to random hole and plays sound when mole is hit
    }else {
        
        //sound has some dead space at the end so it will not play if moles are hit too soon after the previous one idk how to edit mp3s otherwise i would fix
        smack.play()
        //makes current mole disappear
        hole.src = 'hole.png';
        //tried to remove the event listener then add the event listener after a new value for hole is created
        hole.removeEventListener('click', function whack(){});
        //gets new random hole
        randomHole = getRandomHole(arrayOfHoles);
        //sets hole to the new random hole from above
        hole = document.querySelector(randomHole);
        hole.addEventListener('click', function whack(){});
        //makes mole appear in new hole but doesnt change the click point im trying to figure that out
        hole.src = 'mole.png';
        //adds to the counter
        jcounter +=1;
        //replaces the displayed counter with the new counter value
        counter.innerHTML = jcounter;
         
    }
    console.log(hole);
    
    return hole;
    //i was hoping this would return the new hole value to change the click point i tried many variations even adding a newhole varible the setting hole = to newhole then returning hole and i console.loged hole to make sure the hole variable was changing but for some reason it still would not change where i had to click if you could add some kind of solution to the comments on my grade that would be fantastic
    
}) 