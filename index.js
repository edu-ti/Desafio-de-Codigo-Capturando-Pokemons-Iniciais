//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Entrada de dados. Lembre-se: O parseInt(()) é Importante para a conversão dos valores de entrada(String) para um valor númerico:
let escolhaDoTreinador = parseInt(gets());
let pokemonEscolhido;


//TODO: implemente as condições necessárias para a solução do desafio. utilize a tabela de exemplos para identificar a escolha:
if ( escolhaDoTreinador === 1 ){
    pokemonEscolhido = "Bulbasur";
} else if ( escolhaDoTreinador === 2 ){
    pokemonEscolhido = "Charmander";
} else if(escolhaDoTreinador === 4){
    pokemonEscolhido = "Pikachu";
} else{
    pokemonEscolhido = "Mewtwo";
}

//Imprime o Pokémon escolhido:
if(pokemonEscolhido){
    print("Você escolheu o " + pokemonEscolhido + " como seu Pokemon inicial.")
}