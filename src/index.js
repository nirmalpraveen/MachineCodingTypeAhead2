import "./styles.css";

const root = document.getElementById("app");
const input = document.createElement("input");
const resultsBox = document.createElement("div");

input.setAttribute("style", "width: 300px");
input.addEventListener("input", function (event) {
  innerResults(event);
});
root.appendChild(input);
root.appendChild(resultsBox);
const totalResults = ["apple", "banana", "citrusa", "orange", "blueberrya"];

resultsBox.setAttribute("id", "resultsBox");
resultsBox.setAttribute(
  "style",
  "position: relative;backgroud-color: yellow;max-height: 100px;width: 300px;overflow-y: scroll;border: 1px solid black"
);

const innerResults = (event) => {
  const resultsBox = document.getElementById("resultsBox");
  if (event.target.value === "") {
    resultsBox.innerHTML = "";
    return;
  }

  const filteredResults = totalResults.filter((item) =>
    item.includes(event.target.value)
  );
  const listBox = document.createElement("ul");
  filteredResults.map((item) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("style", "list-style: none;cursor: pointer");
    listItem.textContent = item;
    listBox.appendChild(listItem);
  });

  resultsBox.innerHTML = "";
  resultsBox.appendChild(listBox);
  console.log(filteredResults);
};
