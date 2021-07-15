const btn = document.querySelector(".nav-icon");
const main = document.querySelector("main");
const loop = document.querySelector(".loop");
const submit = document.querySelector("input[type='submit']");
const exit = document.querySelector(".fa-times-circle");

btn.addEventListener("click", ()=>{
  main.classList.add("filter");
  loop.classList.add("vis");
})

exit.addEventListener("click", ()=>{
  main.classList.remove("filter");
  loop.classList.remove("vis");
})

submit.addEventListener("click", ()=>{
  main.classList.remove("filter");
  loop.classList.remove("vis");
})