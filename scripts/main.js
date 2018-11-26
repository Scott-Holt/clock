const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');
const allHands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();

  //seconds
  let currentSecond = now.getSeconds();
  const degreeOfSecond = ((currentSecond / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${degreeOfSecond}deg)`;



  //minutes
  const currentMinute = now.getMinutes();
  const degreeOfMinute = ((currentMinute/60) * 360) + 90;
  minuteHand.style.transform = `rotate(${degreeOfMinute}deg)`;


  //hours
  const currentHour = now.getHours();
  const degreeOfHour = ((currentHour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${degreeOfHour}deg)`;

  const hands = document.querySelectorAll('.hand');
  if (currentSecond === 0) {
    hands.forEach(hand => hand.style.transitionDuration = '0s');
  } else {
    hands.forEach(hand => hand.style.transitionDuration = '0.05s');
   }﻿
}

setInterval(setDate, 1000);

 // for(i=0; i<allHands.length;i++){
 //   //if any of the hand gets to 60, add 1;
 //   if(allHands )
 // }




















// ---------------------------------------------------------------------

//rotate second hand every second to its appropriate second on Clock
//beacuse it orignially starts at 90 deg from its origin, 96 degrees is one sec.
//

//BELOW IS MY ATTEMPT AT IT
// const currentNumber = currentSecond * 6;
// secondHand.style.transform = 'rotate(currentNumber + deg)';
