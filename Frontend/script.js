let exposureScore = 0;
let interests = new Set();
let collectedData = new Set();

function simulateAction(type) {
  switch (type) {
    case "search":
      exposureScore += 10;
      interests.add("Topics you are curious about");
      collectedData.add("Search activity noticed");
      break;

    case "like":
      exposureScore += 7;
      interests.add("Things you like or enjoy");
      collectedData.add("Post interactions observed");
      break;

    case "location":
      exposureScore += 20;
      collectedData.add("Approximate location known");
      break;

    case "browse":
      exposureScore += 5;
      interests.add("Browsing habits");
      collectedData.add("Time spent on content recorded");
      break;
  }

  updateUI();
}

function updateUI() {
  document.getElementById("score").textContent = exposureScore;

  const risk = document.getElementById("risk");
  risk.className = "";

  if (exposureScore < 30) {
    risk.textContent = "Very little so far";
    risk.classList.add("low");
  } else if (exposureScore < 70) {
    risk.textContent = "A fair amount of info";
    risk.classList.add("medium");
  } else {
    risk.textContent = "A lot can be understood";
    risk.classList.add("high");
  }

  renderList("interests", interests);
  renderList("data", collectedData);
}

function renderList(id, items) {
  const list = document.getElementById(id);
  list.innerHTML = "";

  if (items.size === 0) {
    const li = document.createElement("li");
    li.textContent = "Nothing noticeable yet";
    list.appendChild(li);
    return;
  }

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
