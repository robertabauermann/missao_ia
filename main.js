const caixaPrincipal =document.querySelector(".caixaPrincipal");
const caixaPerguntas =document.querySelector(".caixa-perguntas");
const caixaAlternativas =document.querySelector (".caixa-alternativas");
const caixaResultado =document.querySelector(".caixa-resultado");
const textoResultado =document.querySelector(".texto-resultado");

const perguntas = [ 
   {
    enunciado: "pergunta 1",
    alternativas: ["alternativas 1", "alternativa 2 "]
   },
   {
    enunciado: "pergunta 2",
    alternativas: ["alternativas 1", "alternativa 2 "]
   },
   {
    enunciado: "pergunta 3",
    alternativas: ["alternativas 1", "alternativa 2 "]
   },
]

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas [atual] ;
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textConect = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas ();
}
function mostraAlternativa(){
    for( const alternativas of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement (button);
        botaoAlternativas.textConect = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();