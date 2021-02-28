//------------------------------------
//	# Application
//------------------------------------

const datalist = document.querySelector("#snippets");
const input = document.querySelector("#snippetsInput");
input.addEventListener("input", (event) => {
  for (let option of datalist.options) {
    if (event.target.value === option.value) {
      window.location.hash = option.dataset.id;
    }
  }
});


document.querySelectorAll(".js-btn-copy").forEach((element) => {
  element.addEventListener("click", (event) => {
    const textarea = document.createElement("textarea");
    textarea.value = document.getElementById(
      `${event.target.dataset.content}`
    ).innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    event.target.classList.add("is-copied");
    setTimeout(() => {
      event.target.classList.remove("is-copied");
    }, 1000);
  });
});
