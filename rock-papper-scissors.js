 let score = JSON.parse(localStorage.getItem('score')); 

    if (score === null) {
      score = {
        wins:0,
        losses:0,
        ties:0
      };
    }

    updateScoreElement();

      function playGame (playerMove) {
       const computerMove = pickcomputerMove();

       let result ='';

       if (playerMove === 'scissors') {
         if (computerMove ==='rock') {
         result='You lose.';
         } else if (computerMove === 'papper'){
         result = 'you win.';
         }else if (computerMove==='scissor'){
         result ='Tie.';
         }

      }else if (playerMove === 'papper') {
        if (computerMove ==='rock') {
        result='You win.';
        } else if (computerMove === 'papper'){
        result = 'Tie.';
        }else if (computerMove==='scissor'){
        result ='you lose';
        }
        
      }else if (playerMove === 'rock') {
        if (computerMove ==='rock') {
        result='Tie.';
        } else if (computerMove === 'papper'){
        result = 'you lose.';
        }else if (computerMove==='scissor'){
        result ='you win.';
        }
      }

      if (result === 'you win.') {
        score.wins += 1;
      }else if(result === 'you lose.'){
        score.losses += 1;
      }else if (result === 'Tie.') {
        score.ties += 1;
      }

      localStorage.setItem('score',JSON.stringify(score));

      updateScoreElement();
      
      document.querySelector('.js-result').innerHTML =result;

      document.querySelector('.js-moves').innerHTML 
      =`You
      <img src="images/${playerMove}-emoji.png" 
      class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      computer`;
    }

    function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `wins: ${score.wins}, losses: ${score.losses},Ties ${score.ties}`;
    }
   
    function pickcomputerMove() {
      const randomNumber= Math.random();

       let computerMove ='';

      if(randomNumber >=0 && randomNumber < 1/3) {
        computerMove='rock';
      } else if (randomNumber>=1/3 && randomNumber<2/3){
        computerMove='papper';
      } else if (randomNumber>=2/3 && randomNumber<1) {
        computerMove='scissor';
      }

      return computerMove;
    }