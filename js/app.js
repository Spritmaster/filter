let producs = [...products];

const producon = document.querySelector(".products-container");

function update() {
  if (producs.length < 1) {
    producon.innerHTML = `<h5>sorry no products</h5>`;
  } else  {
    producon.innerHTML = producs.map((product) => {
      const { id, title, image, price, company } = product;
      return `
            <article class="product">
            <img src=${image}
            class="product-img img"
            alt=${title}/>
            <footer>
            </footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">$${price}</span>
            </article>
            `
    }).join("");
  }
}
update();

const compani = document.querySelector(".companies");

function updatebut() {
  const buttons = ["all", ...new Set(products.map((pro) => pro.company))];

  compani.innerHTML = buttons
    .map((button) => {
      return `
        <button class="company-btn">${button}</button>`;
    })
    .join("");
}
updatebut();

compani.addEventListener("click", (e) => {
  if (e.target.textContent == "all") {
    producs = [...products];
  } else {
    producs = products.filter((pro) => {
      return pro.company == e.target.textContent;
    });
  }
  update();
});

const form = document.querySelector(".input-form");
const input = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  let inputInfo=input.value
  producs = products.filter((product) => {
    return product.title.toLowerCase().includes(inputInfo);
  });
  update();
});



