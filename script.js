const link = document.querySelector(".link-name");
const input = document.querySelector(".name-input");

function showName(name) {
  link.innerText = name;
}

input.addEventListener("change", () => {
  showName(input.value);
  input.value = "";
});
