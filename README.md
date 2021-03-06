### START DO PROJETO 

**clonar o projeto**
```sh 
git clone git@github.com:augustogehrke/DeliveryMuchTest.git AugustoGehrke-Test
```

**Instalar as dependências do projeto**
```sh 
npm install
```

**Criar o arquivo das variáveis de ambiente**
```sh
cp .env.example .env
```

**Observações:**
- O arquivo `.env` pode ser criado manualmente;
- Necessário preencher o arquivo `.env` criado anteriormente com todas as variáveis de ambiente, conforme definidas no arquivo `.env.example`;
- Foi adicionado configurações default, portanto, é necessário somente preencher a variável `API_GIPHY_KEY` com a chave da api giphy. A chave não foi fornecida devido a ser informação confidencial. Para criar a chave é necessário se registar e criar um app na [Giphy](https://developers.giphy.com/docs/api#quick-start-guide).


### PADRÃO DE DESENVOLVIMENTO

O projeto faz uso do eslint, seguindo o padrão [Standard](https://standardjs.com/).

**Comando úteis:**

```sh
npm run lint
```
Verifica se todo o projeto está seguindo o padrão definido, caso não, informa quais os problemas encontrados.

```sh 
npm run lint-fix
```
Verifica se todo o projeto está seguindo o padrão definido, caso não, realiza a correção automática do que for possível e informa quais problemas ainda precisam ser resolvidos.

### ROTAS

**[GET] /recipes**: Busca de receitas conforme os ingredientes fornecidos.

* i - String - ingredientes para realizar 

**Request:**
```
{
  i: onions,garlic
}
```

**Response:**
```
{
  "keywords": [
    "onions",
    "garlic"
  ],
  "recipes": [
    {
      "title": "Steamed Mussels I",
      "ingredients": [
        "garlic",
        "mussels",
        "onions"
      ],
      "link": "http://allrecipes.com/Recipe/Steamed-Mussels-I/Detail.aspx",
      "gif": "https://media2.giphy.com/media/3otPosCSQAWOUCZ7J6/giphy.gif?cid=c0fb8eaa173d53247aa0ed5f79be9eaf26ffd2783e83df32&rid=giphy.gif"
    },
    {
      "title": "Braised Beef and Onions",
      "ingredients": [
        "allspice",
        "garlic",
        "onions"
      ],
      "link": "http://www.epicurious.com/recipes/food/views/Braised-Beef-and-Onions-232969",
      "gif": "https://media2.giphy.com/media/l2JhBOWhKWH7n4c6I/giphy.gif?cid=c0fb8eaa41ae92890ee50bb3cc257f58cdc9834f6399c230&rid=giphy.gif"
    }
  ]
}
```

### TESTES UNITÁRIOS

O projeto possui testes unitários.

**Execução dos testes**

```sh
npm run test
```

**Testes implementados**

**tests/unit/services**
* Verificação se a API Recipe Puppy está online
* Verificação se a API Giphy está online

**test/unit/recipes**
* Verifica se a função getGif está retornando um link de um gif
* Verifica se a função formatIngredients está formatando corretamente em array os ingredientes recebidos

### Subindo a api usando Docker

**Necessário ter instalado o Docker**

**Comando para criar a imagem do container:** 

```sh
docker build -t api-augustogehrke-image .
```

**Comando para criar o container da imagem:** 

```sh
docker run --name api-augustogehrke -p 80:3000 -d api-augustogehrke-image 
```

Com isso a aplicação estará rodando na porta 80

Exemplo de chamada: http://172.19.0.1/recipes?i=onions,garlic
OBS: Troque para seu ip
