# CT-007: Favoritar time com usuário logado

## Objetivo
Verificar se um usuário autenticado consegue favoritar um time com sucesso, e se essa informação refletida na interface.

## Pré-condições
- A aplicação está acessível.
- O usuário está autenticado.
- O time ainda **não** está marcado como favorito.

## Passos
| Passo | Ação                                                       | Resultado Esperado                                                             |
|-------|------------------------------------------------------------|---------------------------------------------------------------------------------|
| 1     | Acessar a página principal da Kasa.live                     | Página é exibida com os dados e times disponíveis                              |
| 2     | Navegar até a seção de favoritos                                | Lista de times é exibida corretamente                                          |
| 3     | Busque por um time                    | o Escudo e o nome do time devem ser mostrados              |
| 4     | Clicar no botão Add                    | O botão add deve ser substituido pelo botão de remover (x)             |
| 5     | Clicar no botão Concluir   | O ícone muda para o estado de favoritado e uma mensagem de confirmação é exibida |
| 6     | Verificar se o icone e nome do time aparecem na seção times favoritos                          | O time aparece listado como favorito                                           |

## Resultado Esperado
O time é favoritado com sucesso, permanece marcado ao atualizar a página, e aparece na listagem de favoritos do usuário.


# CT-008: Desfavoritar time com usuário logado

## Objetivo
Verificar se um usuário autenticado consegue remover um time da sua lista de favoritos com sucesso, e se a interface reflete essa mudança.

## Pré-condições
- A aplicação está acessível.
- O usuário está autenticado.
- O time **já está favoritado**.

## Passos
| Passo | Ação                                                        | Resultado Esperado                                                               |
|-------|-------------------------------------------------------------|-----------------------------------------------------------------------------------|
| 1     | Acessar a página principal da Kasa.live                      | Página é exibida com os dados e times favoritos carregados                        |
| 2     | Clica no botão de lista                                      | o modo de visualização é modificado para a list view                                                   |
| 3     | Clicar no botão de desfavoritar (ícone ou botão) ao lado do time | O ícone muda para o estado não favoritado e uma mensagem de confirmação é exibida |
| 4     | Atualizar a página ou navegar novamente até os favoritos     | O time removido **não** aparece mais na listagem de favoritos                     |

## Resultado Esperado
O time é removido da lista de favoritos com sucesso, e essa ação é refletida imediatamente na interface do usuário.



# CT-009: Favoritar partida com usuário logado

## Objetivo
Verificar se o usuário autenticado consegue favoritar uma partida e se ela é corretamente exibida na lista de partidas favoritas.

## Pré-condições
- A aplicação está acessível.
- O usuário está autenticado.
- A partida ainda **não** está marcada como favorita.

## Passos
| Passo | Ação                                                           | Resultado Esperado                                                                |
|-------|----------------------------------------------------------------|------------------------------------------------------------------------------------|
| 1     | Acessar a página principal da Kasa.live                         | Página é exibida com as partidas listadas                                         |
| 2     | Localizar uma partida na seção "Partidas ao vivo", "Próximas" ou "Finalizadas" | Partida é exibida corretamente                                 |
| 3     | Clicar no botão ou ícone de favoritar ao lado da partida       | Ícone muda para o estado "favoritado" e uma confirmação visual é exibida          |
| 4     | Acessar a aba de "Partidas favoritas"                          | A partida aparece listada como favorita                                           |

## Resultado Esperado
A partida é favoritada com sucesso e aparece corretamente na seção de favoritos do usuário. A ação deve ser persistente mesmo após atualizar ou sair da página.



# CT-010: Tentar favoritar sem estar logado

## Objetivo
Verificar se o sistema impede a ação de favoritar itens quando o usuário não está autenticado, exibindo uma mensagem apropriada.

## Pré-condições
- A aplicação está acessível.
- O usuário **não** está autenticado.

## Passos
| Passo | Ação                                                           | Resultado Esperado                                                               |
|-------|----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| 1     | Acessar a página principal da Kasa.live                         | Página é exibida normalmente com partidas e campeonatos                          |
| 2     | Verificar se existe o botão de Favoritos         | O sistema não exibe o botão enquanto o usuário não estiver autenticado.                 |                              |

## Resultado Esperado
O botão que direciona o usuário à aba de favoritos não é exibida enquanto o usuário não estiver autenticado.
