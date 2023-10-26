/*  Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 

  
Bons estudos 😉  */



let resultado = partidas(100 , 10)
let nivel = "" 

function partidas(vit , der) {
    return vit - der

   
}

    if (resultado <= 10){
        nivel = "Ferro"
    }else if(resultado <= 20){
        nivel = "Bronze"
    }else if(resultado <= 50){
        nivel = "Prata"
    }else if(resultado <= 80){
        nivel = "Ouro"
    }else if(resultado <= 90){
        nivel = "Diamante"
    }else if(resultado <= 100){
        nivel = "Lendario"
    }else if(resultado > 101){
        nivel = "Imortal"
    }


console.log(`O Herói tem de saldo de ${resultado} está no nível de ${nivel}`)
