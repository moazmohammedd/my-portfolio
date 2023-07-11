const socailBtn = document.getElementById("socail-btn");
let socailMenu = document.querySelector(".social-menu");
if (socailBtn) {
  var btnTxt = ["My Scail Links", "Close Menu"];
  socailBtn.addEventListener("click", (e) => {
    if (socailMenu) {
      socailMenu.classList.toggle("ac");
    }
    e.target.classList.toggle("ac");
    if (e.target.classList.contains("ac")) {
      e.target.innerHTML = `${btnTxt[1]}`;
    } else {
      e.target.innerHTML = `${btnTxt[0]}`;
    }
  });
}

const newspaperSpinning = [
  { transform: "rotate(8deg)" ,opacity:"0.5"},
  { transform: "rotate(-8deg)" },
  { transform: "rotate(8deg)" },
  { transform: "rotate(-8deg)" },
  { transform: "rotate(8deg)" ,opacity:"1"},
  { transform: "rotate(-8deg)" },
  { transform: "rotate(0deg)" },
];

const newspaperTiming = {
  duration: 500,
  iterations: 1,
};

document.addEventListener("DOMContentLoaded", () => {
  socailBtn.animate(newspaperSpinning, newspaperTiming);;
});