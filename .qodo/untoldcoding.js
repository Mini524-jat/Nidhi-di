document.addEventListener("DOMContentLoaded", () => {
  const pages = Array.from(document.querySelectorAll(".page"));

  // stack pages (top page has highest z-index)
  pages.forEach((p, i) => {
    p.style.zIndex = String(pages.length - i);
  });

  // click to flip forward/backward
  pages.forEach((p, i) => {
    p.addEventListener("click", () => {
      // if this page is not flipped -> flip it
      if (!p.classList.contains("flipped")) {
        p.classList.add("flipped");
        p.style.zIndex = String(i + 1); // send behind
      } else {
        // unflip (go back)
        p.classList.remove("flipped");
        p.style.zIndex = String(pages.length - i); // bring front
      }
    });
  });

  // button alert (don’t flip page when clicking button)
  const btn = document.getElementById("botao1");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      alert("YAYY THANK U 😍💗, Drop a Message");
    });
  }
});