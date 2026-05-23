const listings = [
  {
    id: "cdg-1",
    title: "Vintage Cat Figurine",
    category: "Decor",
    price: 24.99,
    image: "https://picsum.photos/seed/catfig/600/450",
    url: "https://www.ebay.com"
  },
  {
    id: "cdg-2",
    title: "Handmade Cat Mug",
    category: "Kitchen",
    price: 19.5,
    image: "https://picsum.photos/seed/catmug/600/450",
    url: "https://www.ebay.com"
  },
  {
    id: "cdg-3",
    title: "Cozy Cat Blanket",
    category: "Home",
    price: 34,
    image: "https://picsum.photos/seed/catblanket/600/450",
    url: "https://www.ebay.com"
  },
  {
    id: "cdg-4",
    title: "Retro Cat Poster",
    category: "Art",
    price: 12,
    image: "https://picsum.photos/seed/catposter/600/450",
    url: "https://www.ebay.com"
  }
];

const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const results = document.getElementById("results");
const emptyState = document.getElementById("emptyState");
const cardTemplate = document.getElementById("cardTemplate");

function formatPrice(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

function populateCategories() {
  const categories = [...new Set(listings.map((item) => item.category))].sort();
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  }
}

function renderCards(items) {
  results.innerHTML = "";

  if (!items.length) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  const fragment = document.createDocumentFragment();
  for (const item of items) {
    const node = cardTemplate.content.cloneNode(true);
    node.querySelector(".card-image").src = item.image;
    node.querySelector(".card-image").alt = item.title;
    node.querySelector(".card-title").textContent = item.title;
    node.querySelector(".card-category").textContent = item.category;
    node.querySelector(".card-price").textContent = formatPrice(item.price);
    const link = node.querySelector(".card-link");
    link.href = item.url;
    fragment.appendChild(node);
  }
  results.appendChild(fragment);
}

function applyFilters() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  const filtered = listings.filter((item) => {
    const matchesQuery =
      item.title.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
    const matchesCategory = category === "all" || item.category === category;
    return matchesQuery && matchesCategory;
  });

  renderCards(filtered);
}

searchInput.addEventListener("input", applyFilters);
categorySelect.addEventListener("change", applyFilters);

populateCategories();
applyFilters();


const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

function activateTab(name) {
  tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tab === name);
  });
  panels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.dataset.panel !== name);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
});
