"use strict";

{
  let today =new Date();
  let week =[];

  for (let i = 0; i<7; i++){
    let days = new Date(today);
    days.setDate(today.getDate() + i);
    week.push(days);
  }

  let weekss =document.getElementById("Week");
  for (let n=0; n<week.lenght; n++){
    let dayItem =document.createElement("td");
    dayItem.textContent = week[n].toDateString();
    weeksItem.appendChild(dayItem);
  }
}