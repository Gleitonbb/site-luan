const container = document.querySelector(".carrossel-container")
const btnEsquerda = document.querySelector(".esquerda")
const btnDireita = document.querySelector(".direita")
const btnHamburguer = document.getElementById("hamburguer")
const menuPopup = document.getElementById("menuPopup")
const btnFechar = document.getElementById("fechar")



let index = 0;
const totalItens = document.querySelectorAll(".item").length;

btnDireita.addEventListener("click", () => {
  if (index < totalItens - 1) {
    index++;
  } else {
    index = 0; // volta para o início
  }
  atualizarCarrossel();
});

btnEsquerda.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = totalItens - 1; // vai para o último
  }
  atualizarCarrossel();
});

function atualizarCarrossel() {
  const largura = document.querySelector(".item").offsetWidth
  container.style.transform = `translateX(${-index * largura}px)`
}

// abrir popup ao clicar no hambúrguer
btnHamburguer.addEventListener("click", () => {
  menuPopup.style.display = "flex"
});

// fechar popup ao clicar no X
btnFechar.addEventListener("click", () => {
  menuPopup.style.display = "none"
});

// fechar popup ao clicar fora do menu
menuPopup.addEventListener("click", (e) => {
  if (e.target === menuPopup) {
    menuPopup.style.display = "none"
  }
})

