'use strict';

{
  document.querySelector("button").addEventListener("click", () => {
    const ones = document.querySelectorAll("input");
    const two = [];

    ones.forEach(one => {
    if (one.checked === true) {
      two.push(one.value);
    }
    });

    const li = document.createElement("li");
    li.textContent = two;
    document.querySelector("ul").appendChild(li);
  });
}

{
  const open = document.getElementById("open");
  const back = document.getElementById("back");
  const modal = document.getElementById("modal");
  const close = document.getElementById("close");
  open.addEventListener("click", () => {
    modal.classList.remove("s1");
    back.classList.remove("s1");
  });
  close.addEventListener("click", () => {
    modal.classList.add("s1");
    back.classList.add("s1");
  });
  back.addEventListener("click", () => {
    modal.classList.add("s1");
    back.classList.add("s1");
  });

  }

  {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() +1;
    let day = time.getDate();
    let week = time.getDay();
    let youbi = ["日","月","火","水","木","金","土"]
    document.getElementById("jikan").textContent=year + "年" + month + "月" + day +"日" + "[" + youbi[week] + "]";
    
    let i;
    let h;

    for (i = 1; i<=7; i++) {
      // 次の日にセット
      h = time.setDate(time.getDate() + 1);
      // console.log(time);

      // 列に日付を表示
      document.getElementById(i + "niti").textContent = 
        time.getMonth() +1 + "/" + time.getDate(h);
    }
    /*
    document.getElementById("1niti").textContent=month + "/" + day;
    document.getElementById("2niti").textContent=time.getMonth() +1 + "/" + time.getDate(time.setDate(time.getDate() +1));
    document.getElementById("3niti").textContent=time.getMonth() +1 + "/" + getDate(time.setDate(time.getDate() +2));
    document.getElementById("4niti").textContent=time.getMonth() +1 + "/" + getDate(time.setDate(time.getDate() +3));
    document.getElementById("5niti").textContent=time.getMonth() +1 + "/" + getDate(time.setDate(time.getDate() +4));
    document.getElementById("6niti").textContent=time.getMonth() +1 + "/" + getDate(time.setDate(time.getDate() +5));
    document.getElementById("7niti").textContent=time.getMonth() +1 + "/" + getDate(time.setDate(time.getDate() +6));
    */

  }
  {
    //商品一覧
    const Items = [
      "item1",
      "item2",
      "item3",
      "item4",
    ];
  //B2を取得
  let tbody = document.getElementById("B2");
  //Itemsのlength分繰り返す
  for(let i=0; i>=Items.length;i++){
 //各種要素を取得
  let itemTr =document.createElement("tr");
  let itemTd =document.createElement("td");
 //td内のtextを設定
 itemTd.innerText=Items[i];
 //trの子要素にtdを追加
itemTr.appendChild(itemTd); 
 //trをtbodyに追加
tbody.appendChild(itemTr);
    }
   



  
    
    }