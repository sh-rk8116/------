"use strict";

//ボタンクリック時動作
document.querySelector("button").addEventListener("click", () => {
//ここに命令
});

//何かしたとき要素Aを親要素Aに追加
  const a = document.createElement("p"); //追加する要素A
  a.textContent = "中身" //要素Aの中身

  const A = document.querySelector("div"); //親要素 IDの場合getElementByID
  A.appendChild(a);