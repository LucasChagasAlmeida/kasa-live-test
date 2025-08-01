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
| 2     | Navegar até a aba de favoritos                                | Aba de favoritos é carregada corretamente                                          |
| 3     | Clique no botão "Favoritar" dentro da seção de "times favoritos"                    | a lista de times é exibida, mostrando os Escudos, nomes e botões de ação.              |
| 4     | escolha um time e clique no botão "Add"                    | O botão add deve ser substituido pelo botão de remover  (x)                         |
| 5     | Clicar no botão Concluir   | O ícone deve mudar para o estado de "Editar" e um icone com o escudo e nome do time deve ser exibido.|
                                |

## Resultado Esperado
O time é favoritado com sucesso, permanece marcado ao atualizar a página, e aparece na listagem de times favoritos do usuário.


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
| 2     | Navegar até a aba de favoritos                                | Aba de favoritos é carregada corretamente                                          |
| 3     | Clique no botão "Editar" na seção de "times favoritos"                    | a lista de times é exibida, mostrando os Escudos, nomes e botões de ação.              |
| 4     | escolha um time favoritado e clique no botão de remover (X)                    | o Icone do time deve ser removido da seção de times favoritos.                         |
| 5     | Clicar no botão Salvar   | O ícone deve mudar para o estado de "Editar" se o usuário não possui nenhum outro time favoritado, e para o Estado "Editar" novamente se ainda houver ao menos 1 time favoritado.|
          |

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
| 2     | Clique no botão de 'ListView' para trocar a organização das partidas | Partidas são agora exibidas em formato de lista com o icone  de favoritar visivel.                                  |
| 3     | Localizar uma partida na seção "Partidas ao vivo", "Próximas" ou "Finalizadas" | Partida é exibida corretamente                                 |
| 4     | Clicar no ícone de favoritar ao lado da partida       | Ícone muda para o estado "favoritada"      |
| 5     | Acessar a aba de "Partidas favoritas"                          | A partida aparece listada como favorita                                           |

## Resultado Esperado
A partida é favoritada com sucesso e aparece corretamente na seção de favoritos do usuário. A ação deve ser persistente mesmo após atualizar ou sair da página.


# CT-0010: Favoritar partida com usuário logado (não automatizado)

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
| 2     | Clique no botão de 'ListView' para trocar a organização das partidas | Partidas são agora exibidas em formato de lista com o icone  de favoritar visivel.                                  |
| 3     | Localizar uma partida *favoritada* na seção "Partidas ao vivo", "Próximas" ou "Finalizadas" | Partida é exibida corretamente                                 |
| 4     | Clicar no ícone de desfavoritar ao lado da partida       | Ícone muda para o estado "não favoritada" |
| 5     | Acessar a aba de "Partidas favoritas"                          | A partida NÃO aparece listada como favorita                                           |

## Resultado Esperado
A partida é favoritada com sucesso e NÃO aparece na seção de favoritos do usuário. A ação deve ser persistente mesmo após atualizar ou sair da página.

# CT-011: Tentar favoritar sem estar logado

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
