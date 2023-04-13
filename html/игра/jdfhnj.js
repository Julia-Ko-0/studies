cardsArray = [1,2,3,4,5]

let gameGrid = cardsArray.concat(cardsArray).sort(function () {
    return  Math.random()-0.5 ;
  });
  
  console.log(gameGrid)