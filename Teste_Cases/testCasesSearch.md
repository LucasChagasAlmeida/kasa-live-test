# CT-011: Buscar por nome de time - Usuário autenticado ou visitante

## Objetivo
Verificar se o mecanismo de busca retorna corretamente os resultados ao buscar por um nome de time, tanto parcial quanto completo.

## Pré-condições
- A aplicação está acessível.
- Existem times cadastrados com nomes reconhecíveis (ex: "Flamengo", "Palmeiras", "Barcelona").
- O usuário pode estar autenticado ou não.

## Passos
| Passo | Ação                                                       | Resultado Esperado                                                              |
|-------|------------------------------------------------------------|----------------------------------------------------------------------------------|
| 1     | Acessar a página principal da Kasa.live                     | Página é carregada corretamente com o campo de busca visível                     |
| 2     | Digitar o nome completo de um time no campo de busca (ex: "Flamengo") | Resultados são filtrados e exibem partidas, vídeos e dados relacionados ao time |
| 3     | Limpar o campo e digitar um nome parcial (ex: "Pal")        | Resultados correspondentes ao início do nome são exibidos (ex: "Palmeiras")      |
| 4     | Clicar em um dos resultados                                 | A navegação para a página correspondente (detalhe do time ou conteúdo) é realizada|

## Resultado Esperado
A busca funciona corretamente tanto com nomes completos quanto parciais, retornando conteúdos relevantes ao time buscado.



# CT-012: Buscar por nome de campeonato - Usuário autenticado ou visitante

## Objetivo
Verificar se o mecanismo de busca retorna corretamente os resultados ao buscar por um campeonato, seja com nome completo ou parcial.

## Pré-condições
- A aplicação está acessível.
- Existem campeonatos cadastrados (ex: "Brasileirão", "Champions League").
- O usuário pode estar autenticado ou não.

## Passos
| Passo | Ação                                                                  | Resultado Esperado                                                                 |
|-------|-----------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| 1     | Acessar a página principal da Kasa.live                                | Página é exibida com o campo de busca visível                                      |
| 2     | Digitar o nome completo de um campeonato (ex: "Champions League")     | Resultados exibem partidas, vídeos e dados relacionados ao campeonato buscado      |
| 3     | Limpar o campo e digitar um nome parcial (ex: "Bras")                 | Resultados filtram campeonatos correspondentes (ex: "Brasileirão")                 |
| 4     | Clicar em um dos resultados                                           | A navegação é realizada para a página ou seção correspondente ao campeonato        |

## Resultado Esperado
A busca retorna resultados relevantes com base no nome do campeonato, suportando busca completa e parcial de forma eficiente.


# CT-013: Buscar por data - Usuário autenticado ou visitante

## Objetivo
Verificar se o sistema retorna corretamente as partidas ao aplicar um filtro de data específica.

## Pré-condições
- A aplicação está acessível.
- Existem partidas cadastradas em diferentes datas.
- O usuário pode estar autenticado ou não.

## Passos
| Passo | Ação                                                          | Resultado Esperado                                                             |
|-------|---------------------------------------------------------------|---------------------------------------------------------------------------------|
| 1     | Acessar a página principal da Kasa.live                        | Página é exibida com o campo ou filtro de data visível                         |
| 2     | Selecionar uma data específica usando o seletor de data        | Campo é preenchido e a interface atualiza com partidas daquela data            |
| 3     | Validar que os resultados exibidos correspondem à data selecionada | Apenas partidas da data escolhida são exibidas                               |


## Resultado Esperado
A busca por data retorna corretamente as partidas agendadas para aquele dia ou informa adequadamente quando não há eventos na data.


# CT-014: Combinação de filtros (time + data + campeonato)

## Objetivo
Verificar se o sistema aplica corretamente múltiplos filtros simultaneamente (time, data e campeonato) e retorna apenas os resultados que atendem a todos os critérios.

## Pré-condições
- A aplicação está acessível.
- Existem partidas cadastradas que correspondem a combinações específicas de time, campeonato e data.
- O usuário pode estar autenticado ou não.

## Passos
| Passo | Ação                                                                 | Resultado Esperado                                                                   |
|-------|----------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| 1     | Acessar a página principal da Kasa.live                               | Página é carregada com filtros visíveis ou acessíveis                               |
| 2     | Selecionar um time no filtro de times                                 | Partidas são filtradas pelo time selecionado                                        |
| 3     | Selecionar uma data no seletor de datas                               | Resultados agora são filtrados pelo time e pela data                               |
| 4     | Selecionar um campeonato no filtro de campeonatos                     | Lista final exibe apenas partidas que coincidem com os três filtros aplicados       |
| 5     | Limpar um dos filtros                                                 | Resultados são atualizados de acordo com os critérios restantes                     |

## Resultado Esperado
A interface exibe apenas as partidas que correspondem simultaneamente aos filtros de time, data e campeonato selecionados. A filtragem combinada deve funcionar de forma precisa e dinâmica.


# CT-015: Resultado de busca vazio

## Objetivo
Verificar se o sistema lida corretamente com situações em que nenhum resultado é encontrado após a aplicação de filtros ou termos de busca.

## Pré-condições
- A aplicação está acessível.
- O usuário pode estar autenticado ou não.

## Passos
| Passo | Ação                                                                 | Resultado Esperado                                                                     |
|-------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| 1     | Acessar a página principal da Kasa.live                               | Página é exibida com o campo de busca e filtros disponíveis                            |
| 2     | Inserir um termo de busca inexistente em qualquer um dos filtros de texto (ex: "TimeInexistente123")     | Nenhum resultado é encontrado                                                          |
| 3     | Aplicar filtros combinados que não correspondem a nenhuma partida    | Nenhum resultado é exibido                                                             |
| 4     | Observar o comportamento visual da interface                         | O sistema exibe uma mensagem de “No Data”        |

## Resultado Esperado
O sistema lida corretamente com o estado vazio da busca, exibindo uma mensagem informativa ao usuário e mantendo a interface estável (sem erros ou bugs visuais).
    