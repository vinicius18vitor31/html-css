/*
function livro(nome, ano, autor) {
    const nomeMaior = nome.toUpperCase();
    const totalAnos = 2050 - ano;
    const frase = nome + ' por ' + autor;
    const objeto = {
        nome: nomeMaior,
        totalAnos,
        frase,
    };
    return objeto;
}
*/

function livro(nome, ano, autor) {
    const objeto = {
        nome: nome.toUpperCase(),
        totalAnos: 2050 - ano, 
        frase: nome + ' por ' + autor,
    };
    return objeto;
}

const livroRetorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

console.log(livroRetorno.frase);