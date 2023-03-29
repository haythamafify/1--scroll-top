let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  console.log(`scrollHeight : ${document.documentElement.scrollHeight}`);
  console.log(`scrollTop : ${scrollTop}`);
  console.log(`clientHeight : ${document.documentElement.clientHeight}`);
  el.style.width = `${(scrollTop / height) * 100}%`;
});
