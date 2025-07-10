
let score ={
    wins : 0,
    loses: 0,
    ties : 0
};

//  score =  JSON.parse(localStorage.getItem('score'));

function playGame(playerMove){
  let compMove = pickCompMove();
     let res = '';
if(playerMove === 'rock'){
   
    if(compMove === 'rock'){
        res = 'Tie';
    }else if(compMove === 'paper'){
        res ='you lose';
    }else if(compMove === 'scissors'){
        res = 'you win';
    } 
     
}else if(playerMove === 'paper'){
   
      if(compMove === 'rock'){
        res = 'you win';
    }else if(compMove === 'paper'){
        res ='Tie';
    }else if(compMove === 'scissors'){
        res = 'you lose';
    } 

}else if(playerMove === 'scissors'){
  if(compMove === 'scissors'){
        res = 'Tie';
    }else if(compMove === 'rock'){
        res ='you lose';
    }else if(compMove === 'paper'){
        res = 'you win';
    } 
}
if(res === 'you win'){
score.wins++;
}else if(res === 'you lose'){
    score.loses++;
}
document.querySelector('#user-score').innerHTML = `${score.wins}`;
document.querySelector('#comp-score').innerHTML = `${score.loses}`;

// localStorage.setItem('score',JSON.stringify(score) )

document.querySelector('.youChoose').innerHTML=`You : <img src="/RockPaperScissor project/images/${playerMove}.png"class="moves">
Computer :<img src="/RockPaperScissor project/images/${compMove}.png" class="moves">
result : ${res}`;
}


function pickCompMove(){
 const randomNumber = Math.random();
    let compMove = '';
    if(randomNumber >= 0 && randomNumber < 0.3){
       compMove ='rock';
    }else if(randomNumber >= 0.3 && randomNumber < 0.6){
        compMove ='paper';
    
    } else if(randomNumber >= 0.6 && randomNumber < 1){
        compMove ='scissors'
        ;
    }
   return compMove;
}