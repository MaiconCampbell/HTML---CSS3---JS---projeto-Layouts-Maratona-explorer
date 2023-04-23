const btnLayoutEl = document.querySelector("#btn-layout");
const BodyEl = document.querySelector("body");

const gerarNumeroRandomico = () => {
  const qtdLayouts = 7

  // retorna numero de 0 a 6
  let num = Math.floor(Math.random() * qtdLayouts)
  return num
}

const validarTema = () => {
  switch (gerarNumeroRandomico()) {
    case 1:
      BodyEl.classList.add("dark-pink");
      BodyEl.classList.remove("pink");
      BodyEl.classList.remove("darkBlue");
      BodyEl.classList.remove("brown");
      BodyEl.classList.remove("blue");
      BodyEl.classList.remove("orange");
      break;

    case 2:
      BodyEl.classList.remove("dark-pink");
      BodyEl.classList.add("pink");
      BodyEl.classList.remove("darkBlue");
      BodyEl.classList.remove("brown");
      BodyEl.classList.remove("blue");
      BodyEl.classList.remove("orange");
      break;

    case 3:
      BodyEl.classList.remove("dark-pink");
      BodyEl.classList.remove("pink");
      BodyEl.classList.add("darkBlue");
      BodyEl.classList.remove("brown");
      BodyEl.classList.remove("blue");
      BodyEl.classList.remove("orange");
      break;

    case 4:
      BodyEl.classList.remove("dark-pink");
      BodyEl.classList.remove("pink");
      BodyEl.classList.remove("darkBlue");
      BodyEl.classList.add("brown");
      BodyEl.classList.remove("blue");
      BodyEl.classList.remove("orange");
      break;

    case 5:
      BodyEl.classList.remove("dark-pink");
      BodyEl.classList.remove("pink");
      BodyEl.classList.remove("darkBlue");
      BodyEl.classList.remove("brown");
      BodyEl.classList.add("blue");
      BodyEl.classList.remove("orange");
      break;

    case 6:
      BodyEl.classList.remove("dark-pink");
      BodyEl.classList.remove("pink");
      BodyEl.classList.remove("darkBlue");
      BodyEl.classList.remove("brown");
      BodyEl.classList.remove("blue");
      BodyEl.classList.add("orange");
      break;

    default:
      BodyEl.classList.remove("dark-pink");
      BodyEl.classList.remove("pink");
      BodyEl.classList.remove("darkBlue");
      BodyEl.classList.remove("brown");
      BodyEl.classList.remove("blue");
      BodyEl.classList.remove("orange");
  }
};

const alterarTema = () => {
  validarTema();
};

btnLayoutEl.addEventListener("click", () => {
  alterarTema();
});
