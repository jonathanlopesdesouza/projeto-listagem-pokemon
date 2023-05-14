// objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplpicados e mudar a imagem pra lua

// passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//passo 2 - dar um jeito de pegar no JS o elemento HTML correspondente ao body

const body = document.querySelector("body");

const imagemBotaoTrocarDeTema = document.querySelector(".imagem-botao");

//passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema

botaoAlterarTema.addEventListener("click", () => {
  // passo 6 - verificar se o body já tem a classe do modo-escuro
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  if (modoEscuroEstaAtivo) {
    //passo 7 - remover a classe do modo-escuro do body
    body.classList.remove("modo-escuro");

    //passo 8 - trocar a imagem do botão de alterar tema pra sol
    imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/sun.png");

  } else {
    //passo 4 - adicionar a classe modo-escuro no body
    body.classList.add("modo-escuro");

    //passo 5 - trocar a imagem do botão de alterar tema pra lua

    imagemBotaoTrocarDeTema.setAttribute("src", "./src/imagens/moon.png");
  }

  //objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol

  
});
