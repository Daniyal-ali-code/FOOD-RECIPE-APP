// search bar
const data = [
  "Chicken",
  "Pineapple",
  "Strawberry",
  "Grapes",
  "Mango",
  "Peach"
];

function searchFunction() {
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  const resultsDiv = document.getElementById("search-results");

  resultsDiv.innerHTML = "";  // Clear previous results

  // Filter the data array based on the search term
  const filteredResults = data.filter(item => item.toLowerCase().includes(searchTerm));

  // Display filtered results
  if (filteredResults.length > 0) {
      filteredResults.forEach(item => {
          const resultItem = document.createElement("div");
          resultItem.textContent = item;
          resultsDiv.appendChild(resultItem);
      });
  } else {
      resultsDiv.innerHTML = "No results found.";
  }
}
// search bar end.

const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
