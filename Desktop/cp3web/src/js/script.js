const produtos = [
  {
    nome: "Ducati Panigale V4",
    descricao: "A superbike italiana mais potente, agora 100% elétrica.",
    preco: 89900,
    img: "../src/assets/img/panigale.jpg"
  },
  {
    nome: "Kawasaki Ninja e-1",
    descricao: "A lendária Ninja reinventada para o futuro elétrico.",
    preco: 45900,
    img: "../src/assets/img/ninja.jpg"
  },
  {
    nome: "Honda CB 650R Electric",
    descricao: "Esportividade urbana com zero emissões.",
    preco: 52000,
    img: "../src/assets/img/cb650r.jpg"
  },
  {
    nome: "Honda Hornet EV",
    descricao: "A clássica Hornet com motor elétrico de alta performance.",
    preco: 48500,
    img: "../src/assets/img/hornet.jpg"
  },
  {
    nome: "Vespa Elettrica",
    descricao: "O ícone italiano mais charmoso agora sem emissões.",
    preco: 32000,
    img: "../src/assets/img/vespa.jpg"
  }
];

// Função que renderiza os cards no index.html
function renderizarProdutos() {
  const container = document.getElementById("produtos");
  if (!container) return; // evita erro nas outras páginas

  produtos.forEach(produto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${produto.img}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.descricao}</p>
      <p class="preco">R$ ${produto.preco.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</p>
    `;

    container.appendChild(card);
  });
}

renderizarProdutos();