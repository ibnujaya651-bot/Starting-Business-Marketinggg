let cart = [];
const moneyContainer = document.getElementById("money-container");

/* LOGIN */
function login() {
  if (username.value === "admin" && password.value === "1234") {
    loginBox.classList.add("hidden");
    dashboard.classList.remove("hidden");
  } else {
    error.innerText = "Username atau password salah";
  }
}

function logout() {
  dashboard.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

/* SEARCH */
function searchProduct() {
  let keyword = search.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(keyword)
      ? "block"
      : "none";
  });
}

/* FILTER */
function filterCategory() {
  let cat = category.value;
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      cat === "all" || card.classList.contains(cat)
        ? "block"
        : "none";
  });
}

/* BELI PRODUK */
function buyProduct(name) {
  cart.push(name);
  renderCart();
}

function renderCart() {
  cartList.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    cartList.appendChild(li);
  });
}

/* AI SIMULASI */
function runAI() {
  let input = inputAI.value.toLowerCase();
  if (input.includes("makanan")) {
    resultAI.innerText = "AI menyarankan promosi video di TikTok & Instagram.";
  } else if (input.includes("fashion")) {
    resultAI.innerText = "AI menyarankan influencer dan konten visual.";
  } else {
    resultAI.innerText = "AI menyarankan iklan digital & media sosial.";
  }
}

/* UANG JATUH */
function createMoney() {
  const money = document.createElement("div");
  money.classList.add("money");
  money.innerText = "💵";

  money.style.left = Math.random() * 100 + "vw";
  money.style.animationDuration = Math.random() * 3 + 4 + "s";
  money.style.fontSize = Math.random() * 10 + 20 + "px";

  moneyContainer.appendChild(money);

  setTimeout(() => {
    money.remove();
  }, 7000);
}

setInterval(createMoney, 300);
