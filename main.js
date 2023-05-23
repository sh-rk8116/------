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