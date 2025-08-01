# CT-017: Visualizar vídeo de melhores momentos

## Objetivo
Verificar se o usuário consegue visualizar corretamente o vídeo de melhores momentos de uma partida disponível na plataforma.

## Pré-condições
- A aplicação está acessível.
- Há pelo menos um vídeo de melhores momentos disponível para exibição.
- O usuário pode estar autenticado ou não.

## Passos
| Passo | Ação                                                         | Resultado Esperado                                                              |
|-------|--------------------------------------------------------------|----------------------------------------------------------------------------------|
| 1     | Acessar a página principal da Kasa.live                       | Página é exibida corretamente com acesso à aba ou seção de "Melhores Momentos"  |
| 2     | Clicar na aba ou navegar até a seção de "Melhores Momentos"  | Lista de vídeos disponíveis é exibida                                           |
| 3     | Selecionar um vídeo da lista                                  | O Iframe Página do vídeo é carregada                                                     |
## Resultado Esperado
O vídeo de melhores momentos é carregado e reproduzido corretamente com controles funcionais (play, pause, volume, etc.), sem travamentos ou falhas na interface.



# CT-018: Buscar vídeos por time

## Objetivo
Verificar se o usuário consegue buscar vídeos de melhores momentos com base no nome do time.

## Pré-condições
- A aplicação está acessível.
- Existem vídeos cadastrados e relacionados a diferentes times.
- O usuário pode estar autenticado ou não.

## Passos
| Passo | Ação                                                          | Resultado Esperado                                                              |
|-------|---------------------------------------------------------------|----------------------------------------------------------------------------------|
| 1     | Acessar a seção de "Melhores Momentos"                         | A lista de vídeos disponíveis é exibida                                         |
| 2     | Expandir o acordeon de Times dentro da seção Fitros                 | Campo visível e editável                                                        |
| 3     | Localizar o campo de busca   | Campo visível e editável                                                        |
| 4     | Digitar o nome de um time existente (ex: "Flamengo")           | A lista de times é atualizada para exibir apenas vídeos relacionados ao time  |
| 5     | Verificar se apenas videos exibidos são sobre os times filtrados            | A lista de times exibe apenas vídeos relacionados ao time  |

## Resultado Esperado
A busca por time filtra corretamente os vídeos exibidos, permitindo que o usuário encontre apenas os conteúdos relacionados ao time informado.


# CT-019: Buscar vídeos por campeonato

## Objetivo
Verificar se o usuário consegue buscar vídeos de melhores momentos com base no nome do campeonato.

## Pré-condições
- A aplicação está acessível.
- Existem vídeos cadastrados e relacionados a diferentes campeonato.
- O usuário pode estar autenticado ou não.

## Passos
| Passo | Ação                                                          | Resultado Esperado                                                              |
|-------|---------------------------------------------------------------|----------------------------------------------------------------------------------|
| 1     | Acessar a seção de "Melhores Momentos"                         | A lista de vídeos disponíveis é exibida                                         |
| 2     | Expandir o acordeon de Campeonatos dentro da seção Fitros                 | Campo visível e editável                                                        |
| 3     | Localizar o campo de busca   | Campo visível e editável                                                        |
| 4     | Digitar o nome de um campeonato existente (ex: "Flamengo")           | A lista de campeonatos é atualizada para exibir apenas vídeos relacionados ao time  |
| 5     | Verificar se apenas videos exibidos são sobre os campeonatos filtrados            | A lista de times exibe apenas vídeos relacionados ao time  |

## Resultado Esperado
A busca por time filtra corretamente os vídeos exibidos, permitindo que o usuário encontre apenas os conteúdos relacionados ao time informado.