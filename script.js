document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  if (!gallery) return; 

  const order = ["card-textbooks", "card-merch", "card-stationery"];

  function renderOrder() {
    order.forEach(id => gallery.appendChild(document.getElementById(id)));
  }

  function rotateLeft() {
    const first = order.shift();
    order.push(first);
    renderOrder();
  }

  function rotateRight() {
    const last = order.pop();
    order.unshift(last);
    renderOrder();
  }

  document.getElementById("arrow-left").addEventListener("click", rotateLeft);
  document.getElementById("arrow-right").addEventListener("click", rotateRight);

  
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") rotateLeft();
    if (e.key === "ArrowRight") rotateRight();
  });

  renderOrder();
});


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in, .fade-in-up");
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.4}s`; 
  });
});
