function loadItem() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function createHTML(item) {
  return `<div class="item">
    <img src= '${item.image}' alt="" />
    <span>${item.gender}, ${item.size}</span>
    </div>`;
}

function putToHTML(response) {
  const query = document.querySelector(".items");
  console.log(response);
  query.innerHTML = response.map((item) => createHTML(item)).join("");
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key === null || value === null) {
    return;
  }
  console.log(key, value);

  putToHTML(items.filter((item) => item[key] === value));
  // items.foreach((item) => {
  //   if (item[key] === value) {
  //     item.classList.remove("invisible");
  //   } else {
  //     item.classList.add("invisible");
  //   }
  // });
}

function addButtonEvent(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", putToHTML(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

function main() {
  loadItem()
    .then((response) => {
      putToHTML(response);
      addButtonEvent(response);
    })
    .catch(console.log);
}

main();
