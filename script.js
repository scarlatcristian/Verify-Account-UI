"use strict";

const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[index].value = "";
      setTimeout(() => codes[index + 1].focus(), 10);
    }

    if (e.key === "Backspace") {
      codes[index - 1].value = "";
      setTimeout(() => codes[index - 1].focus(), 10);
    }
  });
});
