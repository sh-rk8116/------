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