"use strict";

{
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() +1;
  const day = time.getDate();
  const week = time.getDay();
  const youbi = ["日","月","火","水","木","金","土"]
  document.getElementById("jikan").textContent=year + "年" + month + "月" + day +"日" + "[" + youbi[week] + "]";
  
  // time.setDate(time.getDate() + 1);
  // time.setDate(time.getDate() + 2);
  // time.setDate(time.getDate() + 3);
  // time.setDate(time.getDate() + 4);
  // time.setDate(time.getDate() + 5);
  // time.setDate(time.getDate() + 6);

  document.getElementById("1niti").textContent=month + "/" + time.getDate();
  document.getElementById("2niti").textContent=month + "/" + time.setDate(1);
  document.getElementById("3niti").textContent=month + "/" + time.setDate(time.getDate() + 2);
  document.getElementById("4niti").textContent=month + "/" + day3;
  document.getElementById("5niti").textContent=month + "/" + day4;
  document.getElementById("6niti").textContent=month + "/" + day5;
  document.getElementById("7niti").textContent=month + "/" + day6;
  

  
  
  
}