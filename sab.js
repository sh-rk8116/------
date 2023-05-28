"use strict";

{
  
    //商品一覧
    const Items = [
     "item1",
     "item2",
     "item3",
     "item4",
   ];
//tableを取得
let table = document.getElementById("table");
//Itemsのlenght
for(let i=0;i<Items.length;i++){
//tr,td要素を取得
let tr = document.createElement("tr");
let td =document.createElement("td");
//td要素内を設定
td.innerText=Items[i];
//trの子要素にtdを追加
tr.appendChild(td);
//trをtableに追加
table.appendChild(tr);
}





}