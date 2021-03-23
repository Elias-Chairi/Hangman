let start_inputs = document.querySelectorAll("input");
let start_button = document.querySelector("button");

start_inputs[0].addEventListener("focus", delete_text);
start_inputs[1].addEventListener("focus", delete_text);

start_button.addEventListener("click", edit_check);


function delete_text(e) {
  e.target.value = "";
  e.target.removeEventListener("focus", delete_text);
}

function edit_check() {
  if (start_inputs[1].value == "The word ..." ||
      start_inputs[1].value == ""){
    alert("You must type a word");
  } else {
    if (start_inputs[0].value == "hint ..." ||
        start_inputs[0].value == ""){
      start_inputs[0].value = "no hint";
    }
    start_game();
  }
}


function start_game() {
  document.querySelector("img").src = "bilder/steg1.png";
  document.querySelector("h2").textContent = "Hint: " + start_inputs[0].value;
  document.querySelector("div > div").innerHTML =
  "<input value='Letter'> <button>Guess</button>";
  let  guess_button = document.querySelector("button");
  guess_button.style.width = "70px";
  guess_button.style.height = "50px";
  guess_button.style.fontSize = "20px";
  guess_button.style.margin = "0px";

  let  guess_input = document.querySelector("input");
  guess_input.style.margin = "0px";
  guess_input.style.padding = "5px";
  guess_input.style.height = "30px";
  guess_input.style.fontSize = "20px";
  guess_input.addEventListener("focus", delete_text);
}
