const listEl = document.querySelector("#categories");
const itemsEl = listEl.children;

console.log(`Number of categories: ${itemsEl.length}`);

for (const item of itemsEl) {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
}
