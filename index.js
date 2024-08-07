const textbox = document.getElementById("textbox");
const tof = document.getElementById("tof");
const toc = document.getElementById("toc");
const r = document.getElementById("r");

function convert() {
  if (tof.checked) {
    let t = Number(textbox.value);
    t = (t * 9) / 5 + 32;
    r.textContent = t + "F";
  } else if (toc.checked) {
    let t = Number(textbox.value);
    t = (t - 32) * (5 / 9);
    r.textContent = t + "C";
  } else {
    r.textContent = "Select the unit";
  }
}
