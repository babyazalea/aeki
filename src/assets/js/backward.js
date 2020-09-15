const backwardBtn = document.querySelector("#backward");

const backward = () => {
  window.history.back();
};

if (backwardBtn) {
  backwardBtn.addEventListener("click", backward);
}
