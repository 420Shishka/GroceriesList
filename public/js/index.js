const groceries = document.getElementById("groceries");
const pen = document.getElementById("pen");
const userInput = document.getElementById("user-input");
const itemsList = document.getElementById("groceries__items-list");

pen.addEventListener('click', () => {
  itemsList.innerHTML = '';
});

userInput.addEventListener('keydown', (event) => {
  if (event.key == "Enter") {
    addItem();
  }
})

const addItem = () => {
  const item = document.createElement("div");
  item.innerHTML = `- ${userInput.value}`;

  item.style.maxWidth = "100%";
  item.style.overflowWrap = "break-word";

  item.addEventListener('click', () => {
    item.style.textDecoration = "line-through";
  });

  itemsList.insertAdjacentElement("beforeend", item);

  userInput.value = '';
}