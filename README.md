# Ubistart Challenge

#### Foi desenvolvida uma aplicação com 3 páginas, sendo elas:
* "/categories": Página inicial, apresentando as categorias de drinks para o usuário.
* "/drinks/:strCategory": Tendo selecionado uma categoria, seu nome é passado como parâmetro para esta rota para listar os drinks da categoria selecionada.
* "/drinkDetails": Tendo selecionado um drink específico, seu id é passado como parâmetro para esta rota para listar os detalhes do drink selecionado.

#### Foram feitas 3 funções para obter os dados dos endpoints necessários:
* getCategories():  retorna a lista de categorias retornadas pelo endpoint "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list" e salva no context.
* getDrinks(): retorna a lista de drinks obtidos do endpoint https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=nome_categoria
* getDrinkDetails(): retorna os detalhes do drink obtidos do endpoint https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=idDrink

#### Recursos utilizados

* TheCocktailDB
* ReactJS (HTML, JavaScript, CSS)
* React Router DOM
* History
* Material UI (Framework)
* ContextAPI
* Typescript

# Instruções

Para executar o projeto, após cloná-lo, entre na pasta raíz do projeto e execute:  
`yarn`  

Todas as dependências serão automaticamente instaladas.  

Para executar a aplicação em modo de desenvolvimento, entre na pasta raíz do projeto e execute:  
`yarn start`  

Abra o seu navegador e acesse o endereço [http://localhost:3000](http://localhost:3000) para vê-la.  

Para criar um build para produção, entre na pasta raíz do projeto e execute:  
`yarn build`  

O build da aplicação para produção será criado na pasta `build`.\  
O comando agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho, a compilação é reduzida e os nomes dos arquivos incluem os hashes.  

Sua aplicação está pronta para o deploy!