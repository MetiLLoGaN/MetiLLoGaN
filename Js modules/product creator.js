function productElementMaker(product) {
  let prodFigure = document
    .querySelector(".products")
    .appendChild(document.createElement("figure"));
  prodFigure.id = `${product.productName + "_" + product.id}`;

  let prodFigureImg = document.createElement("img");
  prodFigure.appendChild(prodFigureImg);
  prodFigureImg.src = product.productImg;

  let prodFigcaption = document.createElement("figcaption");
  prodFigure.appendChild(prodFigcaption);

  let prodFigcapH3 = document.createElement("h3");
  prodFigcaption.appendChild(prodFigcapH3);
  prodFigcapH3.classList.add("product-h3");
  prodFigcapH3.innerText = product.productName;

  prodFigcaption.classList.add("product-text-container");
  prodFigcaption.innerHTML += `<p>${product.protofilo}</p>
                                <div class="product-more">
                                    <a href="Tester">مشاهده جزئیات</a>
                                </div>
                                `;
}
carGps.map((e) => {
  productElementMaker(e);
});

function ProductStateSelector(assortment) {}
