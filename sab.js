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

//Itemsのlenghtの文ループ処理
for(let i=0;i<Items.length;i++){
//tr,td要素を取得
let tr = document.createElement("tr");
let td =document.createElement("td");
//td要素内を設定
td.innerText=Items[i];
//trの子要素にtdを追加
tr.appendChild(td);
//trの子要素にinput７個を追加
for(let n=0;n<7;n++){
  //inputを設定
let input=document.createElement("input");
input.setAttribute("type","number");
input.setAttribute("min","0");
input.setAttribute("step","1")
input.setAttribute("value","0")
  tr.appendChild(input);
}
//trをtableに追加
table.appendChild(tr);

}





}