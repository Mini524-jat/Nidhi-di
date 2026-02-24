document.addEventListener("DOMContentLoaded", () => {

  const pages = Array.from(document.querySelectorAll(".page"));

  // stack pages
  pages.forEach((page, i) => {
    page.style.zIndex = pages.length - i;
  });

  // flip logic
  document.addEventListener("touchstart", function(){}, true);
  pages.forEach((page, i) => {
    page.addEventListener("click", () => {
      if (!page.classList.contains("flipped")) {
        page.classList.add("flipped");
        page.style.zIndex = i + 1;
      } else {
        page.classList.remove("flipped");
        page.style.zIndex = pages.length - i;
      }
    });
  });

  // button alert
  const btn = document.getElementById("botao1");
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      alert("YAYY THANK U 😍💗");
    });
  }

});