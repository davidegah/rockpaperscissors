function game(user,pc){
    if(user=="rock"){
        if(pc=="rock"){
            console.log("Draw!");
        }
        if(pc=="paper"){
            console.log("You lose!")
        }
        if(pc=="scissors"){
            console.log("You win!")
        }
    }
    else if(user=="paper"){
        
        if(pc=="rock"){
            console.log("You win!");
        }
        if(pc=="paper"){
            console.log("Draw!")
        }
        if(pc=="scissors"){
            console.log("You lose!")
        }
    }
    else{
        if(pc=="rock"){
            console.log("You lose!");
        }
        if(pc=="paper"){
            console.log("You win!")
        }
        if(pc=="scissors"){
            console.log("Draw!")
        }
    }
}
