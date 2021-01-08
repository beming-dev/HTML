//json으로 파일 받아옴
// receive a file by json
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  console.log(items);
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function showItems(key, value, items) {
  // for(let i=0; i<items.length(); i++){
  //     if(items[i][key] === value)
  //         document.getElementById('.item').classList.toggle('invisible');
  // }
  items.foreach((item) => {
    if (item[key] === value) {
      item.classList.add("invisible");
    } else {
      item.classList.remove("invisible");
    }
  });
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  displayItems(items.filter((item) => item[key] === value));
  // showItems(key, value, items);
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
