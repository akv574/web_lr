let add_txt = document.getElementById("add_txt");
let txt = document.getElementById("txt");
let textarea = document.getElementById("textarea");
let btn_reset = document.getElementById("btn_reset");
let btn_submit = document.getElementById("btn_submit");
let checkBoxes = document.getElementsByClassName("chk-box");

let select = document.getElementById("select");

function onChange() {
  let value = select.value;
  let text = select.options[select.selectedIndex].text;
  console.log(text);
  console.log(value);
}

select.addEventListener("change", onChange);

// function checkValueBox(){
//   for(let i = 0 ;)
// }

let index = 0;
let state = true;
let setName = true;
textarea.value = "hello";

add_txt.addEventListener("click", () => {
  state = !state;
  index++;
  if (index === 1) {
    txt.value = "kfff";
  } else if (index >= 2) {
    setColor(state);
  }
});
btn_reset.addEventListener("click", (e) => {
  let check = prompt();
  equals(textarea.value, check);
  e.preventDefault();
});

btn_submit.addEventListener("dblclick", () => {});

function equals(first, second) {
  if (first === second) {
    alert("Равны");
    return;
  }
}

function setColor(state) {
  if (state === true) {
    txt.style.background = "red";
  } else if (state === false) {
    txt.style.background = "yellow";
  }
}
