
const produtos = [
  {
    nome: "Ducati Panigale V4",
    descricao: "A superbike italiana mais potente.",
    preco: 89900,
    img:"./src/assets/ducati2.webp"
  },
  {
    nome: "Kawasaki Ninja",
    descricao: "A lendária Kawasaki Ninja.",
    preco: 45900,
    img:"./src/assets/kawasaki.webp"
  },
  {
    nome: "Honda CB 650R",
    descricao: "A melhor moto para esportividade urbana.",
    preco: 52000,
    img: "./src/assets/CB650R_3 copy.webp"
  },
  {
    nome: "Honda Hornet",
    descricao: "A clássica Hornet com motor de alta performance.",
    preco: 48500,
    img: "../src/assets/hornet.webp"
  },
  {
    nome: "Vespa",
    descricao: "Um ícone italiano.",
    preco: 32000,
    img: "../src/assets/vespa.jpg"
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

// =================== CARRINHO (loja.html) ===================

const carrinho = [
  { nome: "Ducati Panigale V4", preco: 89900, qtd: 1 },
  { nome: "Kawasaki Ninja e-1", preco: 45900, qtd: 1 },
  { nome: "Honda CB 650R Electric", preco: 52000, qtd: 2 },
  { nome: "Honda Hornet EV", preco: 48500, qtd: 1 },
  { nome: "Vespa Elettrica", preco: 32000, qtd: 1 }
];

function renderizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  if (!lista) return; // evita erro no index.html e sobre.html

  lista.innerHTML = "";

  carrinho.forEach(item => {
    const li = document.createElement("li");
    const subtotal = item.preco * item.qtd;
    li.innerHTML = `
      <span>${item.nome} (x${item.qtd})</span>
      <span>R$ ${subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
    `;
    lista.appendChild(li);
  });
}

function calcularTotal(itens) {
  return itens.reduce((acc, item) => acc + item.preco * item.qtd, 0);
}

function atualizarTotal(valor) {
  const spanTotal = document.getElementById("total-compra");
  if (!spanTotal) return;
  spanTotal.textContent = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

const btnDesconto = document.getElementById("btn-desconto");
if (btnDesconto) {
  btnDesconto.addEventListener("click", () => {
    const totalComDesconto = calcularTotal(carrinho) * 0.9;
    atualizarTotal(totalComDesconto);
    btnDesconto.disabled = true;
    btnDesconto.textContent = "✅ Desconto Aplicado!";
  });
}

renderizarCarrinho();
atualizarTotal(calcularTotal(carrinho));