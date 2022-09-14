/*Object é uma forma de mantermos os dados associados e organizados. Ele é criado entre {}*/

/*sem objeto*/
const nome = "O Senhor dos Aneis";
const ano = "1954";
const autor = "J. R. R. Tolkien";

const nomefilme = "O Senhor dos Aneis";
const anofilme = "2001";
const diretorfilme = "Peter Jackson";

/*com objeto*/
const livro = {
    nome: "O Senhor dos Aneis",
    ano: "1954",
    autor: "J. R. R. Tolkien" 
}

console.log(livro);
console.log(2022 - livro.ano);

const filme = {
    nome: "O Senhor dos Aneis",
    ano: "2001",
    diretor: "Peter Jackson"
}

console.log(filme);

const texto = document.querySelector("p");

console.log(texto.innerHTML);

