# Análise de crédito - Qred

Projeto desenvolvido como teste para a empresa Qred.

Demo: https://cesarsuriano.github.io/credit-analysis#/

identificador válido: c65687d0-b738-4016-ac87-f47226ea4777

## Desafio

O time de análise de crédito precisa visualizar o resultado da análise automatizada de crédito feita para cada cliente. Para isto existe a necessidade de criar uma página e mostrar de forma agrupada a análise para cada documento fornecido pelo solicitante do empréstimo.
A estrutura do retorno da api de análise de crédito consiste em:
-	Execução da política
-	UUID da execução
-	Pontos acumulados
-	Recomendação
-	Nome da política
-	Documentos
-	Análises dos documentos
-	Resultado final da análise
-	Regras da análise
-	Resultado das regras
-	Atributos das regras


### Resultado
Criar uma página utilizando o framework angular para que exiba as informações ao time de análise de acordo com a estrutura exibida acima.
-	A página deve receber um identificador da análise para que ela carregue adequadamente, caso não exista a análise com o identificador fornecido a página deve exibir uma mensagem amigável ao usuário.
-	Deve existir uma página anterior para que o cliente digite o identificador da análise.


### Refinamento técnico
-	Desejável mas não obrigatório o uso do framework primeng para desenvolver os componentes em tela.
-	A visualização das regras e seus atributos devem ser carregadas utilizando a feature lazy loading do angular.
-	Não é necessário invocar nenhuma api, apenas utilizar o arquivo grouped_analysis.json junto ao desafio. 

