const elemento = document.getElementById('main-img');
const div1 = document.getElementById('main-background');
const div2 = document.getElementById('main-info');

function atualizarLayout() {
  const largura = window.innerWidth;

  // 1 - Mover main-img
  if (largura <= 768) {
    div2.appendChild(elemento);
  } else {
    div1.appendChild(elemento);
  }

  // 2 - Reorganizar main-info
  const mainInfo = document.getElementById("main-info");
  const h1 = mainInfo.querySelector("h1");
  const h2 = mainInfo.querySelector("h2");
  const p = mainInfo.querySelector("p");
  const ul = mainInfo.querySelector("ul");

  if (largura <= 768) {
    if (!mainInfo.querySelector(".main-novo")) {
      const mainNovo = document.createElement("div");
      mainNovo.classList.add("main-novo");

      mainNovo.appendChild(h1);
      mainNovo.appendChild(h2);
      mainNovo.appendChild(ul);

      // Limpa e remonta
      mainInfo.innerHTML = "";
      mainInfo.appendChild(mainNovo);
      mainInfo.appendChild(p);
    }
  } else {
    // Restaurar HTML original se voltar a tela grande
    if (mainInfo.querySelector(".main-novo")) {
      mainInfo.innerHTML = "";
      mainInfo.appendChild(h1);
      mainInfo.appendChild(h2);
      mainInfo.appendChild(p);
      mainInfo.appendChild(ul);
    }
  }
}

// Executa ao carregar a página
atualizarLayout();

// Atualiza ao redimensionar
window.addEventListener("resize", atualizarLayout);