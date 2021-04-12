let start_inputs = document.querySelectorAll("input");
let start_button = document.querySelector("button");

start_inputs[0].addEventListener("focus", delete_text);
start_inputs[1].addEventListener("focus", delete_text);

start_button.addEventListener("click", edit_check);

let theWord;
let guessing_charcater;
let wrong_counter = 1;

function delete_text(e) {
  e.target.value = "";
  e.target.removeEventListener("focus", delete_text);
}


function edit_check() {
  if (start_inputs[1].value == "The word ..." ||
      start_inputs[1].value == "" ||
      start_inputs[1].value.charAt(0) == " "){
    alert("You must type a word, and it cannot start with a space");
  } else {
    if (start_inputs[0].value == "hint ..." ||
        start_inputs[0].value == ""){
      start_inputs[0].value = "no hint";
    }
    theWord = start_inputs[1].value;
    start_game();
  }
}


function start_game() {
  document.querySelector("img").src = "bilder/steg1.png";
  document.querySelector("h2").textContent = "Hint: " + start_inputs[0].value;
  document.querySelector("div > div").innerHTML =
  "<ul id='charcter_list'>" +
    "<li>_</li>" +
  "</ul>" +
  "<input value='Letter' maxlength='1'>" +
  "<button>Guess</button>";

  for (i = 1; i < theWord.length; i++){
    let list_item = document.createElement("li");
    if (theWord.charAt(i) == " "){
      list_item.appendChild(document.createTextNode("\xa0\xa0\xa0"))
    } else {
      list_item.appendChild(document.createTextNode("_"))
    }
    document.getElementById("charcter_list").appendChild(list_item);
  }

  let  guess_button = document.querySelector("button");
  guess_button.style.width = "70px";
  guess_button.style.height = "50px";
  guess_button.style.fontSize = "20px";
  guess_button.style.margin = "0px";
  guess_button.addEventListener("click", guess);

  let  guess_input = document.querySelector("input");
  guess_input.style.margin = "0px";
  guess_input.style.padding = "5px";
  guess_input.style.height = "30px";
  guess_input.style.fontSize = "20px";
  guess_input.addEventListener("focus", delete_text);
  guess_input.addEventListener("keypress", function enter (e) {
    if (e.key == "Enter"){guess()}
  });
}


function guess() {
  guessing_charcater = document.querySelector("input").value;

  if (theWord.indexOf(guessing_charcater) != -1){
    correct(guessing_charcater);
  } else {
    wrong(guessing_charcater);
  }
}


function correct(e) {
  console.log(e + " was correct");
  let character_list = document.querySelectorAll("li");

  for (i = 0; i < theWord.length; i++){
    if (e == theWord.charAt(i)){
      character_list[i].textContent = e;
    }
  }
}


function wrong(e) {
  console.log(e + " was wrong");
  wrong_counter++;
  document.querySelector("img").src = "bilder/steg"+wrong_counter+".png";
  if (wrong_counter == 8){
    document.querySelector("h2").textContent = "You lost!"
    document.querySelector("h2").style.color = "red";
    document.querySelector("div > div").innerHTML = "";
  }
}
