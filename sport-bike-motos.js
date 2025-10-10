const abrir = document.querySelector('.abrir-popup');
const popupContainer = document.getElementById('popupContainer');
const fechar = document.getElementById('fecharPopup');
const carrossel = document.getElementById('carrosselPopup');
const anterior = document.getElementById('anterior');
const proximo = document.getElementById('proximo');

let indice = 0;
const totalSlides = carrossel.children.length;

abrir.addEventListener('click', () => {
  popupContainer.style.display = 'flex';
});

fechar.addEventListener('click', () => {
  popupContainer.style.display = 'none';
  indice = 0;
  atualizarCarrossel();
});

proximo.addEventListener('click', () => {
  if (indice < totalSlides - 1) {
    indice++;
    atualizarCarrossel();
  }
});

anterior.addEventListener('click', () => {
  if (indice > 0) {
    indice--;
    atualizarCarrossel();
  }
});

function atualizarCarrossel() {
  const deslocamento = -(indice * 100);
  carrossel.style.transform = `translateX(${deslocamento}%)`;
}


//2 tela pop up
const abrirPopup1 = document.querySelector(".abrir-popup1");
const popupContainer1 = document.querySelector(".popup-container1");
const fechar1 = document.querySelector(".fechar1");
const carrossel1 = document.querySelector(".carrossel1");
const btnEsq1 = document.querySelector(".btn-esq1");
const btnDir1 = document.querySelector(".btn-dir1");

let index1 = 0;

abrirPopup1.addEventListener("click", () => {
  popupContainer1.style.display = "flex";
});

fechar1.addEventListener("click", () => {
  popupContainer1.style.display = "none";
});

btnDir1.addEventListener("click", () => {
  index1 = (index1 + 1) % carrossel1.children.length;
  carrossel1.style.transform = `translateX(-${index1 * 100}%)`;
});

btnEsq1.addEventListener("click", () => {
  index1 = (index1 - 1 + carrossel1.children.length) % carrossel1.children.length;
  carrossel1.style.transform = `translateX(-${index1 * 100}%)`;
});

// 2 segundo pop up
// Pop-up 2 independente
const abrirPopup2 = document.querySelector(".abrir-popup2");
const popupContainer2 = document.querySelector(".popup-container2");
const fechar2 = document.querySelector(".fechar2");
const carrossel2 = document.querySelector(".carrossel2");
const btnEsq2 = document.querySelector(".btn-esq2");
const btnDir2 = document.querySelector(".btn-dir2");

let index2 = 0;

abrirPopup2.addEventListener("click", () => {
  popupContainer2.style.display = "flex";
});

fechar2.addEventListener("click", () => {
  popupContainer2.style.display = "none";
});

btnDir2.addEventListener("click", () => {
  index2 = (index2 + 1) % carrossel2.children.length;
  carrossel2.style.transform = `translateX(-${index2 * 100}%)`;
});

btnEsq2.addEventListener("click", () => {
  index2 = (index2 - 1 + carrossel2.children.length) % carrossel2.children.length;
  carrossel2.style.transform = `translateX(-${index2 * 100}%)`;
});

//3 terceiro pop up

const abrirPopup3 = document.querySelector(".abrir-popup3");
const popupContainer3 = document.querySelector(".popup-container3");
const fechar3 = document.querySelector(".fechar3");
const carrossel3 = document.querySelector(".carrossel3");
const btnEsq3 = document.querySelector(".btn-esq3");
const btnDir3 = document.querySelector(".btn-dir3");

let index3 = 0;

abrirPopup3.addEventListener("click", () => {
  popupContainer3.style.display = "flex";
});

fechar3.addEventListener("click", () => {
  popupContainer3.style.display = "none";
});

btnDir3.addEventListener("click", () => {
  index3 = (index3 + 1) % carrossel3.children.length;
  carrossel3.style.transform = `translateX(-${index3 * 100}%)`;
});

btnEsq3.addEventListener("click", () => {
  index3 = (index3 - 1 + carrossel3.children.length) % carrossel3.children.length;
  carrossel3.style.transform = `translateX(-${index3 * 100}%)`;
});


// 4 quarto pop up

const abrirPopup4 = document.querySelector(".abrir-popup4");
const popupContainer4 = document.querySelector(".popup-container4");
const fechar4 = document.querySelector(".fechar4");
const carrossel4 = document.querySelector(".carrossel4");
const btnEsq4 = document.querySelector(".btn-esq4");
const btnDir4 = document.querySelector(".btn-dir4");

let index4 = 0;

abrirPopup4.addEventListener("click", () => {
  popupContainer4.style.display = "flex";
});

fechar4.addEventListener("click", () => {
  popupContainer4.style.display = "none";
});

btnDir4.addEventListener("click", () => {
  index4 = (index4 + 1) % carrossel4.children.length;
  carrossel4.style.transform = `translateX(-${index4 * 100}%)`;
});

btnEsq4.addEventListener("click", () => {
  index4 = (index4 - 1 + carrossel4.children.length) % carrossel4.children.length;
  carrossel4.style.transform = `translateX(-${index4 * 100}%)`;
});


//5 quinto pop up
const abrirPopup5 = document.querySelector(".abrir-popup5");
const popupContainer5 = document.querySelector(".popup-container5");
const fechar5 = document.querySelector(".fechar5");
const carrossel5 = document.querySelector(".carrossel5");
const btnEsq5 = document.querySelector(".btn-esq5");
const btnDir5 = document.querySelector(".btn-dir5");

let index5 = 0;

abrirPopup5.addEventListener("click", () => {
  popupContainer5.style.display = "flex";
});

fechar5.addEventListener("click", () => {
  popupContainer5.style.display = "none";
});

btnDir5.addEventListener("click", () => {
  index5 = (index5 + 1) % carrossel5.children.length;
  carrossel5.style.transform = `translateX(-${index5 * 100}%)`;
});

btnEsq5.addEventListener("click", () => {
  index5 = (index5 - 1 + carrossel5.children.length) % carrossel5.children.length;
  carrossel5.style.transform = `translateX(-${index5 * 100}%)`;
});

// 6 sexto pop up

const abrirPopup6 = document.querySelector(".abrir-popup6");
const popupContainer6 = document.querySelector(".popup-container6");
const fechar6 = document.querySelector(".fechar6");
const carrossel6 = document.querySelector(".carrossel6");
const btnEsq6 = document.querySelector(".btn-esq6");
const btnDir6 = document.querySelector(".btn-dir6");

let index6 = 0;

abrirPopup6.addEventListener("click", () => {
  popupContainer6.style.display = "flex";
});

fechar6.addEventListener("click", () => {
  popupContainer6.style.display = "none";
});

btnDir6.addEventListener("click", () => {
  index6 = (index6 + 1) % carrossel6.children.length;
  carrossel6.style.transform = `translateX(-${index6 * 100}%)`;
});

btnEsq6.addEventListener("click", () => {
  index6 = (index6 - 1 + carrossel6.children.length) % carrossel6.children.length;
  carrossel6.style.transform = `translateX(-${index6 * 100}%)`;
});

// 7 setimo pop up
const abrirPopup7 = document.querySelector(".abrir-popup7");
const popupContainer7 = document.querySelector(".popup-container7");
const fechar7 = document.querySelector(".fechar7");
const carrossel7 = document.querySelector(".carrossel7");
const btnEsq7 = document.querySelector(".btn-esq7");
const btnDir7 = document.querySelector(".btn-dir7");

let index7 = 0;

abrirPopup7.addEventListener("click", () => {
  popupContainer7.style.display = "flex";
});

fechar7.addEventListener("click", () => {
  popupContainer7.style.display = "none";
});

btnDir7.addEventListener("click", () => {
  index7 = (index7 + 1) % carrossel7.children.length;
  carrossel7.style.transform = `translateX(-${index7 * 100}%)`;
});

btnEsq7.addEventListener("click", () => {
  index7 = (index7 - 1 + carrossel7.children.length) % carrossel7.children.length;
  carrossel7.style.transform = `translateX(-${index7 * 100}%)`;
});



