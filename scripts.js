const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".show-all");
const buttonMapAll = document.querySelector(".map-all");
const buttomSumAll = document.querySelector(".sum-all");
const buttomFilter = document.querySelector(".filter-all");

function formatCurrency(value) {
  const newValue = value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return newValue;
}

function ShowAll(productsArray) {
  let myLi = "";
  productsArray.forEach((product) => {
    myLi += `
        <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="iten-price"> ${formatCurrency(product.price)}</p>
              </li>
              `;
  });
  list.innerHTML = myLi;
}
function MapAllItems() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));
  ShowAll(newPrices);
}
function SumAllItens() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `
  <li>
   <p> O valor total dos itens é: <br> ${formatCurrency(totalValue)}</p>
  </li>
        `;
}

function FilterAll() {
  const filterVegan = menuOptions.filter((item) => item.vegan);
  ShowAll(filterVegan);
}

buttonShowAll.addEventListener("click", () => ShowAll(menuOptions));
buttonMapAll.addEventListener("click", MapAllItems);
buttomSumAll.addEventListener("click", SumAllItens);
buttomFilter.addEventListener("click", FilterAll);
