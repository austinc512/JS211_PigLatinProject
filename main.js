"use strict";

// got rid of tests for this branch, and attached input and output DOM elements to make this logic usable in a GUI.

const vowels = ["a", "e", "i", "o", "u"];

document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  const input = document
    .getElementById("user-input")
    .value.trim()
    .toLowerCase();

  let output = "";
  if (vowels.includes(input[0])) {
    output = `${input}yay`;
  } else if (
    !vowels.includes(input[0]) &&
    !vowels.includes(input[1]) &&
    !vowels.includes(input[2])
  ) {
    output = `${input.slice(3)}${input.slice(0, 3)}ay`;
  } else if (!vowels.includes(input[0]) && !vowels.includes(input[1])) {
    output = `${input.slice(2)}${input.slice(0, 2)}ay`;
  } else {
    output = `${input.slice(1)}${input[0]}ay`;
  }
  // console.log(output);
  document.getElementById("display-element").innerHTML = output;
});
